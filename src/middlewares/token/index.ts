import jwt, { Algorithm } from 'jsonwebtoken';
import { Response } from 'express';
import { NewUserRequest } from '../../interfaces/users.interface';

interface IJwtConfig {
  algorithm: Algorithm;
  expiresIn: string;
}

const jwtConfig: IJwtConfig = {
  algorithm: 'HS256',
  expiresIn: '30m',
};

export default class Token {
  public generate = (req: NewUserRequest, res: Response): Response => {
    const { code, userId } = req.user;
    const payload = { id: userId };
    const secret = process.env.SECRET || 'Trybesmith*';
    const token = jwt.sign(payload, secret, jwtConfig);
    
    return res.status(code).json({ token });
  };
}
