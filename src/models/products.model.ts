import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { AllProducts, NewProduct, ProductsQuery } from '../interfaces/products.interface';

const productsQuery: ProductsQuery = {
  getAll: 'SELECT * FROM Trybesmith.Products;',
  create: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?);',
  update: 'UPDATE Trybesmith.Products SET name = ?, amount = ?, orderId = ? WHERE id = ?;',
};

export default class ProductsModel {
  public getAll = async (): Promise<AllProducts[]> => {
    const [products] = await connection.execute(productsQuery.getAll);
    return products as AllProducts[];
  };

  public create = async (name: string, amount: string): Promise<NewProduct> => {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(productsQuery.create, [name, amount]);
    return { id: insertId, name, amount };
  };

  public update = async (id: number, name: string, amount: string, orderId: number) => {
    await connection.execute(productsQuery.update, [name, amount, orderId, id]);
  };
}