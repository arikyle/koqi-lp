"use client";

import { motion } from "framer-motion";

function WordReveal({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.15 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

const paragraphs = [
  "You\u2019ve paid for the coaching programs that recycle the same advice.",
  "You\u2019ve bought leads that ghost before the first callback.",
  "You\u2019ve logged activity into dashboards that tell you nothing about how good you actually are.",
];

const noneStatements = [
  "None of them measure your pricing accuracy.",
  "None of them show you where you\u2019re strongest \u2014 or where you\u2019re bleeding deals.",
  "None of them reward you for improving.",
];

export function Tension() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-stone-bg px-6 py-24 md:py-0">
      <div className="max-w-[720px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl leading-snug text-ink md:text-[56px] md:leading-tight"
        >
          The industry sells agents more tools.
          <br />
          What agents need is an edge.
        </motion.h2>

        <div className="mt-[72px] space-y-6 text-xl leading-relaxed text-ink">
          {paragraphs.map((text, i) => (
            <WordReveal key={i}>{text}</WordReveal>
          ))}

          <div className="space-y-4 pt-4">
            {noneStatements.map((text, i) => (
              <WordReveal key={i}>{text}</WordReveal>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 font-display text-[26px] leading-snug text-ink sm:mt-[120px] sm:text-[32px] md:text-[40px]"
        >
          They track activity. Koqi tracks ability.
        </motion.p>
      </div>
    </section>
  );
}
