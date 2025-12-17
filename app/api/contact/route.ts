import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    console.log("Contact form submission received");
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const file = formData.get("file");

    console.log("Form data:", { name, email, subject });

    // Validate form data
    const validatedData = contactFormSchema.parse({
      name,
      email,
      subject,
      message,
      file: file ? [file] : undefined,
    });

    console.log("Validation passed");

    // Prepare email attachments
    let attachments = [];
    if (file && file instanceof File) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      attachments.push({
        filename: file.name,
        content: buffer,
      });
      console.log("Attachment prepared:", file.name);
    }

    console.log("Sending email via Resend");

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.GMAIL_USER || 'tanjilm445@gmail.com',
      replyTo: validatedData.email as string,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> 
              <a href="mailto:${validatedData.email}" style="color: #6366f1;">${validatedData.email}</a>
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

    console.log("Email sent successfully:", data.id);

    return NextResponse.json(
      { message: "Email sent successfully", messageId: data.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
