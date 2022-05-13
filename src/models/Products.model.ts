import connection from './connection';
import { AllProducts } from '../interfaces/Products.interface';

const productsQuery: any = {
  getAll: 'SELECT * FROM Trybesmith.Products',
};

export default class ProductsModel {
  public getAll = async (): Promise<AllProducts[]> => {
    const [products] = await connection.execute(productsQuery.getAll);
    return products as AllProducts[];
  };
}