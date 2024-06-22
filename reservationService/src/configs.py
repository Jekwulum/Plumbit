import os

db_connection_params = {
    'host': os.getenv('POSTGRES_HOST'),
    'database': os.getenv('POSTGRES_DB'),
    'user': os.getenv('POSTGRES_USER'),
    'password': os.getenv('POSTGRES_PASSWORD')}

scenarios = {"RESERVATION_CREATED": "reservation_created",
            "RESERVATION_UPDATED": "reservation_updated",
            "PARTS_OUT_OF_STOCK": "parts_out_of_stock"}
