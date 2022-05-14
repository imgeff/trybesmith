import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { AllProducts, NewProduct } from '../interfaces/products.interface';

const productsQuery: any = {
  getAll: 'SELECT * FROM Trybesmith.Products',
  getByOrder: 'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
  create: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)',
};

export default class ProductsModel {
  public getAll = async (): Promise<AllProducts[]> => {
    const [products] = await connection.execute(productsQuery.getAll);
    return products as AllProducts[];
  };

  public create = async (name: string, amount: string): Promise<NewProduct> => {
    const [rows] = await connection.execute<ResultSetHeader>(productsQuery.create, [name, amount]);
    const { insertId } = rows;
    return { id: insertId, name, amount };
  };

  public getByOrder = async (orderId: number) => {
    const [productsIds] = await connection.execute(productsQuery.getByOrder, [orderId]);
    return productsIds;
  };
}