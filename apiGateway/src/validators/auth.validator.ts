import Joi from "joi";

export const ROLES: { [key: string]: string } = Object.freeze({ CUSTOMER: "customer", PLUMBER: "plumber" });

const AuthValidator = {
  registerUser: Joi.object({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required().valid(Joi.ref('password')),
      phone: Joi.string(),
      role: Joi.string().valid(...Object.values(ROLES)).default(ROLES.CUSTOMER),
    }),
    params: Joi.object().optional(),
    query: Joi.object().optional(),
  }),

  loginUser: Joi.object({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
    params: Joi.object().optional(),
    query: Joi.object().optional(),
  }),

  updatePassword: Joi.object({
    body: Joi.object().keys({
      password: Joi.string().required(),
      confirmPassword: Joi.string().required().valid(Joi.ref('password')),
    }),
    params: Joi.object().optional(),
    query: Joi.object().optional(),
  }),
};

export default AuthValidator;