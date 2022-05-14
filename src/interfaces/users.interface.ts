import { Request } from 'express';

export interface NewUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface NewUserRequest extends Request {
  user: { code: number, userId: number };
}