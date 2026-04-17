"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Brokerage() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background — parallax at 0.3x scroll speed */}
      <motion.div
        className="absolute inset-[-15%] bg-stone-800"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-stone-bg/70" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[600px] px-6 text-center"
      >
        <h2 className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
          Your best agents already know they&apos;re good.
          <br />
          They&apos;re looking for a brokerage that can prove it.
        </h2>

        <div className="mt-10 space-y-4 text-lg leading-relaxed text-ink">
          <p>
            Koqi gives brokerages real visibility into agent performance — not
            just who&apos;s busy, but who&apos;s actually good.
          </p>
          <p>Track ACCS trends across your team.</p>
          <p>Spot coaching opportunities before they become attrition.</p>
          <p>
            Build a recruiting pitch backed by data your competitors can&apos;t
            match.
          </p>
          <p className="pt-4">
            The brokerages that measure what matters will be the ones that keep
            the agents who do.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-full border-2 border-accent px-8 py-3.5 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Request a Brokerage Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
