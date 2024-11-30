import Jwt from "jsonwebtoken"
import config from "../config.js"

import User from "../models/user.model.js"
import Role from "../models/role.model.js"
import logger from "../logger.js"


export const tokenUser = async (req, res, next) => {
        try {
            const token = req.params.token;
            const decoded = Jwt.verify(token, config.SECRET)
            req.userId = decoded.id
        
            const user = await User.findById(req.userId, {password: 0}) 

            let list = [];
            const roles = await Role.find({_id: {$in: user.roles}})

            roles.forEach((roles) => {
                list.push(roles.name);
             });
            
            logger.info('get user created');
            res.json({
                username: user.username,
                documentType: user.documentType,
                document: user.document,
                address: user.address,
                contactNumber: user.contactNumber,
                email: user.email,
                roles: list
            })
            next()
        
       } catch (error) {
        logger.debug(error)
       }
}

export const putUser = async (req, res) => {
    try{
        const token = req.params.token;
            const decoded = Jwt.verify(token, config.SECRET)
            req.userId = decoded.id
        const updateproduct = await User.findOneAndUpdate({_id: req.userId}, req.body, {
            new: true
        })
        logger.info(updateproduct);
        res.status(200).json(updateproduct);
    }catch(error){
        logger.debug(error);
    }
}

export const getUser = (req, res) => {
    try{
        
        logger.info("get user")
        res.json("get user")
    }catch(error){
        logger.debug(error)
    } 
}

export const resetPassword = async (req, res) => {

    try{
           let userEmail = req.body.email

           if(!userEmail){
            res.status(401).json('The place "email" is empty')
           }else{

                const user = await User.findOne({email: userEmail})
                if(user == null){
                    res.status(402).json('The email, not exist in the DB')
                }else{
                    res.status(200).json('The email, exist in the DB')
                }
             }

    }catch(error){
            logger.debug(error);
            res.status(409).json({'the petition error besause dont process the info': error});
    }
   
}

export const putPassword = async (req, res) => {

    try{
        let password = await User.encryptPassword(req.body.newPassword);

        
            const putPassword = await User.findOneAndUpdate({email: req.body.email}, {'password': password}, {
                new: true
            })
            logger.info(putPassword);
            res.status(200).json({"user": putPassword});

    }catch(error){
        logger.debug(error);
        res.status(409).json({'the error petition besause dont process the info': error})
    }

}