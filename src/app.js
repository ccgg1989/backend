import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'; // Importar path para manejar rutas
import logger from './logger.js';
import { createRoles } from './libs/initialSstup.js';

import RouterAuth from './routes/auth.routes.js';
import RouterUser from './routes/user.routes.js';
import RouterProducts from './routes/product.routes.js';
import RouterSuggested from './routes/suggested.routes.js';
import RouterCookies from './routes/cookies.routes.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.text());
app.use(express.json());
createRoles();

// Configuración de CORS
const whitelist = ['http://localhost', 'http://127.0.0.1:5173', 'https://nivel99.com']; // Agrega más dominios si es necesario
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            // Permitir solicitudes sin origen (como en Postman) o dentro de la lista blanca
            callback(null, true);
        } else {
            callback(new Error('CORS Error: Origen no permitido'));
        }
    },
    credentials: true, // Si necesitas permitir cookies o cabeceras de autenticación
};
app.use(cors(corsOptions));

// Servir archivos estáticos desde la carpeta uploads
app.use('/uploads', express.static(path.resolve('uploads')));

// Rutas
app.get('/', (req, res) => {
    logger.info('ok');
    res.json({
        message: 'The Farmark',
    });
});

app.use('/api/auth', RouterAuth);
app.use('/api/user', RouterUser);
app.use('/api/products', RouterProducts);
app.use('/api/suggested', RouterSuggested);
app.use('/api/cookies', RouterCookies);

export default app;
