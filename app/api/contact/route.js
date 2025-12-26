export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message, captchaToken } = await req.json();

   
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "Captcha missing" },
        { status: 400 }
      );
    }

   
    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { success: false, message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "localhost",
      port: 1025,
      secure: false,
    });

    await transporter.sendMail({
      from: `"iamrakesh234@gmail.com" <no-reply@example.com>`,
      to: "falkehandel@gmail.com",
      subject: "Contact Form Message",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
