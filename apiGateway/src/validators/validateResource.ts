import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

import appLogger from "../utils/appLogger";

const validateResource = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestData = { body: req.body, params: req.params, query: req.query };
    const { error } = schema.validate(requestData);

    if (error) {
      return res.status(500).json({ message: error.details[0].message });
    }
    next();
  } catch (error) {
    appLogger.error(`Error in request validation middleware: ${error}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export default validateResource;