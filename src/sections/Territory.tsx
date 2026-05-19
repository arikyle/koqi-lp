"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Territory() {
  return (
    <section className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
            Own your ZIP. Know it before anyone else does.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            Koqi surfaces ZIP-level performance data that turns local knowledge
            into a measurable advantage. See where you&apos;re strongest, where
            you&apos;re gaining ground, and where competitors are pulling ahead.
          </p>

          <p className="mt-4 text-lg font-medium text-ink">
            Your scoreboard. Updated with each closing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
