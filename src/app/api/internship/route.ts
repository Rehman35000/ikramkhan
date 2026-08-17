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
    const body = await req.json();
    const {
      fullName, email, phone, university, degree, fieldOfStudy,
      yearOfStudy, graduationYear, position, availableFrom, duration,
      skills, github, linkedin, portfolio, whyInterested, experience,
    } = body;

    if (!fullName || !email || !phone || !university || !degree || !fieldOfStudy || !yearOfStudy || !graduationYear || !position || !availableFrom || !duration || !skills || !whyInterested) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
        <div style="background: #C02C27; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Internship Application</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px;">${position} — ${fullName}</p>
        </div>
        <div style="padding: 28px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <h2 style="margin: 0 0 16px; font-size: 15px; color: #C02C27; text-transform: uppercase; letter-spacing: 1px;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 160px;">Full Name</td>
              <td style="padding: 8px 0; color: #6b7280;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #C02C27;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
            </tr>
            ${linkedin ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">LinkedIn</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="${linkedin}" style="color: #C02C27;">${linkedin}</a></td>
            </tr>` : ''}
          </table>

          <h2 style="margin: 0 0 16px; font-size: 15px; color: #C02C27; text-transform: uppercase; letter-spacing: 1px;">Education</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 160px;">University</td>
              <td style="padding: 8px 0; color: #6b7280;">${university}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Degree</td>
              <td style="padding: 8px 0; color: #6b7280;">${degree}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Field of Study</td>
              <td style="padding: 8px 0; color: #6b7280;">${fieldOfStudy}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Current Year</td>
              <td style="padding: 8px 0; color: #6b7280;">${yearOfStudy}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Graduation Year</td>
              <td style="padding: 8px 0; color: #6b7280;">${graduationYear}</td>
            </tr>
          </table>

          <h2 style="margin: 0 0 16px; font-size: 15px; color: #C02C27; text-transform: uppercase; letter-spacing: 1px;">Internship Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 160px;">Position</td>
              <td style="padding: 8px 0; color: #6b7280;">${position}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Duration</td>
              <td style="padding: 8px 0; color: #6b7280;">${duration}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Available From</td>
              <td style="padding: 8px 0; color: #6b7280;">${availableFrom}</td>
            </tr>
          </table>

          <h2 style="margin: 0 0 16px; font-size: 15px; color: #C02C27; text-transform: uppercase; letter-spacing: 1px;">Skills & Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 160px;">Technical Skills</td>
              <td style="padding: 8px 0; color: #6b7280;">${skills}</td>
            </tr>
            ${github ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">GitHub</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="${github}" style="color: #C02C27;">${github}</a></td>
            </tr>` : ''}
            ${portfolio ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Portfolio</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="${portfolio}" style="color: #C02C27;">${portfolio}</a></td>
            </tr>` : ''}
            ${experience ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Experience</td>
              <td style="padding: 8px 0; color: #6b7280; line-height: 1.6;">${experience.replace(/\n/g, '<br/>')}</td>
            </tr>` : ''}
          </table>

          <h2 style="margin: 0 0 16px; font-size: 15px; color: #C02C27; text-transform: uppercase; letter-spacing: 1px;">Motivation</h2>
          <div style="padding: 16px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; color: #6b7280; line-height: 1.6; font-size: 14px;">
            ${whyInterested.replace(/\n/g, '<br/>')}
          </div>
        </div>
        <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
          Sent from IKANOVA Internship Application Form
        </div>
      </div>
    `;

    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #C02C27; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Application Received!</h1>
        </div>
        <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hi <strong>${fullName}</strong>,
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for applying to the <strong>IKANOVA Internship Program</strong> for the <strong>${position}</strong> position.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            We have received your application and our team will review it carefully. You can expect to hear back from us within <strong>5 business days</strong>.
          </p>
          <div style="margin: 24px 0; padding: 16px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #374151; font-size: 13px;"><strong>Application Summary</strong></p>
            <p style="margin: 0; color: #6b7280; font-size: 13px;">Position: ${position}</p>
            <p style="margin: 4px 0 0; color: #6b7280; font-size: 13px;">Duration: ${duration}</p>
            <p style="margin: 4px 0 0; color: #6b7280; font-size: 13px;">Available From: ${availableFrom}</p>
          </div>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            If you have any questions, feel free to reach us at
            <a href="mailto:ikanovaofficial@gmail.com" style="color: #C02C27;">ikanovaofficial@gmail.com</a>.
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
        from: `"IKANOVA Internship" <${process.env.EMAIL_USER}>`,
        to: 'ikanovaofficial@gmail.com',
        replyTo: email,
        subject: `[Internship Application] ${position} — ${fullName}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: `"IKANOVA" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Your Internship Application at IKANOVA — ${position}`,
        html: userHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Internship email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
