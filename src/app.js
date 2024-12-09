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
