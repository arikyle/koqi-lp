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

const heatmapIntensities = [
  0.7, 0.3, 0.9, 0.15, 0.5, 0.3, 0.9, 0.5, 0.7, 0.15,
  0.5, 0.15, 0.7, 0.3, 0.9, 0.9, 0.5, 0.15, 0.7, 0.3,
  0.15, 0.7, 0.3, 0.5, 0.9,
];

function ACCSPlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-accent">
        <span className="font-display text-6xl text-ink">87</span>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-sm font-medium text-ink">ACCS Score</p>
        <div className="flex gap-4 text-xs text-muted">
          <span>Pricing 92</span>
          <span>Confidence 84</span>
          <span>Local 88</span>
        </div>
      </div>
    </div>
  );
}

function EstimatePlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-8">
      <div className="w-full max-w-sm rounded-xl border border-stone-200 bg-white p-6">
        <p className="text-xs text-muted">123 Palm Avenue, Miami FL</p>
        <p className="mt-1 text-sm text-ink">3 bed · 2 bath · 1,840 sqft</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-10 flex-1 rounded-lg border border-stone-200 px-3 flex items-center">
            <span className="text-sm text-muted">$685,000</span>
          </div>
          <div className="rounded-lg bg-accent px-4 py-2.5 text-sm text-white">
            Submit
          </div>
        </div>
        <div className="mt-3">
          <p className="text-xs text-muted">Confidence</p>
          <div className="mt-1 h-2 w-full rounded-full bg-stone-100">
            <div className="h-2 w-3/4 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TerritoryPlaceholder() {
  return (
    <div className="flex h-full items-center justify-center px-8">
      <div className="grid w-full max-w-sm grid-cols-5 gap-1.5">
        {heatmapIntensities.map((intensity, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ backgroundColor: `rgba(42, 157, 143, ${intensity})` }}
          />
        ))}
      </div>
    </div>
  );
}

const visuals = [ACCSPlaceholder, EstimatePlaceholder, TerritoryPlaceholder];

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
                <div className="mt-8 h-[300px] rounded-2xl border border-stone-200 bg-white/50">
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

              <div className="relative">
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
              <div className="h-[400px] w-full rounded-2xl border border-stone-200 bg-white/50 transition-all duration-500">
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
