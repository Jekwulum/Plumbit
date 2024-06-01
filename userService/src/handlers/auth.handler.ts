import * as grpc from '@grpc/grpc-js';
import { AuthServiceHandlers } from '../protobufs/userPackage/AuthService';
import { User as IUser, User__Output } from '../protobufs/userPackage/User';
import { LoginUserRequest } from '../protobufs/userPackage/LoginUserRequest';
import { UpdatePasswordRequest } from '../protobufs/userPackage/UpdatePasswordRequest';

import UserModel from '../models/user.model';
import appLogger from '../utils/userLogger';

const AuthHandler: AuthServiceHandlers = {
  RegisterUser: async (call: grpc.ServerUnaryCall<IUser, User__Output>, callback: grpc.sendUnaryData<User__Output>) => {
    const userData = call.request;
    try {
      const user = new UserModel(userData);
      const result = await user.save();
      const { password, ...newUserRecord } = result.toJSON();
      callback(null, newUserRecord);
    } catch (error: any) {
      appLogger.error(error.message);
      callback({ code: grpc.status.INTERNAL, message: error.message })
    }
  },

  LoginUser: async (call: grpc.ServerUnaryCall<LoginUserRequest, User__Output>, callback: grpc.sendUnaryData<User__Output>) => {
    const { email, password } = call.request;
    if (!email || !password) return callback({ code: grpc.status.INVALID_ARGUMENT, message: 'Invalid credentials' });

    try {
      const user = await UserModel.findOne({ email });
      if (!user || !(await user.validatePassword(password))) {
        return callback({ code: grpc.status.INVALID_ARGUMENT, message: 'Invalid credentials' });
      } else {
        const { password, ...userRecord } = user.toJSON();
        userRecord.id = userRecord._id;
        callback(null, userRecord);
      }
    } catch (error: any) {
      appLogger.error(error.message);
      callback({ code: grpc.status.INTERNAL, message: error.message });
    }
  },

  UpdatePassword: async (call: grpc.ServerUnaryCall<UpdatePasswordRequest, User__Output>, callback: grpc.sendUnaryData<User__Output>) => {
    const { id, password } = call.request;
    if (!id || !password) return callback({ code: grpc.status.INVALID_ARGUMENT, message: 'Invalid data' });

    try {
      const user = await UserModel.findById(id);
      if (!user) {
        callback({ code: grpc.status.NOT_FOUND, message: 'User not found' });
      } else {
        user.password = password;
        const result = await user.save();
        callback(null, result);
      }
    } catch (error: any) {
      appLogger.error(error.message);
      callback({ code: grpc.status.INTERNAL, message: error.message });
    }
  },
};

export default AuthHandler;
