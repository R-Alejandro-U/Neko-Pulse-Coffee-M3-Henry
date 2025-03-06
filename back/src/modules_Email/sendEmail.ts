import { SentMessageInfo } from "nodemailer";
import { IEmail} from "./interface/IEmail";
import { transporter } from "./transporter";

export const sendEmail = async (data: IEmail): Promise<void> => {
    try{
        const info: SentMessageInfo = await transporter.sendMail({
            from: 'alejandro.urdaneta2314@gmail.com',
            to: data.to,
            subject: data.subject || "Bienvenida o bienvenido a Neko Pulse Coffee",
            text: data.text,
        });

        console.log(`Correo enviado: ${info.messageId}`); 
    } catch (error) {
        console.error(`Error al enviar el correo ${error}`);
    };
};