"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

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
          You already know if you&apos;re good.
          <br />
          Now prove it.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 flex flex-col items-center"
        >
          <MagneticButton href="#" strength={0.3}>
            <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-accent px-10 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(42,157,143,0.4)]">
              <span className="relative z-10">Get Early Access</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </MagneticButton>

          <p className="mt-6 text-sm text-white/60">
            Free during beta. Your score starts building on day one.
          </p>
        </motion.div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                koqi.ai
              </a>
              <a href="/blog" className="text-sm text-muted hover:text-accent transition-colors">
                Blog
              </a>
              <a href="#faq" className="text-sm text-muted hover:text-accent transition-colors">
                FAQ
              </a>
              <a href="/privacy-policy" className="text-sm text-muted hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="/terms-of-use" className="text-sm text-muted hover:text-accent transition-colors">
                Terms
              </a>
            </div>
            <a href="mailto:hello@koqi.ai" className="text-sm text-muted hover:text-accent transition-colors">
              hello@koqi.ai
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Koqi. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
