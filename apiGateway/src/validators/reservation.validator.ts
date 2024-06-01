import Joi from "joi";

const repairTypes: { [key: string]: string } = {
  burstPipe: 'Burst Pipe',
  leakFix: 'Leak Fix',
  pipeReplace: 'Pipe Replacement',
  faucetInstall: 'Faucet Installation',
  drainClear: 'Drain Clearance',
  waterHeaterReplace: 'Water Heater Replacement',
  toiletInstall: 'Toilet Installation',
  other: 'Other'
};

const scheduledTypes: { [key: string]: string } = {
  scheduled: 'Scheduled',
  inProgress: 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
  pending: 'Pending'
};

const ReservationValidator = {
  getReservations: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().keys({
      plumberId: Joi.string().optional(),
      customerId: Joi.string().optional(),
    }),
    body: Joi.object().optional(),
  }),

  getReservation: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    query: Joi.object().optional(),
    body: Joi.object().optional(),
  }),

  createReservation: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      customerId: Joi.string().required(),
      plumberId: Joi.string().required(),
      date: Joi.date().required(),
      repairType: Joi.string().required().valid(...Object.values(repairTypes)),
      description: Joi.string().allow('', null).when('repairType', {
        is: 'Other',
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
      }),
      status: Joi.string().default(scheduledTypes.scheduled),
    }),
  }),

  updateReservation: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      customerId: Joi.string(),
      plumberId: Joi.string(),
      date: Joi.date(),
      repairType: Joi.string().valid(...Object.values(repairTypes)),
      description: Joi.string().allow('', null).when('repairType', {
        is: 'Other',
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
      }),
      status: Joi.string().valid(...Object.values(scheduledTypes)),
    }),
  }),

  deleteReservation: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    query: Joi.object().optional(),
    body: Joi.object().optional(),
  }),
};

export default ReservationValidator;