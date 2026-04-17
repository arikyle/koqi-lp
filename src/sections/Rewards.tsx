"use client";

import { motion } from "framer-motion";
import { ACCSRing } from "@/components/ACCSRing";

export function Rewards() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-stone-bg px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 text-center font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[56px] md:leading-tight"
      >
        Most platforms reward spending.
        <br />
        Koqi rewards improving.
      </motion.h2>

      <div className="mt-12">
        <ACCSRing score={87} size={400} />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 max-w-md text-center text-base leading-relaxed text-muted"
      >
        Every accurate estimate, every referral, every closed deal generates
        credentials tied to your real performance.
        <br />
        <br />
        <em>Earned only. Never purchased.</em>
      </motion.p>
    </section>
  );
}
