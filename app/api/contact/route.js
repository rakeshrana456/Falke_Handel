export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "localhost",
      port: 1025,
      secure: false,
    });

    await transporter.sendMail({
      from: `"iamrakesh234@gmail.com" <no-reply@example.com>`,
      to: "iamrakesh234@gmail.com",
      subject: "Contact Form Message",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
