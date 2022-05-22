import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ProductsModel from './products.model';
import { AllOrders, NewOrder } from '../interfaces/orders.interface';
import { AllProducts } from '../interfaces/products.interface';

const ordersQuery = {
  getAll: 'SELECT * FROM Trybesmith.Orders',
  create: 'INSERT INTO Trybesmith.Orders (userId) VALUES(?);',
};

export default class OrdersModel {
  private productsModel = new ProductsModel();

  // ========================= GET ALL ============================
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

  // ========================= CREATE ============================
  public create = async ({ userId, productsIds }: NewOrder): Promise<NewOrder> => {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(ordersQuery.create, [userId]);
    await this.linkOrderProducts(productsIds, insertId);

    return { userId, productsIds };
  };

  // ========================= LINK ORDER PRODUCTS ============================
  private linkOrderProducts = async (productsIds: number[], orderId: number) => {
    const products = await this.productsModel.getAll();
    const orderProducts: AllProducts[] = [];

    productsIds
      .forEach((productId) => {
        const idProducts = products.filter((product) => product.id === productId);
        orderProducts.push(...idProducts);
      });

    const linkOrderProducts = orderProducts
      .map(({ id, name, amount }) => this.productsModel.update(id, name, amount, orderId));

    await Promise.all(linkOrderProducts);
  };
}
