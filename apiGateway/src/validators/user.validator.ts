import Joi from "joi"

const UserValidator = {

  getUser: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().optional(),
    query: Joi.object().optional(),
  }),

  updateUser: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      phone: Joi.string(),
    }),
    query: Joi.object().optional(),
  }),

  deleteUser: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().optional(),
    query: Joi.object().optional(),
  }),
};

export default UserValidator;