import { Response, Request, NextFunction } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  private service = new LoginService();

  public isUser = async (req: Request, res: Response, next: NextFunction): 
  Promise<Response | void> => {
    const { username, password } = req.body;
    const searchUser = await this.service.isUser(username, password);
    if (searchUser.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    req.body = { id: searchUser, username };
    return next();
  };
}