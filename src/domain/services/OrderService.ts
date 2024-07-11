import { OrderRepository } from "../repositories/OrderRepository";
import { Order } from "../entities/Order";

export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(order: Order): Promise<void> {
    // Lógica de negócios para criar um pedido
    await this.orderRepository.save(order);
  }
}
