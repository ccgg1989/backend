import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import logger from './logger.js';
import {createRoles} from  './libs/initialSstup.js'


import RouterAuth from './routes/auth.routes.js';
import RouterUser from './routes/user.routes.js';
import RouterProducts from './routes/product.routes.js';
import RouterSuggested from './routes/suggested.routes.js';
import RouterCookies from './routes/cookies.routes.js';

const app = express()

app.use(morgan('dev'));
app.use(express.text());
app.use(express.json());
createRoles()


/*const whitelist = ['http://127.0.0.1:5173'];

const corsOptions = {
    origin: function(origin, callback){
        console.log(origin)
        if(whitelist.includes(origin)) {
           //the query la API it`s successfully
           callback(null, true)
        }else {
            //the query it`s not allow
            callback(new Error("Cors`s Errors"))
        }
    },

}

app.use(cors(corsOptions))*/

app.get('/', function(req, res) {
    logger.info("ok")
    res.json({
                message: "The Farmark"
      });
    });

app.use('/api/auth', RouterAuth)
app.use('/api/user', RouterUser)
app.use('/api/products', RouterProducts)
app.use('/api/suggested', RouterSuggested)
app.use('/api/cookies', RouterCookies)

export default app;