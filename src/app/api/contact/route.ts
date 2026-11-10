import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FULL_NAME = 120;
const MAX_CONTACT = 320;
const MAX_MESSAGE = 5000;

function asTrimmedString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function stripNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = (body ?? {}) as Record<string, unknown>;
  const fullName = asTrimmedString(payload.fullName, MAX_FULL_NAME);
  const contact = asTrimmedString(payload.contact, MAX_CONTACT);
  const message = asTrimmedString(payload.message, MAX_MESSAGE);

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
      subject: `New Contact Form Submission from ${stripNewlines(fullName) || "Anonymous"}`,
      html: `
        <p><strong>Full Name:</strong> ${escapeHtml(fullName) || "N/A"}</p>
        <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />") || "N/A"}</p>
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
