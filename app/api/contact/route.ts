import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Email Templates ---

const generateUserEmail = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body { font-family: 'Arial', sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: #6b27d9; padding: 40px 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 0.5px; }
    .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
    .greeting { font-size: 20px; font-weight: 600; margin-bottom: 20px; color: #6b27d9; }
    .divider { height: 1px; background-color: #eeeeee; margin: 30px 0; }
    .footer { background: #fafafa; padding: 20px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ASHIR ARIF</h1>
    </div>
    <div class="content">
      <div class="greeting">Hello ${name},</div>
      <p>Thank you for reaching out! I've received your message and appreciate you taking the time to contact me.</p>
      <p>I usually respond within 24 hours. In the meantime, feel free to check out my latest work on my portfolio.</p>
      <div class="divider"></div>
      <p style="margin: 0; font-weight: 500;">Best regards,</p>
      <p style="margin: 5px 0 0 0; color: #6b27d9; font-weight: bold;">Ashir Arif</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Ashir Arif. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

const generateAdminEmail = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body { font-family: 'Arial', sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-left: 6px solid #6b27d9; }
    .header { background: #ffffff; padding: 30px 40px; border-bottom: 1px solid #eeeeee; }
    .header h2 { margin: 0; color: #6b27d9; font-size: 20px; }
    .meta { font-size: 13px; color: #666666; margin-top: 5px; }
    .content { padding: 30px 40px; }
    .field { margin-bottom: 25px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999999; font-weight: 600; margin-bottom: 5px; }
    .value { font-size: 16px; color: #111111; font-weight: 500; }
    .message-box { background: #fafafa; padding: 20px; border-radius: 8px; font-size: 15px; color: #333333; line-height: 1.6; white-space: pre-wrap; }
    .action { margin-top: 30px; text-align: center; }
    .button { background: #6b27d9; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; display: inline-block; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Submission</h2>
      <div class="meta">Received on ${new Date().toLocaleString()}</div>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #111111 !important; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message}</div>
      </div>
      <div class="action">
        <a href="mailto:${email}?subject=Re: Contact Inquiry" class="button">Reply to ${
  name.split(" ")[0]
}</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmailPromise = transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER || "no-reply@ashirarif.com"}>`,
      to: process.env.CONTACT_EMAIL || "ask@ashirarif.com",
      subject: `New Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: generateAdminEmail(name, email, message),
    });

    const userEmailPromise = transporter.sendMail({
      from: `"Ashir Arif" <${
        process.env.SMTP_USER || "no-reply@ashirarif.com"
      }>`,
      to: email,
      subject: "Thank you for getting in touch",
      text: `Hi ${name},\n\nThanks for reaching out! I've received your message and will get back to you soon.\n\nBest,\nAshir`,
      html: generateUserEmail(name),
    });

    // Send both emails in parallel
    await Promise.allSettled([adminEmailPromise, userEmailPromise]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Request error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
