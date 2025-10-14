"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Kontakt() {
const [status, setStatus] = useState<Status>("idle");
const [message, setMessage] = useState<string>("");

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
const form = e.currentTarget;
const data = Object.fromEntries(new FormData(form).entries());
setStatus("loading");
setMessage("");

try {
const res = await fetch("/api/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
});

if (!res.ok) throw new Error(await res.text());
setStatus("success");
setMessage("Hvala! Vaša poruka je poslana. Uskoro ćemo vam se javiti.");
form.reset();
} catch (err: any) {
setStatus("error");
setMessage(err?.message || "Došlo je do greške. Pokušajte ponovno.");
}
}

return (
<section className="section">
<div className="container max-w-xl">
<h1 className="h2 mb-6">Kontakt</h1>

<form onSubmit={onSubmit} className="space-y-4">
{/* Honeypot (leave empty) */}
<input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

<input name="ime" placeholder="Ime i prezime" className="card w-full" required />
<input type="email" name="email" placeholder="E-mail" className="card w-full" required />
<input name="telefon" placeholder="Telefon (nije obavezno)" className="card w-full" />
<textarea name="poruka" placeholder="Poruka" className="card w-full min-h-[140px]" required />

<button className="btn w-full disabled:opacity-60" type="submit" disabled={status==="loading"}>
{status === "loading" ? "Šaljem..." : "Pošalji poruku"}
</button>

{message && (
<p className={`p text-center ${status === "success" ? "text-accent-600" : "text-red-600"}`}>
{message}
</p>
)}
</form>

<div className="mt-10 text-sm text-brand-600 space-y-1">
<p><strong>E-mail:</strong> info@kontopoint.hr</p>
<p><strong>Telefon:</strong> +385 (0)91 123 4567</p>
<p><strong>Lokacija:</strong> Ul. knezova Šubića Bribirskih 15a, Benkovac</p>
<p><strong>Radno vrijeme:</strong> Pon – Pet: 8:00 – 16:00</p>
</div>
</div>
</section>
);
}
