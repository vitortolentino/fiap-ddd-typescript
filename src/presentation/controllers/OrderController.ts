import { Order } from "../../domain/entites/Order";
import { CreateOrderUseCase } from "../../domain/useCases/CreateOrderUseCase";

export class OrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async create(order) {
    return this.createOrderUseCase.handle(order);
  }
}
