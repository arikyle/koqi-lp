"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IPhoneFrame } from "@/components/IPhoneFrame";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Brokerage() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }

    if (mq.matches || !phonesRef.current) return;

    const phones = phonesRef.current.querySelectorAll<HTMLElement>("[data-brokerage-phone]");

    gsap.set(phonesRef.current, { perspective: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phonesRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1.2,
      },
    });

    phones.forEach((phone, i) => {
      const direction = i === 0 ? -1 : 1;

      gsap.set(phone, {
        y: 180,
        x: direction * 50,
        opacity: 0,
        rotateY: direction * 12,
        rotateX: 15,
        scale: 0.85,
        transformOrigin: i === 0 ? "100% 100%" : "0% 100%",
      });

      const offset = i * 0.25;

      tl.to(phone, { opacity: 1, duration: 0.3 }, offset);
      tl.to(phone, {
        y: 0,
        x: 0,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.5,
      }, offset);
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <div className="relative flex min-h-screen items-center justify-center">
        <motion.div
          className="absolute inset-[-15%]"
          style={{ y: bgY }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/media/brokerage-poster.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/media/brokerage.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[600px] px-6 text-center"
        >
          <h2 className="font-display text-[28px] leading-snug text-white sm:text-4xl md:text-[48px] md:leading-tight">
            Your best agents already know they&apos;re good.
            <br />
            They&apos;re looking for a brokerage that can prove it.
          </h2>

          <div className="mt-10 space-y-4 text-lg leading-relaxed text-white/75">
            <p>
              Koqi gives brokerages real visibility into agent performance. Not
              just who&apos;s busy, but who&apos;s actually good.
            </p>
            <p>Track ACCS trends across your team.</p>
            <p>Spot coaching opportunities before they become attrition.</p>
            <p>
              Build a recruiting pitch backed by data your competitors can&apos;t
              match.
            </p>
            <p className="pt-4 text-white">
              The brokerages that measure what matters will be the ones that keep
              the agents who do.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://form.typeform.com/to/d7BbovyW"
              className="inline-block rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Request a Brokerage Demo
            </a>
          </div>
        </motion.div>
      </div>

      <div className="bg-[#0A0A0A] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Brokerage tools
            </p>
            <h3 className="mt-4 font-display text-[28px] text-white sm:text-4xl">
              See every agent. Know who&apos;s growing.
            </h3>
          </motion.div>

          <div
            ref={phonesRef}
            className="flex flex-wrap items-end justify-center gap-8 sm:gap-12 md:gap-16"
          >
            <div data-brokerage-phone className="flex flex-col items-center">
              <IPhoneFrame
                screens={[
                  { src: "/media/screen-agents-list.png", alt: "Brokerage agents ranked by ACCS score" },
                  { src: "/media/screen-agent-details.png", alt: "Agent profile with performance history" },
                ]}
                interval={4000}
              />
              <p className="mt-6 text-center text-sm font-medium text-white/70">
                Team Rankings
              </p>
            </div>

            <div data-brokerage-phone className="flex flex-col items-center" style={{ marginTop: 24 }}>
              <IPhoneFrame
                screens={[
                  { src: "/media/screen-accs-performance.png", alt: "ACCS Performance breakdown" },
                  { src: "/media/screen-estimate-form.png", alt: "Estimate quality assessment form" },
                ]}
                interval={4500}
              />
              <p className="mt-6 text-center text-sm font-medium text-white/70">
                Performance Tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
