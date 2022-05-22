import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { AllProducts, NewProduct, ProductsQuery } from '../interfaces/products.interface';

const productsQuery: ProductsQuery = {
  getAll: 'SELECT * FROM Trybesmith.Products;',
  create: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?);',
  createById: 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES(?, ?, ?);',
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

  public createById = async (productsIds: number[], orderId: number): Promise<void> => {
    const products = await this.getAll();
    const productsByOrder: AllProducts[] = [];

    productsIds
      .forEach((productId) => {
        const productByOrder = products.filter((product) => product.id === productId);
        productsByOrder.push(...productByOrder);
      });

    const createProductCall = productsByOrder.map((product) => connection
      .execute(productsQuery.createById, [product.name, product.amount, orderId]));

    await Promise.all(createProductCall);
  };
}