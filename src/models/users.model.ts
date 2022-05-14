import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { NewUser } from '../interfaces/users.interface';

const usersQuery = {
  create: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)',
};

export default class UsersModel {
  public create = async ({ username, classe, level, password }: NewUser): Promise<number> => {
    const [rows] = await connection
      .execute<ResultSetHeader>(usersQuery.create, [username, classe, level, password]);
    const { insertId } = rows;
    return insertId;
  };
}