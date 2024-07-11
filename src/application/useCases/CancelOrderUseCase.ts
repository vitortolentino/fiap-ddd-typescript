import { OrderRepository } from "../../domain/repositories/OrderRepository";

export class CancelOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string): Promise<void> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw new Error("Order not found");
    }

    // Implementar lógica para cancelar o pedido
    // Por exemplo, definir um campo de status como 'canceled'

    order.status = "canceled";

    await this.orderRepository.save(order);
  }
}
