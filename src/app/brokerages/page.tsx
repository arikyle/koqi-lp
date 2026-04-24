"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const painPoints = [
  {
    problem: "You can see who closed last quarter.",
    solution: "Koqi shows you who will close next quarter. And why.",
  },
  {
    problem: "You coach based on gut feel.",
    solution:
      "Koqi pinpoints the exact skill gap holding each agent back: pricing accuracy, calibration, local knowledge. Coaching conversations become specific, not generic.",
  },
  {
    problem: "You recruit on splits and promises.",
    solution:
      "Koqi gives you a recruiting pitch backed by performance data your competitors can't match. The best agents want to work where excellence is measured.",
  },
  {
    problem: "You lose top agents and don't know why.",
    solution:
      "Top agents leave when they feel invisible. Koqi makes their skill visible on the team dashboard. Not just their volume. Their actual expertise.",
  },
];

const metrics = [
  { value: "5", label: "ACCS dimensions tracked per agent" },
  { value: "ZIP", label: "Level performance data" },
  { value: "30d", label: "Rolling score, always current form" },
  { value: "∞", label: "Historical trend data" },
];

export default function BrokeragesPage() {
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
                "radial-gradient(ellipse at 70% 40%, #2A9D8F 0%, transparent 55%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-accent"
            >
              For brokerages
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-6 font-display text-[36px] leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.1]"
            >
              You know who&apos;s busy.
              <br />
              <span className="text-white/50">
                Do you know who&apos;s actually good?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Koqi gives brokerages real-time visibility into agent skill,
              not just activity. Track ACCS scores across your team. Spot
              coaching opportunities before they become attrition. Build a
              recruiting advantage your competitors can&apos;t replicate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-10"
            >
              <MagneticButton href="https://form.typeform.com/to/d7BbovyW" strength={0.3}>
                <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full border-2 border-white/80 px-10 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#0A0A0A]">
                  <span className="relative z-10">Request a Demo</span>
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </section>

        {/* Pain → Solution */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted"
            >
              The visibility gap
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mt-4 text-center font-display text-[28px] text-ink sm:text-4xl md:text-[48px]"
            >
              CRMs track what happened.
              <br />
              Koqi shows what&apos;s coming.
            </motion.h2>

            <div className="mt-20 space-y-16">
              {painPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, ease }}
                  className="grid gap-6 md:grid-cols-2 md:gap-12"
                >
                  <p className="font-display text-xl text-ink/40 line-through decoration-accent/40 decoration-2 md:text-right">
                    {item.problem}
                  </p>
                  <p className="text-lg leading-relaxed text-ink">
                    {item.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="bg-[#0A0A0A] px-6 py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-center"
              >
                <p className="font-display text-[40px] text-accent">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-white/50">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brokerage Tools - Phones */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="mb-16 text-center md:mb-24"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Brokerage dashboard
              </p>
              <h2 className="mt-4 font-display text-[28px] text-ink sm:text-4xl">
                See every agent. Know who&apos;s growing.
              </h2>
            </motion.div>

            <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12 md:flex-nowrap md:gap-16">
              {[
                {
                  screens: [
                    { src: "/media/screen-agents-list.png", alt: "Agent rankings" },
                    { src: "/media/screen-agent-details.png", alt: "Agent details" },
                  ],
                  label: "Team Rankings",
                  interval: 4000,
                },
                {
                  screens: [
                    { src: "/media/screen-accs-performance.png", alt: "ACCS breakdown" },
                    { src: "/media/screen-command-center.png", alt: "Command center" },
                  ],
                  label: "Performance Analytics",
                  interval: 4500,
                },
              ].map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease }}
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

        {/* Use Cases */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
              className="text-center font-display text-[28px] text-white sm:text-4xl"
            >
              Three things that change immediately.
            </motion.h2>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {[
                {
                  title: "Coaching",
                  body: "Stop saying \"prospect more.\" Start saying \"your condo pricing is 12% off in 90402. Here's a targeted drill.\"",
                },
                {
                  title: "Recruiting",
                  body: "\"We measure performance here. Our average agent ACCS is 84.\" That pitch wins talent that splits alone never could.",
                },
                {
                  title: "Retention",
                  body: "When your top agents see their excellence recognized on a team dashboard, not volume but actual skill, they stay.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                >
                  <h3 className="font-display text-xl text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/55">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[56px] md:leading-tight"
            >
              The brokerages that measure what matters
              <br />
              will keep the agents who do.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10"
            >
              <MagneticButton href="https://form.typeform.com/to/d7BbovyW" strength={0.3}>
                <span className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-accent px-10 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(42,157,143,0.4)]">
                  <span className="relative z-10">Request a Brokerage Demo</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </MagneticButton>
              <p className="mt-4 text-sm text-muted">
                See your team&apos;s performance in a live walkthrough
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
              <Link href="/brokerages" className="text-sm text-accent transition-colors">Brokerages</Link>
              <Link href="/consumers" className="text-sm text-muted hover:text-accent transition-colors">Consumers</Link>
            </div>
            <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} Koqi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
