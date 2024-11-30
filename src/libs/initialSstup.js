import Role from "../models/role.model.js";
import logger from "../logger.js";

export const createRoles = async() => {
    try {
        const count = await Role.estimatedDocumentCount();

        if(count > 0) return;

        const values = await Promise.all([
            new Role({name: "user"}).save(),
            new Role({name: "admin"}).save(),
            new Role({name: "moderator"}).save(),
        ]);

        logger.info(values);
        
    } catch (error) {
        logger.debug(error);
    }
}

