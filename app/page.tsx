import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="section hero-animate"
        style={{ background: "var(--color-accent-100)" }}
      >
        <div className="container reveal">
          {/* H1 + Kontakt aligned in the same row */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4">
            <h1 className="h1 mb-0">Točka rasta vašeg poslovanja</h1>

            {/* <Link
  href="/kontakt"
  className="
    btn cta
    rounded-xl
    px-7 py-4
    text-lg
    shadow-md
    hover:shadow-lg
    hover:scale-105
    transition
    inline-flex
    items-center
    gap-3
  "
> */}
  {/* Phone icon */}
 {/*  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-5 h-5 opacity-80"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a.75.75 0 00.75-.75v-3.75a.75.75 0 00-.75-.75h-3.75a.75.75 0 00-.75.75v1.5a11.206 11.206 0 01-7.5-7.5h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v1.5z"
    />
  </svg> */}

  {/* <span>Kontakt</span>
</Link> */}

<div className="justify-self-start md:justify-self-end">
  <a href="/kontakt" className="kp-contact" aria-label="Kontakt">
    <span className="kp-row">
      <span className="kp-swap" aria-hidden="true">
        {/* PHONE */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className="kp-icon kp-phone"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a.75.75 0 00.75-.75v-3.75a.75.75 0 00-.75-.75h-3.75a.75.75 0 00-.75.75v1.5a11.206 11.206 0 01-7.5-7.5h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v1.5z"
          />
        </svg>

        {/* EMAIL */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className="kp-icon kp-mail"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25v9A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25v-9A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 8.25l7.05 4.7a1.5 1.5 0 001.9 0l7.05-4.7"
          />
        </svg>
      </span>

      <span className="kp-text">Kontakt</span>
    </span>

    <span className="kp-sub">txt ili bez txt</span>
  </a>
</div>
          </div>

          <p className="p text-3xl mt-4 mb-8">
            KNJIGOVODSTVO · POSLOVNO SAVJETOVANJE · EU PROJEKTI
          </p>

          {/* Hero buttons (left side) */}
          <div className="flex flex-wrap items-center gap-3 reveal reveal-delay-1">
            <Link href="/kontakt" className="btn cta">
              Zatraži ponudu
            </Link>
            <Link href="/usluge" className="btn-outline">
              Pogledaj usluge
            </Link>
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
                Vođenje poslovnih knjiga poduzeća, obrta, OPG-a. <br />
                URA, IRA, PDV obrasci, obračun plaća i mjesečni izvještaji.
              </p>
              <Link href="/kontakt" className="btn">
                Zatraži ponudu
              </Link>
            </div>

            <div className="card card-anim pop pop-delay-2">
              <h3 className="font-semibold mb-2">EU Projekti</h3>
              <p className="text-sm text-brand-600 mb-4">
                Priprema i provedba projekata.
              </p>
              <Link href="/kontakt" className="btn">
                Saznaj više
              </Link>
            </div>

            <div className="card card-anim pop pop-delay-3">
              <h3 className="font-semibold mb-2">Poslovno savjetovanje</h3>
              <p className="text-sm text-brand-600 mb-4">
                Financijsko planiranje, optimizacija troškova i strateška podrška.
              </p>
              <Link href="/kontakt" className="btn">
                Rezerviraj konzultacije
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mov"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative container text-center">
          <h2 className="h2 mb-4">Spremni započeti?</h2>
          <p className="p mb-6">Pošaljite nam upit i javit ćemo vam se isti dan.</p>
          <Link href="/kontakt" className="btn">
            Pošalji upit
          </Link>
        </div>
      </section>
    </>
  );
}