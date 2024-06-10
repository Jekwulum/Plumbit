import uuid
import grpc
import psycopg2
import os
from datetime import datetime
from google.protobuf.json_format import MessageToDict

from psycopg2.extras import RealDictCursor
from protobufs import reservation_pb2, inventory_pb2, inventory_pb2_grpc
#

db_connection_params = {
    'host': os.getenv('DATABASE_HOST'),
    'database': os.getenv('DATABASE_NAME'),
    'user': os.getenv('DATABASE_USER'),
    'password': os.getenv('DATABASE_PASSWORD')}

INVENTORY_SERVICE_PORT = os.getenv('INVENTORY_SERVICE_PORT', 4003)


class ReservationService():
    def __init__(self):
        try:
            self.conn = psycopg2.connect(
                **db_connection_params, cursor_factory=RealDictCursor)
            self.cursor = self.conn.cursor()
            self.create_table()
            print("[Database Connection]: Connected to Plumbit Reservation Database")

            self.inventory_channel = grpc.insecure_channel(
                f"localhost:{INVENTORY_SERVICE_PORT}")
            self.inventory_stub = inventory_pb2_grpc.InventoryServiceStub(
                self.inventory_channel)
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while connecting to PostgreSQL", error)

    def create_table(self):
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

    def handle_reservation_response(self, reservation):
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

    def CreateReservation(self, request, context):
        reservation_id = str(uuid.uuid4())
        created_at = updated_at = datetime.now().date()

        parts_response = self.inventory_stub.GetRequiredParts(
            inventory_pb2.GetRequiredPartsRequest(
                repairType=request.repair_type)
        )

        partsInfo = MessageToDict(parts_response)
        # parts_to_reserve = {}
        for partInfo in partsInfo['partsInfo']:
            partId = partInfo['partId']
            quantity = partInfo['quantity']

            if quantity <= 0:
                context.set_code(grpc.StatusCode.FAILED_PRECONDITION)
                context.set_details(
                    f"Part {partId} --> ({partInfo['partName']}) is out of stock")
                return reservation_pb2.ReservationResponse()
            # parts_to_reserve[partId] = quantity
        
        # Reserve parts
        # print(parts_to_reserve)
        # reserve_request = inventory_pb2.ReservePartsRequest(reservationId=reservation_id, partsToReserve=parts_to_reserve)
        # reserve_response = self.inventory_stub.ReserveParts(reserve_request)
        # if not reserve_response.success:
        #     context.set_code(grpc.StatusCode.FAILED_PRECONDITION)
        #     context.set_details(reserve_response.message)
        #     return reservation_pb2.ReservationResponse()

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
            # self.conn.commit()
            print(reservation)

            response = self.handle_reservation_response(reservation)
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

        response = self.handle_reservation_response(reservation)
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
                response = self.handle_reservation_response(
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

            return self.handle_reservation_response(reservation)
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
