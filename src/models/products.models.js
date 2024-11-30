import { Schema, model } from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from "bcryptjs"

const productSchema = new Schema({
    idproducts:{
        type: Number,
        unique: false
    },
    nameproducts:{
        type: String,
        unique: false

    },
    description:{
        type: String,
        unique: false
    },
    price:{
        type: Number,
        unique: false
    },
    discount:{
        type: Number,
        unique: false
    },
    provider: {
        type: String,
        required: false
    },
    expiration_Date:{
        type: String,
        unique: false
    },
    stock:{
        type: Number,
        unique: false
    },
    image:
    {
        type:String,
        unique: false
    },
    tags:
    {
        type:String,
        unique: false
    },
},
    {timestamps: {}});

/*subscriberSchema.plugin(autoIncrement.plugin, {
    model: 'Products',
    field: 'idproducts'
});*/
export default model('Products', productSchema);