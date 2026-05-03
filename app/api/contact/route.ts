import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "sgautomotive.es@gmail.com";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { name, email, phone, service, message } = body as {
    name: string;
    email: string;
    phone?: string;
    service: string;
    message: string;
  };

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dev fallback — log and return success so the form works locally
    console.info("[contact] no RESEND_API_KEY set. Form submission:", body);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "SG Automotive Web <noreply@sgautomotive.es>",
    to: RECIPIENT,
    replyTo: email,
    subject: `Consulta web: ${service} — ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      `Servicio: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
