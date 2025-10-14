"use client";
import { useEffect } from "react";

export default function Reveal() {
useEffect(() => {

const els = Array.from(
document.querySelectorAll<HTMLElement>(".reveal, .pop")
);
if (!els.length) return;

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReduced) {
els.forEach((el) => el.classList.add("in-view"));
return;
}

const obs = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
const el = entry.target as HTMLElement;

const once = el.hasAttribute("data-once");

if (entry.isIntersecting) {
el.classList.remove("in-view");
el.offsetHeight;
el.classList.add("in-view");

if (once) obs.unobserve(el);
} else if (!once) {
el.classList.remove("in-view");
}
});
},
{ threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
);

els.forEach((el) => obs.observe(el));
return () => obs.disconnect();
}, []);

return null;
}
