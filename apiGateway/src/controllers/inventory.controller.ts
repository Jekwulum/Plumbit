import { Request, Response } from "express";
import { ServiceError } from "@grpc/grpc-js";
import inventoryClients from "../clients/inventory.client";
import appLogger from "../utils/appLogger";

const { InventoryClient } = inventoryClients;

const InventoryController = {
  AddPart: async (req: Request, res: Response) => {
    const { partName, quantity } = req.body;
    InventoryClient.AddPart({ partName, quantity }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  AddRepairType: async (req: Request, res: Response) => {
    const { repairType, requiredParts } = req.body;
    InventoryClient.AddRepairType({ repairType, requiredParts }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  CheckPartsAvailability: async (req: Request, res: Response) => {
    const { partIds } = req.body;
    InventoryClient.CheckPartsAvailability({ partIds }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  GetRequiredParts: async (req: Request, res: Response) => {
    const { repairType } = req.query;
    InventoryClient.GetRequiredParts({ repairType: repairType as string }, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },

  GetRepairTypes: async (req: Request, res: Response) => {
    InventoryClient.GetRepairTypes({}, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err.message);
        res.status(500).json({ message: `${err.message}` });
      } else res.status(200).json({ data: result });
    });
  },
};

export default InventoryController;