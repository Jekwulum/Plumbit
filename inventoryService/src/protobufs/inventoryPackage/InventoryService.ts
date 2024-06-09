// Original file: proto/inventory.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddPartRequest as _inventoryPackage_AddPartRequest, AddPartRequest__Output as _inventoryPackage_AddPartRequest__Output } from '../inventoryPackage/AddPartRequest';
import type { AddPartResponse as _inventoryPackage_AddPartResponse, AddPartResponse__Output as _inventoryPackage_AddPartResponse__Output } from '../inventoryPackage/AddPartResponse';
import type { AddRepairTypeRequest as _inventoryPackage_AddRepairTypeRequest, AddRepairTypeRequest__Output as _inventoryPackage_AddRepairTypeRequest__Output } from '../inventoryPackage/AddRepairTypeRequest';
import type { AddRepairTypeResponse as _inventoryPackage_AddRepairTypeResponse, AddRepairTypeResponse__Output as _inventoryPackage_AddRepairTypeResponse__Output } from '../inventoryPackage/AddRepairTypeResponse';
import type { CheckPartsRequest as _inventoryPackage_CheckPartsRequest, CheckPartsRequest__Output as _inventoryPackage_CheckPartsRequest__Output } from '../inventoryPackage/CheckPartsRequest';
import type { CheckPartsResponse as _inventoryPackage_CheckPartsResponse, CheckPartsResponse__Output as _inventoryPackage_CheckPartsResponse__Output } from '../inventoryPackage/CheckPartsResponse';
import type { Empty as _inventoryPackage_Empty, Empty__Output as _inventoryPackage_Empty__Output } from '../inventoryPackage/Empty';
import type { GetRepairTypesResponse as _inventoryPackage_GetRepairTypesResponse, GetRepairTypesResponse__Output as _inventoryPackage_GetRepairTypesResponse__Output } from '../inventoryPackage/GetRepairTypesResponse';
import type { GetRequiredPartsRequest as _inventoryPackage_GetRequiredPartsRequest, GetRequiredPartsRequest__Output as _inventoryPackage_GetRequiredPartsRequest__Output } from '../inventoryPackage/GetRequiredPartsRequest';
import type { GetRequiredPartsResponse as _inventoryPackage_GetRequiredPartsResponse, GetRequiredPartsResponse__Output as _inventoryPackage_GetRequiredPartsResponse__Output } from '../inventoryPackage/GetRequiredPartsResponse';
import type { ManageStockLevelsRequest as _inventoryPackage_ManageStockLevelsRequest, ManageStockLevelsRequest__Output as _inventoryPackage_ManageStockLevelsRequest__Output } from '../inventoryPackage/ManageStockLevelsRequest';
import type { ManageStockLevelsResponse as _inventoryPackage_ManageStockLevelsResponse, ManageStockLevelsResponse__Output as _inventoryPackage_ManageStockLevelsResponse__Output } from '../inventoryPackage/ManageStockLevelsResponse';
import type { ReservePartsRequest as _inventoryPackage_ReservePartsRequest, ReservePartsRequest__Output as _inventoryPackage_ReservePartsRequest__Output } from '../inventoryPackage/ReservePartsRequest';
import type { ReservePartsResponse as _inventoryPackage_ReservePartsResponse, ReservePartsResponse__Output as _inventoryPackage_ReservePartsResponse__Output } from '../inventoryPackage/ReservePartsResponse';
import type { UpdateRepairTypeRequest as _inventoryPackage_UpdateRepairTypeRequest, UpdateRepairTypeRequest__Output as _inventoryPackage_UpdateRepairTypeRequest__Output } from '../inventoryPackage/UpdateRepairTypeRequest';
import type { UpdateRepairTypeResponse as _inventoryPackage_UpdateRepairTypeResponse, UpdateRepairTypeResponse__Output as _inventoryPackage_UpdateRepairTypeResponse__Output } from '../inventoryPackage/UpdateRepairTypeResponse';

