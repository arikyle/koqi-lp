"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const callouts = [
  {
    label: "Honest valuations",
    desc: "Estimates labeled clearly, with confidence bands and methodology you can expand",
  },
  {
    label: "Contextual matching",
    desc: "Agents appear because they're right for the property, not because they bought placement",
  },
  {
    label: "Taste profiles",
    desc: "Tell Koqi what matters to you and it prioritizes accordingly (natural light over square footage, walkability over lot size)",
  },
];

export function Consumer() {
  return (
    <section id="consumers" className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            For home buyers &amp; sellers
          </p>

          <h2 className="mt-6 font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
            What the home is worth, and who should help you. In that order.
          </h2>

          <div className="mt-8 max-w-[640px] space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              Most platforms sell your attention to agents before you&apos;ve
              decided what you want. Koqi shows you the valuation first:
              estimate, range, and confidence. Then it shows agents matched
              to your situation, with the reasons why. No one paid to be there.
            </p>
            <p className="font-medium text-ink">
              You&apos;re served, not sold to.
            </p>
          </div>

          <span className="mt-4 inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
            Now in public beta
          </span>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {callouts.map((callout, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <h3 className="font-display text-xl text-ink">
                {callout.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {callout.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-16"
        >
          <a
            href="https://form.typeform.com/to/d7BbovyW"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Browse properties
          </a>
        </motion.div>
      </div>
    </section>
  );
}
