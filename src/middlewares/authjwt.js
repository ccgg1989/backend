import Jwt from "jsonwebtoken"
import config from "../config.js"
import logger from "../logger.js"

import User from "../models/user.model.js"
import Role from "../models/role.model.js"

export const verifyToken = async (req, res, next) => {

   try {

        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: "No token provided"})
        logger.debug("No token provided");

        const decoded = Jwt.verify(token, config.SECRET)
        req.userId = decoded.id

        const user = await User.findById(req.userId, {password: 0}) 
        if(!user) return res.status(404).json({message: "No user found"})
        logger.debug("No user found");

        next()
    
   } catch (error) {
    logger.debug("Unauthorized")
    return res.status(500).json({message: "Unauthorized"})
   }
}

export const isModerator = async (req, res, next) => {

    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === 'moderator'){
            next()
            return;
        }
    }

    logger.debug("Require Moderator rol");
    return res.status(403).json({message: "Require Moderator rol "})

}

export const isAdminn = async (req, res, next) => {

    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === 'admin'){
            next()
            return;
        }
    }
    logger.debug("Require Admin rol");
    return res.status(403).json({message: "Require Admin rol "})

}