import * as grpc from '@grpc/grpc-js';
import { UserServiceHandlers } from '../protobufs/userPackage/UserService';
import { User as IUser, User__Output } from '../protobufs/userPackage/User';
import { GetUserRequest } from '../protobufs/userPackage/GetUserRequest';
import { UserList__Output } from '../protobufs/userPackage/UserList';
import { DeleteUserRequest } from '../protobufs/userPackage/DeleteUserRequest';
import { Empty } from '../protobufs/userPackage/Empty';

import UserModel from '../models/user.model';
import appLogger from '../utils/userLogger';

const UserHandler: UserServiceHandlers = {
  GetUser: async (call: grpc.ServerUnaryCall<GetUserRequest, User__Output>, callback: grpc.sendUnaryData<User__Output>) => {
    const userId = call.request.id;
    try {
      const user = await UserModel.findById(userId);
      if (user) {
        callback(null, user);
      } else {
        callback({ code: grpc.status.NOT_FOUND, message: 'User not found' });
      }
    } catch (error: any) {
      appLogger.error(error.message);
      callback({ code: grpc.status.INTERNAL, message: 'Internal server error' });
    }
  },

  GetUserList: async (call: grpc.ServerUnaryCall<Empty, UserList__Output>, callback: grpc.sendUnaryData<UserList__Output>) => {
    const users = await UserModel.find({});
    callback(null, { users });
  },

  DeleteUser: async (call: grpc.ServerUnaryCall<DeleteUserRequest, User__Output>, callback: grpc.sendUnaryData<User__Output>) => {
    try {
      const userId = call.request.id;
      const deletedUser = await UserModel.findByIdAndDelete(userId);
      callback(null, deletedUser);
    } catch (error: any) {
      appLogger.error(error.message);
      callback({ code: grpc.status.INTERNAL, message: error.mesaage });
    }
  },

  UpdateUser: async (call: grpc.ServerUnaryCall<IUser, User__Output>, callback: grpc.sendUnaryData<User__Output>) => {
    try {
      const userData = call.request;
      const user = await UserModel.findByIdAndUpdate(userData.id, userData, { new: true }).lean();
      if (user) {
        const { password, ...userRecord } = user;
        callback(null, userRecord);
      } else {
        callback({ code: grpc.status.NOT_FOUND, message: 'User not found' });
      }
    } catch (error: any) {
      appLogger.error(error.message);
      callback({ code: grpc.status.INTERNAL, message: error.mesaage });
    }
  }
};

export default UserHandler;