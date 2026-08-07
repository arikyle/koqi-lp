"use client";

import { motion } from "framer-motion";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const ease = [0.22, 1, 0.36, 1] as const;

const callouts = [
  {
    label: "Does real work",
    desc: "Drafts CMAs, pulls comps, summarizes your pipeline, preps listing appointments.",
  },
  {
    label: "Grounded in your data",
    desc: "Every answer draws on your actual CRM records and live MLS data, never a guess.",
  },
  {
    label: "Permissioned by design",
    desc: "Every data access is verified, authorized, and logged.",
  },
];

const aiScreens = [
  { src: "/media/screen-ai-listings.png", alt: "Koqi AI surfacing new listings with coaching angle" },
  { src: "/media/screen-ai-analysis.png", alt: "Koqi AI market snapshot for 90403" },
  { src: "/media/screen-ai-working.png", alt: "Koqi AI crunching market stats" },
  { src: "/media/screen-ai-home.png", alt: "Koqi AI command center with ACCS score" },
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
              An AI that doesn&apos;t just answer. It does the work.
            </h2>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Koqi AI has read your contacts, your deals, your listings, and
                your market. Ask it a question and it answers like a senior agent
                who studied your pipeline. Hand it a task and it drafts the CMA,
                pulls the comps, and preps the appointment. You review everything
                before it ships.
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
                Meet Koqi AI
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
            <IPhoneFrame screens={aiScreens} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
