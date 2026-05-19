"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Subject property lookup",
    description:
      "Enter an address and Koqi pulls property details, tax records, and listing history. You confirm the basics and add condition notes the data can't capture.",
  },
  {
    number: "02",
    title: "Intelligent comp selection",
    description:
      "Koqi surfaces comps ranked by relevance: recency, similarity, and local market patterns. You pick the ones that fit. Koqi flags outliers before they skew your valuation.",
  },
  {
    number: "03",
    title: "Market-aware adjustments",
    description:
      "Appreciation rates calculated from real sales data at the ZIP level. Your adjustments reflect what the market is doing right now, not what a static table said last quarter.",
  },
  {
    number: "04",
    title: "Risk assessment and pricing scenarios",
    description:
      "Koqi calculates confidence bands around your valuation and surfaces risk factors: days on market trends, price reduction rates, and seasonal patterns in the ZIP.",
  },
  {
    number: "05",
    title: "Accuracy tracking",
    description:
      "Each CMA feeds your ACCS score. When properties close, Koqi compares your estimate to the sale price. Run enough of them and your accuracy record speaks louder than any pitch deck.",
  },
];

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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <>
      <Nav />
      <main>
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

        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] text-ink sm:text-4xl md:text-[48px]"
            >
              Five steps. One valuation you can stand behind.
            </motion.h2>

            <div className="mt-20 space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, ease }}
                  className="flex gap-8"
                >
                  <span className="shrink-0 font-display text-[48px] leading-none text-accent/30">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] text-white sm:text-4xl md:text-[48px]"
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <h3 className="font-display text-lg text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/50">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-white/30">
              Patent pending
            </p>
          </div>
        </section>

        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[56px] md:leading-tight"
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
              <p className="mt-4 text-sm text-muted">
                Free during beta &middot; Your score starts building on day one
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6">
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
