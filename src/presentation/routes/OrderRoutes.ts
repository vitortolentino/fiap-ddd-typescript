import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { CreateOrderUseCase } from "../../application/useCases/CreateOrderUseCase";
import { GetOrderByIdUseCase } from "../../application/useCases/GetOrderByIdUseCase";
import { UpdateOrderUseCase } from "../../application/useCases/UpdateOrderUseCase";
import { CancelOrderUseCase } from "../../application/useCases/CancelOrderUseCase";
import { OrderService } from "../../domain/services/OrderService";
import { InMemoryOrderRepository } from "../../infra/repositories/InMemoryOrderRepository";

const router = Router();
const orderRepository = new InMemoryOrderRepository();
const orderService = new OrderService(orderRepository);
const createOrderUseCase = new CreateOrderUseCase(orderService);
const getOrderByIdUseCase = new GetOrderByIdUseCase(orderRepository);
const updateOrderUseCase = new UpdateOrderUseCase(orderRepository);
const cancelOrderUseCase = new CancelOrderUseCase(orderRepository);
const orderController = new OrderController(
  createOrderUseCase,
  getOrderByIdUseCase,
  updateOrderUseCase,
  cancelOrderUseCase
);

router.post("/orders", (req, res) => orderController.createOrder(req, res));
router.get("/orders/:id", (req, res) => orderController.getOrderById(req, res));
router.put("/orders/:id", (req, res) => orderController.updateOrder(req, res));
router.delete("/orders/:id", (req, res) =>
  orderController.cancelOrder(req, res)
);

export { router as OrderRoutes };
