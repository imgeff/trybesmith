import LoginModel from '../models/login.model';

export default class LoginService {
  private model = new LoginModel();

  public isUser = async (username: string, password: string): Promise<number[] | []> => {
    const searchUser = await this.model.isUser(username, password);
    return searchUser;
  };
}