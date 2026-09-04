import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, reason } = body;

    // Validate required fields
    if (!name || !email || !reason) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and reason for joining are required.",
        },
        { status: 400 },
      );
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const receiver = process.env.JOIN_US_RECEIVER || process.env.GMAIL_USER;

    // Send email
    await transporter.sendMail({
      from: `"Kalpataru Website" <${process.env.GMAIL_USER}>`,
      to: receiver,
      replyTo: email,
      subject: `New Join Us Request — ${name}`,

      text: `
New Join Us Request

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Why do they want to join us?
${reason}
      `,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #2b1718;
            line-height: 1.6;
          "
        >
          <h2
            style="
              margin-bottom: 24px;
              color: #5a2528;
            "
          >
            New Join Us Request
          </h2>

          <div
            style="
              background: #f7f0df;
              padding: 24px;
              border-radius: 10px;
            "
          >
            <p>
              <strong>Name</strong><br />
              ${name}
            </p>

            <p>
              <strong>Email</strong><br />
              ${email}
            </p>

            <p>
              <strong>Phone</strong><br />
              ${phone || "Not provided"}
            </p>

            <p>
              <strong>Why do they want to join us?</strong><br />
              ${reason}
            </p>
          </div>

          <p
            style="
              margin-top: 24px;
              font-size: 13px;
              color: #75645a;
            "
          >
            This message was submitted through the Kalpataru
            Cultural Association website.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Join Us email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting the form.",
      },
      { status: 500 },
    );
  }
}
