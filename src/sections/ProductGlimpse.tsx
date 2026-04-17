"use client";

import { motion } from "framer-motion";
import { DeviceFrame } from "@/components/DeviceFrame";

function DashboardMockup() {
  return (
    <div className="flex h-full w-full bg-stone-bg">
      <div className="hidden w-14 shrink-0 border-r border-stone-200 bg-white sm:block">
        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-[10px] font-bold text-white">K</div>
          <div className="h-px w-6 bg-stone-200" />
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={`h-5 w-5 rounded ${n === 1 ? "bg-accent/20" : "bg-stone-100"}`} />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="flex h-10 items-center justify-between border-b border-stone-200 bg-white px-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-stone-100" />
            <span className="text-[11px] font-medium text-ink">Dashboard</span>
          </div>
          <div className="flex h-6 w-32 items-center rounded-md bg-stone-50 px-2">
            <span className="text-[10px] text-muted">Search...</span>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">ACCS</p>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="font-display text-3xl text-ink">87</span>
                <span className="text-[10px] font-medium text-accent">+3</span>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-stone-100">
                <div className="h-full w-[87%] rounded-full bg-accent" />
              </div>
            </div>

            <div className="col-span-1 rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">Estimates</p>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="font-display text-3xl text-ink">24</span>
                <span className="text-[10px] text-muted">this month</span>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[65, 80, 45, 90, 72, 88, 55, 78].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-accent/20" style={{ height: `${h * 0.25}px` }} />
                ))}
              </div>
            </div>

            <div className="col-span-1 rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">Accuracy</p>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="font-display text-3xl text-ink">94%</span>
              </div>
              <div className="mt-3 flex items-end gap-0.5">
                {[70, 75, 82, 78, 85, 90, 88, 94].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-accent" style={{ height: `${h * 0.22}px`, opacity: 0.3 + (i / 8) * 0.7 }} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-stone-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">Recent Activity</p>
              <p className="text-[10px] text-accent">View all</p>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { action: "Estimate submitted", detail: "123 Palm Ave — $685,000", time: "2h ago", points: "+12" },
                { action: "Score updated", detail: "ACCS recalculated: 87 (+3)", time: "2h ago", points: "" },
                { action: "Territory unlocked", detail: "33139 — South Beach", time: "1d ago", points: "+5" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-t border-stone-50 pt-2 first:border-0 first:pt-0">
                  <div>
                    <p className="text-[11px] font-medium text-ink">{item.action}</p>
                    <p className="text-[10px] text-muted">{item.detail}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted">{item.time}</p>
                    {item.points && <p className="text-[10px] font-medium text-accent">{item.points}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductGlimpse() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-stone-bg px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-center font-display text-[28px] text-ink sm:mb-16 sm:text-4xl md:text-[48px]"
      >
        This is what seeing more looks like.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <DeviceFrame>
          <DashboardMockup />
        </DeviceFrame>
      </motion.div>
    </section>
  );
}
