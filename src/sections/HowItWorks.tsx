"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  "Create your account and connect your MLS credentials",
  "Run your first CMA on a property you know well",
  "Submit a pricing estimate and watch your ACCS start building",
  "Connect Follow Up Boss to sync your pipeline (optional)",
];

export function HowItWorks() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight"
        >
          From sign-up to your first score in under ten minutes.
        </motion.h2>

        <div className="mx-auto mt-16 max-w-md text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex items-start gap-5 py-4"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-sm font-medium text-accent">
                {i + 1}
              </span>
              <p className="text-lg leading-relaxed text-white/70">
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-12 text-base text-white/40"
        >
          Everything is free during beta. Your score starts building on day one.
        </motion.p>
      </div>
    </section>
  );
}
