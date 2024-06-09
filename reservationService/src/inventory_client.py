import os
import grpc
from protobufs import inventory_pb2, inventory_pb2_grpc

INVENTORY_SERVICE_PORT = os.getenv('INVENTORY_SERVICE_PORT', 4003)


class InventoryClient():
    def __init__(self):
        try:
            self.inventory_channel = grpc.insecure_channel(
                f"localhost:{INVENTORY_SERVICE_PORT}")
            self.inventory_stub = inventory_pb2_grpc.InventoryServiceStub(
                self.inventory_channel)
        except (Exception) as error:
            print("Error while connecting to Inventory Service", error)

    def get_required_parts(self, repair_type):
        try:
            response = self.inventory_stub.GetRequiredParts(
                inventory_pb2.GetRequiredPartsRequest(repair_type=repair_type))
            return response
        except Exception as e:
            print(f'Error while getting required parts from Inventory Service: {e}')
    
    def get_part_availability(self, part_id):
        try:
            available_parts_response = self.inventory_stub.CheckPartsAvailability(
                inventory_pb2.CheckPartsRequest(part_ids=[part_id]))
            # for part_id in available_parts_response
            # return response
        except Exception as e:
            print(f'Error while getting part availability from Inventory Service: {e}')
