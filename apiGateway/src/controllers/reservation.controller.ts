import { Request, Response } from "express";
import { ServiceError } from "@grpc/grpc-js";
import clients from "../clients/reservation.client";
import appLogger from "../utils/appLogger";

const { ReservationClient } = clients;

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
    ReservationClient.CreateReservation(req.body, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      }
      else res.status(200).json({ data: result });
    })
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
};

export default ReservationController;