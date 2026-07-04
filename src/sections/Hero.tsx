"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollCue } from "@/components/ScrollCue";
import { MagneticButton } from "@/components/MagneticButton";
import { AppStoreBadge } from "@/components/AppStoreBadge";

const headlineEase = [0.22, 1, 0.36, 1] as const;

const headlines = [
  { text: "The agents who price it right", className: "text-[32px] sm:text-5xl md:text-7xl" },
  { text: "don’t guess.", className: "text-[28px] sm:text-[42px] md:text-[64px]" },
  { text: "They know.", className: "text-[28px] sm:text-[42px] md:text-[64px]" },
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative flex h-screen w-full items-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <FilmGrain />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

      <motion.div
        className="relative z-10 flex flex-col gap-6 p-10 pb-24 md:p-20 md:pb-28"
        style={{ y: contentY, opacity: contentOpacity }}
      >
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
          Koqi is the performance platform for real estate.
          Run comps that learn from your market. Score your pricing accuracy.
          Get rewarded for getting sharper.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: headlineEase }}
          className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <AppStoreBadge />
          <MagneticButton href="https://form.typeform.com/to/d7BbovyW" strength={0.25}>
            <span className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white">
              Request a Demo
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3, ease: headlineEase }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40"
        >
          <span>Median error under 7%*</span>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <span>Benchmarked against actual closing prices across California</span>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <span>Accuracy verified monthly</span>
        </motion.div>
      </motion.div>

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
