import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';
import { InventoryServiceHandlers } from '../protobufs/inventoryPackage/InventoryService';
// import {Inventory, Inventory__Output} from '../protobufs/inventoryPackage/'
import { CheckPartsRequest } from '../protobufs/inventoryPackage/CheckPartsRequest';
import { CheckPartsResponse } from './../protobufs/inventoryPackage/CheckPartsResponse';
import { GetRequiredPartsRequest } from './../protobufs/inventoryPackage/GetRequiredPartsRequest';
import { GetRequiredPartsResponse } from './../protobufs/inventoryPackage/GetRequiredPartsResponse';
import { ReservePartsRequest } from '../protobufs/inventoryPackage/ReservePartsRequest';
import { ReservePartsResponse } from '../protobufs/inventoryPackage/ReservePartsResponse';
import { ManageStockLevelsRequest } from '../protobufs/inventoryPackage/ManageStockLevelsRequest';
import { ManageStockLevelsResponse } from '../protobufs/inventoryPackage/ManageStockLevelsResponse';
import { PartInfo } from '../protobufs/inventoryPackage/PartInfo';
import { AddPartRequest } from '../protobufs/inventoryPackage/AddPartRequest';
import { AddPartResponse } from '../protobufs/inventoryPackage/AddPartResponse';
import { AddRepairTypeRequest } from '../protobufs/inventoryPackage/AddRepairTypeRequest';
import { AddRepairTypeResponse } from '../protobufs/inventoryPackage/AddRepairTypeResponse';
import PoolConnector from '../utils/pool.connector';
import Queries from '../utils/queries.util';
import inventoryLogger from '../utils/inventory.logger';
import { Empty } from '../protobufs/inventoryPackage/Empty';
import { GetRepairTypesResponse } from '../protobufs/inventoryPackage/GetRepairTypesResponse';

