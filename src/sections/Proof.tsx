"use client";

import { motion } from "framer-motion";

export function Proof() {
  return (
    <section className="relative overflow-hidden bg-stone-bg">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-6 py-24 md:py-32 md:pr-16 md:pl-12"
        >
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Now in private beta
          </p>

          <blockquote className="font-display text-[28px] leading-snug text-ink md:text-[36px] md:leading-snug">
            &ldquo;This is the first platform that told me something about my
            business I didn&apos;t already know.&rdquo;
          </blockquote>

          <p className="mt-8 text-sm text-muted">
            Beta user &middot; 11-year agent &middot; Los Angeles
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-h-[400px] md:block"
        >
          <img
            src="/media/interior-warm.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
