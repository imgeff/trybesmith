export interface NewProduct {
  id: number;
  name: string;
  amount: string;
}

export interface AllProducts extends NewProduct {
  orderId: number | null;
}
