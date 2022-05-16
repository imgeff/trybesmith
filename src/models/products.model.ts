import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { AllProducts, NewProduct, ProductsQuery } from '../interfaces/products.interface';

const productsQuery: ProductsQuery = {
  getAll: 'SELECT * FROM Trybesmith.Products;',
  getByOrder: 'SELECT id FROM Trybesmith.Products WHERE orderId = ?;',
  create: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?);',
  createById: 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES(?, ?, ?);',
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

  public createById = async (productsIds: number[], orderId: number) => {
    const products = await this.getAll();
    const productsByOrder: AllProducts[] = [];

    productsIds
      .forEach((productId) => {
        const productByOrder = products.filter((product) => product.id === productId);
        productsByOrder.push(...productByOrder);
      });

    const createProductCall: unknown[] = productsByOrder.map((product) => connection
      .execute(productsQuery.createById, [product.name, product.amount, orderId]));

    await Promise.all(createProductCall);
  };

  public getByOrder = async (orderId: number) => {
    const [productsIds] = await connection.execute(productsQuery.getByOrder, [orderId]);
    return productsIds;
  };
}