import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer";

console.log("EMAIL:", process.env.EMAIL);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
});

export const sendEmail = async (
  to,
  subject,
  text = "",
  html = ""
) => {
  try {
    const result = await transporter.sendMail({
      from: {
        name: "EasyCart Support",
        address: process.env.EMAIL,
      },
      to,
      subject,
      text,
      html,
    });

    console.log("✅ Email sent:", result.messageId);

    return {
      success: true,
      messageId: result.messageId,
      accepted: result.accepted,
    };
  } catch (error) {
    console.error("❌ Email failed:", error.message);

    return {
      success: false,
      error: error.message,
    };
  }
};