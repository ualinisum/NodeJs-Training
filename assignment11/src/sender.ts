import * as nodemailer from "nodemailer";
import { BlogComment } from "./producer";

export async function sendEmailNotification(
  comment: BlogComment
): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "abcd@gmail.com",
      pass: "12345",
    },
  });

  const info = await transporter.sendMail({
    from: "abcd@gmail.com",
    to: "ukkasha.ali2k@gmail.com", 
    subject: "New Comment Notification",
    text: `New comment has been added to your post.\n${comment.text}`,
    html: `<b>A new comment has been added to your post:</b><br>${comment.text}`,
  });

  console.log("Email notification sent: ", info.messageId);
}
