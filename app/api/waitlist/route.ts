import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Send email notification to you
    const emailBody = {
      from: 'Dadbercrom Waitlist <onboarding@resend.dev>',
      to: 'wstoeckle@gmail.com',
      subject: 'New Dadbercrom-Briefs Waitlist Signup!',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Use Resend API
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.log('Waitlist signup:', email);
      return NextResponse.json({
        success: true,
        message: 'Email logged (Resend not configured)'
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
