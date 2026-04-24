"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/agents", label: "Agents" },
  { href: "/brokerages", label: "Brokerages" },
  { href: "/consumers", label: "Consumers" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > window.innerHeight);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 transition-all duration-500 ${
          scrolled
            ? "bg-stone-bg/80 shadow-[0_1px_0_0_#E7E5E4] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Link href="/">
          <img
            src="/Koqi-BW.svg"
            alt="Koqi"
            className={`h-16 w-auto transition-all duration-300 ${
              scrolled ? "" : "invert"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-ink/60 hover:text-accent"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#"
            className={`text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-ink hover:text-accent"
                : "text-white/80 hover:text-white"
            }`}
          >
            Log In
          </a>
          <a
            href="https://form.typeform.com/to/d7BbovyW"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Early Access
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://form.typeform.com/to/d7BbovyW"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Early Access
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-white/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              className="text-lg text-white/50 transition-colors hover:text-white"
            >
              Log In
            </a>
          </div>
        </div>
      )}
    </>
  );
}
