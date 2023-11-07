import express from 'express';
import { Signale } from 'signale';
import { initializeDatabase } from './database/sequelize'; 
import { clientsRouter } from './clients/infraestructure/clientsRouter';
import { productsRouter } from './products/infraestructure/productsRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/gateway/v1/clients',clientsRouter);
app.use('/api/gateway/v1/products',productsRouter);

async function startServer() {
    try {

        // Luego inicializa y conecta la base de datos
        await initializeDatabase();
        
        // Después inicia el servidor Express
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

// Inicia todo
startServer();