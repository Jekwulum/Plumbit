import Joi from 'joi';

const NotificationValidator = {
  CreateNotification: Joi.object({
    params: Joi.object().optional(),
    query: Joi.object().optional(),
    body: Joi.object().keys({
      senderId: Joi.string().required(),
      receiverId: Joi.string().required(),
      scenario: Joi.string().required(),
    }),
  }),

  GetNotification: Joi.object({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    query: Joi.object().keys({
      status: Joi.string().valid('read', 'unread'),
    }),
    body: Joi.object().optional(),
  }),
};

export default NotificationValidator;