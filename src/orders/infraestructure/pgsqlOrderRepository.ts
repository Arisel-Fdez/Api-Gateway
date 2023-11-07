import { Order } from "../domain/order";
import { OrderRepository } from "../domain/ordersRepository";
import { OrderModel } from "./models/orderModel";

export class PgsqlOrderRepository implements OrderRepository {

    async createOrder(clientId: number, productId: number, status: string, totalPrice: number): Promise<Order | null> {
        try {
            const createdOrder = await OrderModel.create({ clientId, productId, status, totalPrice});
            return new Order(createdOrder.id, createdOrder.clientId, createdOrder.productId, createdOrder.status, createdOrder.totalPrice);
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return null;
        }
    }
    async getOrder(): Promise<Order[]> {
        try {
            const order = await OrderModel.findAll();
            return order.map(order => new Order(order.id, order.clientId, order.productId, order.status, order.totalPrice));
        } catch (error) {
            console.error("Error in PgsqlOrderRepository:", error);
            return [];
        }
    }

    
}
