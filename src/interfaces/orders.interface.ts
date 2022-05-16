export interface NewOrder {
  userId: number;
  productsIds: number[];
}

export interface AllOrders extends NewOrder {
  id: number;
}
