"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > window.innerHeight);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 transition-all duration-500 ${
        scrolled
          ? "bg-stone-bg/80 shadow-[0_1px_0_0_#E7E5E4] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <img
        src="/Koqi-BW.svg"
        alt="Koqi"
        className={`h-16 w-auto transition-all duration-300 ${
          scrolled ? "" : "invert"
        }`}
      />

      <div className="flex items-center gap-6">
        <a
          href="#"
          className={`text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-ink hover:text-accent" : "text-white/80 hover:text-white"
          }`}
        >
          Log In
        </a>
        <a
          href="#"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