export interface InventoryServiceClient extends grpc.Client {
  AddPart(argument: _inventoryPackage_AddPartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  AddPart(argument: _inventoryPackage_AddPartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  AddPart(argument: _inventoryPackage_AddPartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  AddPart(argument: _inventoryPackage_AddPartRequest, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  addPart(argument: _inventoryPackage_AddPartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  addPart(argument: _inventoryPackage_AddPartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  addPart(argument: _inventoryPackage_AddPartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  addPart(argument: _inventoryPackage_AddPartRequest, callback: grpc.requestCallback<_inventoryPackage_AddPartResponse__Output>): grpc.ClientUnaryCall;
  
  AddRepairType(argument: _inventoryPackage_AddRepairTypeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  AddRepairType(argument: _inventoryPackage_AddRepairTypeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  AddRepairType(argument: _inventoryPackage_AddRepairTypeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  AddRepairType(argument: _inventoryPackage_AddRepairTypeRequest, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  addRepairType(argument: _inventoryPackage_AddRepairTypeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  addRepairType(argument: _inventoryPackage_AddRepairTypeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  addRepairType(argument: _inventoryPackage_AddRepairTypeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  addRepairType(argument: _inventoryPackage_AddRepairTypeRequest, callback: grpc.requestCallback<_inventoryPackage_AddRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  
  CheckPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  CheckPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  CheckPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  CheckPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  checkPartsAvailability(argument: _inventoryPackage_CheckPartsRequest, callback: grpc.requestCallback<_inventoryPackage_CheckPartsResponse__Output>): grpc.ClientUnaryCall;
  
  GetRepairTypes(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  GetRepairTypes(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  GetRepairTypes(argument: _inventoryPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  GetRepairTypes(argument: _inventoryPackage_Empty, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  getRepairTypes(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  getRepairTypes(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  getRepairTypes(argument: _inventoryPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  getRepairTypes(argument: _inventoryPackage_Empty, callback: grpc.requestCallback<_inventoryPackage_GetRepairTypesResponse__Output>): grpc.ClientUnaryCall;
  
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  GetRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  getRequiredParts(argument: _inventoryPackage_GetRequiredPartsRequest, callback: grpc.requestCallback<_inventoryPackage_GetRequiredPartsResponse__Output>): grpc.ClientUnaryCall;
  
  ManageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  ManageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  ManageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  ManageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  manageStockLevels(argument: _inventoryPackage_ManageStockLevelsRequest, callback: grpc.requestCallback<_inventoryPackage_ManageStockLevelsResponse__Output>): grpc.ClientUnaryCall;
  
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  ReserveParts(argument: _inventoryPackage_ReservePartsRequest, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  reserveParts(argument: _inventoryPackage_ReservePartsRequest, callback: grpc.requestCallback<_inventoryPackage_ReservePartsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  UpdateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  UpdateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  UpdateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  updateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  updateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  updateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  updateRepairType(argument: _inventoryPackage_UpdateRepairTypeRequest, callback: grpc.requestCallback<_inventoryPackage_UpdateRepairTypeResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface InventoryServiceHandlers extends grpc.UntypedServiceImplementation {
  AddPart: grpc.handleUnaryCall<_inventoryPackage_AddPartRequest__Output, _inventoryPackage_AddPartResponse>;
  
  AddRepairType: grpc.handleUnaryCall<_inventoryPackage_AddRepairTypeRequest__Output, _inventoryPackage_AddRepairTypeResponse>;
  
  CheckPartsAvailability: grpc.handleUnaryCall<_inventoryPackage_CheckPartsRequest__Output, _inventoryPackage_CheckPartsResponse>;
  
  GetRepairTypes: grpc.handleUnaryCall<_inventoryPackage_Empty__Output, _inventoryPackage_GetRepairTypesResponse>;
  
  GetRequiredParts: grpc.handleUnaryCall<_inventoryPackage_GetRequiredPartsRequest__Output, _inventoryPackage_GetRequiredPartsResponse>;
  
  ManageStockLevels: grpc.handleUnaryCall<_inventoryPackage_ManageStockLevelsRequest__Output, _inventoryPackage_ManageStockLevelsResponse>;
  
  ReserveParts: grpc.handleUnaryCall<_inventoryPackage_ReservePartsRequest__Output, _inventoryPackage_ReservePartsResponse>;
  
  UpdateRepairType: grpc.handleUnaryCall<_inventoryPackage_UpdateRepairTypeRequest__Output, _inventoryPackage_UpdateRepairTypeResponse>;
  
}

export interface InventoryServiceDefinition extends grpc.ServiceDefinition {
  AddPart: MethodDefinition<_inventoryPackage_AddPartRequest, _inventoryPackage_AddPartResponse, _inventoryPackage_AddPartRequest__Output, _inventoryPackage_AddPartResponse__Output>
  AddRepairType: MethodDefinition<_inventoryPackage_AddRepairTypeRequest, _inventoryPackage_AddRepairTypeResponse, _inventoryPackage_AddRepairTypeRequest__Output, _inventoryPackage_AddRepairTypeResponse__Output>
  CheckPartsAvailability: MethodDefinition<_inventoryPackage_CheckPartsRequest, _inventoryPackage_CheckPartsResponse, _inventoryPackage_CheckPartsRequest__Output, _inventoryPackage_CheckPartsResponse__Output>
  GetRepairTypes: MethodDefinition<_inventoryPackage_Empty, _inventoryPackage_GetRepairTypesResponse, _inventoryPackage_Empty__Output, _inventoryPackage_GetRepairTypesResponse__Output>
  GetRequiredParts: MethodDefinition<_inventoryPackage_GetRequiredPartsRequest, _inventoryPackage_GetRequiredPartsResponse, _inventoryPackage_GetRequiredPartsRequest__Output, _inventoryPackage_GetRequiredPartsResponse__Output>
  ManageStockLevels: MethodDefinition<_inventoryPackage_ManageStockLevelsRequest, _inventoryPackage_ManageStockLevelsResponse, _inventoryPackage_ManageStockLevelsRequest__Output, _inventoryPackage_ManageStockLevelsResponse__Output>
  ReserveParts: MethodDefinition<_inventoryPackage_ReservePartsRequest, _inventoryPackage_ReservePartsResponse, _inventoryPackage_ReservePartsRequest__Output, _inventoryPackage_ReservePartsResponse__Output>
  UpdateRepairType: MethodDefinition<_inventoryPackage_UpdateRepairTypeRequest, _inventoryPackage_UpdateRepairTypeResponse, _inventoryPackage_UpdateRepairTypeRequest__Output, _inventoryPackage_UpdateRepairTypeResponse__Output>
}
