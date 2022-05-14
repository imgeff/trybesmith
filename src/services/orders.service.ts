import OrdersModel from '../models/orders.model';
import { AllOrders } from '../interfaces/orders.interface';

export default class OrdersService {
  private model = new OrdersModel();

  public getAll = async (): Promise<AllOrders[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}