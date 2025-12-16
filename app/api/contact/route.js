import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensures Node environment for SMTP

export async function POST(req) {
    console.log("📩 /api/contact called");  

  try {
    const { email, contact, message } = await req.json();

    console.log("Form data received:", { email, contact, message });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,       
      secure: true,    
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email
    const mailOptions = {
      from: `"Trustlane Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      text: `You received a new contact form submission:\n\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return new Response(JSON.stringify({ success: true, info }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
