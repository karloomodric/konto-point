import Link from "next/link";
import Reveal from "@/components/Reveal";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section hero-animate" style={{ background: "var(--color-accent-100)" }}>
        <div className="container reveal">
          <h1 className="h1 mb-4">Pouzdano knjigovodstvo i poslovna podrška</h1>
          <p className="p mx-w-2xl mb-8">
            Konto Point - vaš partner za knjigovodstvo, izradu i vođenje EU projekata te poslovno savjetovanje.
          </p>
          <div className="flex flex-wrap gap-3 reveal reveal-delay-1">
            <Link href="/kontakt" className="btn cta">Zatraži ponudu</Link>
            <Link href="/usluge" className="btn-outline">Pogledaj usluge</Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <h2 className="h2 mb-8 pop in-view">Usluge</h2>
          
          <div className="grid gap-6 md:grid-cols-3">

            <div className="card card-anim pop pop-delay-1">
              <h3 className="font-semibold mb-2">Knjigovodstvo</h3>
              <p className="text-sm text-brand-600 mb-4">
                Vođenje poslovnih knjiga, PDV obrasci, obračun plaća i mjesečni  izvještaji.
              </p>
              <Link href="/kontakt" className="btn">Zatraži ponudu</Link>
            </div>

            <div className="card card-anim pop pop-delay-2">
              <h3 className="font-semibold mb-2">EU Projekti</h3>
              <p className="text-sm text-brand-600 mb-4">
                Priprema, planiranje, optimizacija troškova i strateška podrška.
              </p>
              <Link href="/kontakt" className="btn">Saznaj više</Link>
            </div>

            <div className="card card-anim pop pop-delay-3">
              <h3 className="font-semibold mb-2">Poslovno savjetovanje</h3>
              <p className="text-sm text-brand-600 mb-4">
                Financijsko planiranje, optimizacija troškova i strateška podrška.
              </p>
              <Link href="/kontakt" className="btn">Rezerviraj konzultacije</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="h2 mb-4"> O Nama</h2>
          <p className="p max-w-3xl">
            Stručan i pristupačan tim s fokusom na točne rokove, jasnu komunikaciju i rezultate.
            Lorem ipsum
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section overflow-hidden">
        {/* VIDEO */}
        <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mov"
        autoPlay
        loop
        muted
        playsInline
        />

        <div className="absolute inset-0 bg-white/70" />

        <div className=" relative container text-center">
          <h2 className="h2 mb-4">Spremni započeti?</h2>
          <p className="p mb-6">Pošaljite nam upit i javit ćemo vam se isti dan.</p>
          <Link href="/kontakt" className="btn">Pošalji upit</Link>
        </div>
      </section>
    </>
  );
}