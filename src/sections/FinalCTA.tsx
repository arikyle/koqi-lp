"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden px-6"
        style={{ minHeight: "80vh" }}
      >
        <img
          src="/media/property-twilight.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center font-display text-[32px] leading-snug text-white sm:text-5xl md:text-[64px] md:leading-tight"
        >
          You already know if you&apos;re good.
          <br />
          Now prove it.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 flex flex-col items-center"
        >
          <a
            href="#"
            className="inline-flex h-14 items-center rounded-full bg-accent px-10 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Early Access
          </a>

          <p className="mt-6 text-sm text-white/60">
            Free during beta. Your score starts building on day one.
          </p>
        </motion.div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-bg px-6 py-8">
        <p className="text-center text-sm text-muted">
          koqi.ai &middot; Built by RealiFi Inc. &middot; hello@koqi.ai
        </p>
      </footer>
    </>
  );
}
