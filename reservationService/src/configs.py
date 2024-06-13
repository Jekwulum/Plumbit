import os

db_connection_params = {
    'host': os.getenv('DATABASE_HOST'),
    'database': os.getenv('DATABASE_NAME'),
    'user': os.getenv('DATABASE_USER'),
    'password': os.getenv('DATABASE_PASSWORD')}

message_templates = {
    "reservation_created": "Reservation created by user {sender_id} for {receiver_id}.",
    "reservation_updated": "Reservation updated by user {sender_id} for {receiver_id}.",
    "parts_out_of_stock": "Some parts are out of stock for reservation by user {sender_id} for {receiver_id}.",
    "default": "Default message"
}