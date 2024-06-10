import { get } from 'config';
import Joi from 'joi';

const InventoryValidator = {
  addPart: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      partName: Joi.string().required(),
      quantity: Joi.number().required(),
    }),
  }),

  updatePart: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      partId: Joi.string().required(),
      partName: Joi.string(),
      quantity: Joi.number(),
    }),
  }),

  addRepairType: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      repairType: Joi.string().required(),
      requiredParts: Joi.array().items(Joi.string()),
    }),
  }),

  getRequiredParts: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().keys({
      repairType: Joi.string().required(),
    }),
    body: Joi.object().optional(),
  }),

  checkPartsAvailability: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      partIds: Joi.array().items(Joi.string()),
    }),
  }),

  manageStockLevels: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      partsToUpdate: Joi.object().pattern(Joi.string(), Joi.number()).required(),
    }),
  }),
};

export default InventoryValidator;