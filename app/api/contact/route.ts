import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validation';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body);

    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured on the server.'
        },
        { status: 500 }
      );
    }

    const emailHtml = `
      <h2>Portfolio inquiry from ${validatedData.name}</h2>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Subject:</strong> ${validatedData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${validatedData.message.replace(/\n/g, '<br />')}</p>
    `;

    const { error } = await resend.emails.send({
      from: 'Tshiamo Diphoko <onboarding@resend.dev>',
      to: ['righteousdiphoko@gmail.com'],
      replyTo: validatedData.email,
      subject: `Portfolio inquiry: ${validatedData.subject}`,
      html: emailHtml
    });

    if (error) {
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received successfully.'
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ZodError') {
      const zodError = error as unknown as { errors?: unknown };
      return NextResponse.json(
        {
          success: false,
          errors: zodError.errors ?? []
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error while sending message.'
      },
      { status: 500 }
    );
  }
}
