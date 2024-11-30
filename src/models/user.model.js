import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    
    username : {
        type: String,
        unique: false
    },
    documentType:{
        type: String,
        unique:false
    },
    document:{
        type: String,
        unique:false
    },
    address:{
        type: String,
        unique:false
    },
    contactNumber:{
        type: String,
        unique:false
    },
    email: {
        type: String,
        unique: false
    },

    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId

    }]
    
},
{
    timestamps: true,
    
}
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}
export default model('User', userSchema);