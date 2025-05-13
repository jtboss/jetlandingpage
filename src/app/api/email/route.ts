import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send confirmation email to the user
    const userEmailData = await resend.emails.send({
      from: 'Jet Automation <no-reply@yourcompany.com>',
      to: email,
      subject: 'Thank you for contacting Jet Automation',
      html: `
        <div>
          <h1>Thank you for contacting us, ${name}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <p>${message}</p>
        </div>
      `,
    });

    // Send notification email to the site owner
    const ownerEmailData = await resend.emails.send({
      from: 'Jet Automation <no-reply@yourcompany.com>',
      to: 'hey.jjedwards@gmail.com', // Admin email address
      subject: 'New Contact Form Submission',
      html: `
        <div>
          <h1>New contact form submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 