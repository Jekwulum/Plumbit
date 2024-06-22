import uuid
import time
import grpc
import psycopg2
import os
from datetime import datetime, timedelta
from google.protobuf.json_format import MessageToDict

from psycopg2.extras import RealDictCursor
from protobufs import (reservation_pb2, reservation_pb2, inventory_pb2, inventory_pb2_grpc,
                       notification_pb2, notification_pb2_grpc)
from configs import db_connection_params, scenarios

INVENTORY_SERVICE_PORT = os.getenv('INVENTORY_SERVICE_PORT', 4003)
NOTIFICATION_SERVICE_PORT = os.getenv('NOTIFICATION_SERVICE_PORT', 4004)


class ReservationService():
    def __init__(self):
        max_retries = 5
        retry_delay = 5 # 5 seconds

        for attempt in range(1, max_retries + 1):
            try:
                self.conn = psycopg2.connect(
                    **db_connection_params, cursor_factory=RealDictCursor)
                self.cursor = self.conn.cursor()
                print("[Database Connection]: Connected to Plumbit Reservation Database")
                self._create_table()

                self.inventory_channel = grpc.insecure_channel(
                    f"localhost:{INVENTORY_SERVICE_PORT}")
                self.inventory_stub = inventory_pb2_grpc.InventoryServiceStub(
                    self.inventory_channel)

                self.notification_channel = grpc.insecure_channel(
                    f"localhost:{os.getenv('NOTIFICATION_SERVICE_PORT', 4004)}")
                self.notification_stub = notification_pb2_grpc.NotificationServiceStub(
                    self.notification_channel)
                break

            except (Exception, psycopg2.DatabaseError) as error:
                print("Error while connecting to PostgreSQL", error)
                if attempt < max_retries:
                    print(f"Retrying in {retry_delay} seconds...")
                    time.sleep(retry_delay)
                else:
                    print("Max retries reached. Could not connect to PostgreSQL.")
                    raise



    def CreateReservation(self, request, context):
        reservation_id = str(uuid.uuid4())
        created_at = updated_at = datetime.now().date()

        query = """
                    INSERT INTO reservations (reservation_id, customer_id, plumber_id, repair_type, description, status, date, created_at, updated_at)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING *;
                """
        try:
            self.cursor.execute(query, (reservation_id, request.customer_id, request.plumber_id,
                                        request.repair_type, request.description, request.status,
                                        request.date, created_at, updated_at)
                                )
            reservation = self.cursor.fetchone()
            self.conn.commit()

            self._notify(sender_id=request.customer_id,
                         receiver_id=request.plumber_id, scenario=scenarios['RESERVATION_CREATED'])
            response = self._handle_reservation_response(reservation)
            return response
        except (Exception, psycopg2.DatabaseError) as error:
            print(f"\nError while inserting to Database: {error}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(
                f"Error while inserting to Database: {str(error)}")

    def GetReservation(self, request, context):
        query = "SELECT * FROM reservations WHERE reservation_id = %s;"
        self.cursor.execute(query, (request.reservation_id,))
        reservation = self.cursor.fetchone()

        if not reservation:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details('Reservation record not found')
            response = reservation_pb2.ReservationResponse()
            return response

        response = self._handle_reservation_response(reservation)
        return response

    def GetReservations(self, request, context):
        query = "SELECT * FROM reservations WHERE"
        params = []

        try:
            if hasattr(request, 'plumber_id') and request.plumber_id:
                query += " plumber_id = %s"
                params.append(request.plumber_id)
            if hasattr(request, 'customer_id') and request.customer_id:
                if params:
                    query += " AND"
                query += " customer_id = %s"
                params.append(request.customer_id)

            if not params:
                query = "SELECT * FROM reservations"

            self.cursor.execute(query, tuple(params))
            reservations = self.cursor.fetchall()

            responses = []
            for reservation in reservations:
                response = self._handle_reservation_response(
                    reservation=reservation)
                responses.append(response)

            return reservation_pb2.ReservationsResponse(reservations=responses)
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while fetching from Database: ", error)
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(
                f"Error while fetching from Database: {str(error)}")
            return reservation_pb2.GetReservationsResponse()

    def UpdateReservation(self, request, context):
        update_query = "UPDATE reservations SET"
        update_params = []

        if hasattr(request, 'repair_type') and request.repair_type:
            update_query += " repair_type = %s,"
            update_params.append(request.repair_type)
        if hasattr(request, 'description') and request.description:
            update_query += " description = %s,"
            update_params.append(request.description)
        if hasattr(request, 'status') and request.status:
            update_query += " status = %s,"
            update_params.append(request.status)
        if hasattr(request, 'date') and request.date:
            update_query += " date = %s,"
            update_params.append(request.date)

        update_query = f"{update_query} updated_at = CURRENT_TIMESTAMP WHERE reservation_id = %s RETURNING *;"
        update_params.append(request.reservation_id)

        try:
            self.cursor.execute(update_query, tuple(update_params))
            reservation = self.cursor.fetchone()
            self.conn.commit()

            if not reservation:
                context.set_code(grpc.StatusCode.NOT_FOUND)
                context.set_details('Reservation record not found')
                response = reservation_pb2.ReservationResponse()
                return response

            return self._handle_reservation_response(reservation)
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while updating to Database: ", error)
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(
                f"Error while updating to Database: {str(error)}")
            return reservation_pb2.ReservationResponse()

    def DeleteReservation(self, request, context):
        delete_query = "DELETE FROM reservations WHERE reservation_id = %s RETURNING *;"

        try:
            self.cursor.execute(delete_query, (request.reservation_id,))
            reservation = self.cursor.fetchone()
            self.conn.commit()

            if not reservation:
                context.set_code(grpc.StatusCode.NOT_FOUND)
                context.set_details('Reservation record not found')
                return reservation_pb2.ReservationResponse()
            return reservation_pb2.EmptyResponse()
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while deleting from Database: ", error)
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(
                f"Error while deleting from Database: {str(error)}")

    def GetPlumberAppointments(self, request, context):
        """Get the plumber's next day's appointments. If a date is passed, get for that date"""
        print("here")

        if hasattr(request, 'date') and request.date:
            date = request.date
        else:
            # Get the next day's date
            date = (datetime.now().date() +
                    timedelta(days=1)).strftime("%Y-%m-%d")

        query = "SELECT * FROM reservations WHERE plumber_id = %s AND date = %s;"
        self.cursor.execute(query, (request.plumber_id, date))
        appointments = self.cursor.fetchall()

        appointment_info = []

        # Retrieve the required parts for each appointment.
        for appointment in appointments:
            repair_type = appointment['repair_type']
            print('repair type: ', repair_type)
            inventory_request = inventory_pb2.GetRequiredPartsRequest(
                repairType=repair_type)
            inventory_response = self.inventory_stub.GetRequiredParts(
                inventory_request)
            inventory_response = MessageToDict(inventory_response)

            available_parts = []
            unavailable_parts = []
            for part in inventory_response['partsInfo']:
                print('part: ', part)
                part.setdefault('quantity', 0)
                if part['quantity'] > 0:
                    available_parts.append(part)
                else:
                    unavailable_parts.append(part)
            if not available_parts:
                self._notify(sender_id=appointment['customer_id'], receiver_id=request.plumber_id,
                             scenario=scenarios['PARTS_OUT_OF_STOCK'])

            appointment_info.append(
                reservation_pb2.AppointmentInfo(
                    reservation_id=appointment['reservation_id'],
                    customer_id=appointment['customer_id'],
                    plumber_id=appointment['plumber_id'],
                    repair_type=appointment['repair_type'],
                    description=appointment['description'],
                    status=appointment['status'],
                    date=str(appointment['date']),
                    available_parts=available_parts,
                    unavailable_parts=unavailable_parts
                )
            )

        return reservation_pb2.GetPlumberAppointmentsResponse(appointments=appointment_info)

    def _create_table(self):
        try:
            query = """
                    CREATE TABLE IF NOT EXISTS reservations (
                        reservation_id UUID PRIMARY KEY,
                        customer_id TEXT NOT NULL,
                        plumber_id TEXT NOT NULL,
                        repair_type TEXT NOT NULL,
                        description TEXT,
                        status TEXT NOT NULL,
                        date DATE,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                """
            self.cursor.execute(query)
            self.conn.commit()
            print("[Database Connection]: Created table 'reservations' successfully")
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while creating table: ", error)

    def _handle_reservation_response(self, reservation):
        try:
            response = reservation_pb2.ReservationResponse(
                reservation_id=reservation['reservation_id'],
                customer_id=reservation['customer_id'],
                plumber_id=reservation['plumber_id'],
                repair_type=reservation['repair_type'],
                description=reservation['description'],
                status=reservation['status'],
                created_at=str(reservation['created_at']),
                updated_at=str(reservation['updated_at']),
                date=str(reservation['date'])
            )
            return response
        except Exception as e:
            print(e)

    def _notify(self, sender_id, receiver_id, scenario):
        notification_request = notification_pb2.CreateNotificationRequest(
            sender_id=sender_id,
            receiver_id=receiver_id,
            scenario=scenario
        )
        self.notification_stub.CreateNotification(notification_request)
