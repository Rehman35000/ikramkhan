import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const subjectLabels: Record<string, string> = {
      general: 'General Inquiry',
      project: 'Project Discussion',
      partnership: 'Partnership',
      support: 'Support',
    };

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #dc2626; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 0; color: #6b7280;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Company</td>
              <td style="padding: 10px 0; color: #6b7280;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Subject</td>
              <td style="padding: 10px 0; color: #6b7280;">${subjectLabels[subject] || subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #6b7280; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
          Sent from IKANOVA Contact Form
        </div>
      </div>
    `;

    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #dc2626; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Thank You, ${name}!</h1>
        </div>
        <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            We have received your message and our team will review it shortly.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            <strong>Subject:</strong> ${subjectLabels[subject] || subject}
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            We typically respond within 24 hours. If your matter is urgent, feel free to reach us at
            <a href="mailto:ikanovaofficial@gmail.com" style="color: #dc2626;">ikanovaofficial@gmail.com</a>
            or call us at <a href="tel:+923098660810" style="color: #dc2626;">+92 309 866 0810</a>.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 24px;">
            Best regards,<br/>
            <strong>IKANOVA Team</strong>
          </p>
        </div>
        <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
          IKANOVA | Software Development & AI Solutions
        </div>
      </div>
    `;

    await Promise.all([
      transporter.sendMail({
        from: `"IKANOVA Website" <${process.env.EMAIL_USER}>`,
        to: 'ikanovaofficial@gmail.com',
        replyTo: email,
        subject: `[IKANOVA] ${subjectLabels[subject] || subject} — ${name}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: `"IKANOVA" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for contacting IKANOVA — ${subjectLabels[subject] || subject}`,
        html: userHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
