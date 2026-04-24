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
    title: "Your performance, quantified",
    description:
      "ACCS measures the five dimensions that actually predict success: pricing accuracy, confidence calibration, local specialization, property type expertise, and consistency. One score. Always current. Impossible to game.",
  },
  {
    number: "02",
    title: "Get rewarded for sharpening your instincts",
    description:
      "Submit GPS-verified pricing estimates on real properties in your market. The closer you are to reality, the more you earn. This isn't a quiz. It's a pricing gym that rewards you for getting sharper.",
  },
  {
    number: "03",
    title: "AI coaching built on your data",
    description:
      "Koqi's AI analyzes your ACCS patterns to deliver coaching that's actually specific to you. Not generic scripts. Not mindset platitudes. Targeted feedback on where you're strong and where you're leaving deals on the table.",
  },
  {
    number: "04",
    title: "Own your reputation",
    description:
      "Your ACCS score is a portable, verifiable credential. It follows you across brokerages. Show prospective clients proof of your pricing expertise that reviews and transaction counts can never provide.",
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
              For agents
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-6 font-display text-[36px] leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.1]"
            >
              This isn&apos;t for every agent.
              <br />
              <span className="text-white/50">
                It&apos;s for agents who want to be measured.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Koqi quantifies the skills that actually matter: pricing
              accuracy, market expertise, and calibration. A score your
              competitors can&apos;t fake.
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

        {/* ACCS Score */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-16 md:flex-row md:gap-20">
              <motion.div
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease }}
                className="shrink-0"
              >
                <ACCSRing score={92} size={320} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  The ACCS score
                </p>
                <h2 className="mt-4 font-display text-[28px] leading-snug text-ink sm:text-4xl">
                  One number that proves what you&apos;re worth.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  Transaction count says you&apos;re busy. GCI says you earn.
                  Neither says you&apos;re{" "}
                  <em className="text-ink">good</em>. ACCS does. It measures
                  pricing accuracy, confidence calibration, local expertise,
                  and consistency. In real time. Always decaying. Impossible
                  to coast on.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  The agents who score highest aren&apos;t always the ones
                  who close the most. They&apos;re the ones who price the
                  best. And now, for the first time, that&apos;s provable.
                </p>
              </motion.div>
            </div>
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
              Built for agents who take their craft seriously.
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
                Everything you need. Nothing you don&apos;t.
              </h2>
            </motion.div>

            <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12 md:flex-nowrap md:gap-16">
              {[
                {
                  screens: [
                    { src: "/media/screen-command-center.png", alt: "Command Center" },
                    { src: "/media/screen-accs-performance.png", alt: "ACCS Performance" },
                  ],
                  label: "Track Your Score",
                  interval: 3500,
                },
                {
                  screens: [
                    { src: "/media/screen-estimates.png", alt: "Estimates" },
                    { src: "/media/screen-estimate-form.png", alt: "Estimate Form" },
                  ],
                  label: "Estimate & Earn",
                  interval: 4000,
                },
                {
                  screens: [
                    { src: "/media/screen-ai-coach.png", alt: "AI Coach" },
                    { src: "/media/screen-ai-response.png", alt: "AI Response" },
                  ],
                  label: "Get AI Coaching",
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

        {/* Social Proof */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[24px] leading-snug text-white sm:text-[32px] md:text-[40px] md:leading-snug"
            >
              &ldquo;This is the first platform that told me something about
              my business I didn&apos;t already know.&rdquo;
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8 text-sm text-white/40"
            >
              Beta user &middot; 11-year agent &middot; Los Angeles
            </motion.p>
          </div>
        </section>

        {/* Identity CTA */}
        <section className="bg-stone-bg px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[28px] leading-snug text-ink sm:text-4xl md:text-[56px] md:leading-tight"
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
              className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted"
            >
              Consumers will soon see ACCS scores when choosing an agent.
              The agents who build their score now will have a head start
              their competitors can never close.
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
              <p className="mt-4 text-sm text-muted">
                Free during beta &middot; Your score starts building on day one
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-ink hover:text-accent transition-colors">koqi.ai</Link>
              <Link href="/agents" className="text-sm text-accent transition-colors">Agents</Link>
              <Link href="/brokerages" className="text-sm text-muted hover:text-accent transition-colors">Brokerages</Link>
              <Link href="/consumers" className="text-sm text-muted hover:text-accent transition-colors">Consumers</Link>
            </div>
            <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} Koqi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
