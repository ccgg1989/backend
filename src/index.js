import app from './app'
import './database';
import './logger';
import logger from './logger';


app.listen('80','0.0.0.0',()=>{
    logger.info("server is listening on 80 port");
})