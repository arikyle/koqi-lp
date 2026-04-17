"use client";

import { motion } from "framer-motion";
import { ScrollCue } from "@/components/ScrollCue";

const headlineEase = [0.22, 1, 0.36, 1] as const;

const headlines = [
  { text: "The agents who close more", className: "text-[32px] sm:text-5xl md:text-7xl" },
  { text: "don\u2019t work harder.", className: "text-[28px] sm:text-[42px] md:text-[64px]" },
  { text: "They see more.", className: "text-[28px] sm:text-[42px] md:text-[64px]" },
];

function FilmGrain() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay" aria-hidden="true">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      <FilmGrain />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col gap-6 p-10 pb-24 md:p-20 md:pb-28">
        <div className="flex flex-col gap-0">
          {headlines.map((line, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.12,
                ease: headlineEase,
              }}
              className={`font-display leading-tight text-white ${line.className}`}
            >
              {line.text}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: headlineEase }}
          className="max-w-[480px] text-lg leading-relaxed text-white/70"
        >
          Koqi is a performance intelligence platform for real estate. It scores
          your skills, sharpens your pricing instincts, and rewards you for
          getting better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: headlineEase }}
          className="mt-2"
        >
          <a
            href="#"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Early Access
          </a>
          <span className="mt-3 block text-sm text-white/40 sm:ml-4 sm:mt-0 sm:inline">
            No credit card. No commitment.
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <ScrollCue />
      </motion.div>
    </section>
  );
}
