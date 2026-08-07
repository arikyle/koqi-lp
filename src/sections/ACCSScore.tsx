"use client";

import { motion } from "framer-motion";
import { ACCSRing } from "@/components/ACCSRing";

const ease = [0.22, 1, 0.36, 1] as const;

const dimensions = [
  { label: "Pricing accuracy" },
  { label: "Confidence calibration" },
  { label: "Local expertise" },
  { label: "Property type mastery" },
  { label: "Consistency over time" },
];

export function ACCSScore() {
  return (
    <section className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
              One score. Five dimensions. Zero ways to fake it.
            </h2>
            <p className="mt-2 text-xs text-muted/60">Patent pending</p>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                ACCS measures what actually makes a great agent: pricing accuracy,
                confidence calibration, local expertise, property-type mastery,
                and consistency over time. It&apos;s computed from verified outcomes,
                updates as you work, and can&apos;t be bought.
              </p>
              <p className="font-medium text-ink">
                Put it in your listing presentation and watch what it does in the room.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {dimensions.map((dim, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease }}
                  className="flex items-center gap-3"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted">
                    {dim.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10"
            >
              <a
                href="https://form.typeform.com/to/d7BbovyW"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
              >
                Start building your score
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease }}
            className="flex justify-center"
          >
            <ACCSRing score={87} size={360} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
