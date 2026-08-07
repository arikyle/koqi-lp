"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { ACCSRing } from "@/components/ACCSRing";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const valueProps = [
  {
    number: "01",
    title: "AI that learns how you work",
    description:
      "Koqi watches your pricing patterns across every CMA, every market, every property type. It finds the gaps you can't see yourself. The neighborhoods where you over-correct. The price bands where your confidence drifts. Then it tells you, plainly, before your next listing appointment.",
  },
  {
    number: "02",
    title: "Every CMA makes you sharper",
    description:
      "Run a CMA on any property in your market. Koqi scores it as an estimate automatically. When the deal closes, your accuracy feeds back into your ACCS score. You're not just pulling reports. You're building a body of evidence that proves you know your market better than anyone.",
  },
  {
    number: "03",
    title: "Market intelligence that moves with you",
    description:
      "Koqi's AI monitors your markets in real time. Pricing shifts, inventory changes, negotiation leverage, new listings that match your expertise. You don't go looking for insights. They come to you, filtered through your track record and the neighborhoods you actually work.",
  },
  {
    number: "04",
    title: "A reputation no one can question",
    description:
      "Reviews can be faked. Transaction counts can be inflated. Your ACCS score can't. It's a verifiable, portable credential built on actual pricing accuracy across real deals. It follows you across brokerages, and it gives prospective clients something they've never had before: proof.",
  },
  {
    number: "05",
    title: "A CRM that prospects for you",
    description:
      "Connect Follow Up Boss or Lofty and your pipeline flows in automatically. Import property owner lists, build farm areas by ZIP, and let the AI score seller opportunities across your territory. When a prospect is ready, promote them to your CRM with one tap. The AI reads your full pipeline and tells you where to focus.",
  },
  {
    number: "06",
    title: "Campaigns that prove you know the neighborhood",
    description:
      "Build audiences from your prospecting database and let the AI draft personalized outreach backed by real property data and market conditions. Send through Gmail or export for direct mail. Every campaign includes compliance checks and holdout measurement so you know what works.",
  },
];

