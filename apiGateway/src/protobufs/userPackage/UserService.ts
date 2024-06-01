// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteUserRequest as _userPackage_DeleteUserRequest, DeleteUserRequest__Output as _userPackage_DeleteUserRequest__Output } from '../userPackage/DeleteUserRequest';
import type { Empty as _userPackage_Empty, Empty__Output as _userPackage_Empty__Output } from '../userPackage/Empty';
import type { GetUserRequest as _userPackage_GetUserRequest, GetUserRequest__Output as _userPackage_GetUserRequest__Output } from '../userPackage/GetUserRequest';
import type { User as _userPackage_User, User__Output as _userPackage_User__Output } from '../userPackage/User';
import type { UserList as _userPackage_UserList, UserList__Output as _userPackage_UserList__Output } from '../userPackage/UserList';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _userPackage_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _userPackage_DeleteUserRequest, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, callback: grpc.requestCallback<_userPackage_Empty__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userPackage_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userPackage_GetUserRequest, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
  GetUserList(argument: _userPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  GetUserList(argument: _userPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  GetUserList(argument: _userPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  GetUserList(argument: _userPackage_Empty, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  getUserList(argument: _userPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  getUserList(argument: _userPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  getUserList(argument: _userPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  getUserList(argument: _userPackage_Empty, callback: grpc.requestCallback<_userPackage_UserList__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_userPackage_User__Output, _userPackage_User>;
  
  DeleteUser: grpc.handleUnaryCall<_userPackage_DeleteUserRequest__Output, _userPackage_Empty>;
  
  GetUser: grpc.handleUnaryCall<_userPackage_GetUserRequest__Output, _userPackage_User>;
  
  GetUserList: grpc.handleUnaryCall<_userPackage_Empty__Output, _userPackage_UserList>;
  
  UpdateUser: grpc.handleUnaryCall<_userPackage_User__Output, _userPackage_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_userPackage_User, _userPackage_User, _userPackage_User__Output, _userPackage_User__Output>
  DeleteUser: MethodDefinition<_userPackage_DeleteUserRequest, _userPackage_Empty, _userPackage_DeleteUserRequest__Output, _userPackage_Empty__Output>
  GetUser: MethodDefinition<_userPackage_GetUserRequest, _userPackage_User, _userPackage_GetUserRequest__Output, _userPackage_User__Output>
  GetUserList: MethodDefinition<_userPackage_Empty, _userPackage_UserList, _userPackage_Empty__Output, _userPackage_UserList__Output>
  UpdateUser: MethodDefinition<_userPackage_User, _userPackage_User, _userPackage_User__Output, _userPackage_User__Output>
}
