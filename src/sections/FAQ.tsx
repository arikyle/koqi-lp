"use client";

import { useState } from "react";
import { faqPageSchema } from "@/lib/schema";

const faqs = [
  {
    question: "What is Koqi and how does it work?",
    answer:
      "Koqi is a performance intelligence platform for real estate agents and brokerages. It measures the skills that actually predict outcomes: pricing accuracy, market knowledge, and confidence calibration. It distills them into one score called ACCS. Unlike CRM dashboards that track activity, Koqi tracks ability.",
  },
  {
    question: "What is the ACCS score?",
    answer:
      "ACCS stands for Agent Competency & Calibration Score. It combines five dimensions: pricing accuracy, confidence calibration, local specialization, property type expertise, and engagement consistency. Your score always reflects current form. It decays with inactivity, so it can't be gamed or inflated by past performance alone.",
  },
  {
    question: "How does Estimate-to-Earn work?",
    answer:
      "You submit GPS-verified pricing estimates on real properties listed in your market. After the property sells, Koqi compares your estimate to the final sale price. The closer you are, the more you earn. It's deliberate practice with real stakes. A pricing gym that rewards you for getting sharper.",
  },
  {
    question: "Is Koqi free to use?",
    answer:
      "Koqi is completely free during the private beta. Your ACCS score starts building from day one, so early access members get a head start on establishing their performance profile. Post-launch pricing will be role-based, with separate tiers for individual agents, brokerages, and consumers.",
  },
  {
    question: "How does Koqi help brokerages?",
    answer:
      "Koqi gives brokerages data-driven visibility into agent performance. Not just who's closing deals, but who's actually skilled at pricing. Track ACCS trends across your entire team, identify coaching opportunities before they become attrition, and build a recruiting pitch backed by performance data your competitors can't match.",
  },
  {
    question: "What markets does Koqi cover?",
    answer:
      "Koqi is launching in California markets first, with ZIP-level performance data across the state. The platform is built to scale nationally, and new markets are added based on demand from the beta waitlist. Join early access to register interest in your market.",
  },
  {
    question: "How is Koqi different from a real estate CRM?",
    answer:
      "CRMs track activity: calls made, emails sent, appointments booked. Koqi measures skill. It answers a fundamentally different question: not 'how busy are you?' but 'how good are you?' Your ACCS score is an objective, verifiable measure of your pricing instincts and market expertise that no CRM can replicate.",
  },
  {
    question: "Can I use my ACCS score for recruiting or marketing?",
    answer:
      "Yes. A high ACCS score is a verified credential. Agents can share their score with prospective clients and brokerages as proof of pricing expertise. Brokerages can use team ACCS data in recruiting materials to attract top talent. It's the first real estate performance metric that's independently verifiable.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-stone-bg px-6 py-24" id="faq">
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-12 font-display text-4xl text-ink">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-stone-200" role="list">
          {faqs.map((faq, i) => (
            <div key={i} role="listitem">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-ink transition-colors hover:text-accent"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-muted" aria-hidden="true">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
    </section>
  );
}
