import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from 'dotenv';
import mongoose from 'mongoose';

config({path: path.resolve(__dirname, '../.env')}); // to get the environment
const environment = process.env.ENVIRONMENT;

let envPath = '../development.env';
if (environment === 'docker') {
  envPath = '../docker.env';
}
config({ path: path.resolve(__dirname, envPath) });

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

// const urls = { docker: 'mongodb://mongodb:27017/plumbit_user', local: process.env.MONGO_URI };

function connectWithRetry(attempt: number = 1, maxRetries: number = 5) {
  mongoose.connect(process.env.MONGO_URI as string)
    .then(() => appLogger.info('[Database Connection]: Connected to Plumbit User Mongo Database'))
    .catch((error) => {
      if (attempt < maxRetries) {
        appLogger.error(`Attempt ${attempt}: Error connecting to Plumbit User Mongo Database: ${error}. Retrying...`);
        setTimeout(() => connectWithRetry(attempt + 1, maxRetries), 5000);
      } else {
        appLogger.error(`Error connecting to Plumbit User Mongo Database after ${attempt} attempts: ${error}`);
      }
    });
}

connectWithRetry();

const network = process.env.USER_SERVICE_NETWORK;
server.bindAsync(`${network}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) appLogger.error(`Error running the server ${err}`);
  else appLogger.info(`User-service Server running at http://${network}:${port}`);
});
