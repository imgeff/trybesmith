import OrdersModel from '../models/orders.model';
import { AllOrders, NewOrder } from '../interfaces/orders.interface';

export default class OrdersService {
  private model = new OrdersModel();

  public getAll = async (): Promise<AllOrders[]> => {
    const orders = await this.model.getAll();
    return orders;
  };

  public create = async (newOrder: NewOrder): Promise<NewOrder> => {
    const orderCreated = await this.model.create(newOrder);
    return orderCreated;
  };
}