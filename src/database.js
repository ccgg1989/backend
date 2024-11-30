
import mongoose from "mongoose";
import logger from "./logger";

/*mongoose.connect("mongodb://localhost/FarMark_test", {
   
})
.then(db => logger.info('Db FarMark_test is Connected'))
.catch(error => logger.debug(error))*/

//Database name
const dbName = 'FarMark_test';
//const url = `mongodb://localhost:27017/${dbName}`;
//const url = `mongodb+srv://christiangiraldog:5XjzpJI6QLaV1D0O@cluster0.vk8un.mongodb.net/FarMark_test?retryWrites=true&w=majority`;
const url = 'mongodb+srv://christiangiraldog:5XjzpJI6QLaV1D0O@cluster0.vk8un.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)
.then(db => logger.info('Db FarMark_test is Connected'))
.catch(error => logger.debug(error))



