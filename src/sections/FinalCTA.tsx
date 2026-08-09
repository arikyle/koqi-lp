"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { AppStoreBadge, AppStoreBadgeLight } from "@/components/AppStoreBadge";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex flex-col items-center justify-center overflow-hidden px-6"
        style={{ minHeight: "80vh" }}
      >
        <motion.div className="absolute inset-0" style={{ scale: imgScale, y: imgY }}>
          <img
            src="/media/property-twilight.jpg"
            alt="Modern home exterior at twilight representing real estate excellence"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />

        <motion.h2
          initial={{ opacity: 0, scale: 0.75, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center font-display text-[32px] leading-snug text-white sm:text-5xl md:text-[64px] md:leading-tight"
        >
          Your pricing instinct is an asset.
          <br />
          Start proving it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 max-w-md text-center text-lg leading-relaxed text-white/60"
        >
          Run a CMA. Your estimate scores automatically. See what your accuracy actually looks like.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 flex flex-col items-center gap-5"
        >
          <AppStoreBadge />

          <MagneticButton href="https://form.typeform.com/to/d7BbovyW" strength={0.3}>
            <span className="text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white/80">
              Or request a demo &rarr;
            </span>
          </MagneticButton>

          <p className="mt-2 text-sm text-white/40">
            Free during beta. Your score starts building on day one.
          </p>
        </motion.div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-ink hover:text-accent transition-colors">
              koqi.ai
            </a>
            <AppStoreBadgeLight />
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
            <a href="/solutions" className="hover:text-accent transition-colors">Solutions</a>
            <a href="/brokerages" className="hover:text-accent transition-colors">Brokerages</a>
            <a href="/consumers" className="hover:text-accent transition-colors">Consumers</a>
            <a href="/blog" className="hover:text-accent transition-colors">Blog</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
            <a href="https://app.koqi.ai/privacy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="https://app.koqi.ai/terms" className="hover:text-accent transition-colors">Terms</a>
            <a href="mailto:hello@koqi.ai" className="hover:text-accent transition-colors">hello@koqi.ai</a>
          </nav>
          <p className="mt-6 text-center text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Koqi. All rights reserved.
          </p>
          <p className="mt-2 text-center text-[10px] leading-relaxed text-muted/40">
            Koqi performance scoring technology is patent pending.
          </p>
          <p className="mt-2 text-center text-[10px] leading-relaxed text-muted/40">
            *Accuracy measured against actual closing prices across California markets
            with agent condition input provided. Individual results vary by market and
            data availability. Benchmarked monthly against closed sales.
          </p>
        </div>
      </footer>
    </>
  );
}
