"use client";

import { motion } from "framer-motion";
import { ACCSRing } from "@/components/ACCSRing";

const ease = [0.22, 1, 0.36, 1] as const;

export function Rewards() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-6">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, #2A9D8F, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.h2
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="relative mb-4 text-center font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[56px] md:leading-tight"
      >
        Most platforms reward spending.
        <br />
        Koqi rewards improving.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        className="relative mt-12"
      >
        <ACCSRing score={87} size={400} dark />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.8, ease }}
        className="relative mt-12 max-w-md text-center text-base leading-relaxed text-white/50"
      >
        Every accurate estimate, every referral, every closed deal generates
        credentials tied to your real performance.
        <br />
        <br />
        <em className="text-white/80">Earned only. Never purchased.</em>
      </motion.p>
    </section>
  );
}
