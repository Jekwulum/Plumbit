import { Request, Response } from "express";
import { ServiceError } from "@grpc/grpc-js";
import clients from "../clients/user.client";
import appLogger from "../utils/appLogger";

const { UserClient } = clients;

const UserController = {
  GetUsers: async (req: Request, res: Response) => {
    UserClient.GetUserList({}, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    });
  },

  GetUser: async (req: Request, res: Response) => {
    // const id = req.params.id;
    const id = req.params.id || res.locals.user.id;
    UserClient.GetUser({ id }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else {
        const { password, ...userRecord } = JSON.parse(JSON.stringify(result));
        res.status(200).json({ data: userRecord });
      }
    })
  },

  UpdateUser: async (req: Request, res: Response) => {
    UserClient.UpdateUser({ id: res.locals.user.id, ...req.body }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else {
        res.status(200).json({ data: result });
      }
    });
  },

  DeleteUser: async (req: Request, res: Response) => {
    UserClient.DeleteUser({ id: res.locals.user.id }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else {
        res.status(200).json({ data: result });
      }
    });
  },
};

export default UserController;