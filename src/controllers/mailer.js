import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Usar puerto 465 para conexiones seguras (SSL)
  secure: true, // Habilitar SSL
  auth: {
    user: "appfarmaceutica1@gmail.com",
    pass: "djng ymas bvgc ffgv", // Contraseña de aplicación
  },
});


export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: "appfarmaceutica1@gmail.com", // Dirección del remitente
      to, // Dirección del destinatario
      subject, // Asunto del correo
      html, // Contenido HTML del correo
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error;
  }
};
