"use client";

import { useState } from "react";
import { faqPageSchema } from "@/lib/schema";

const faqs = [
  {
    question: "What is Koqi and how does it work?",
    answer:
      "Koqi is a performance intelligence platform for real estate agents and brokerages. It measures pricing accuracy, market knowledge, and confidence calibration, then distills them into one score called ACCS. CRM dashboards track activity. Koqi tracks ability.",
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
    question: "Does Koqi integrate with my CRM?",
    answer:
      "Koqi integrates with Follow Up Boss. Contacts, deals, notes, and call logs sync automatically. When you run a CMA, Koqi matches the client to your existing contacts and links or creates deals automatically. Your API key is encrypted at rest and sync logs show exactly what moved. More integrations are coming.",
  },
  {
    question: "What does the AI coach do?",
    answer:
      "Koqi's AI coach has permissioned access to your contacts, deals, and MLS data. Ask it to find properties for a client, analyze a deal, or surface follow-up opportunities. It responds with interactive cards showing valuations and context. All data access is verified and authorized.",
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
      "CRMs track activity: calls made, emails sent, appointments booked. Koqi measures skill. Your ACCS score is an objective, verifiable measure of your pricing instincts and market expertise. No CRM captures that.",
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
