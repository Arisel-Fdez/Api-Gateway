import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../aplication/createOrderUseCase";

export class CreateOrderController {
    constructor(readonly createOrder: CreateOrderUseCase) { }

    async run(req: Request, res: Response) {
        const { clientId, productId, status, totalPrice } = req.body;

        try {
            const createdOrder = await this.createOrder.run(clientId, productId, status, totalPrice);

            if (createdOrder) {
                return res.status(201).send({
                    status: "success",
                    data: createdOrder,
                    message: "Order created successfully"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Error creating new Order, please try again later"
                });
            }
        } catch (error) {
            console.error("Error in CreateOrderController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
