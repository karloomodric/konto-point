"use client";
import { useEffect } from "react";

export default function ScrollProgress() {
    useEffect(() => {
        const bar = document.getElementById("scroll-progress");
        const onScroll = () => {
            const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (bar) bar.style.width = `${scrolled}%`;
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return null;
}