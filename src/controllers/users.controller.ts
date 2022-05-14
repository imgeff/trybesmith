import { Response, NextFunction } from 'express';
import UsersService from '../services/users.service';
import { NewUserRequest } from '../interfaces/users.interface';

export default class UsersController {
  private service = new UsersService();

  public create = async (req: NewUserRequest, _res: Response, next: NextFunction): 
  Promise<void | Response> => {
    const { username, classe, level, password } = req.body;
    const newUserId = await this.service.create({ username, classe, level, password });
    req.user = { code: 201, userId: newUserId };
    return next();
  };
}