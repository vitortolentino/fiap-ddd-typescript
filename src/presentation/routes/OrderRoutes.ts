import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { CreateOrderUseCase } from "../../domain/useCases/CreateOrderUseCase";
import { Order } from "../../domain/entites/Order";
import { uuid } from "uuidv4";
import { InMemoryOrderRepository } from "../../infra/repositories/OrderRepository";
import { InMemoryCostumerRepository } from "../../infra/repositories/CostumerRepository";

const orderRepository = new InMemoryOrderRepository();
const costumerRepository = new InMemoryCostumerRepository();
const createOrderUseCase = new CreateOrderUseCase(
  orderRepository,
  costumerRepository
);

const orderController = new OrderController(createOrderUseCase);

const router = Router();

router.post("/user", async (req, res) => {
  const { costumerId, items, total } = req.body;

  const id = uuid();

  const order = new Order(id, costumerId, items, total);

  const createdOrder = await orderController.create(order);
  if (!createdOrder) {
    return res.status(500).send("Deu ruim");
  }

  res.send({ order: createdOrder });
});
