"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { MagneticButton } from "@/components/MagneticButton";
import { AppStoreBadge } from "@/components/AppStoreBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const cmaCenter = [
  { src: "/media/screen-cma-report.png", alt: "CMA report cover" },
  { src: "/media/screen-cma-estimate.png", alt: "Estimated market value" },
  { src: "/media/screen-cma-comp-detail.png", alt: "Comp detail with adjustments" },
];
const cmaLeft = [
  { src: "/media/screen-cma-property.png", alt: "Property entry" },
  { src: "/media/screen-cma-market-context.png", alt: "Market context data" },
];
const cmaRight = [
  { src: "/media/screen-cma-value-evidence.png", alt: "Value evidence scatter" },
  { src: "/media/screen-cma-market-position.png", alt: "Market position analysis" },
];

const marketLeft = [
  { src: "/media/screen-market-perspective.png", alt: "Perspective signal by ZIP" },
  { src: "/media/screen-market-negotiation.png", alt: "Negotiation pressure map" },
];
const marketRight = [
  { src: "/media/screen-market-decision.png", alt: "Decision brief with buyer leverage" },
  { src: "/media/screen-market-price-detail.png", alt: "Price context and housing mix" },
];

const aiScreens = [
  { src: "/media/screen-ai-listings.png", alt: "AI surfacing new listings with coaching" },
  { src: "/media/screen-ai-analysis.png", alt: "AI market snapshot analysis" },
  { src: "/media/screen-ai-working.png", alt: "AI processing market data" },
  { src: "/media/screen-ai-home.png", alt: "AI command center" },
];

const crmLeft = [
  { src: "/media/screen-crm-contacts.png", alt: "CRM contacts list" },
  { src: "/media/screen-crm-leads.png", alt: "CRM leads pipeline" },
];
const crmRight = [
  { src: "/media/screen-crm-ai-deals.png", alt: "AI reviewing deals" },
  { src: "/media/screen-crm-deal.png", alt: "Deal detail view" },
  { src: "/media/screen-crm-contact-detail.png", alt: "Contact profile" },
];

const tools = [
  { label: "CMA Engine", desc: "Score every comp", anchor: "cma" },
  { label: "Market Intel", desc: "Read every ZIP", anchor: "market-insights" },
  { label: "Koqi AI", desc: "Coach every move", anchor: "ai" },
  { label: "CRM", desc: "Own every relationship", anchor: "crm" },
  { label: "Campaigns", desc: "Reach every seller", anchor: "campaigns" },
];

