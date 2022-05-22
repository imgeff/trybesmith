import { AllProducts, NewProduct } from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  private model = new ProductsModel();

  // ========================= GET ALL ============================
  public getAll = async (): Promise<AllProducts[]> => {
    const products = await this.model.getAll();
    return products;
  };

  // ========================= CREATE ============================
  public create = async (name: string, amount: string): Promise<NewProduct> => {
    const newProduct = await this.model.create(name, amount);
    return newProduct;
  };
}