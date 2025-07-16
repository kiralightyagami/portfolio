import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const image = formData.get("image") as File | null;

   
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      }
    });

    
    let emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const attachments = [];

    
    if (image && image.size > 0) {
      const imageBuffer = await image.arrayBuffer();
      attachments.push({
        filename: image.name,
        content: Buffer.from(imageBuffer),
        contentType: image.type,
      });
      emailContent += `<p><strong>Image:</strong> ${image.name} (attached)</p>`;
    }

    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "asvinshrivas332@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      attachments,
    };

    
    console.log("Verifying transporter connection...");
    await transporter.verify();
    console.log("Transporter verified successfully");

    
    console.log("Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    
    const aiResponses = [
      "Asvin will reach out to you soon!",
      "Thank you for your message! Asvin will get back to you within 24 hours.",
      "Your message has been received. Asvin will respond to you shortly!",
      "Thanks for reaching out! Asvin will be in touch with you soon.",
      "Message received successfully! Asvin will contact you very soon.",
    ];

    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

    return NextResponse.json({
      success: true,
      message: randomResponse,
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
} 