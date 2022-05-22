import UsersModel from '../models/users.model';
import { NewUser } from '../interfaces/users.interface';

export default class UsersService {
  private model = new UsersModel();

  // ========================= CREATE ============================
  public create = async (newUser: NewUser): Promise<number> => {
    const newUserId = await this.model.create(newUser);
    return newUserId;
  };
}