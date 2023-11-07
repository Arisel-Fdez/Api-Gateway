import { Order } from "../domain/order";
import { OrderRepository } from "../domain/ordersRepository";

export class CreateOrderUseCase {
    constructor(readonly orderRepository: OrderRepository) {}

    async run(clientId: number, productId: number, status: string, totalPrice: number): Promise<Order | null> {
        try {

            const createdOrder = await this.orderRepository.createOrder(clientId, productId, status, totalPrice);
            return createdOrder;
        } catch (error) {
            console.error("Error in CreateClientsUseCase:", error);
            return null;
        }
    }
}