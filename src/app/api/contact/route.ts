import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { fullName, contact, message } = await request.json();

  if (!contact) {
    return NextResponse.json(
      { message: "Contact information (email or phone number) is required." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
    port: parseInt(process.env.EMAIL_PORT || "587"), // e.g., 587 for TLS, 465 for SSL
    secure: process.env.EMAIL_SECURE === "true", // Use 'true' if port is 465, 'false' if 587 or 25
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECIPIENT_EMAIL, // Recipient address (where you want to receive inquiries)
      subject: `New Contact Form Submission from ${fullName || "Anonymous"}`,
      html: `
        <p><strong>Full Name:</strong> ${fullName || "N/A"}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 },
    );
  }
}
