import { Order } from "../domain/order";
import { OrderRepository } from "../domain/ordersRepository";

export class GetOrderUseCase {
    constructor(readonly orderRepository: OrderRepository) {}

    async run(): Promise<Order[]> {
        return this.orderRepository.getOrder();
    }
}