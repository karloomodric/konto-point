import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(s: unknown) {
    return String(s || "").trim();
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const ime = clean(data.ime);
        const email = clean(data.email);
        const telefon = clean(data.telefon);
        const poruka = clean(data.poruka);
        const hp = clean(data.website);

        if (hp) return new Response("Bot detected", { status: 400 });
        if (!ime || !email || !poruka) {
            return new Response("Nedostaju obavezna polja.", { status: 400 });
        }

        const to = process.env.CONTACT_TO!;
        const from = process.env.CONTACT_FROM || "onboarding@resend.dev";


        const subject = `Novi upit - ${ime} `;
        const html = `
        <div style="font-family: system-ui,Segoe UI,Arial,sans-serif; line-height:1.5;">
        <h2 style="margin:0 0 8px 0;">Novi upit s weba</h2>
        <p style="margin:0 0 6px 0;"><strong>Ime i prezime: </strong>${ime}</p>
        <p style="margin:0 0 6px 0;"><strong>E-mail: </strong>${email}</p>
        ${telefon ? `<p style="margin:0 0 6px 0;"><strong>Telefon: </strong>${telefon}</p>` : ""}
        <p style="margin:12px 0 6px 0;"><strong>Poruka:</strong></p>
        <p style="white-space:pre-wrap;margin:0;">${poruka}</p>
        </div>
        `;

        await resend.emails.send({ from, to, replyTo: email, subject, html });

        return Response.json({ ok: true });
    } catch (err) {
        console.error("CONTACT_API_ERROR", err);
        return new Response("Greška pri slanju poruke.", { status: 500 });
    }
    }
