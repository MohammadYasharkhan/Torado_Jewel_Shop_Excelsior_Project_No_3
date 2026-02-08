import nodemailer from "nodemailer";
import { verificationEmailTemplate } from "../templates/email/verifyEmailTemplate.js";

class MailService {
    static async sendVerificationEmail(email, token) {
        try {
            const verifyUrl = `${process.env.FRONTEND_URL}/newsletter/verify?token=${token}`;
            
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.SENDER_EMAIL,
                    pass: process.env.SENDER_PASS,
                },
            });

            let mailOptions = {
                from: `"Torado Jewel Shop" <${process.env.SENDER_EMAIL}>`,
                to: email,
                subject: "Verify your email address",
                html: verificationEmailTemplate(verifyUrl),
            };

            const info = await transporter.sendMail(mailOptions);

            console.log("Email sent info:", info);
            console.log("Message ID:", info.messageId);
            console.log("Accepted:", info.accepted);

            return { emailSentStatus: true };
        } catch (err) {
            console.error("Mail error:", err);
            return { emailSentStatus: false };
        }
    }
}

export default MailService;
