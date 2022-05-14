import connection from './connection';
import { AllOrders } from '../interfaces/orders.interface';

const ordersQuery = {
  getAll: `SELECT ORD.*, PROD.id 
  FROM Trybesmith.Orders AS ORD 
  INNER JOIN Trybesmith.Products AS PROD
  ON ORD.id = PROD.orderId`,
};

export default class OrdersModel {
  public getAll = async (): Promise<AllOrders[]> => {
    const [orders] = await connection.execute(ordersQuery.getAll);
    return orders as AllOrders[];
  };
}
