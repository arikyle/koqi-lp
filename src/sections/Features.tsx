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
    image: "/media/accs-breakdown.png",
    alt: "ACCS Performance breakdown showing score dimensions",
  },
  {
    title: "Get paid to sharpen your instincts",
    body: "Submit GPS-verified pricing estimates on real properties in your market. The closer you are to reality, the more you earn. This isn’t a quiz. It’s a pricing gym.",
    image: "/media/property-detail.png",
    alt: "Property detail page with RealiWorth AI valuation",
  },
  {
    title: "Know your market before your market knows you",
    body: "See where you dominate. See where you’re invisible. ZIP-level performance data turns guesswork into strategy.",
    image: "/media/properties-map.png",
    alt: "Properties map view showing LA market coverage",
  },
];

function ScreenshotVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-lg">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

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
          {features.map((feature, i) => (
            <div key={i}>
              <h3 className="font-display text-2xl text-ink">
                {feature.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                {feature.body}
              </p>
              <div className="mt-8">
                <ScreenshotVisual src={feature.image} alt={feature.alt} />
              </div>
            </div>
          ))}
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

            <div className="relative flex-1">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="inset-0 w-full transition-opacity duration-500"
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    position: i === 0 ? "relative" : "absolute",
                    pointerEvents: activeIndex === i ? "auto" : "none",
                  }}
                >
                  <ScreenshotVisual src={feature.image} alt={feature.alt} />
                </div>
              ))}
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
