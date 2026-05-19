"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const differentiators = [
  {
    title: "Live market data",
    body: "Appreciation rates and comp scoring pulled from current sales, not quarterly snapshots.",
  },
  {
    title: "Accuracy builds over time",
    body: "Your CMA history becomes a verifiable track record. Brokerages and clients can see your precision improving.",
  },
  {
    title: "Connected to your pipeline",
    body: "Run a CMA and Koqi links it to your Follow Up Boss contacts and deals. No double entry.",
  },
  {
    title: "Confidence scoring",
    body: "Each valuation includes confidence bands so you and your client know where the estimate sits on the certainty spectrum.",
  },
];

export default function CMAToolPage() {
  const heroRef = useRef<HTMLElement>(null);
  const valuationRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.8], [1, 0.95]);

  const { scrollYProgress: valScroll } = useScroll({
    target: valuationRef,
    offset: ["start end", "end start"],
  });
  const valScale = useTransform(valScroll, [0, 0.4, 0.6], [0.9, 1, 1]);
  const valOpacity = useTransform(valScroll, [0, 0.3], [0, 1]);
  const valRotateX = useTransform(valScroll, [0, 0.4], [6, 0]);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 40% 50%, #2A9D8F 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
            >
              New
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-8 font-display text-[36px] leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.1]"
            >
              A CMA that makes
              <br />
              you better.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Most CMA tools spit out comps and leave you to figure out the rest.
              Koqi walks you through pricing like a seasoned mentor, and tracks
              your accuracy with each closing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <MagneticButton href="https://form.typeform.com/to/d7BbovyW" strength={0.3}>
                <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-accent px-10 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(42,157,143,0.4)]">
                  <span className="relative z-10">Get Early Access</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </MagneticButton>
              <p className="text-sm text-white/40">
                Free during beta &middot; No credit card
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Valuation Screenshot */}
        <section className="bg-stone-bg px-6 py-24 md:py-32" style={{ perspective: 1200 }}>
          <div ref={valuationRef} className="mx-auto max-w-4xl">
            <motion.div
              style={{ scale: valScale, opacity: valOpacity, rotateX: valRotateX, transformOrigin: "50% 100%" }}
              className="overflow-hidden rounded-2xl border border-stone-200 shadow-2xl"
            >
              <img
                src="/media/cma-valuation.png"
                alt="Koqi CMA report for 22312 Delia Court showing estimated market value, confidence bands, and pricing slider"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Step 1-2: Comp Selection */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="font-display text-[48px] leading-none text-accent/30">01</span>
                <h2 className="mt-4 font-display text-[28px] leading-snug text-white sm:text-4xl">
                  Intelligent comp selection
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  Koqi surfaces comps ranked by relevance: recency, similarity,
                  and local market patterns. You pick the ones that fit. Koqi
                  flags outliers before they skew your valuation.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  Each comp card shows a relevance score, selection rationale,
                  and applied adjustments with dollar amounts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src="/media/cma-comp-detail.png"
                  alt="Comparable property card showing relevance score, property details, selection rationale, and adjustment calculations"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step 3: Market Intelligence */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease }}
                className="overflow-hidden rounded-2xl border border-stone-200 shadow-lg md:order-1"
              >
                <img
                  src="/media/cma-market-intel.png"
                  alt="Market intelligence dashboard showing months of supply, absorption rate, sale-to-list ratio, and trend charts for ZIP 91302"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease }}
                className="md:order-2"
              >
                <span className="font-display text-[48px] leading-none text-accent/30">02</span>
                <h2 className="mt-4 font-display text-[28px] leading-snug text-ink sm:text-4xl">
                  Market-aware adjustments
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  Hyperlocal data for your ZIP: months of supply, absorption rate,
                  sale-to-list ratio, median $/sqft, and days on market. With
                  12-month trend charts so you see where the market is heading.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Your adjustments reflect what the market is doing right now,
                  not what a static table said last quarter.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step 4: Pricing Strategy */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="font-display text-[48px] leading-none text-accent/30">03</span>
                <h2 className="mt-4 font-display text-[28px] leading-snug text-white sm:text-4xl">
                  Risk assessment and pricing scenarios
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  Three pricing approaches: conservative, market, and aspirational.
                  Each shows expected days on market, risk level, and trade-offs
                  so you and your client make informed decisions.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  Below the strategy, your ACCS and market expertise scores
                  build credibility with the client before the listing
                  conversation starts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src="/media/cma-pricing-strategy.png"
                  alt="Three pricing strategies showing conservative, market, and aspirational approaches with risk levels and trade-offs"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] text-ink sm:text-4xl md:text-[48px]"
            >
              What makes this CMA different.
            </motion.h2>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="rounded-2xl border border-stone-200 bg-white p-8"
                >
                  <h3 className="font-display text-lg text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-muted/60">
              Patent pending
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[56px] md:leading-tight"
            >
              Your first CMA takes ten minutes.
              <br />
              Your accuracy record lasts forever.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10 flex flex-col items-center"
            >
              <MagneticButton href="https://form.typeform.com/to/d7BbovyW" strength={0.3}>
                <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-accent px-10 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(42,157,143,0.4)]">
                  <span className="relative z-10">Get Early Access</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </MagneticButton>
              <p className="mt-4 text-sm text-white/40">
                Free during beta &middot; Your score starts building on day one
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/" className="text-sm font-medium text-ink hover:text-accent transition-colors">koqi.ai</Link>
              <Link href="/agents" className="text-sm text-muted hover:text-accent transition-colors">Agents</Link>
              <Link href="/brokerages" className="text-sm text-muted hover:text-accent transition-colors">Brokerages</Link>
              <Link href="/consumers" className="text-sm text-muted hover:text-accent transition-colors">Consumers</Link>
              <Link href="/cma-tool" className="text-sm text-accent transition-colors">CMA Tool</Link>
              <Link href="/pricing" className="text-sm text-muted hover:text-accent transition-colors">Pricing</Link>
            </div>
            <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} Koqi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
