import { Response, Request, NextFunction } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  private service = new LoginService();

  public isUser = async (req: Request, res: Response, next: NextFunction): 
  Promise<Response | void> => {
    const { username, password } = req.body;
    const searchUser = await this.service.isUser(username, password);
    if (!searchUser) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    req.body = { code: 200, payload: { userId: searchUser.id, username } };
    return next();
  };
}