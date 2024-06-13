import uuid
import os
from datetime import datetime
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


class NotificationService():
    def __init__(self):
        try:
            self.client = MongoClient(str(os.getenv("MONGO_URI")))
            self.db = self.client["plumbit_notification"]
            self.collection = self.db["notification"]
            print("[Database Connection]: Connected to Plumbit Notification Database")
        except (Exception) as error:
            print(f"Error connecting to MongoDB: {error}")

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
            if hasattr(request, "receiver_id") and request.receiver_id:
                print('here 1')
                notifications = self.collection.find(
                    {"receiver_id": request.receiver_id})
            else:
                print('here 2')
                notifications = self.collection.find()
                print(notifications)
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
        notification = self.collection.find_one(
            {"_id": ObjectId(request.notification_id)})
        if not notification:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("Notification not found.")
            return notification_pb2.NotificationResponse()
        return self._handle_notification_response(notification)

    def UpdateNotification(self, request, context):
        updated_at = datetime.now().isoformat()
        notification = self.collection.find_one_and_update(
            {"_id": ObjectId(request.notification_id)},
            {"$set": {"status": status.get("READ"), "updated_at": updated_at}},
            return_document=True
        )
        if not notification:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("Notification not found.")
            return notification_pb2.NotificationResponse()
        return self._handle_notification_response(notification)

    def DeleteNotification(self, request, context):
        result = self.collection.delete_one(
            {"_id": ObjectId(request.notification_id)})
        if result.deleted_count == 0:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("Notification not found.")
            return notification_pb2.NotificationResponse()
        return notification_pb2.NotificationResponse(success=True)

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
