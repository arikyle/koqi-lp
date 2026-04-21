"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Brokerage() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-[-15%]"
        style={{ y: bgY }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/media/brokerage-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/media/brokerage.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[600px] px-6 text-center"
      >
        <h2 className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight">
          Your best agents already know they&apos;re good.
          <br />
          They&apos;re looking for a brokerage that can prove it.
        </h2>

        <div className="mt-10 space-y-4 text-lg leading-relaxed text-white/75">
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
          <p className="pt-4 text-white">
            The brokerages that measure what matters will be the ones that keep
            the agents who do.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white hover:text-ink"
          >
            Request a Brokerage Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