const InventoryHandler: InventoryServiceHandlers = {
  AddPart: async (call: grpc.ServerUnaryCall<AddPartRequest, AddPartResponse>, callback: grpc.sendUnaryData<AddPartResponse>) => {
    try {
      const { partName, quantity } = call.request;
      const partId = uuidv4();

      const res = await PoolConnector.query(Queries.addPartQuery, [partId, partName, quantity]);
      if (res.rowCount === 0) {
        return callback({ code: grpc.status.INTERNAL, message: 'Failed to add part' }, null);
      }

      callback(null, { partInfo: res.rows[0] });
    } catch (error: any) {
      inventoryLogger.error(error.message);
      return callback({ code: grpc.status.INTERNAL, message: error.message }, null);
    }
  },

  AddRepairType: async (call: grpc.ServerUnaryCall<AddRepairTypeRequest, AddRepairTypeResponse>, callback: grpc.sendUnaryData<AddRepairTypeResponse>) => {
    try {
      const { repairType, requiredParts } = call.request;
      const res = await PoolConnector.query(Queries.addRepairTypeQuery, [repairType, requiredParts]);
      
      if (res.rowCount === 0) {
        return callback({ code: grpc.status.INTERNAL, message: 'Failed to add repair type' }, null);
      }

      callback(null, { success: true });
    } catch (error: any) {
      inventoryLogger.error(error.message);
      return callback({ code: grpc.status.INTERNAL, message: error.message }, null);
    }
  },

  GetRepairTypes: async (call: grpc.ServerUnaryCall<Empty, GetRepairTypesResponse>, callback: grpc.sendUnaryData<GetRepairTypesResponse>) => {
    try {
      const res = await PoolConnector.query(Queries.getRepairTypesQuery);
      const repairTypes = res.rows.map((row) => row.repair_type);

      callback(null, { repairTypes });
    } catch (error: any) {
      inventoryLogger.error(error.message);
      return callback({ code: grpc.status.INTERNAL, message: error.message }, null);
    }
  },

  UpdateRepairType: async (call: grpc.ServerUnaryCall<AddRepairTypeRequest, AddRepairTypeResponse>, callback: grpc.sendUnaryData<AddRepairTypeResponse>) => {
    try {
      const { repairType, requiredParts } = call.request;
      const res = await PoolConnector.query(Queries.updateRepairTypeQuery, [requiredParts, repairType]);
      
      if (res.rowCount === 0) return callback({ code: grpc.status.NOT_FOUND, message: `Repair type ${repairType} not found` }, null);

      callback(null, { success: true });
    } catch (error: any) {
      inventoryLogger.error(error.message);
      return callback({ code: grpc.status.INTERNAL, message: error.message }, null);
    }
  },

  CheckPartsAvailability: async (call: grpc.ServerUnaryCall<CheckPartsRequest, CheckPartsResponse>, callback: grpc.sendUnaryData<CheckPartsResponse>) => {
    try {
      const partIds = call.request.partIds;
      const res = partIds
        ? await PoolConnector.query(Queries.getPartsQuery, [partIds])
        : await PoolConnector.query(Queries.getAllPartsQuery);

      const partsInfo: PartInfo[] = res.rows.map((row) => ({
        partId: row.part_id,
        partName: row.part_name,
        quantity: row.quantity,
      }));

      callback(null, { partsInfo });
    } catch (error: any) {
      inventoryLogger.error(error.message);
      return callback({ code: grpc.status.INTERNAL, message: error.message }, null);
    }
  },

  GetRequiredParts: async (call: grpc.ServerUnaryCall<GetRequiredPartsRequest, GetRequiredPartsResponse>, callback: grpc.sendUnaryData<GetRequiredPartsResponse>) => {
    try {
      const repairTypeName = call.request.repairType;

      const res = await PoolConnector.query(Queries.getRequiredPartsQuery, [repairTypeName]);
      if (res.rows.length === 0) {
        return callback({ code: grpc.status.NOT_FOUND, message: 'Repair type not found' }, null);
      }

      const requiredPartsIds = res.rows[0].required_parts;
      const partsRes = await PoolConnector.query(Queries.getPartsQuery, [requiredPartsIds]);

      const partsInfo: PartInfo[] = partsRes.rows.map((row) => ({
        partId: row.part_id,
        partName: row.part_name,
        quantity: row.quantity,
      }));

      callback(null, { partsInfo });
    } catch (error: any) {
      inventoryLogger.error(error.message);
      return callback({ code: grpc.status.INTERNAL, message: error.message }, null);
    }
  },

  ReserveParts: async (call: grpc.ServerUnaryCall<ReservePartsRequest, ReservePartsResponse>, callback: grpc.sendUnaryData<ReservePartsResponse>) => {
    const client = await PoolConnector.connect();
    try {
      await client.query('BEGIN');

      const partsToReserve: { [key: string]: Number } | undefined = call.request.partsToReserve;
      if (partsToReserve) {
        for (const [partId, quantity] of Object.entries(partsToReserve)) {
          const res = await client.query(Queries.getPartsQuery, [partId]);
          if (res.rows.length === 0 || res.rows[0].quantity < Number(quantity)) {
            await client.query('ROLLBACK');
            return callback({
              code: grpc.status.FAILED_PRECONDITION,
              message: `Part ${partId} [${res.rows[0].part_name}] is out of stock or insufficient quantity`
            }, null);
          }

          const newQuantity = res.rows[0].quantity - Number(quantity);
          await client.query(Queries.updatePartQuantity, [newQuantity, partId]);
        }
      }

      await client.query('COMMIT');
      callback(null, { success: true, message: 'Parts reserved successfully' });

    } catch (error: any) {
      await client.query('ROLLBACK');
      callback({ code: grpc.status.INTERNAL, message: error.message }, null);

    } finally {
      client.release();
    }
  },

  ManageStockLevels: async (call: grpc.ServerUnaryCall<ManageStockLevelsRequest, ManageStockLevelsResponse>, callback: grpc.sendUnaryData<ManageStockLevelsResponse>) => {
    const client = await PoolConnector.connect();
    try {
      await client.query('BEGIN');

      const partsToUpdate: { [key: string]: Number } | undefined = call.request.partsToUpdate;
      if (partsToUpdate) {
        for (const [partId, quantity] of Object.entries(partsToUpdate)) {
          const res = await client.query(Queries.getPartsQuantityQuery, [partId]);

          if (res.rows.length === 0) {
            await client.query('ROLLBACK');
            return callback({
              code: grpc.status.NOT_FOUND,
              message: `Part ${partId} [${res.rows[0].part_name}] not found`
            }, null);
          }

          const newQuantity = res.rows[0].quantity + Number(quantity);
          if (newQuantity < 0) {
            await client.query('ROLLBACK');
            return callback({
              code: grpc.status.FAILED_PRECONDITION,
              message: `Insufficient stock for part ${partId} [${res.rows[0].part_name}]`
            }, null);
          }

          await client.query(Queries.updatePartQuantity, [newQuantity, partId]);
        }

        await client.query('COMMIT');
        callback(null, { success: true, message: 'Stock levels updated successfully' });
      }

    } catch (error: any) {
      await client.query('ROLLBACK');
      callback({ code: grpc.status.INTERNAL, message: error.message }, null);

    } finally {
      client.release();
    }
  },
};

export default InventoryHandler;