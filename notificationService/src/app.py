import os
from datetime import datetime
import time
from bson.objectid import ObjectId
from pymongo import MongoClient

from protobufs import notification_pb2

message_templates = {
    "reservation_created": "Reservation created by user {sender_id} for {receiver_id}.",
    "reservation_updated": "Reservation updated by user {sender_id} for {receiver_id}.",
    "parts_out_of_stock": "Some parts are out of stock for reservation by user {sender_id} for {receiver_id}.",
    "default": "Default message"
}

status = {"UNREAD": "unread", "READ": "read"}
db_urls = {"local": os.getenv("MONGO_URI"), "docker": "mongodb://mongodb:27017/"}


class NotificationService():
    def __init__(self):
        max_tries = 5
        for attempt in range(1, max_tries + 1):
            try:
                self.client = MongoClient(db_urls.get("docker"))
                self.client.admin.command('ping')
                self.db = self.client["plumbit_notification"]
                self.collection = self.db["notification"]
                print(
                    "[Database Connection]: Connected to Plumbit Notification Database")
                break
            except Exception as error:
                if attempt == max_tries:
                    print(
                        f"Failed to connect to MongoDB after {max_tries} attempts: {error}")
                else:
                    print(
                        f"Error connecting to MongoDB (attempt {attempt}/{max_tries}): {error}")
                    time.sleep(attempt * 0.5)  # Exponential backoff

    def CreateNotification(self, request, context):
        try:
            created_at = updated_at = datetime.now().isoformat()
            notification = {
                "sender_id": request.sender_id,
                "receiver_id": request.receiver_id,
                "scenerio": request.scenario,
                "message": self._generate_message(request.scenario, request.sender_id, request.receiver_id),
                "status": status.get("UNREAD"),
                "created_at": created_at,
                "updated_at": updated_at
            }
            result_id = self.collection.insert_one(notification).inserted_id
            result = self.collection.find_one({"_id": result_id})
            return self._handle_notification_response(result)
        except Exception as error:
            print(f"Error creating notification: {error}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(f"Error creating notification: {error}")
            return notification_pb2.NotificationResponse()

    def GetNotifications(self, request, context):
        try:
            query = {}
            if hasattr(request, 'receiver_id') and request.receiver_id:
                query['receiver_id'] = request.receiver_id

            if hasattr(request, 'status') and request.status:
                query['status'] = request.status

            notifications = self.collection.find(query)

            return notification_pb2.GetNotificationsResponse(
                notifications=[self._handle_notification_response(
                    notification) for notification in notifications]
            )
        except Exception as error:
            print(f"Error fetching notifications: {error}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(f"Error fetching notifications: {error}")
            return notification_pb2.GetNotificationsResponse()

    def GetNotification(self, request, context):
        try:
            notification = self.collection.find_one(
                {"_id": ObjectId(request.notification_id)})
            if not notification:
                context.set_code(grpc.StatusCode.NOT_FOUND)
                context.set_details("Notification not found.")
                return notification_pb2.NotificationResponse()
            return self._handle_notification_response(notification)
        except Exception as error:
            print(f"Error fetching notification: {error}")
            context.set_code(grpc.StatusCode.INTERNAL)  # type: ignore
            context.set_details(f"Error fetching notification: {error}")
            return notification_pb2.NotificationResponse()

    def UpdateNotification(self, request, context):
        try:
            updated_at = datetime.now().isoformat()
            notification = self.collection.find_one_and_update(
                {"_id": ObjectId(request.notification_id)},
                {"$set": {"status": status.get(
                    "READ"), "updated_at": updated_at}},
                return_document=True
            )
            if not notification:
                context.set_code(grpc.StatusCode.NOT_FOUND)
                context.set_details("Notification not found.")
                return notification_pb2.NotificationResponse()
            return self._handle_notification_response(notification)
        except Exception as error:
            print(f"Error updating notification: {error}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(f"Error updating notification: {error}")
            return notification_pb2.NotificationResponse()

    def DeleteNotification(self, request, context):
        try:
            result = self.collection.delete_one(
                {"_id": ObjectId(request.notification_id)})
            if result.deleted_count == 0:
                context.set_code(grpc.StatusCode.NOT_FOUND)
                context.set_details("Notification not found.")
                return notification_pb2.NotificationResponse()
            return notification_pb2.NotificationResponse(success=True)
        except Exception as error:
            print(f"Error deleting notification: {error}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(f"Error deleting notification: {error}")
            return notification_pb2.NotificationResponse()

    def _handle_notification_response(self, notification):
        try:
            return notification_pb2.NotificationResponse(
                notification_id=str(notification['_id']),
                sender_id=notification['sender_id'],
                receiver_id=notification['receiver_id'],
                message=notification['message'],
                status=notification['status'],
                created_at=notification['created_at'],
                updated_at=notification['updated_at']
            )
        except Exception as error:
            print(f"Error handling notification response: {error}")

    def _generate_message(self, scenario, sender_id, receiver_id):
        template = message_templates.get(scenario, "default")
        return template.format(sender_id=sender_id, receiver_id=receiver_id)
