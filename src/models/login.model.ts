import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

const loginQuery = 'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?;';

export default class LoginModel {
  public isUser = async (username: string, password: string): Promise<RowDataPacket> => {
    const [[userId]] = await connection.execute<RowDataPacket[]>(loginQuery, [username, password]);
  
    return userId;
  };
}