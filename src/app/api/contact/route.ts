import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, projectType } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true only for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: "New contact form submission",
      html: `
            <div style="font-family: Inter, Arial, sans-serif; background:#0b0b0f; padding:32px;">
              <div style="max-width:640px; margin:0 auto; background:#111827; border-radius:16px; padding:32px; color:#ffffff;">

                <h2 style="margin:0 0 24px; font-size:24px;">
                  📩 New Portfolio Inquiry
                </h2>

                <div style="margin-bottom:24px; padding:16px; background:#0f172a; border-radius:12px;">
                  <p style="margin:0 0 8px;"><strong>Name</strong></p>
                  <p style="margin:0; color:#c7d2fe;">${name}</p>
                </div>

                <div style="margin-bottom:24px; padding:16px; background:#0f172a; border-radius:12px;">
                  <p style="margin:0 0 8px;"><strong>Email</strong></p>
                  <p style="margin:0;">
                    <a href="mailto:${email}" style="color:#818cf8; text-decoration:none;">
                      ${email}
                    </a>
                  </p>
                </div>

                <div style="margin-bottom:24px; padding:16px; background:#0f172a; border-radius:12px;">
                  <p style="margin:0 0 8px;"><strong>Project Type</strong></p>
                  <p style="margin:0; color:#a5b4fc;">
                    ${projectType || "Not specified"}
                  </p>
                </div>

                <div style="padding:16px; background:#020617; border-radius:12px;">
                  <p style="margin:0 0 12px;"><strong>Message</strong></p>
                  <p style="margin:0; line-height:1.6; color:#e5e7eb;">
                    ${message.replace(/\n/g, "<br />")}
                  </p>
                </div>

                <hr style="margin:32px 0; border:none; border-top:1px solid #1f2937;" />

                <p style="font-size:12px; color:#9ca3af; margin:0;">
                  Sent from your portfolio contact form
                </p>
              </div>
            </div>
          `
          ,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
