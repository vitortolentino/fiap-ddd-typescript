export interface OrderDTO {
  id: string;
  customerId: string;
  items: OrderItemDTO[];
  total: number;
}

export interface OrderItemDTO {
  productId: string;
  quantity: number;
  price: number;
}
