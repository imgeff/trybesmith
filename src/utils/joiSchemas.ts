import Joi from 'joi';

export const products = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const users = Joi.object({});

export const orders = Joi.object({});