function ToolMap() {
  const pts = [
    { left: "50%", top: "10%" },
    { left: "88%", top: "37.6%" },
    { left: "73.5%", top: "82.4%" },
    { left: "26.5%", top: "82.4%" },
    { left: "12%", top: "37.6%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto aspect-square w-full max-w-[380px]"
    >
      <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]">
        <svg
          viewBox="235 65 600 570"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path fill="rgba(255,255,255,0.4)" d="M413.53,86.95c11.1,0,10.18,10.18,10.18,10.18v173.83l-168.81,171.92V99.28c0-14.59,13.63-13.15,13.63-13.15,0,0,133.9.82,145,.82ZM254.11,464.82v144.83c0,10.92,9.22,9.22,9.22,9.22h24.9s163.8-167.54,172.26-176c8.46-8.46,16.29,0,16.29,0l173.04,176h165.42c6.18,0,5.95-3.31,5.95-7.35s-6.11-9.17-6.11-9.17c0,0-230.14-235.17-241.31-246.34-11.17-11.17,0-21.42,0-21.42,0,0,238.62-235.6,238.82-242.87.21-7.27-6.65-5.82-6.65-5.82,0,0-175.78-.21-180.77,0s-8.73,5.82-8.73,5.82L254.11,464.82Z"/>
        </svg>
      </div>

      {tools.map((tool, i) => (
        <motion.a
          key={tool.anchor}
          href={`#${tool.anchor}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
          className="group absolute -translate-x-1/2 -translate-y-1/2 text-center"
          style={pts[i]}
        >
          <span className="block font-display text-[15px] text-white/50 transition-colors group-hover:text-white md:text-[19px]">
            {tool.label}
          </span>
          <span className="mt-1 block text-[11px] text-white/20 transition-colors group-hover:text-accent md:text-xs">
            {tool.desc}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0A0A0A] px-6 pb-24 pt-40 md:pb-32 md:pt-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 70%, #2A9D8F 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <motion.h1
                  initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease }}
                  className="font-display text-[40px] leading-[1.08] text-white sm:text-6xl md:text-[72px]"
                >
                  Five tools that
                  <br />
                  talk to each other.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease }}
                  className="mt-8 max-w-xl text-xl leading-relaxed text-white/50"
                >
                  CMA engine. Market intelligence. AI coaching.
                  CRM and prospecting. Campaigns that convert. Each one is
                  sharp alone. Together, they compound.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ToolMap />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CMA ENGINE ── */}
        <section id="cma" className="bg-stone-bg px-6 py-24 md:py-40">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                CMA Engine
              </p>
              <h2 className="mt-6 font-display text-[32px] leading-snug text-ink sm:text-5xl md:text-[64px] md:leading-[1.1]">
                A CMA that gets smarter every time a home closes.
              </h2>
              <p className="mt-8 max-w-[640px] text-xl leading-relaxed text-ink/70">
                Most CMA tools hand you comps and walk away. Koqi walks you
                through the valuation, scores every comp by relevance, applies
                market-aware adjustments, and checks itself against verified
                sale prices when the property closes. Run ten CMAs and
                you&apos;ll feel the difference in your pricing instincts. Run
                fifty and your ACCS score proves it.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div
              className="flex items-center justify-center gap-0 md:gap-4"
              style={{ perspective: 1200 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="hidden md:block"
                style={{
                  transform: "rotate(-8deg) translateY(24px) scale(0.88)",
                }}
              >
                <IPhoneFrame screens={cmaLeft} interval={4000} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease }}
                className="relative z-10"
              >
                <IPhoneFrame screens={cmaCenter} interval={3500} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="hidden md:block"
                style={{
                  transform: "rotate(8deg) translateY(24px) scale(0.88)",
                }}
              >
                <IPhoneFrame screens={cmaRight} interval={4500} />
              </motion.div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="max-w-[640px] text-lg leading-relaxed text-ink/60"
            >
              Every comp gets a similarity score. Adjustments show dollar
              amounts. The report includes confidence bands and three pricing
              scenarios (conservative, market, aspirational) with expected
              days on market for each. Share it as a live link or export a
              polished PDF with your branding on every page.
            </motion.p>
          </div>
        </section>

        {/* ── MARKET INTELLIGENCE ── */}
        <section id="market-insights" className="bg-[#0A0A0A] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Market Intelligence
              </p>
              <h2 className="mt-6 font-display text-[32px] leading-snug text-white sm:text-5xl md:text-[64px] md:leading-[1.1]">
                Know your ZIP better than anyone selling in it.
              </h2>
              <p className="mt-8 max-w-[640px] text-xl leading-relaxed text-white/50">
                Koqi maps negotiation pressure, buyer leverage, and perspective
                signals across every ZIP in your territory. Not a quarterly
                PDF. A living view that shifts when the market shifts.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-20 max-w-4xl">
            <div
              className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12"
              style={{ perspective: 1200 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease }}
                style={{ transform: "rotate(-4deg)" }}
              >
                <IPhoneFrame screens={marketLeft} interval={4000} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.15, ease }}
                style={{ transform: "rotate(4deg)" }}
              >
                <IPhoneFrame screens={marketRight} interval={4500} />
              </motion.div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="max-w-[640px] text-lg leading-relaxed text-white/40"
            >
              Pull up a ZIP before a listing appointment and you&apos;ll know
              the buyer leverage score, the median asking price, listings with
              cuts, average market time, and the housing mix by property type.
              Your scoreboard. Updated with every closing.
            </motion.p>
          </div>
        </section>

        {/* ── KOQI AI ── */}
        <section id="ai" className="bg-stone-bg px-6 py-24 md:py-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Koqi AI
                </p>
                <h2 className="mt-6 font-display text-[32px] leading-snug text-ink sm:text-5xl md:text-[56px] md:leading-[1.1]">
                  An AI that doesn&apos;t summarize. It thinks.
                </h2>
                <p className="mt-8 text-xl leading-relaxed text-ink/70">
                  Ask it to analyze a ZIP and it pulls active listings, scores
                  negotiation pressure, finds the new listings worth noting,
                  and tells you which of your hot contacts might be shopping
                  there. It reads your CRM, your CMAs, and live MLS data.
                  You review everything before it ships.
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink/40">
                  Every data access is verified, authorized, and logged.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="flex justify-center"
                style={{ perspective: 1200 }}
              >
                <div style={{ transform: "scale(1.1)" }}>
                  <IPhoneFrame screens={aiScreens} interval={3000} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CRM ── */}
        <section id="crm" className="bg-[#0A0A0A] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                CRM
              </p>
              <h2 className="mt-6 font-display text-[32px] leading-snug text-white sm:text-5xl md:text-[64px] md:leading-[1.1]">
                Your entire pipeline, from stranger to closing.
              </h2>
              <p className="mt-8 max-w-[640px] text-xl leading-relaxed text-white/50">
                Connect Follow Up Boss or Lofty and your contacts, deals,
                notes, and call logs flow in automatically. Import property
                owner lists and Koqi builds a prospecting database with seller
                opportunity scores. Define farm areas by ZIP code and the AI
                monitors them for listing opportunities. When a prospect is
                ready, promote them to your CRM with one tap.
              </p>

              <div className="mt-10 flex items-center gap-8">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/25">
                  Integrates with
                </p>
                <div className="flex items-center gap-6">
                  <svg viewBox="0 0 140 28" className="h-6 w-auto" aria-label="Follow Up Boss">
                    <text x="0" y="21" fill="#E8552D" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="-0.3">
                      Follow Up Boss
                    </text>
                  </svg>
                  <svg viewBox="0 0 60 28" className="h-6 w-auto" aria-label="Lofty">
                    <text x="0" y="21" fill="#3B82F6" fontFamily="system-ui, -apple-system, sans-serif" fontSize="17" fontWeight="700" letterSpacing="-0.5">
                      Lofty
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-20 max-w-4xl">
            <div
              className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12"
              style={{ perspective: 1200 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease }}
                style={{ transform: "rotate(-4deg)" }}
              >
                <IPhoneFrame screens={crmLeft} interval={4000} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.15, ease }}
                style={{ transform: "rotate(4deg)" }}
              >
                <IPhoneFrame screens={crmRight} interval={3500} />
              </motion.div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="max-w-[640px] text-lg leading-relaxed text-white/40"
            >
              The AI reads your full pipeline: prospects, contacts, deals, and
              live market data. Ask which neighborhood to prospect next and it
              cross-references your accuracy scores with seller signals to show
              you where you&apos;ll win.
            </motion.p>
          </div>
        </section>

        {/* ── CAMPAIGNS ── */}
        <section id="campaigns" className="bg-stone-bg px-6 py-24 md:py-40">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Campaigns
              </p>
              <h2 className="mt-6 font-display text-[32px] leading-snug text-ink sm:text-5xl md:text-[64px] md:leading-[1.1]">
                Outreach that proves you know the neighborhood.
              </h2>
              <p className="mt-8 max-w-[640px] text-xl leading-relaxed text-ink/70">
                Most agent outreach is generic, mass-produced, and ignored.
                Koqi&apos;s campaign system writes letters and emails backed by
                actual property data, market intelligence, and your verified
                track record.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "AI-drafted, data-backed",
                  body: "The AI writes personalized buyer interest letters using real comps and market conditions for each property. Not templates. Not mail merge. Outreach that reads like you did the homework, because the AI actually did.",
                },
                {
                  title: "Audience builder",
                  body: "Filter your prospecting database by ZIP, property type, equity estimate, or ownership duration. Build targeted audiences and the AI tailors the message to each segment.",
                },
                {
                  title: "Compliance and measurement",
                  body: "CAN-SPAM and DNC checks built in. Holdout groups on every campaign so you can measure lift. Send through your connected Gmail or export for direct mail. You know what works because you measured it.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className=""
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
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[32px] leading-snug text-white sm:text-5xl md:text-[64px] md:leading-tight"
            >
              Start with one tool.
              <br />
              The rest follow.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/50"
            >
              Run a CMA. Connect your CRM. Launch a campaign. Let the AI
              take it from there. Every action feeds the system and the
              system feeds you back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mt-10 flex flex-col items-center gap-5"
            >
              <AppStoreBadge />

              <MagneticButton
                href="https://form.typeform.com/to/d7BbovyW"
                strength={0.3}
              >
                <span className="text-sm font-medium text-white/40 transition-colors duration-300 hover:text-accent">
                  Or request a demo &rarr;
                </span>
              </MagneticButton>

              <p className="mt-2 text-sm text-white/30">
                Free during beta. Your score starts building on day one.
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-stone-200 bg-stone-bg px-6 py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link
                href="/"
                className="text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                koqi.ai
              </Link>
              <Link
                href="/agents"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Agents
              </Link>
              <Link
                href="/brokerages"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Brokerages
              </Link>
              <Link
                href="/consumers"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Consumers
              </Link>
              <Link
                href="/solutions"
                className="text-sm text-accent transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Pricing
              </Link>
            </div>
            <p className="text-xs text-muted/60">
              &copy; {new Date().getFullYear()} Koqi. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
