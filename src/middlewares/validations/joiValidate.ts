import { Response, Request, NextFunction } from 'express';
import Joi from 'joi';

const joiValidate = (schema: Joi.Schema) => (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    if (error.details[0].message.includes('required')) {
      return next({ name: 'RequiredError', message: error.details[0].message });
    }
    return next({ name: 'ValidationError', message: error.details[0].message });
  }

  next();
};

export default joiValidate;