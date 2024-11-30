import app from './app.js'
import './database.js';
import './logger.js';
import logger from './logger.js';


app.listen('80','0.0.0.0',()=>{
    logger.info("server is listening on 80 port");
})