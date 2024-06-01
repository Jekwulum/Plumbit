import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _userPackage_AuthServiceClient, AuthServiceDefinition as _userPackage_AuthServiceDefinition } from './userPackage/AuthService';
import type { UserServiceClient as _userPackage_UserServiceClient, UserServiceDefinition as _userPackage_UserServiceDefinition } from './userPackage/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  userPackage: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _userPackage_AuthServiceClient> & { service: _userPackage_AuthServiceDefinition }
    DeleteUserRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    LoginUserRequest: MessageTypeDefinition
    User: MessageTypeDefinition
    UserList: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _userPackage_UserServiceClient> & { service: _userPackage_UserServiceDefinition }
  }
}

