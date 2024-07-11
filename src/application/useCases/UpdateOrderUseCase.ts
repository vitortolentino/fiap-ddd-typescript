import { OrderRepository } from "../../domain/repositories/OrderRepository";
import { Order } from "../../domain/entities/Order";

export class UpdateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(order: Order): Promise<void> {
    const existingOrder = await this.orderRepository.findById(order.id);
    if (!existingOrder) {
      throw new Error("Order not found");
    }

    // Atualize os campos necessários do pedido existente
    existingOrder.customerId = order.customerId;
    existingOrder.items = order.items;
    existingOrder.total = order.total;

    await this.orderRepository.save(existingOrder);
  }
}
