import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  private service = new UsersService();

  public create = async (req: Request, _res: Response, next: NextFunction): 
  Promise<void | Response> => {
    const { username, classe, level, password } = req.body;
    const newUserId = await this.service.create({ username, classe, level, password });
    req.body = { code: 201, payload: { id: newUserId } };
    return next();
  };
}