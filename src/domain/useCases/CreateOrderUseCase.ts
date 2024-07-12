import { Order } from "../entites/Order";
import { CostumerRepository } from "../repositories/CostumerRepository";
import { OrderRepository } from "../repositories/OrderRepositoryInterface";

export class CreateOrderUseCase {
  constructor(
    private orderRepository: OrderRepository,
    private costumerRepository: CostumerRepository
  ) {}

  public async handle(order: Order) {
    const costumer = this.costumerRepository.findById(order.costumerId);
    if (!costumer) throw new Error("Usuário não existe");

    const createdOrder = await this.orderRepository.save(order);
    return createdOrder;
  }
}
