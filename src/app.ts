import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Signale } from 'signale';

const app = express();
const signale = new Signale();

app.use(express.json());

// Configura el proxy middleware para cada servicio
app.use('/api/gateway/v1/clients', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/gateway/v1/products', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/gateway/v1/orders', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

async function startServer() {
    // No necesitas inicializar la base de datos aquí si esto actúa como un API Gateway
    // La inicialización de la base de datos se realizaría en cada microservicio individual

    // Inicia el servidor Express
    app.listen(3000, () => {
        signale.success("API Gateway running on port 3000");
    });
}

// Inicia el API Gateway
startServer();
