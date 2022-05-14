import connection from './connection';
import { NewUser } from '../interfaces/users.interface';

const usersQuery = {
  create: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)',
};

export default class UsersModel {
  public create = async ({ username, classe, level, password }: NewUser): Promise<void> => {
    await connection.execute(usersQuery.create, [username, classe, level, password]);
  };
}