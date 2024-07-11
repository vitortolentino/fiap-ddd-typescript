import { OrderRepository } from "../../domain/repositories/OrderRepository";
import { Order } from "../../domain/entities/Order";

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.find((order) => order.id === id) || null;
  }
}
