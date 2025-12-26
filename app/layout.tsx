import type { Metadata } from "next";
import "./globals.css";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Poppins } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import MobileNav from "@/components/MobileNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Konto Point - Početna",
  description: "Knjigovodstvo | EU Projekti | Poslovno savjetovanje",
  openGraph: {
    title: "Konto Point",
    description: "Knjigovodstvo | EU Projekti | Poslovno savjetovanje",
    locale: "hr_HR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr_HR">
      <body className={poppins.className}>
        <div id="scroll-progress"></div>
        <Reveal />
        <ScrollProgress />

        {/* ===== HEADER ===== */}
        <header className="border-b border-gray-200">
          <div className="h-24 max-w-[1400px] mx-auto flex items-center justify-between px-4">
            <Link href="/" className="flex items-center">
              <img
                src="/LOGO.png"
                alt="Konto Point"
                className="h-20 md:h-24 w-auto scale-x-[1.2] origin-left"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-accent-600">
                Početna
              </Link>
              <Link href="/o-nama" className="hover:text-accent-600">
                O&nbsp;nama
              </Link>
              <Link href="/usluge" className="hover:text-accent-600">
                Usluge
              </Link>
            </nav>

            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </header>

        {/* ===== MAIN CONTENT ==== */}
        <main>{children}</main>

        {/* ==== FOOTER ===== */}
        <footer className="border-t border-gray-200">
          <div className="container py-8 text-sm flex flex-col md:flex-row gap-2 justify-between text-brand-600">
            <p>
              © {new Date().getFullYear()}{" "}
              <Link href="https://karlo.studio">karlo </Link>
            </p>
            <div className="flex gap-4 max-sm:self-end max-sm:pr-4">
              <a href="/privatnost" className="hover:text-accent-600">
                Privatnost
              </a>
              <a href="/kolacici" className="hover:text-accent-600">
                Kolačići
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}