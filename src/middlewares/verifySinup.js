import { ROLES } from "../models/role.model";
import User from "../models/user.model";
import logger from "../logger";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {

    const user = await User.findOne({username: req.body.username})

    if(user) return  res.status(400).json({message: "The user already exists"})
    logger.debug("The user already exists")

    const email = await User.findOne({email: req.body.email})

    if(email) return  res.status(400).json({message: "The email already exists"})
    logger.debug("The email already exists")

    next()


}
export const checkRolesExisted = (req, res, next) => {

    if(req.body.roles){
        for(let i=0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                logger.debug(`Role ${req.body.roles[i]} does not exists`)
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exists`
                })
            }

        }
    }

    next()
}