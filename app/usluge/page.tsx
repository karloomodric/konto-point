import Link from "next/link";

export const metadata = { title: "Naše usluge — Konto Point" };

function Service({
flip = false,
kicker,
title,
bullets,
img,
alt,
}: {
flip?: boolean;
kicker: string;
title: string;
bullets: string[];
img: string;
alt: string;
}) {
return (
<div className={`grid items-center gap-8 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
{/* Image */}
<div className="relative overflow-hidden rounded-xl border border-gray-200 pop reveal">
<img
src={img}
alt={alt}
className="w-full h-[280px] md:h-[360px] object-cover"
/>
</div>

{/* Text */}
<div className="pop reveal">
<p className="text-sm tracking-wide text-accent-600 mb-2">{kicker}</p>
<h3 className="text-2xl font-semibold mb-4">{title}</h3>
<ul className="space-y-2 mb-6">
{bullets.map((b, i) => (
<li key={i} className="flex gap-2">
<span className="mt-[6px] h-2 w-2 rounded-full bg-accent-600 shrink-0" />
<span>{b}</span>
</li>
))}
</ul>
<Link href="/kontakt" className="btn">Zatraži ponudu</Link>
</div>
</div>
);
}

export default function Usluge() {
return (
<>
{/* HERO */}
<section className="section relative overflow-hidden">
<img
src="/images/usluge/knjigovodstvo.jpg"
alt=""
className="absolute inset-0 w-full h-full object-cover opacity-20"
/>
<div className="absolute inset-0 bg-white/70" />
<div className="relative container">
<h1 className="h2 mb-3 pop in-view">Naše usluge</h1>
<p className="p max-w-3xl pop reveal">
Računovodstvo, EU projekti i poslovno savjetovanje — praktična, jasna i
pravovremena podrška vašem poslovanju.
</p>
</div>
</section>

{/* SECTIONS */}
<section className="section">
<div className="container space-y-16">
<Service
kicker="Knjigovodstvo"
title="Sveobuhvatne knjigovodstvene usluge"
bullets={[
"Vođenje poslovnih knjiga i PDV obrasci",
"Obračun plaća, JOPPD i statistička izvješća",
"Mjesečni/kvartalni izvještaji i praćenje obveza",
]}
img="/images/usluge/knjigovodstvo.jpeg"
alt="Knjigovodstvo"
/>

<Service
flip
kicker="EU projekti"
title="Priprema, prijava i provedba projekata"
bullets={[
"Analiza poziva i izrada projektne dokumentacije",
"Administracija, izvještavanje i proračun",
"Podrška od ideje do realizacije",
]}
img="/images/usluge/eu-projekti.jpeg"
alt="EU projekti"
/>

<Service
kicker="Poslovno savjetovanje"
title="Financijsko planiranje i strateška podrška"
bullets={[
"Optimizacija troškova i novčanog toka",
"Izrada budžeta i praćenje KPI-jeva",
"Savjeti za rast i razvoj",
]}
img="/images/usluge/savjetovanje.jpeg"
alt="Poslovno savjetovanje"
/>
</div>
</section>

{/* CTA */}
<section className="section">
<div className="container text-center">
<h2 className="h2 mb-4 pop reveal">Zainteresirani za suradnju?</h2>
<p className="p mb-6 pop reveal">
Pošaljite nam upit — javit ćemo vam se isti dan.
</p>
<Link href="/kontakt" className="btn pop reveal">Pošalji upit</Link>
</div>
</section>
</>
);
}
