import { Request, Response } from "express";
import { ServiceError } from "@grpc/grpc-js";
import notificationClients from "../clients/notification.client";
import appLogger from "../utils/appLogger";

const { NotificationClient } = notificationClients;

const NotificationController = {
  CreateNotification: async (req: Request, res: Response) => {
    const { senderId, receiverId, scenario } = req.body;
    NotificationClient.CreateNotification({ senderId, receiverId, scenario }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  GetNotifications: async (req: Request, res: Response) => {
    const { id: receiverId } = req.params;
    const { status } = req.query;
    NotificationClient.GetNotifications({ receiverId, status: status as string }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  GetNotification: async (req: Request, res: Response) => {
    const { id: notificationId } = req.params;
    NotificationClient.GetNotification({ notificationId: notificationId as string }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  UpdateNotification: async (req: Request, res: Response) => {
    const { id: notificationId } = req.params;
    NotificationClient.UpdateNotification({ notificationId }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  DeleteNotification: async (req: Request, res: Response) => {
    const { id: notificationId } = req.params;
    NotificationClient.DeleteNotification({ notificationId }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },
};

export default NotificationController;