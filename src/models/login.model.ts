import connection from './connection';

const loginQuery = 'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?;';

export default class LoginModel {
  public isUser = async (username: string, password: string): Promise<number[] | []> => {
    const [userId] = await connection.execute(loginQuery, [username, password]);
    return userId as number[] | [];
  };
}