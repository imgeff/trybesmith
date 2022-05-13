import { AllProducts } from '../Interfaces/Products.interface';
import ProductsModel from '../Models/Products.model';

export default class ProductsService {
  private model = new ProductsModel();

  public getAll = async (): Promise<AllProducts[]> => {
    const products = await this.model.getAll();
    return products;
  };
}