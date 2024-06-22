import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from 'dotenv';

config({path: path.resolve(__dirname, '../.env')});
const environment = process.env.ENVIRONMENT;

let envPath = '../development.env';
if (environment === 'docker') {
  envPath = '../docker.env';
}
config({ path: path.resolve(__dirname, envPath) });

import { ProtoGrpcType } from './protobufs/inventory';
import InventoryHandler from './handlers/inventory.handler';
import inventoryLogger from './utils/inventory.logger';
import { queryPromise } from './utils/pool.connector';
import Queries from './utils/queries.util';

const PORT = process.env.PORT || 4003;
const PROTO_PATH = path.resolve(__dirname, '../proto/inventory.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const inventoryPackage = grpcObject.inventoryPackage;

const server = new grpc.Server();
server.addService(inventoryPackage.InventoryService.service, InventoryHandler);

Promise.all([
  queryPromise(
    Queries.createPartsableQuery,
    "[Database]: Parts table created successfully",
    "Error creating parts table: "
  ),
  queryPromise(
    Queries.createRepairTypesTableQuery,
    "[Database]: Repair types table created successfully",
    "Error creating repair types table: "
  )
])
  .catch((error) => inventoryLogger.error(`Error creating tables: ${error}`));

const network = process.env.INVENTORY_SERVICE_NETWORK;
server.bindAsync(`${network}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) inventoryLogger.error(`Error running the server ${err}`);
  else inventoryLogger.info(`Inventory-service Server running at http://${network}:${port}`);
});