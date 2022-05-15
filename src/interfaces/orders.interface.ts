export interface NewOrder {
  userId: number;
  productsIds: number[];
}

export interface OrderCreated {
  userId: number;
  products: number[];
}
export interface AllOrders extends NewOrder {
  id: number;
}
