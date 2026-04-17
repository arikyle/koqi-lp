"use client";

import { motion } from "framer-motion";

export function Proof() {
  return (
    <section
      className="flex items-center justify-center bg-stone-bg px-6"
      style={{ minHeight: "60vh" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[600px] text-center"
      >
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Now in private beta
        </p>

        <blockquote className="font-display text-2xl leading-relaxed text-ink md:text-3xl">
          &ldquo;This is the first platform that told me something about my
          business I didn&apos;t already know.&rdquo;
        </blockquote>

        <p className="mt-6 text-sm text-muted">
          Beta user &middot; 11-year agent &middot; South Florida
        </p>
      </motion.div>
    </section>
  );
}
