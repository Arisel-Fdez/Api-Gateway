import { Order } from "./order";

export interface OrderRepository {
    createOrder(clientId: number, productId: number, status: string, totalPrice: number): Promise<Order | null>;
    getOrder(): Promise<Order[]>;
}