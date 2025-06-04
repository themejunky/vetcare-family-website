import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only when needed
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey === 're_placeholder_key_for_development') {
    throw new Error('Resend API key not configured')
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if API is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder_key_for_development') {
      console.log('Email would be sent to:', { name, phone, email, message })
      return NextResponse.json(
        { message: 'Appointment request received (development mode)' },
        { status: 200 }
      )
    }

    // Send email using Resend
    const resend = getResendClient()
    const fromEmail = process.env.FROM_EMAIL || 'delivered@resend.dev'
    const toEmail = process.env.TO_EMAIL || 'contact@chrisbarin.com'
    
    const { data, error } = await resend.emails.send({
      from: `VetCare Family <${fromEmail}>`,
      to: [toEmail],
      subject: 'Cerere nouă de programare - VetCare Family',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">VetCare Family</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Cerere nouă de programare</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 22px;">Detalii client:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Nume:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Telefon:</strong> <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
            </div>
            
            ${message ? `
              <h3 style="color: #1e293b; margin: 25px 0 15px 0; font-size: 18px;">Mesaj:</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; line-height: 1.6; color: #374151;">${message}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 16px;">Acțiuni recomandate:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #374151;">
                <li>Contactați clientul în cel mai scurt timp</li>
                <li>Verificați disponibilitatea pentru programare</li>
                <li>Confirmați detaliile consultației</li>
              </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #64748b;">
                Această cerere a fost trimisă de pe site-ul VetCare Family<br>
                Data: ${new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' })}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to client
    await resend.emails.send({
      from: `VetCare Family <${fromEmail}>`,
      to: [email],
      subject: 'Confirmare cerere de programare - VetCare Family',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">VetCare Family</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Îngrijire profesională pentru prietenii tăi blănoși</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 22px;">Mulțumim pentru cererea de programare!</h2>
            
            <p style="color: #374151; line-height: 1.6; font-size: 16px;">
              Dragă <strong>${name}</strong>,<br><br>
              Am primit cererea ta de programare și te vom contacta în cel mai scurt timp pentru a confirma detaliile consultației.
            </p>
            
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 25px 0;">
              <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Detaliile tale de contact:</h3>
              <p style="margin: 0 0 8px 0; color: #374151;"><strong>Telefon:</strong> ${phone}</p>
              <p style="margin: 0; color: #374151;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 25px 0;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px;">În cazul unei urgențe:</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6;">
                📞 <strong>Sună-ne direct la: <a href="tel:0720123123" style="color: #3b82f6; text-decoration: none;">0720.123.123</a></strong><br>
                📍 <strong>Adresa:</strong> Strada Maria Rosetti 26A, București 020487
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:0720123123" style="background: #3b82f6; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                Sună acum pentru urgențe
              </a>
            </div>
            
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
              <p style="margin: 0; font-size: 14px; color: #64748b;">
                Cu dragoste pentru animalele tale,<br>
                <strong>Echipa VetCare Family</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Appointment request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending appointment email:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}