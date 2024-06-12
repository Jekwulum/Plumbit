import { Request, Response } from "express";
import { ServiceError } from "@grpc/grpc-js";
import reservationclients from "../clients/reservation.client";
import userClients from "../clients/user.client";
import appLogger from "../utils/appLogger";

const { ReservationClient } = reservationclients;
const { UserClient } = userClients;

const ReservationController = {
  GetReservation: async (req: Request, res: Response) => {
    const { id: reservationId } = req.params;
    ReservationClient.GetReservation({ reservationId }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    })
  },

  GetReservations: async (req: Request, res: Response) => {
    ReservationClient.GetReservations(req.query, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    });
  },

  CreateReservation: async (req: Request, res: Response) => {
    try {
      await new Promise((resolve, reject) => {
        UserClient.GetUser({ id: req.body.customerId }, (err: ServiceError | null, result) => {
          if (err && !result) return reject(new Error(`Customer with id ${req.body.customerId} not found`));
          if (err) return reject(err);
          resolve(result);
        });
      });

      await new Promise((resolve, reject) => {
        UserClient.GetUser({ id: req.body.plumberId }, (err: ServiceError | null, result) => {
          if (err && !result) return reject(new Error(`Plumber with id ${req.body.plumberId} not found`));
          if (err) return reject(err);
          resolve(result);
        });
      });

      ReservationClient.CreateReservation(req.body, (err: ServiceError | null, result) => {
        if (err) {
          appLogger.error(err.message);
          return res.status(500).json({ message: `${err.message}` });
        }
        res.status(200).json({ data: result });
      });
    } catch (error: any) {
      appLogger.error(error.message);
      if (error.message.includes('not found')) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  UpdateReservation: async (req: Request, res: Response) => {
    req.body = { ...req.body, reservationId: req.params.id };
    ReservationClient.UpdateReservation(req.body, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    });
  },

  DeleteReservation: async (req: Request, res: Response) => {
    const { id: reservationId } = req.params;
    ReservationClient.DeleteReservation({ reservationId }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    });
  },

  GetPlumberAppointments: async (req: Request, res: Response) => {
    type QueryParams = { id: string, date: string };
    const { id: plumberId, date } = req.query as QueryParams;

    ReservationClient.GetPlumberAppointments({ plumberId, date }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    });
  },
};

export default ReservationController;