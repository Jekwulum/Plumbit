import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protobufs/user';

const USER_SERVICE_PORT = process.env.USER_SERVICE_PORT || 4001;

const USER_PROTO_PATH = path.resolve(__dirname, '../../proto/user.proto');

const userPackageDefinition = protoLoader.loadSync(USER_PROTO_PATH);
const userGrpcObject = (grpc.loadPackageDefinition(userPackageDefinition) as unknown) as ProtoGrpcType;


const UserClient = new userGrpcObject.userPackage.UserService(`localhost:${USER_SERVICE_PORT}`, grpc.credentials.createInsecure());
const AuthClient = new userGrpcObject.userPackage.AuthService(`localhost:${USER_SERVICE_PORT}`, grpc.credentials.createInsecure());

export default { UserClient, AuthClient };