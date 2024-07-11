import { OrderRepository } from "../../domain/repositories/OrderRepository";
import { Order } from "../../domain/entities/Order";

export class GetOrderByIdUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string): Promise<Order | null> {
    return await this.orderRepository.findById(id);
  }
}
