import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { InventoryServiceClient as _inventoryPackage_InventoryServiceClient, InventoryServiceDefinition as _inventoryPackage_InventoryServiceDefinition } from './inventoryPackage/InventoryService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inventoryPackage: {
    AddPartRequest: MessageTypeDefinition
    AddPartResponse: MessageTypeDefinition
    AddRepairTypeRequest: MessageTypeDefinition
    AddRepairTypeResponse: MessageTypeDefinition
    CheckPartsRequest: MessageTypeDefinition
    CheckPartsResponse: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetRepairTypesResponse: MessageTypeDefinition
    GetRequiredPartsRequest: MessageTypeDefinition
    GetRequiredPartsResponse: MessageTypeDefinition
    InventoryService: SubtypeConstructor<typeof grpc.Client, _inventoryPackage_InventoryServiceClient> & { service: _inventoryPackage_InventoryServiceDefinition }
    ManageStockLevelsRequest: MessageTypeDefinition
    ManageStockLevelsResponse: MessageTypeDefinition
    PartInfo: MessageTypeDefinition
    ReservePartsRequest: MessageTypeDefinition
    ReservePartsResponse: MessageTypeDefinition
    UpdatePartRequest: MessageTypeDefinition
    UpdatePartResponse: MessageTypeDefinition
    UpdateRepairTypeRequest: MessageTypeDefinition
    UpdateRepairTypeResponse: MessageTypeDefinition
  }
}

