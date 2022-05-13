import { AllProducts, NewProduct } from '../interfaces/Products.interface';
import ProductsModel from '../models/Products.model';

export default class ProductsService {
  private model = new ProductsModel();

  public getAll = async (): Promise<AllProducts[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public create = async (name: string, amount: string): Promise<NewProduct> => {
    const newProduct = await this.model.create(name, amount);
    return newProduct;
  };
}