"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    label: "Price",
    body: "A CMA engine that grades itself against real closings.",
  },
  {
    label: "Prove",
    body: "An accuracy score no one can fake.",
  },
  {
    label: "Run",
    body: "CRM, prospecting, campaigns, and pipeline intelligence.",
  },
  {
    label: "Delegate",
    body: "An AI that drafts the work, not just the reply.",
  },
];

export function Platform() {
  return (
    <section className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[640px]"
        >
          <h2 className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
            One system. Every part of your business, thinking together.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            Your comps, contacts, deals, estimates, and market history live in
            one place, and Koqi&apos;s AI works across all of it. Ask about a
            listing and the answer draws on your pipeline, your past estimates,
            and live MLS data at once. Every access is permissioned. Nothing
            sits in a silo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="rounded-2xl border border-stone-200 bg-white p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {pillar.label}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
