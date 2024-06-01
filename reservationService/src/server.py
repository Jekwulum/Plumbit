import os
import sys
import grpc
from dotenv import load_dotenv
from concurrent import futures
load_dotenv()

sys.path.append(os.path.join(os.path.dirname(__file__), 'protobufs'))

from protobufs import reservation_pb2_grpc
from app import ReservationService


def main():
    PORT = int(os.getenv("RESERVATION_SERVICE_PORT", 4002))
    try:
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        reservation_pb2_grpc.add_ReservationServiceServicer_to_server(ReservationService(), server)
        server.add_insecure_port(f'[::]:{PORT}')
        server.start()
        print(f"[Server Connection]: Python gRPC server started for Reservation Microservice on port {PORT}...")
        server.wait_for_termination()
    except KeyboardInterrupt:
        print(f"[Server Connection]: Python gRPC server stopped for Reservation Microservice on port {PORT}...")
        server.stop(0)

if __name__ == '__main__':
    main()
