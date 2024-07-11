import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../application/useCases/CreateOrderUseCase";
import { GetOrderByIdUseCase } from "../../application/useCases/GetOrderByIdUseCase";
import { UpdateOrderUseCase } from "../../application/useCases/UpdateOrderUseCase";
import { CancelOrderUseCase } from "../../application/useCases/CancelOrderUseCase";
import { OrderMapper } from "../../application/mappers/OrderMapper";

export class OrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private getOrderByIdUseCase: GetOrderByIdUseCase,
    private updateOrderUseCase: UpdateOrderUseCase,
    private cancelOrderUseCase: CancelOrderUseCase
  ) {}

  async createOrder(req: Request, res: Response): Promise<Response> {
    const orderDTO = req.body;
    const order = OrderMapper.toDomain(orderDTO);

    await this.createOrderUseCase.execute(order);

    return res.status(201).json(OrderMapper.toDTO(order));
  }

  async getOrderById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const order = await this.getOrderByIdUseCase.execute(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json(OrderMapper.toDTO(order));
  }

  async updateOrder(req: Request, res: Response): Promise<Response> {
    const orderDTO = req.body;
    const order = OrderMapper.toDomain(orderDTO);

    await this.updateOrderUseCase.execute(order);

    return res.status(200).json(OrderMapper.toDTO(order));
  }

  async cancelOrder(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.cancelOrderUseCase.execute(id);

    return res.status(200).json({ message: "Order cancelled successfully" });
  }
}
