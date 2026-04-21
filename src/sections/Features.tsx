"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: "Your performance, quantified",
    body: "ACCS measures what matters: pricing accuracy, local expertise, confidence calibration, and consistency. One number. Always current. Impossible to game.",
  },
  {
    title: "Get paid to sharpen your instincts",
    body: "Submit GPS-verified pricing estimates on real properties in your market. The closer you are to reality, the more you earn. This isn\u2019t a quiz. It\u2019s a pricing gym.",
  },
  {
    title: "Know your market before your market knows you",
    body: "See where you dominate. See where you\u2019re invisible. ZIP-level performance data turns guesswork into strategy.",
  },
];

function ACCSCardVisual() {
  const scores = [
    { label: "Pricing Accuracy", value: 92, color: "#2A9D8F" },
    { label: "Confidence", value: 84, color: "#2A9D8F" },
    { label: "Local Expertise", value: 88, color: "#2A9D8F" },
    { label: "Consistency", value: 79, color: "#2A9D8F" },
  ];

  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Your Score</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-[52px] leading-none text-ink">87</span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">+3 this month</span>
              </div>
            </div>
            <div className="flex h-14 w-14 items-center justify-center">
              <svg width="56" height="56" className="-rotate-90">
                <circle cx="28" cy="28" r="24" fill="none" stroke="#E7E5E4" strokeWidth="3" />
                <circle cx="28" cy="28" r="24" fill="none" stroke="#2A9D8F" strokeWidth="3"
                  strokeDasharray={2 * Math.PI * 24}
                  strokeDashoffset={2 * Math.PI * 24 * (1 - 0.87)}
                  strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {scores.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-[12px]">
                  <span className="text-muted">{s.label}</span>
                  <span className="font-medium text-ink">{s.value}</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.value}%`, backgroundColor: s.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 border-t border-stone-100 pt-4">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="text-[11px] text-muted">Updated 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EstimateVisual() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
          <div className="relative h-24 overflow-hidden">
            <img
              src="/media/property-exterior.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L7 13M7 1L3 5M7 1L11 5" stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 7 7)" />
                  <circle cx="7" cy="13" r="1" fill="#2A9D8F" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-ink">1240 Hilldale Ave</p>
                <p className="text-[12px] text-muted">Los Angeles, CA 90069 &middot; 4bd &middot; 3ba &middot; 2,680 sqft</p>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">Your Estimate</label>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="flex h-10 flex-1 items-center rounded-lg border border-stone-200 bg-stone-50 px-3">
                  <span className="text-sm text-muted">$</span>
                  <span className="ml-0.5 text-sm font-medium text-ink">2,850,000</span>
                </div>
                <button className="h-10 rounded-lg bg-accent px-5 text-sm font-medium text-white">
                  Submit
                </button>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted">Confidence</span>
                <span className="font-medium text-ink">High</span>
              </div>
              <div className="mt-1.5 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className={`h-1 flex-1 rounded-full ${n <= 4 ? "bg-accent" : "bg-stone-100"}`} />
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-accent/5 px-3 py-2">
              <p className="text-[11px] text-accent">
                <span className="font-medium">+12 ACCS points</span> earned from your last estimate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerritoryVisual() {
  const zips = [
    { code: "90069", name: "West Hollywood", score: 94 },
    { code: "90046", name: "Hollywood Hills", score: 88 },
    { code: "90210", name: "Beverly Hills", score: 72 },
    { code: "90049", name: "Brentwood", score: 45 },
    { code: "90291", name: "Venice", score: 81 },
    { code: "90024", name: "Westwood", score: 67 },
  ];

  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Territory Strength</p>
            <p className="text-[11px] text-muted">Los Angeles</p>
          </div>

          <div className="mt-4 space-y-2">
            {zips.map((zip) => (
              <div key={zip.code} className="flex items-center gap-3">
                <span className="w-12 text-[11px] font-mono text-muted">{zip.code}</span>
                <div className="flex-1">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-ink">{zip.name}</span>
                    <span className="font-medium text-ink">{zip.score}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${zip.score}%`,
                        backgroundColor: zip.score > 80 ? "#2A9D8F" : zip.score > 60 ? "#2A9D8F99" : "#2A9D8F44",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
            <div className="flex items-center gap-3 text-[10px] text-muted">
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />Strong
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-accent/60" />Growing
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-accent/25" />Opportunity
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals = [ACCSCardVisual, EstimateVisual, TerritoryVisual];

function MobileFeatures() {
  return (
    <section className="block bg-stone-bg px-6 py-24 md:hidden">
      <div className="mx-auto max-w-xl">
        <p className="mb-16 font-display text-3xl leading-snug text-ink">
          Built around one question:
          <br />
          <span className="text-muted">
            what if your platform actually knew how good you are?
          </span>
        </p>
        <div className="space-y-20">
          {features.map((feature, i) => {
            const Visual = visuals[i];
            return (
              <div key={i}>
                <h3 className="font-display text-2xl text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  {feature.body}
                </p>
                <div className="mt-8 min-h-[360px]">
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesktopFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.min(
          Math.floor(progress * features.length),
          features.length - 1
        );
        setActiveIndex(index);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const ActiveVisual = visuals[activeIndex];

  return (
    <section className="hidden bg-stone-bg md:block">
      <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 flex h-screen items-center px-20">
          <div className="mx-auto flex w-full max-w-7xl gap-20">
            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-12 font-display text-[48px] leading-tight text-ink">
                Built around one question:
                <br />
                <span className="text-muted">
                  what if your platform actually knew how good you are?
                </span>
              </p>

              <div className="relative min-h-[100px]">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="transition-all duration-500"
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      position: activeIndex === i ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <h3 className="font-display text-2xl text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-muted">
                      {feature.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-2">
                {features.map((_, i) => (
                  <div
                    key={i}
                    className="h-0.5 w-8 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor:
                        activeIndex === i ? "#2A9D8F" : "#E7E5E4",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="w-full transition-all duration-500">
                <ActiveVisual />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <>
      <MobileFeatures />
      <DesktopFeatures />
    </>
  );
}
