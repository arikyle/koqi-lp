"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    title: "Market-aware adjustments",
    body: "Appreciation rates calculated from real sales data at the ZIP level. Your adjustments reflect what the market is doing right now.",
  },
  {
    title: "Intelligent comp scoring",
    body: "Comps ranked by relevance: recency, similarity, local market patterns. Koqi flags outliers before they skew your valuation.",
  },
  {
    title: "Accuracy that compounds",
    body: "Each CMA you run feeds your ACCS score. When properties close, Koqi compares your estimate to the sale price. Run enough of them and your accuracy record speaks louder than any pitch deck.",
  },
];

export function CMA() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

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
            New
          </span>

          <h2 className="mt-6 font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight">
            A CMA that makes you better.
          </h2>

          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-white/60">
            Most CMA tools spit out comps and leave you to figure out the rest.
            Koqi&apos;s CMA walks you through pricing like a seasoned mentor,
            adjusting for condition, calculating appreciation, flagging risk,
            and learning from each deal that closes.
          </p>
        </motion.div>

        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10"
        >
          <motion.img
            src="/media/cma-valuation.png"
            alt="Koqi CMA report for 22312 Delia Court showing estimated market value, confidence bands, and pricing slider"
            className="w-full"
            style={{ y: imgY }}
          />
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
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
            See the CMA in action
          </a>
        </motion.div>
      </div>
    </section>
  );
}
