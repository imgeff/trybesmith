import jwt, { VerifyOptions, SignOptions } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { PayloadDecoded } from '../../interfaces/token.interface';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '30m',
};

export default class Token {
  private secret = process.env.SECRET || 'Trybesmith*';

  public generate = (req: Request, res: Response): Response => {
    const { code, payload } = req.body;
    const token = jwt.sign(payload, this.secret, jwtConfig as SignOptions);

    return res.status(code).json({ token });
  };

  public verify = (req: Request, res: Response, next: NextFunction): Response | void => {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const { userId } = jwt
      .verify(authorization, this.secret, jwtConfig as VerifyOptions) as PayloadDecoded;
    req.body = { userId, productsIds };
    return next();
  };
}
