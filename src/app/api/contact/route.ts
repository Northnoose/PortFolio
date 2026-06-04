import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

export const runtime = "nodejs"

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().min(1).max(200).pipe(z.email()),
  message: z.string().trim().min(1).max(5000),
  projectType: z.string().trim().max(120).optional().default(""),
  // Honeypot: real users leave this empty; bots tend to fill every field.
  company: z.string().trim().optional().default(""),
})

// Escape user input before interpolating it into the email HTML.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(req: Request) {
  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    )
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form submission" },
      { status: 400 }
    )
  }

  const { name, email, message, projectType, company } = parsed.data

  // Honeypot tripped: pretend success so bots don't learn the field is checked.
  if (company) {
    return NextResponse.json({ success: true })
  }

  try {
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
                  <p style="margin:0; color:#c7d2fe;">${escapeHtml(name)}</p>
                </div>

                <div style="margin-bottom:24px; padding:16px; background:#0f172a; border-radius:12px;">
                  <p style="margin:0 0 8px;"><strong>Email</strong></p>
                  <p style="margin:0;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#818cf8; text-decoration:none;">
                      ${escapeHtml(email)}
                    </a>
                  </p>
                </div>

                <div style="margin-bottom:24px; padding:16px; background:#0f172a; border-radius:12px;">
                  <p style="margin:0 0 8px;"><strong>Project Type</strong></p>
                  <p style="margin:0; color:#a5b4fc;">
                    ${escapeHtml(projectType) || "Not specified"}
                  </p>
                </div>

                <div style="padding:16px; background:#020617; border-radius:12px;">
                  <p style="margin:0 0 12px;"><strong>Message</strong></p>
                  <p style="margin:0; line-height:1.6; color:#e5e7eb;">
                    ${escapeHtml(message).replace(/\n/g, "<br />")}
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
