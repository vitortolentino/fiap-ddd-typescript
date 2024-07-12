export class Order {
  constructor(
    public id: string,
    public costumerId: string,
    public items: OrderItem[],
    public total: number,
    public status: "canceled" | "active" = "active"
  ) {}
}

export class OrderItem {
  constructor(
    public productId: string,
    public quantity: number,
    public price: number
  ) {}
}
