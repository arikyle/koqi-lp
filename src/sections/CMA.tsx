"use client";

import { motion } from "framer-motion";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const ease = [0.22, 1, 0.36, 1] as const;

const centerScreens = [
  { src: "/media/screen-cma-report.png", alt: "Koqi CMA report for 538 14th Street showing property photo, address, and valuation summary" },
  { src: "/media/screen-cma-estimate.png", alt: "Estimated market value of $7,120,000 with pricing slider and confidence level" },
  { src: "/media/screen-cma-comp-detail.png", alt: "Comparable sale detail for 721 Adelaide Place showing similarity score and adjustments" },
];

const leftScreens = [
  { src: "/media/screen-cma-property.png", alt: "CMA property entry showing 538 14th Street with MLS photo and details" },
  { src: "/media/screen-cma-market-context.png", alt: "ZIP 90402 market evidence with active supply and market data coverage" },
];

const rightScreens = [
  { src: "/media/screen-cma-value-evidence.png", alt: "Value evidence scatter plot showing comparable sales by living area and price per square foot" },
  { src: "/media/screen-cma-market-position.png", alt: "Market position showing estimated value within typical asking range" },
];

const features = [
  {
    title: "Comp scoring that thinks like an appraiser",
    body: "Comps ranked by likeness, recency, and market movement, not just distance.",
  },
  {
    title: "Adjustments you control",
    body: "Change a condition rating or an adjustment and the estimate recomputes through the full model, never a shortcut.",
  },
  {
    title: "Client-ready in minutes",
    body: "White-labeled reports in your branding, or your brokerage's, shared as a live link or a polished PDF.",
  },
  {
    title: "Built for volume",
    body: "Run one CMA for tonight's listing appointment or a batch across your whole farm.",
  },
];

export function CMA() {
  return (
    <section id="cma" className="bg-[#0A0A0A] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
            CMA Engine
          </span>

          <h2 className="mt-6 font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight">
            A CMA that gets smarter every time a home closes.
          </h2>

          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-white/60">
            Koqi&apos;s valuation engine scores every comp, checks itself
            against verified sale prices, and recalibrates as your market moves.
            You&apos;re not running reports. You&apos;re training a model on
            your own judgment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mt-16 flex items-end justify-center gap-0 md:gap-4"
        >
          <div className="hidden -rotate-6 translate-y-6 opacity-80 md:block" style={{ transform: "rotate(-6deg) translateY(24px) scale(0.85)" }}>
            <IPhoneFrame screens={leftScreens} interval={4500} />
          </div>
          <div className="relative z-10">
            <IPhoneFrame screens={centerScreens} interval={3500} />
          </div>
          <div className="hidden rotate-6 translate-y-6 opacity-80 md:block" style={{ transform: "rotate(6deg) translateY(24px) scale(0.85)" }}>
            <IPhoneFrame screens={rightScreens} interval={5000} />
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <h3 className="font-display text-xl text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/50">
                {feature.body}
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
            href="/cma-tool"
            className="inline-block rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
          >
            Run your first CMA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
