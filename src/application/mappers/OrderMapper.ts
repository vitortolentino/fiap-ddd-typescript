import { Order } from "../../domain/entities/Order";
import { OrderDTO } from "../DTO/OrderDTOs";

export class OrderMapper {
  static toDTO(order: Order): OrderDTO {
    return {
      id: order.id,
      customerId: order.customerId,
      items: order.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
      total: order.total,
    };
  }

  static toDomain(orderDTO: OrderDTO): Order {
    return new Order(
      orderDTO.id,
      orderDTO.customerId,
      orderDTO.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
      orderDTO.total
    );
  }
}
