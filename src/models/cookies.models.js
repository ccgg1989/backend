import { Schema, model } from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from "bcryptjs"

const cookieSchema = new Schema({
   idcookies:{
    type: Number,
    unique: false

   },
   user:{
    type: String,
    unique: false

   },
   mac:{
    type: String,
    unique: false

   },
   action:{
    type: String,
    unique: false

   },
   isLogged:{
    type: String,
    unique:false

   },
   datetime:{
    type: String,
    unique:false

   },
   location:{
    type: String,
    unique:false

   },
   idP:{
    type: String,
    unique:false

   }
},{timestamps: {}});

/*subscriberSchema.plugin(autoIncrement.plugin, {
    model: 'Products',
    field: 'idproducts'
});*/
export default model('Cookies', cookieSchema);