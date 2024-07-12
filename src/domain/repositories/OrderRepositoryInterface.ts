import { Order } from "../entites/Order";

export interface OrderRepositoryInterface {
  save(order: Order): Promise<Order | null>;
  findById(id: string): Promise<Order | undefined | null>;
}
