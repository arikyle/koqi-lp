"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const included = [
  "ACCS scoring across all five dimensions",
  "Unlimited CMA reports with live market data",
  "AI coach with CRM and MLS access",
  "Follow Up Boss and Lofty integration",
  "Prospecting database with seller scoring",
  "AI-drafted campaigns with compliance built in",
  "GPS-verified pricing estimates",
  "ZIP-level territory intelligence",
];

const tiers = [
  {
    name: "Agents",
    description: "Performance scoring, CMA tool, AI coaching, prospecting, campaigns, and GPS-verified pricing estimates.",
    status: "Free during beta",
  },
  {
    name: "Brokerages",
    description: "Team ACCS tracking, coaching signals, recruiting data, and roster-wide performance visibility.",
    status: "Contact us",
  },
  {
    name: "Consumers",
    description: "Agent matching by verified skill, property valuations with confidence bands, and taste-based search.",
    status: "Coming soon",
  },
];

export default function PricingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Nav />
      <main>
        <section
          ref={heroRef}
          className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0A0A0A] px-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #2A9D8F 0%, transparent 55%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[36px] leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.1]"
            >
              Free while we build.
              <br />
              <span className="text-white/50">Priced fairly when we launch.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Everything is free during the public beta. No credit card.
              No commitment. Your ACCS score starts building on day one,
              so early members get a head start.
            </motion.p>
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
              Included in the beta.
            </motion.h2>

            <div className="mx-auto mt-12 max-w-lg">
              {included.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease }}
                  className="flex items-center gap-4 border-b border-stone-200 py-4"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-lg text-ink">{item}</span>
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
              Post-launch pricing will be role-based.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mx-auto mt-4 max-w-lg text-center text-lg text-white/50"
            >
              Separate tiers for agents, brokerages, and consumers. Details coming.
            </motion.p>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <h3 className="font-display text-2xl text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/50">
                    {tier.description}
                  </p>
                  <p className="mt-6 text-sm font-medium text-accent">
                    {tier.status}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Start free. Build your score.
              <br />
              Decide later.
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
                No credit card &middot; No commitment
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
              <Link href="/cma-tool" className="text-sm text-muted hover:text-accent transition-colors">CMA Tool</Link>
              <Link href="/pricing" className="text-sm text-accent transition-colors">Pricing</Link>
            </div>
            <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} Koqi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
