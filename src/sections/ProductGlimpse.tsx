"use client";

import { motion } from "framer-motion";
import { DeviceFrame } from "@/components/DeviceFrame";

export function ProductGlimpse() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-stone-bg px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-center font-display text-[28px] text-ink sm:mb-16 sm:text-4xl md:text-[48px]"
      >
        This is what seeing more looks like.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <DeviceFrame>
          {/* Replace with <video> when product-loop.mp4 is ready */}
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-muted">
              Product loop placeholder — /public/product-loop.mp4
            </span>
          </div>
        </DeviceFrame>
      </motion.div>
    </section>
  );
}
