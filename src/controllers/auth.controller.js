import User from "../models/user.model.js"
import Role from "../models/role.model.js"
import  Jwt  from "jsonwebtoken";
import config from "../config.js";
import logger from "../logger.js";

import { sendEmail } from "./mailer.js"; // Importa la función de envío de correos

export const Signup = async (req, res) => {
    try {
      logger.info(req.body);
  
      const { username, documentType, document, address, contactNumber, email, password, roles } = req.body;
  
      const newUser = new User({
        username,
        documentType,
        document,
        address,
        contactNumber,
        email,
        password: await User.encryptPassword(password),
      });
  
      if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map((role) => role._id);
      } else {
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
      }
  
      const savedUser = await newUser.save();
      logger.info(savedUser);
  
      const token = Jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400, // 24 horas
      });
  
      // **Enviar correo electrónico de confirmación**
      const emailContent = `
        <h1>¡Bienvenido, ${username}!</h1>
        <p>Gracias por registrarte en nuestro sistema.</p>
        <p>Este es un correo de confirmación. Tu cuenta se ha creado correctamente.</p>
      `;
  
      try {
        await sendEmail(email, "Confirmación de registro", emailContent);
        logger.info(`Correo enviado a ${email}`);
      } catch (error) {
        logger.error(`Error al enviar el correo a ${email}: ${error.message}`);
      }
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      logger.debug(error);
      res.status(500).json({ message: "Error al registrar el usuario" });
    }
  };

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





