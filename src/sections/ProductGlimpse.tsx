"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DeviceFrame } from "@/components/DeviceFrame";

export function ProductGlimpse() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.85, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [8, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [80, 0]);

  return (
    <section ref={sectionRef} className="flex h-screen flex-col items-center justify-center bg-stone-bg px-6" style={{ perspective: 1200 }}>
      <motion.h2
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-center font-display text-[28px] text-ink sm:mb-16 sm:text-4xl md:text-[48px]"
      >
        This is what seeing more looks like.
      </motion.h2>

      <motion.div
        className="w-full"
        style={{ scale, opacity, y, rotateX, transformOrigin: "50% 100%" }}
      >
        <DeviceFrame>
          <img
            src="/Dashboard.png"
            alt="Koqi performance intelligence dashboard showing ACCS score, market analytics, and agent performance metrics"
            className="h-full w-full object-cover object-top"
          />
        </DeviceFrame>
      </motion.div>
    </section>
  );
}
