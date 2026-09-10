import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } =
      process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Email service not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const file = formData.get("file");

    const validatedData = contactFormSchema.parse({
      name,
      email,
      subject,
      message,
      file: file ? [file] : undefined,
    });

    const port = Number(SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const attachments: { filename: string; content: Buffer }[] = [];
    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || "tanjilm445@gmail.com",
      replyTo: validatedData.email as string,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong>
              <a href="mailto:${validatedData.email}" style="color: #2563eb;">${validatedData.email}</a>
            </p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #334155;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${(validatedData.message as string).replace(/\n/g, "<br />")}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />

          <p style="color: #94a3b8; font-size: 12px; text-align: center;">
            Sent from your Portfolio Contact Form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error" },
        { status: 400 }
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : "Failed to send email. Please try again.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
