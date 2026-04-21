"use client";

import { motion } from "framer-motion";
import { IPhoneFrame } from "@/components/IPhoneFrame";

export function MobileShowcase() {
  return (
    <section className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Mobile app
          </p>
          <h2 className="mt-4 font-display text-[28px] text-ink sm:text-4xl md:text-[48px]">
            Your edge, everywhere.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Check your ACCS, submit estimates, and get AI coaching — all from your phone.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-8 sm:gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <IPhoneFrame>
              <img
                src="/media/mobile-dashboard.png"
                alt="Koqi mobile Command Center showing ACCS score and stats"
                className="h-full w-full object-cover object-top"
              />
            </IPhoneFrame>
            <p className="mt-6 text-center text-sm font-medium text-ink">
              Command Center
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <IPhoneFrame>
              <img
                src="/media/mobile-ai.png"
                alt="Koqi AI performance coach chat interface"
                className="h-full w-full object-cover object-top"
              />
            </IPhoneFrame>
            <p className="mt-6 text-center text-sm font-medium text-ink">
              Koqi AI Coach
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
