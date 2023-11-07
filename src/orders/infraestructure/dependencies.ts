import { PgsqlOrderRepository } from "./pgsqlOrderRepository";
import { CreateOrderUseCase } from "../aplication/createOrderUseCase";
import { CreateOrderController } from "./controller/createOrderController";

import { GetOrderUseCase } from "../aplication/getOrderUseCase";
import { GetOrderController } from "./controller/getOrderController";

export const pgsqlOrderRepository = new PgsqlOrderRepository();

export const createOrderUseCase = new CreateOrderUseCase(pgsqlOrderRepository);
export const createOrderController = new CreateOrderController(createOrderUseCase);

export const getOrderUseCase = new GetOrderUseCase(pgsqlOrderRepository);
export const getOrderController = new GetOrderController(getOrderUseCase);