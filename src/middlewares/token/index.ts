import jwt, { Algorithm } from 'jsonwebtoken';
import { Request, Response } from 'express';

interface IJwtConfig {
  algorithm: Algorithm;
  expiresIn: string;
}

const jwtConfig: IJwtConfig = {
  algorithm: 'HS256',
  expiresIn: '30m',
};

export default class Token {
  public generate = (req: Request, res: Response): Response => {
    const { code, payload } = req.body;
    const secret = process.env.SECRET || 'Trybesmith*';
    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(code).json({ token });
  };
}
