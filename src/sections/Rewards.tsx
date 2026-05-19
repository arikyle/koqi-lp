"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Rewards() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-6 py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, #2A9D8F, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="relative max-w-[640px] text-center"
      >
        <h2 className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[56px] md:leading-tight">
          A pricing gym that pays you to train.
        </h2>
        <p className="mt-2 text-xs text-white/30">Patented technology</p>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/60">
          <p>
            Submit GPS-verified property estimates on real listings.
            When the property closes, Koqi compares your estimate to the
            actual sale price.
          </p>
          <p>
            Closer estimates earn more. Your accuracy record is permanent --
            and once a listing goes active, your estimate locks. No backdating.
            No adjusting after you see the listing price.
          </p>
          <p className="text-white/80">
            Trust built transparently, over time, with
            outcomes you can&apos;t manipulate.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-10"
        >
          <a
            href="https://form.typeform.com/to/d7BbovyW"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Start estimating
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
