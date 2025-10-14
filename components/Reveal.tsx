"use client";
import { useEffect } from "react";

export default function Reveal() {
useEffect(() => {
// observe elements that should animate on enter
const els = Array.from(
document.querySelectorAll<HTMLElement>(".reveal, .pop")
);
if (!els.length) return;

// Respect reduced motion
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReduced) {
els.forEach((el) => el.classList.add("in-view"));
return;
}

const obs = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
const el = entry.target as HTMLElement;

// If you want some items to animate only once, add data-once to them.
const once = el.hasAttribute("data-once");

if (entry.isIntersecting) {
// re-trigger: remove + add ensures replay if it was mid-animation
el.classList.remove("in-view");
// force reflow so the animation restarts cleanly
// (no-op on first time; cheap and safe)
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
el.offsetHeight;
el.classList.add("in-view");

if (once) obs.unobserve(el);
} else if (!once) {
// left viewport: remove class so it can animate again next time
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
