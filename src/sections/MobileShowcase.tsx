"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IPhoneFrame } from "@/components/IPhoneFrame";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phoneGroups = [
  {
    label: "Your Performance",
    screens: [
      { src: "/media/screen-command-center.png", alt: "Command Center with ACCS score and active deals" },
      { src: "/media/screen-accs-performance.png", alt: "ACCS Performance breakdown by category" },
      { src: "/media/screen-estimates.png", alt: "Estimates dashboard with accuracy tracking" },
    ],
    interval: 3500,
  },
  {
    label: "Your Market",
    screens: [
      { src: "/media/screen-property-map.png", alt: "Property map with price markers" },
      { src: "/media/screen-property-detail.png", alt: "Property detail with photos and specs" },
      { src: "/media/screen-open-houses.png", alt: "Nearby open houses with RSVP" },
    ],
    interval: 4000,
  },
  {
    label: "AI Coach",
    screens: [
      { src: "/media/screen-ai-coach.png", alt: "Koqi AI performance coach" },
      { src: "/media/screen-ai-typing.png", alt: "Asking the AI coach for score improvement tips" },
      { src: "/media/screen-ai-response.png", alt: "AI coach delivering detailed performance analysis" },
    ],
    interval: 4500,
  },
];

function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background: "conic-gradient(from var(--aurora-angle), #2A9D8F 0%, #1a6b62 25%, #0d4a44 50%, #2A9D8F 75%, #3dc4b4 100%)",
          animation: "aurora-rotate 20s linear infinite, aurora-drift 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute left-[30%] top-[60%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #2A9D8F, transparent 70%)",
          animation: "aurora-drift 18s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute left-[70%] top-[40%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #3dc4b4, transparent 70%)",
          animation: "aurora-drift 22s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${5 + (i * 4.7) % 90}%`,
    top: `${20 + (i * 7.3) % 60}%`,
    size: 2 + (i % 3),
    delay: i * 0.8,
    duration: 6 + (i % 4) * 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-accent/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function PhoneGlow() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        className="h-[500px] w-[900px] rounded-full opacity-20 blur-[80px]"
        style={{ background: "radial-gradient(ellipse, #2A9D8F 0%, transparent 70%)" }}
      />
    </div>
  );
}

export function MobileShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!phonesRef.current) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const phones = phonesRef.current.querySelectorAll<HTMLElement>("[data-phone]");
    const container = phonesRef.current;

    gsap.set(container, { perspective: 1200 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 88%",
        end: "top 28%",
        scrub: 1.5,
      },
    });

    phones.forEach((phone, i) => {
      const centerOffset = Math.abs(i - 1);
      const startY = 220 - centerOffset * 50;

      gsap.set(phone, {
        y: startY,
        rotateX: 22,
        rotateY: (i - 1) * -6,
        scale: 0.82,
        opacity: 0,
        transformOrigin: "50% 100%",
      });

      const offset = i * 0.18;

      tl.to(phone, { opacity: 1, duration: 0.25 }, offset);
      tl.to(phone, {
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
      }, offset);
    });

    return () => {
      tl.kill();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const phonesY = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-6%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0A0A0A] px-6 py-24 md:py-32">
      <AuroraBackground />
      <FloatingParticles />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-24"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Mobile app
          </p>
          <h2 className="mt-4 font-display text-[28px] text-white sm:text-4xl md:text-[48px]">
            Your edge, everywhere.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/50">
            Check your ACCS, submit estimates, and get AI coaching. All from your phone.
          </p>
        </motion.div>

        <motion.div style={{ y: phonesY }} className="relative">
          <PhoneGlow />
          <div
            ref={phonesRef}
            className="relative flex flex-wrap items-end justify-center gap-8 sm:gap-12 md:flex-nowrap md:gap-16"
          >
            {phoneGroups.map((group, i) => (
              <div
                key={i}
                data-phone
                className="flex flex-col items-center"
              >
                <IPhoneFrame screens={group.screens} interval={group.interval} />
                <p className="mt-6 text-center text-sm font-medium text-white/70">
                  {group.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
