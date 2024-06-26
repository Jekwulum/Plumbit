import os
import sys
import grpc
from dotenv import load_dotenv
from concurrent import futures

load_dotenv()

environment = os.getenv("ENVIRONMENT")
if environment == 'development':
    load_dotenv('development.env')
elif environment == 'docker':
    load_dotenv('docker.env')
elif environment == 'production':
    load_dotenv('production.env')

sys.path.append(os.path.join(os.path.dirname(__file__), 'protobufs'))

from protobufs import notification_pb2_grpc
from app import NotificationService

def main():
  PORT = int(os.getenv("NOTIFICATION_SERVICE_PORT", 4004))
  try:
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    notification_pb2_grpc.add_NotificationServiceServicer_to_server(NotificationService(), server)
    network = os.getenv("NOTIFICATION_SERVICE_NETWORK")
    server.add_insecure_port(f'{network}:{PORT}')
    server.start()
    print(f"[Server Connection]: Python gRPC server started for Notification Microservice on {network}:{PORT}...")
    server.wait_for_termination()
  except KeyboardInterrupt:
    print(f"[Server Connection]: Python gRPC server stopped for Notification Microservice on port {network}:{PORT}...")
    server.stop(0)

if __name__ == '__main__':
  main()
