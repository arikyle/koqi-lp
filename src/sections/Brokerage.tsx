"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ease = [0.22, 1, 0.36, 1] as const;

const columns = [
  {
    title: "Recruiting edge",
    body: "Show recruits how your brokerage develops talent. ACCS trends and accuracy curves tell a story no competing offer letter can match.",
  },
  {
    title: "Coaching signals",
    body: "Spot the agent who's slipping before they lose a listing. Accuracy decay and activity gaps surface coaching moments while there's still time to act.",
  },
  {
    title: "Your brand on every report",
    body: "Brokerage brand kits put your identity on every CMA your agents send. Shared templates keep the whole roster on message.",
  },
  {
    title: "Team performance",
    body: "Track ACCS across the roster. Find your pricing specialists and your relationship builders, and build around strengths instead of guessing.",
  },
];

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
    <section ref={sectionRef} className="relative overflow-hidden" id="brokerages">
      <div className="relative flex min-h-screen items-center justify-center">
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

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="relative z-10 max-w-[600px] px-6 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            For brokerages
          </p>

          <h2 className="mt-6 font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight">
            Recruit on proof. Coach on data. Retain on growth.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Your best agents don&apos;t need another pep talk. They need a brokerage
            that sees their work clearly and measures it honestly.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#0A0A0A] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
            {columns.map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <h3 className="font-display text-xl text-white">
                  {col.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/50">
                  {col.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mt-16 text-center"
          >
            <a
              href="https://form.typeform.com/to/d7BbovyW"
              className="inline-block rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              Request a Brokerage Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
