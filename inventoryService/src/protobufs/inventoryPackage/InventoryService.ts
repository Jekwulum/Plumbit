// Original file: proto/inventory.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CheckPartsRequest as _inventoryPackage_CheckPartsRequest, CheckPartsRequest__Output as _inventoryPackage_CheckPartsRequest__Output } from '../inventoryPackage/CheckPartsRequest';
import type { CheckPartsResponse as _inventoryPackage_CheckPartsResponse, CheckPartsResponse__Output as _inventoryPackage_CheckPartsResponse__Output } from '../inventoryPackage/CheckPartsResponse';
import type { GetRequiredPartsRequest as _inventoryPackage_GetRequiredPartsRequest, GetRequiredPartsRequest__Output as _inventoryPackage_GetRequiredPartsRequest__Output } from '../inventoryPackage/GetRequiredPartsRequest';
import type { GetRequiredPartsResponse as _inventoryPackage_GetRequiredPartsResponse, GetRequiredPartsResponse__Output as _inventoryPackage_GetRequiredPartsResponse__Output } from '../inventoryPackage/GetRequiredPartsResponse';
import type { ManageStockRequest as _inventoryPackage_ManageStockRequest, ManageStockRequest__Output as _inventoryPackage_ManageStockRequest__Output } from '../inventoryPackage/ManageStockRequest';
import type { ManageStockResponse as _inventoryPackage_ManageStockResponse, ManageStockResponse__Output as _inventoryPackage_ManageStockResponse__Output } from '../inventoryPackage/ManageStockResponse';
import type { ReservePartsRequest as _inventoryPackage_ReservePartsRequest, ReservePartsRequest__Output as _inventoryPackage_ReservePartsRequest__Output } from '../inventoryPackage/ReservePartsRequest';
import type { ReservePartsResponse as _inventoryPackage_ReservePartsResponse, ReservePartsResponse__Output as _inventoryPackage_ReservePartsResponse__Output } from '../inventoryPackage/ReservePartsResponse';

export interface InventoryServiceClient extends grpc.Client {
  CheckPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  CheckPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  CheckPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  CheckPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailabity(argument: _inventoryPackage_CheckPartsRequest, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  
  ManageStockLevels(argument: _inventoryPackage_ManageStockRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  ManageStockLevels(argument: _inventoryPackage_ManageStockRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  ManageStockLevels(argument: _inventoryPackage_ManageStockRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  ManageStockLevels(argument: _inventoryPackage_ManageStockRequest, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockRequest, callback: grpc.requestCallback<_inventoryPackage_ManageStockResponse__Output>): grpc.ClientUnaryCall;
  
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface InventoryServiceHandlers extends grpc.UntypedServiceImplementation {
  CheckPartsAvailabity: grpc.handleUnaryCall<_inventoryPackage_CheckPartsRequest__Output, _inventoryPackage_CheckPartsResponse>;
  
  GetRequiredParts: grpc.handleUnaryCall<_inventoryPackage_GetRequiredPartsRequest__Output, _inventoryPackage_GetRequiredPartsResponse>;
  
  ManageStockLevels: grpc.handleUnaryCall<_inventoryPackage_ManageStockRequest__Output, _inventoryPackage_ManageStockResponse>;
  
  ReserveParts: grpc.handleUnaryCall<_inventoryPackage_ReservePartsRequest__Output, _inventoryPackage_ReservePartsResponse>;
  
}

export interface InventoryServiceDefinition extends grpc.ServiceDefinition {
  CheckPartsAvailabity: MethodDefinition<_inventoryPackage_CheckPartsRequest, _inventoryPackage_CheckPartsResponse, _inventoryPackage_CheckPartsRequest__Output, _inventoryPackage_CheckPartsResponse__Output>
  GetRequiredParts: MethodDefinition<_inventoryPackage_GetRequiredPartsRequest, _inventoryPackage_GetRequiredPartsResponse, _inventoryPackage_GetRequiredPartsRequest__Output, _inventoryPackage_GetRequiredPartsResponse__Output>
  ManageStockLevels: MethodDefinition<_inventoryPackage_ManageStockRequest, _inventoryPackage_ManageStockResponse, _inventoryPackage_ManageStockRequest__Output, _inventoryPackage_ManageStockResponse__Output>
  ReserveParts: MethodDefinition<_inventoryPackage_ReservePartsRequest, _inventoryPackage_ReservePartsResponse, _inventoryPackage_ReservePartsRequest__Output, _inventoryPackage_ReservePartsResponse__Output>
}
