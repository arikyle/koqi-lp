"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { ACCSRing } from "@/components/ACCSRing";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    icon: "★",
    title: "Online reviews can be bought",
    body: "5-star reviews are a marketing channel, not a quality signal. Agents with 200 reviews aren't necessarily better. They just asked more often.",
  },
  {
    icon: "📊",
    title: "Transaction count measures volume, not skill",
    body: "A busy agent isn't a skilled agent. An agent who closes 40 deals a year but misprices half of them costs their clients real money.",
  },
  {
    icon: "💰",
    title: "\"Top Producer\" is a spending badge",
    body: "Most \"Top Producer\" awards are based on GCI (gross commission income). That tells you what the agent earned. It says nothing about how well they served their clients.",
  },
  {
    icon: "📢",
    title: "Zillow features are paid placement",
    body: "The agent at the top of your Zillow search didn't get there by being the best. They got there by paying the most. That's advertising, not meritocracy.",
  },
];

const accsExplainer = [
  {
    title: "Pricing Accuracy",
    body: "Can this agent accurately estimate what your home will sell for? This is the single most valuable skill. And now it's measured.",
  },
  {
    title: "Confidence Calibration",
    body: "When they say \"I'm confident this will sell for $850K,\" are they right? Calibrated agents give you honest, reliable guidance.",
  },
  {
    title: "Local Specialization",
    body: "An agent who's proven in YOUR neighborhood, not just your city. ZIP-level accuracy data reveals genuine local expertise.",
  },
  {
    title: "Track Record",
    body: "ACCS decays with inactivity. A high score means the agent is sharp right now. Not coasting on a deal from six months ago.",
  },
];

export default function ConsumersPage() {
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
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, #2A9D8F 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
            >
              Coming Soon
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-8 font-display text-[36px] leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.1]"
            >
              Choose your agent
              <br />
              based on skill.
              <br />
              <span className="text-white/50">Not ad spend.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60"
            >
              The agent at the top of your Zillow search paid to be there. Koqi
              shows you who&apos;s actually good, with verified pricing accuracy
              data that no amount of marketing spend can fake.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <MagneticButton href="#" strength={0.3}>
                <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-accent px-10 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(42,157,143,0.4)]">
                  <span className="relative z-10">Join the Waitlist</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </MagneticButton>
              <p className="text-sm text-white/40">
                Be first to access agent scores in your market
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* The Problem */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px]"
            >
              Right now, you have no way to know
              <br />
              if your agent is actually skilled.
            </motion.h2>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="rounded-2xl border border-stone-200 bg-white p-8"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCS for Consumers */}
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
                <ACCSRing score={94} size={280} dark />
              </motion.div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease }}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-accent"
                >
                  The ACCS score
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className="mt-4 font-display text-[28px] leading-snug text-white sm:text-4xl"
                >
                  The first objective measure of
                  <br />
                  real estate agent quality.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                  className="mt-6 text-lg leading-relaxed text-white/55"
                >
                  ACCS (Agent Competency &amp; Calibration Score) measures what
                  actually matters when you&apos;re hiring someone to price the
                  biggest transaction of your life.
                </motion.p>
              </div>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2">
              {accsExplainer.map((item, i) => (
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
          </div>
        </section>

        {/* The Shift */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[48px] md:leading-tight"
            >
              Imagine choosing a doctor based on
              <br />
              who bought the biggest billboard.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted"
            >
              That&apos;s how real estate works today. The agents you see first
              aren&apos;t the best. They&apos;re the ones who spent the most
              on advertising. Koqi changes that by making skill visible and
              verifiable.
            </motion.p>
          </div>
        </section>

        {/* How It Will Work */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] text-white sm:text-4xl"
            >
              How it works for you.
            </motion.h2>

            <div className="mt-16 space-y-12">
              {[
                {
                  step: "1",
                  title: "Enter your ZIP code",
                  body: "See agents ranked by verified ACCS score in your specific neighborhood, not your metro area.",
                },
                {
                  step: "2",
                  title: "Compare real performance data",
                  body: "Pricing accuracy percentages. Confidence calibration. Property type expertise. Data that reviews and testimonials can never provide.",
                },
                {
                  step: "3",
                  title: "Choose with confidence",
                  body: "When you hire an agent with a 92 ACCS in your ZIP code, you know their pricing instincts are proven, not self-reported.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="flex gap-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 font-display text-lg text-accent">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-white/50">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Viral CTA */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[56px] md:leading-tight"
            >
              The best agents want you to see their score.
              <br />
              <span className="text-muted">The rest are hoping you don&apos;t.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10 flex flex-col items-center"
            >
              <MagneticButton href="#" strength={0.3}>
                <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-accent px-10 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(42,157,143,0.4)]">
                  <span className="relative z-10">Join the Waitlist</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </MagneticButton>
              <p className="mt-4 text-sm text-muted">
                Be first to access agent scores when we launch in your market
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-ink hover:text-accent transition-colors">koqi.ai</Link>
              <Link href="/agents" className="text-sm text-muted hover:text-accent transition-colors">Agents</Link>
              <Link href="/brokerages" className="text-sm text-muted hover:text-accent transition-colors">Brokerages</Link>
              <Link href="/consumers" className="text-sm text-accent transition-colors">Consumers</Link>
            </div>
            <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} Koqi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
