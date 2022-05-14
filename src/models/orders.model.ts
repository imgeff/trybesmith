import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import ProductsModel from './products.model';
import { AllOrders } from '../interfaces/orders.interface';
import { AllProducts } from '../interfaces/products.interface';

const ordersQuery = {
  getAll: 'SELECT * FROM Trybesmith.Orders',
};

export default class OrdersModel {
  private productsModel = new ProductsModel();

  public getAll = async (): Promise<AllOrders[]> => {
    const allProducts = await this.productsModel.getAll();
    const [orders] = await connection.execute<RowDataPacket[]>(ordersQuery.getAll, []);
    
    const ordersIds = orders.map((order) => order.id);
    ordersIds.forEach((id, index) => {
      const products: AllProducts[] = allProducts.filter((product) => product.orderId === id);
      const productsIds: number[] = [];
      products.forEach((product) => productsIds.push(product.id));
      orders[index].productsIds = productsIds;
    });

    return orders as AllOrders[];
  };
}
