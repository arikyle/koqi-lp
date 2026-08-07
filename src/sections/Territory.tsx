"use client";

import { motion } from "framer-motion";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const ease = [0.22, 1, 0.36, 1] as const;

const leftScreens = [
  { src: "/media/screen-market-perspective.png", alt: "Market geography showing perspective signal by ZIP with heat map overlay" },
  { src: "/media/screen-market-negotiation.png", alt: "Market geography showing negotiation pressure by ZIP" },
];

const rightScreens = [
  { src: "/media/screen-market-decision.png", alt: "Decision brief showing buyer leverage score of 60 with market statistics" },
  { src: "/media/screen-market-price-detail.png", alt: "Price context showing housing mix breakdown by property type" },
];

export function Territory() {
  return (
    <section className="bg-stone-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <h2 className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight">
            Know your ZIP better than anyone selling in it.
          </h2>

          <p className="mx-auto mt-8 max-w-[640px] text-lg leading-relaxed text-ink/80">
            Multi-year sales history, price-per-foot trends, and ZIP-level
            performance turn &ldquo;I know this area&rdquo; into something you
            can show a seller. See where you&apos;re strongest, where you&apos;re
            gaining ground, and where to plant your flag next.
          </p>

          <p className="mt-4 text-lg font-medium text-ink">
            Your scoreboard. Updated with every closing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mt-16 flex items-end justify-center gap-6 md:gap-10"
        >
          <div style={{ transform: "rotate(-4deg) translateY(12px)" }}>
            <IPhoneFrame screens={leftScreens} interval={4000} />
          </div>
          <div style={{ transform: "rotate(4deg) translateY(12px)" }}>
            <IPhoneFrame screens={rightScreens} interval={4500} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
