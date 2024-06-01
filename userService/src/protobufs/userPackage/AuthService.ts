// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginUserRequest as _userPackage_LoginUserRequest, LoginUserRequest__Output as _userPackage_LoginUserRequest__Output } from '../userPackage/LoginUserRequest';
import type { User as _userPackage_User, User__Output as _userPackage_User__Output } from '../userPackage/User';

export interface AuthServiceClient extends grpc.Client {
  LoginUser(argument: _userPackage_LoginUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  LoginUser(argument: _userPackage_LoginUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  LoginUser(argument: _userPackage_LoginUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  LoginUser(argument: _userPackage_LoginUserRequest, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _userPackage_LoginUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _userPackage_LoginUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _userPackage_LoginUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _userPackage_LoginUserRequest, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
  RegisterUser(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  RegisterUser(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  RegisterUser(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  RegisterUser(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
  UpdatePassword(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _userPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _userPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _userPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _userPackage_User, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  LoginUser: grpc.handleUnaryCall<_userPackage_LoginUserRequest__Output, _userPackage_User>;
  
  RegisterUser: grpc.handleUnaryCall<_userPackage_User__Output, _userPackage_User>;
  
  UpdatePassword: grpc.handleUnaryCall<_userPackage_User__Output, _userPackage_User>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  LoginUser: MethodDefinition<_userPackage_LoginUserRequest, _userPackage_User, _userPackage_LoginUserRequest__Output, _userPackage_User__Output>
  RegisterUser: MethodDefinition<_userPackage_User, _userPackage_User, _userPackage_User__Output, _userPackage_User__Output>
  UpdatePassword: MethodDefinition<_userPackage_User, _userPackage_User, _userPackage_User__Output, _userPackage_User__Output>
}
