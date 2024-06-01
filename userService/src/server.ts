import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

import { ProtoGrpcType } from './protobufs/user';
import AuthHandler from './handlers/auth.handler';
import UserHandler from './handlers/user.handler';
import appLogger from './utils/userLogger';

const PORT = process.env.PORT || 4001;
const PROTO_PATH = path.resolve(__dirname, '../proto/user.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const userPackage = grpcObject.userPackage;

const server = new grpc.Server();
server.addService(userPackage.UserService.service, UserHandler);
server.addService(userPackage.AuthService.service, AuthHandler);

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI as string)
  .then(() => appLogger.info('[Database Connection]: Connected to Plumbit User Database'))
  .catch((error) => appLogger.error(`Error connecting to Plumbit User Database: ${error}`));

server.bindAsync(`localhost:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) appLogger.error(`Error running the server ${err}`);
  else appLogger.info(`Server running at http://localhost:${port}`);
});
