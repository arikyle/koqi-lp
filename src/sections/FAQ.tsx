"use client";

import { useState } from "react";
import { faqPageSchema } from "@/lib/schema";

const faqs = [
  {
    question: "What is Koqi and how does it work?",
    answer:
      "Koqi is the AI-powered operating system for real estate. Your CRM stores your business. Koqi runs it. It measures pricing accuracy, market knowledge, and confidence calibration, distills them into one score called ACCS, and connects everything through an AI that works across your pipeline, your estimates, and live MLS data.",
  },
  {
    question: "What is the ACCS score?",
    answer:
      "ACCS stands for Agent Competency & Calibration Score. It combines five dimensions: pricing accuracy, confidence calibration, local specialization, property type expertise, and engagement consistency. Your score always reflects current form. It decays with inactivity, so it can't be gamed or inflated by past performance alone.",
  },
  {
    question: "What is the CMA tool?",
    answer:
      "Koqi's CMA (Comparative Market Analysis) walks you through property valuation step by step: subject property lookup, comp selection, adjustments, risk assessment, and pricing scenarios. It uses live market data, scores comps by relevance, and feeds each CMA into your ACCS accuracy record. You get more precise each time you use it.",
  },
  {
    question: "Which CRMs does Koqi integrate with?",
    answer:
      "Koqi integrates with Follow Up Boss and Lofty. Contacts, deals, notes, and call logs sync automatically. When you run a CMA, Koqi matches the client to your existing contacts and links or creates deals on the fly. More integrations are coming.",
  },
  {
    question: "Can I put my own branding on CMA reports?",
    answer:
      "Yes. Individual agents can apply their own branding to every CMA report. Brokerages get brand kits that put their identity on every report their agents send, plus shared templates to keep the whole roster on message. Reports can be shared as a live link or exported as a polished PDF.",
  },
  {
    question: "What does Koqi AI do?",
    answer:
      "Koqi AI has permissioned access to your contacts, deals, and MLS data. It drafts CMAs, pulls comps, summarizes your pipeline, and preps listing appointments. Every answer draws on your actual CRM records and live MLS data. You review everything before it ships. All data access is verified, authorized, and logged.",
  },
  {
    question: "How do pricing estimates work?",
    answer:
      "You submit GPS-verified pricing estimates on real properties listed in your market. After the property sells, Koqi compares your estimate to the final sale price. Every estimate builds your accuracy record and sharpens your ACCS score. It turns the work you already do into deliberate practice.",
  },
  {
    question: "Is Koqi free to use?",
    answer:
      "Koqi is completely free during the public beta. Your ACCS score starts building from day one, so early access members get a head start on establishing their performance profile. Post-launch pricing will be role-based, with separate tiers for individual agents, brokerages, and consumers.",
  },
  {
    question: "How does Koqi help brokerages?",
    answer:
      "Koqi gives brokerages visibility into agent pricing skill, not only deal volume. Track ACCS trends across your team, identify coaching opportunities before they become attrition, and build a recruiting pitch backed by performance data your competitors can't match.",
  },
  {
    question: "How is Koqi different from Zillow or Redfin for consumers?",
    answer:
      "Zillow and Redfin are advertising platforms that connect you with agents who pay for placement. Koqi matches you with agents based on verified performance data: pricing accuracy, local expertise, and property type specialization. No agent pays to appear. Valuations include confidence bands and expandable methodology. You see the data first, the agent second.",
  },
  {
    question: "What markets does Koqi cover?",
    answer:
      "Koqi is launching in California markets first, with ZIP-level performance data across the state. The platform is built to scale nationally, and new markets are added based on demand from the beta waitlist. Join early access to register interest in your market.",
  },
  {
    question: "How is Koqi different from a real estate CRM?",
    answer:
      "A CRM stores your business: calls made, emails sent, appointments booked. Koqi runs it. Your ACCS score is an objective, verifiable measure of your pricing instincts and market expertise. The AI works across your CRM data, your estimates, and live MLS data in one place. No CRM does that.",
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
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i ? "true" : "false"}
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
