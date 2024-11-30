import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import logger from './logger';
import {createRoles} from  './libs/initialSstup'


import RouterAuth from './routes/auth.routes';
import RouterUser from './routes/user.routes';
import RouterProducts from './routes/product.routes';
import RouterSuggested from './routes/suggested.routes';
import RouterCookies from './routes/cookies.routes';

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