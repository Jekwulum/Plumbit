import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protobufs/inventory';

const INVENTORY_SERVICE_PORT = process.env.INVENTORY_SERVICE_PORT || 4003;

const INVENTORY_PROTO_PATH = path.resolve(__dirname, '../../proto/inventory.proto');

const inventoryPackageDefinition = protoLoader.loadSync(INVENTORY_PROTO_PATH);
const inventoryGrpcObject = (grpc.loadPackageDefinition(inventoryPackageDefinition) as unknown) as ProtoGrpcType;

const network = process.env.INVENTORY_SERVICE_NETWORK;
const InventoryClient = new inventoryGrpcObject.inventoryPackage.InventoryService(`${network}:${INVENTORY_SERVICE_PORT}`, grpc.credentials.createInsecure());

export default { InventoryClient };