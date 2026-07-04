"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const bullets = [
  "Incremental sync pulls only what changed (fast, not wasteful)",
  "Encrypted API credentials (your keys never stored in plaintext)",
  "Detailed sync logs showing exactly what moved and why",
  "Auto-disables on repeated failures so nothing breaks silently",
];

export function FollowUpBoss() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight">
              Your CRM, connected. Your pipeline, smarter.
            </h2>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/60">
              <p>
                Koqi integrates with Follow Up Boss. Contacts, deals,
                notes, and call logs flow in automatically.
              </p>
              <p>
                Run a CMA and Koqi matches the client to your existing contacts
                automatically. Deals are created or linked on the fly.
                No double-entry. No tab switching. No dropped context.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease }}
                  className="flex items-start gap-3 text-base text-white/50"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10"
            >
              <a
                href="https://form.typeform.com/to/d7BbovyW"
                className="inline-block rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
              >
                Connect Follow Up Boss
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
            <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-white/80">Sync Active</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Contacts synced</span>
                  <span className="font-medium text-white/70">247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Deals created</span>
                  <span className="font-medium text-white/70">18</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Last sync</span>
                  <span className="font-medium text-white/70">2 min ago</span>
                </div>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs text-white/30">Recent activity</p>
                <div className="mt-2 space-y-2 text-xs text-white/40">
                  <p>Contact linked: Sarah Chen → 742 Oak Ave CMA</p>
                  <p>Deal created: 1580 Maple Dr (pending)</p>
                  <p>Notes synced: 12 new entries</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
