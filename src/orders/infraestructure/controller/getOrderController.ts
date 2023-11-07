import { Request, Response } from "express";
import { GetOrderUseCase } from "../../aplication/getOrderUseCase";

export class GetOrderController {
    constructor(readonly getOrderUseCase: GetOrderUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const order = await this.getOrderUseCase.run();
            res.status(200).send(order);
        } catch (error) {
            console.error("Error in GetOrderController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
