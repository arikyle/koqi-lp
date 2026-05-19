"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const callouts = [
  {
    label: "Full CRM access",
    desc: "Searches your contacts, deals, and notes",
  },
  {
    label: "MLS-powered",
    desc: "Pulls live listing data and property history",
  },
  {
    label: "Permissioned",
    desc: "Every data access is verified and authorized",
  },
];

export function AICoach() {
  return (
    <section className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
              An AI that knows your book of business.
            </h2>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Koqi&apos;s AI coach reads your contacts, your deals, your listings,
                and your market data. It answers like a senior agent who&apos;s
                studied your pipeline.
              </p>
              <p>
                &ldquo;Find properties for Sarah Chen&rdquo; returns interactive cards with
                valuations, matched comps, and deal context.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {callouts.map((callout, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                >
                  <p className="text-base font-medium text-ink">{callout.label}</p>
                  <p className="mt-1 text-base text-muted">{callout.desc}</p>
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
                Meet your AI coach
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <span className="text-sm font-medium text-ink">Koqi AI</span>
              </div>

              <div className="mt-4 rounded-xl bg-stone-bg p-4">
                <p className="text-sm text-muted">Find properties for Sarah Chen</p>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-stone-200 p-4">
                  <p className="text-sm font-medium text-ink">742 Oak Ave, Pasadena</p>
                  <p className="mt-1 text-xs text-muted">3 bd / 2 ba / 1,840 sqft</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">$1.24M estimated</span>
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">High confidence</span>
                  </div>
                </div>
                <div className="rounded-xl border border-stone-200 p-4">
                  <p className="text-sm font-medium text-ink">1580 Maple Dr, Glendale</p>
                  <p className="mt-1 text-xs text-muted">4 bd / 3 ba / 2,210 sqft</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">$1.58M estimated</span>
                    <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-600">Moderate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
