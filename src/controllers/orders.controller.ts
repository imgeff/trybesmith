import { Response, Request } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  private service = new OrdersService();

  // ========================= GET ALL ============================
  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  };

  // ========================= CREATE ============================
  public create = async (req: Request, res: Response): Promise<Response> => {
    const orderCreated = await this.service.create(req.body);
    return res.status(201).json(orderCreated);
  };
}