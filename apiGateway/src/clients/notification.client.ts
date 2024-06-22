import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protobufs/notification';

const NOTIFICATION_SERVICE_PORT = process.env.NOTIFICATION_SERVICE_PORT || 4004;

const NOTIFICATION_PROTO_PATH = path.resolve(__dirname, '../../proto/notification.proto');

const notificationPackageDefinition = protoLoader.loadSync(NOTIFICATION_PROTO_PATH);
const notificationGrpcObject = (grpc.loadPackageDefinition(notificationPackageDefinition) as unknown) as ProtoGrpcType;

const network = process.env.NOTIFICATION_SERVICE_NETWORK;
const NotificationClient = new notificationGrpcObject.notificationPackage.NotificationService(`${network}:${NOTIFICATION_SERVICE_PORT}`, grpc.credentials.createInsecure());

export default { NotificationClient };
