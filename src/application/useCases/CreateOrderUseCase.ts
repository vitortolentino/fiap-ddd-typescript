import { OrderService } from "../../domain/services/OrderService";
import { Order } from "../../domain/entities/Order";

export class CreateOrderUseCase {
  constructor(private orderService: OrderService) {}

  async execute(order: Order): Promise<void> {
    await this.orderService.createOrder(order);
  }
}
