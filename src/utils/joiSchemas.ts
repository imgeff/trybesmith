import Joi from 'joi';

export const products = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const users = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const login = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

export const orders = Joi.object({
  userId: Joi.number(),
  productsIds: Joi.array().min(1).required().messages({
    'array.min': '"productsIds" must include only numbers',
  }),
});