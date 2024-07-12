import { Order } from "../../domain/entites/Order";
import { OrderRepositoryInterface } from "../../domain/repositories/OrderRepositoryInterface";

export class InMemoryOrderRepository implements OrderRepositoryInterface {
  private orders: Order[];

  async findById(id: string): Promise<Order | null | undefined> {
    return this.orders.find((order) => order.id === id);
  }

  async save(order: Order) {
    this.orders.push(order);

    return order;
  }
}
