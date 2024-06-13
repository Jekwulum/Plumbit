import os

db_connection_params = {
    'host': os.getenv('DATABASE_HOST'),
    'database': os.getenv('DATABASE_NAME'),
    'user': os.getenv('DATABASE_USER'),
    'password': os.getenv('DATABASE_PASSWORD')}

scenarios = {"RESERVATION_CREATED": "reservation_created",
            "RESERVATION_UPDATED": "reservation_updated",
            "PARTS_OUT_OF_STOCK": "parts_out_of_stock"}