export default function AgentsPage() {
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
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, #2A9D8F 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-accent"
            >
              AI-native platform for real estate agents
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-6 font-display text-[36px] leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.1]"
            >
              You know your market.
              <br />
              <span className="text-white/50">
                Koqi proves it.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60"
            >
              Koqi is the AI operating system that measures your pricing
              accuracy, coaches you on your blind spots, and builds a
              reputation your competitors can&apos;t fake. Every CMA you
              run makes you better. Every insight makes you faster. The
              AI doesn&apos;t replace your instinct. It sharpens it.
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

        {/* The Problem */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                The problem
              </p>
              <h2 className="mt-4 font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[44px] md:leading-snug">
                The best agents in your market have no way to prove it.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  You&apos;ve spent years learning your neighborhoods. You
                  know when a comp is misleading. You know when a listing is
                  overpriced before the data catches up. But when a potential
                  client asks why they should choose you, all you have is the
                  same thing every other agent has: reviews, transaction
                  count, years in the business.
                </p>
                <p>
                  None of that measures whether you&apos;re actually{" "}
                  <em className="text-ink">good</em> at pricing. None of it
                  captures the skill that separates agents who price homes
                  right from agents who just price homes.
                </p>
                <p className="text-ink font-medium">
                  Koqi changes that.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACCS Score */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-16 md:flex-row md:gap-20">
              <motion.div
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease }}
                className="shrink-0"
              >
                <ACCSRing score={92} size={320} dark />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  The ACCS score
                </p>
                <h2 className="mt-4 font-display text-[28px] leading-snug text-white sm:text-4xl">
                  One number that proves what you&apos;re worth.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/55">
                  ACCS measures the five dimensions that actually predict
                  success: pricing accuracy, confidence calibration, local
                  specialization, property type expertise, and consistency.
                  In real time. Always decaying. Impossible to coast on.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/55">
                  The agents who score highest aren&apos;t always the ones
                  who close the most. They&apos;re the ones who price the
                  best. And now, for the first time, that&apos;s provable.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/55">
                  Every CMA you run feeds into your score. The AI tracks
                  your accuracy over time, across markets, across property
                  types. Your score doesn&apos;t just measure you. It
                  teaches you where to improve.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How the AI works */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                How it works
              </p>
              <h2 className="mt-4 font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[44px] md:leading-snug">
                AI that gets better because you get better.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Most platforms bolt AI onto the side and call it
                  innovation. Koqi is built from the ground up around a
                  single idea: the more you use it, the smarter it gets
                  about <em className="text-ink">you</em>.
                </p>
                <p>
                  Run a CMA and Koqi scores your estimate against actual
                  market outcomes. The AI learns your patterns. Where you
                  nail it. Where you second-guess yourself. Which property
                  types trip you up. Then it coaches you. Not with generic
                  advice. With specific, data-backed feedback tied to your
                  actual performance.
                </p>
                <p>
                  It surfaces new listings that match your expertise. It
                  monitors market shifts in the neighborhoods you work. It
                  tells you when negotiation leverage is changing before
                  you hear it from a colleague. Everything is filtered
                  through your track record, your markets, your strengths.
                </p>
                <p className="text-ink font-medium">
                  The result: you walk into every listing appointment with
                  more data, more confidence, and a provable track record
                  that no other agent in your market can match.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] text-white sm:text-4xl md:text-[48px]"
            >
              Six ways Koqi makes you the agent to beat.
            </motion.h2>

            <div className="mt-20 space-y-20">
              {valueProps.map((prop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, ease }}
                  className="flex gap-8"
                >
                  <span className="shrink-0 font-display text-[48px] leading-none text-accent/30">
                    {prop.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-white">
                      {prop.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-white/55">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Phone Showcase */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="mb-16 text-center md:mb-24"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Your toolkit
              </p>
              <h2 className="mt-4 font-display text-[28px] text-ink sm:text-4xl md:text-[48px]">
                Everything works together. Nothing works alone.
              </h2>
            </motion.div>

            <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12 md:flex-nowrap md:gap-16">
              {[
                {
                  screens: [
                    { src: "/media/screen-cma-report.png", alt: "CMA report" },
                    { src: "/media/screen-cma-estimate.png", alt: "CMA estimate value" },
                    { src: "/media/screen-cma-comp-detail.png", alt: "Comp detail with adjustments" },
                  ],
                  label: "Run CMAs, Build Your Score",
                  interval: 4000,
                },
                {
                  screens: [
                    { src: "/media/screen-ai-listings.png", alt: "AI surfacing new listings" },
                    { src: "/media/screen-ai-analysis.png", alt: "AI market analysis" },
                    { src: "/media/screen-ai-working.png", alt: "AI processing data" },
                  ],
                  label: "AI Coaching & Insights",
                  interval: 3500,
                },
                {
                  screens: [
                    { src: "/media/screen-market-perspective.png", alt: "Market perspective signals" },
                    { src: "/media/screen-market-decision.png", alt: "Decision brief" },
                    { src: "/media/screen-market-negotiation.png", alt: "Negotiation pressure" },
                  ],
                  label: "Market Intelligence",
                  interval: 4500,
                },
              ].map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease }}
                  className="flex flex-col items-center"
                >
                  <IPhoneFrame screens={group.screens} interval={group.interval} />
                  <p className="mt-6 text-center text-sm font-medium text-ink">
                    {group.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The flywheel */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                The flywheel
              </p>
              <h2 className="mt-4 font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[44px] md:leading-snug">
                Use Koqi more. Get better. Win more.
              </h2>
              <div className="mx-auto mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-white/55">
                <p>
                  Every CMA you run scores your accuracy. Every score
                  update triggers coaching tailored to your patterns. Every
                  coaching insight makes your next CMA sharper. Your ACCS
                  score climbs. Your reputation grows. Clients see the
                  difference.
                </p>
                <p>
                  This isn&apos;t a tool you use once and forget. It&apos;s
                  a system that compounds. The agents who start earliest
                  will have the deepest track records, the highest scores,
                  and the strongest proof when consumers start getting
                  matched with agents by performance, not promises.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[24px] leading-snug text-ink sm:text-[32px] md:text-[40px] md:leading-snug"
            >
              &ldquo;This is the first platform that told me something about
              my business I didn&apos;t already know.&rdquo;
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8 text-sm text-muted"
            >
              Beta user &middot; 11-year agent &middot; Los Angeles
            </motion.p>
          </div>
        </section>

        {/* Identity CTA */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[56px] md:leading-tight"
            >
              The agents who get measured first
              <br />
              will be the ones who get chosen first.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/55"
            >
              Consumers will soon be matched with agents based on verified
              performance data. The agents who build their score now, who
              let the AI coach them, who run CMAs consistently, who treat
              every deal as training data, will be the ones who get matched
              first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
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

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0A0A0A] px-6 py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-white/70 hover:text-accent transition-colors">koqi.ai</Link>
              <Link href="/agents" className="text-sm text-accent transition-colors">Agents</Link>
              <Link href="/brokerages" className="text-sm text-white/40 hover:text-accent transition-colors">Brokerages</Link>
              <Link href="/consumers" className="text-sm text-white/40 hover:text-accent transition-colors">Consumers</Link>
            </div>
            <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Koqi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
