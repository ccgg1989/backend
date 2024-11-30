import User from "../models/user.model.js"
import Role from "../models/role.model.js"
import  Jwt  from "jsonwebtoken";
import config from "../config.js";
import logger from "../logger.js";

export const Signup = async (req, res) => {

    try{
        logger.info(req.body)

        const {username, documentType, document, address, contactNumber, email, password, roles} = req.body;

        const newUser = new User({

            username,
            documentType,
            document,
            address,
            contactNumber,
            email,
            password: await User.encryptPassword(password)

        })
        if(roles){
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        }else{
            const role = await Role.findOne({name: "user"})
            newUser.roles = [role._id]
        }
        const savedUser = await newUser.save()
        logger.info(savedUser)

        const token = Jwt.sign({id: savedUser._id}, config.SECRET, {  
            expiresIn: 86400 // 24 hours

        })
        
        res.status(200).json({token})

    }catch(error){
        console.log(error)
        logger.debug(error);
    }
}

export const Signin = async (req, res) => {

    try{
            logger.info(req.body)
            const userFound = await User.findOne({email: req.body.email}).populate("roles");

            if(!userFound) return res.status(400).json({message: "User not found"})

            const matchPassword = await User.comparePassword(req.body.password, userFound.password)

            if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"})

            const token = Jwt.sign({id: userFound._id}, config.SECRET, {  
                expiresIn: 86400 // 24 hours
            
            })
            
            res.status(200).json({token})
            
    }catch(error){
            logger.debug(error);
    }
   
}





