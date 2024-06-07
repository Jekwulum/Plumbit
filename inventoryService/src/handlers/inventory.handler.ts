import * as grpc from '@grpc/grpc-js';
import { InventoryServiceHandlers } from '../protobufs/inventoryPackage/InventoryService';
// import {Inventory, Inventory__Output} from '../protobufs/inventoryPackage/'

const InventoryHandler: InventoryServiceHandlers = {
  CheckPartsAvailabity: async (call, callback) => {},
  GetRequiredParts: async (call, callback) => {},
  ReserveParts: async (call, callback) => {},
  ManageStockLevels: async (call, callback) => {},
};

export default InventoryHandler;