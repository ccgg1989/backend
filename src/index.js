import app from './app'
import './database';
import './logger';
import logger from './logger';


app.listen('4000','0.0.0.0',()=>{
    logger.info("server is listening on 4000 port");
})