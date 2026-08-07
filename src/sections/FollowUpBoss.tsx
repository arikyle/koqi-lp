"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const bullets = [
  "Incremental sync pulls only what changed, so it's fast and stays fast.",
  "Credentials encrypted end to end, never stored in plaintext.",
  "Sync logs show exactly what moved and why.",
  "Fails loud: repeated errors pause the sync and tell you. Nothing breaks silently.",
];

function FUBLogo() {
  return (
    <svg viewBox="0 0 140 28" className="h-7 w-auto" aria-label="Follow Up Boss">
      <text x="0" y="21" fill="#E8552D" fontSize="15" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.3">
        Follow Up Boss
      </text>
    </svg>
  );
}

function LoftyLogo() {
  return (
    <svg viewBox="0 0 60 28" className="h-7 w-auto" aria-label="Lofty">
      <text x="0" y="21" fill="#3B82F6" fontSize="17" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">
        Lofty
      </text>
    </svg>
  );
}

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
              Bring your CRM. Koqi makes it smarter.
            </h2>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/60">
              <p>
                Connect Follow Up Boss or Lofty and your contacts, deals, notes,
                and call logs flow in automatically, then keep flowing.
                Import prospect lists, define farm areas, and the AI scores
                seller opportunities before you ever pick up the phone. Your
                CRM goes from a Rolodex to a growth engine.
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
                Connect your CRM
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
            <div className="w-full max-w-[400px] space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                Integrates with
              </p>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/70">
                  <FUBLogo />
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/70">
                  <LoftyLogo />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
