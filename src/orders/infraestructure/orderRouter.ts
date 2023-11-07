import express from "express";
import { createOrderController, getOrderController } from "./dependencies";


export const orderRouter = express.Router();



// Ruta para agregar un nuevo usuario
orderRouter.post(
    "/create",
    createOrderController.run.bind(createOrderController)
);


// Ruta para obtener todos los usuarios
orderRouter.get(
    "/",
    getOrderController.run.bind(getOrderController)
);



