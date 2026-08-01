import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  if (user.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const bookings = await prisma.meetingBooking.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ bookings });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, time, notes } = await req.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await prisma.meetingBooking.create({
      data: { name, email, date, time, notes: notes || null },
    });

    const [year, month, day] = date.split('-');

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #D4AF37; padding: 20px; text-align: center;">
          <h1 style="color: #111; margin: 0; font-size: 22px;">New Meeting Booking</h1>
        </div>
        <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: bold; color: #374151; width: 120px;">Name</td><td style="padding: 10px 0; color: #6b7280;">${name}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 10px 0; color: #6b7280;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; color: #374151;">Date</td><td style="padding: 10px 0; color: #6b7280;">${day}/${month}/${year}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; color: #374151;">Time</td><td style="padding: 10px 0; color: #6b7280;">${time} (30 min)</td></tr>
            ${notes ? `<tr><td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Notes</td><td style="padding: 10px 0; color: #6b7280; line-height: 1.6;">${notes.replace(/\n/g, '<br/>')}</td></tr>` : ''}
          </table>
        </div>
        <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">Sent from IKANOVA Booking System</div>
      </div>
    `;

    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #D4AF37; padding: 20px; text-align: center;">
          <h1 style="color: #111; margin: 0; font-size: 22px;">Meeting Confirmed, ${name}!</h1>
        </div>
        <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">Your meeting with IKANOVA has been booked.</p>
          <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0 0 4px; color: #6b7280; font-size: 14px;"><strong>Date:</strong> ${day}/${month}/${year}</p>
            <p style="margin: 0 0 4px; color: #6b7280; font-size: 14px;"><strong>Time:</strong> ${time} (30 minutes)</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>Duration:</strong> 30 minutes</p>
          </div>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">We will send you a calendar invitation shortly. If you need to reschedule, reply to this email or contact us at <a href="mailto:ikanovaofficial@gmail.com" style="color: #D4AF37;">ikanovaofficial@gmail.com</a>.</p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 24px;">Best regards,<br/><strong>IKANOVA Team</strong></p>
        </div>
        <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">IKANOVA | Software Development & AI Solutions</div>
      </div>
    `;

    await Promise.all([
      transporter.sendMail({
        from: `"IKANOVA Bookings" <${process.env.EMAIL_USER}>`,
        to: 'ikanovaofficial@gmail.com',
        replyTo: email,
        subject: `[IKANOVA] Meeting Booking — ${name} — ${day}/${month}/${year} at ${time}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: `"IKANOVA" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Meeting Confirmed — IKANOVA — ${day}/${month}/${year} at ${time}`,
        html: userHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
