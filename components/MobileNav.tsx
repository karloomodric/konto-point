"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const pathname = usePathname();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  
  useEffect(() => setOpen(false), [pathname]);

  
  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = open ? "hidden" : "";
    return () => { html.style.overflow = ""; };
  }, [open]);

  
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  
  const handleClose = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setOpen(false);
    }, 300);
  };

  return (
    <>
      
      <button
  onClick={() => setOpen(true)}
  aria-label="Otvori izbornik"
  aria-expanded={open}
  className={[
    "md:hidden btn-ripple px-3 py-2 rounded",
    "text-sm font-semibold tracking-wide uppercase",
    "transition-colors duration-300",
    "active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
  ].join(" ")}
  style={{ color: "var(--color-brand-600)", marginRight: "0.5rem" }}
>
  <span className="inline-flex items-center gap-1.5">
    Izbornik
    
    <span
      aria-hidden
      className={[
        "inline-block transition-transform duration-300",
        open ? "rotate-90" : "rotate-0"
      ].join(" ")}
    >
      ▸
    </span>
  </span>

  
  <span
    aria-hidden
    className={[
      "absolute left-2 right-2 -bottom-0.5 h-[2px]",
      "origin-left transition-transform duration-300",
      open ? "scale-x-100" : "scale-x-0"
    ].join(" ")}
    style={{ background: "var(--color-brand-600)" }}
  />
</button>


      
      {(open || animating) &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[99999]">
            
            <button
              aria-label="Zatvori izbornik"
              onClick={handleClose}
              className={[
                "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
                open ? "opacity-100" : "opacity-0"
              ].join(" ")}
            />

            
            <aside
              role="dialog"
              aria-modal="true"
              className={[
                "absolute right-0 top-0 h-dvh w-[min(88vw,22rem)]",
                "bg-white/85 dark:bg-neutral-900/85 supports-[backdrop-filter]:bg-white/60",
                "backdrop-blur-xl border-l border-white/20 dark:border-white/10 shadow-2xl",
                "transform transition-transform duration-300 ease-in-out will-change-transform",
                open ? "translate-x-0" : "translate-x-full"
              ].join(" ")}
            >
              
              <div className="sticky top-0 flex items-center justify-between gap-2 p-4 sm:p-5">
                <div className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300">
                  Izbornik
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={handleClose}
                  aria-label="Zatvori izbornik"
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors focus:outline-none"
                  style={{ color: "var(--color-brand-600)" }}
                >
                  Zatvori ✕
                </button>
              </div>

              
              <nav className="h-full flex flex-col justify-center items-center px-6 pb-10 text-center">
                <ul className="space-y-4 w-full max-w-xs">
                  {LINKS.map(({ href, label }) => {
                    const active = pathname === href;
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={handleClose}
                          className={[
                            "block w-full rounded-lg py-3 text-lg font-medium transition",
                            "hover:bg-black/5 dark:hover:bg-white/5",
                            active
                              ? "bg-black/10 dark:bg-white/10 text-emerald-600 dark:text-emerald-400"
                              : "text-neutral-900 dark:text-neutral-100"
                          ].join(" ")}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                
                <div className="mt-8 w-full max-w-xs space-y-3">
                  <Link
                    href="tel:+38598597151"
                    className="block w-full rounded-lg py-3 text-lg font-semibold border border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-400 hover:text-white transition"
                  >
                    Nazovi
                  </Link>
                </div>

                
                <div className="mt-10 text-xs text-neutral-500">
                  © {new Date().getFullYear()} Karlo
                </div>
              </nav>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
