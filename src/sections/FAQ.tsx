"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Koqi, exactly?",
    answer:
      "A performance intelligence platform for real estate agents and brokerages. Koqi measures the skills that actually drive outcomes — pricing accuracy, market knowledge, confidence calibration — and rewards you for sharpening them.",
  },
  {
    question: "How is ACCS calculated?",
    answer:
      "ACCS combines five dimensions: pricing accuracy, confidence calibration, local specialization, property type expertise, and engagement. Scores decay with inactivity, so your number always reflects your current form.",
  },
  {
    question: "What does Estimate-to-Earn mean?",
    answer:
      "You submit pricing estimates on real properties in your market. The closer your estimate to the final sale price, the more you earn. It's deliberate practice with real stakes — a pricing gym for agents who want to stay sharp.",
  },
  {
    question: "What does it cost?",
    answer:
      "Koqi is free during private beta. Post-launch pricing will be role-based for agents, brokerages, and consumers.",
  },
  {
    question: "Who built this?",
    answer:
      "Koqi is built by RealiFi Inc. — a team of real estate professionals and engineers who believe agents deserve better tools and better recognition.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-stone-bg px-6 py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-12 font-display text-4xl text-ink">Questions</h2>

        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-ink transition-colors hover:text-accent"
              >
                {faq.question}
                <span className="ml-4 text-muted">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "300px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="pb-6 text-base leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
