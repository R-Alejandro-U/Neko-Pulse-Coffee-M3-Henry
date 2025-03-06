import nodemailer from "nodemailer"
import { EMAIL_USER, EMAIL_PASSWORD } from "../config/envs";

export const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedo usar otros servicios, como Outlook o SMTP personalizado.
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
});