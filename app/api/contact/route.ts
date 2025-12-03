import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log("Contact form submission received");
    
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

    console.log("Sending email to:", process.env.CONTACT_EMAIL);
    console.log("Using API key:", process.env.RESEND_API_KEY?.substring(0, 10) + "...");

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tanjilm445@gmail.com", // Resend test mode: can only send to registered email
      replyTo: validatedData.email as string,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${(validatedData.message as string).replace(/\n/g, "<br />")}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log("Email sent successfully:", emailData);

    return NextResponse.json(
      { message: "Email sent successfully", data: emailData },
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
