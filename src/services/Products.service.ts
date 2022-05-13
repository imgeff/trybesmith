import { AllProducts } from '../interfaces/Products.interface';
import ProductsModel from '../models/Products.model';

export default class ProductsService {
  private model = new ProductsModel();

  public getAll = async (): Promise<AllProducts[]> => {
    const products = await this.model.getAll();
    return products;
  };
}