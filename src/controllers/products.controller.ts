import { Response, Request } from 'express';
import ProductsService from '../services/products.service';
import 'express-async-errors';

export default class ProductsController {
  private service = new ProductsService();
  
  // ========================= GET ALL ============================
  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };

  // ========================= CREATE ============================
  public create = async (req: Request, res: Response): Promise<Response> => {
    const { name, amount } = req.body;
    const newProduct = await this.service.create(name, amount);
    return res.status(201).json(newProduct);
  };
}