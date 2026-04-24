const SITE_URL = "https://koqi.ai";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Koqi",
    url: SITE_URL,
    logo: `${SITE_URL}/Koqi-Gradient.svg`,
    description:
      "Performance intelligence platform for real estate agents and brokerages. Koqi quantifies agent skill, sharpens pricing instincts, and rewards continuous improvement.",
    email: "hello@koqi.ai",
    sameAs: [],
    foundingDate: "2024",
    knowsAbout: [
      "Real Estate Agent Performance",
      "Pricing Accuracy Analytics",
      "Real Estate Technology",
      "Agent Skill Assessment",
      "Brokerage Intelligence",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Koqi",
    url: SITE_URL,
    description:
      "Performance intelligence platform for real estate agents and brokerages.",
    publisher: {
      "@type": "Organization",
      name: "Koqi",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Koqi-Gradient.svg`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Koqi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    description:
      "Koqi is a performance intelligence platform for real estate agents. It quantifies agent skill through the ACCS (Agent Competency & Calibration Score), rewards accurate pricing estimates, and gives brokerages visibility into who is actually good — not just who is busy.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free during private beta",
      availability: "https://schema.org/PreOrder",
    },
    featureList: [
      "ACCS — Agent Competency & Calibration Score",
      "Estimate-to-Earn pricing challenges",
      "ZIP-level market performance data",
      "AI coaching for real estate agents",
      "Brokerage team performance dashboards",
      "Agent ranking and recruiting tools",
    ],
    screenshot: `${SITE_URL}/Dashboard.png`,
    url: SITE_URL,
    author: {
      "@type": "Organization",
      name: "Koqi",
    },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    image: post.image ?? `${SITE_URL}/og-default.png`,
    author: {
      "@type": "Organization",
      name: "Koqi",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Koqi",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Koqi-Gradient.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Improve Your Real Estate Pricing Accuracy with Koqi",
    description:
      "Use Koqi's Estimate-to-Earn system to sharpen your pricing instincts and build a verifiable performance score.",
    step: [
      {
        "@type": "HowToStep",
        name: "Sign up for early access",
        text: "Join the Koqi private beta to get your ACCS score and start building your performance profile.",
      },
      {
        "@type": "HowToStep",
        name: "Submit pricing estimates",
        text: "Estimate the sale price of real properties in your market. Koqi compares your estimate to the actual sale price.",
      },
      {
        "@type": "HowToStep",
        name: "Earn rewards for accuracy",
        text: "The closer your estimate to the final sale price, the more you earn. Consistent accuracy raises your ACCS score.",
      },
      {
        "@type": "HowToStep",
        name: "Track your performance",
        text: "Monitor your ACCS across five dimensions: pricing accuracy, confidence calibration, local specialization, property type expertise, and engagement.",
      },
    ],
  };
}
