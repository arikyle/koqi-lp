"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Proof() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-stone-bg">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col justify-center px-6 py-24 md:py-32 md:pr-16 md:pl-12"
        >
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Now in private beta
          </p>

          <blockquote className="font-display text-[28px] leading-snug text-ink md:text-[36px] md:leading-snug">
            &ldquo;This is the first platform that told me something about my
            business I didn&apos;t already know.&rdquo;
          </blockquote>

          <p className="mt-8 text-sm text-muted">
            Beta user &middot; 11-year agent &middot; Los Angeles
          </p>
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative hidden min-h-[400px] overflow-hidden md:block"
        >
          <motion.img
            src="/media/interior-warm.jpg"
            alt=""
            className="absolute inset-[-10%] h-[120%] w-[120%] object-cover"
            style={{ y: imgY, scale: imgScale }}
          />
        </motion.div>
      </div>
    </section>
  );
}
