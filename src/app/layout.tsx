import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import { MotionProvider } from "@/components/MotionProvider";
import { CursorGlow } from "@/components/CursorGlow";
import {
  organizationSchema,
  webSiteSchema,
  softwareApplicationSchema,
  howToSchema,
} from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const SITE_URL = "https://koqi.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Koqi — Performance Intelligence for Real Estate Agents",
    template: "%s | Koqi",
  },
  description:
    "Koqi quantifies real estate agent skill with the ACCS score, rewards accurate pricing estimates, and gives brokerages data-driven visibility into agent performance. Free during beta.",
  keywords: [
    "real estate agent performance",
    "agent performance score",
    "ACCS score",
    "real estate pricing accuracy",
    "real estate agent tools",
    "brokerage performance analytics",
    "real estate intelligence platform",
    "agent skill assessment",
    "estimate to earn",
    "real estate agent ranking",
    "pricing instinct training",
    "real estate agent improvement",
    "brokerage recruiting tools",
    "real estate performance metrics",
    "agent competency score",
  ],
  authors: [{ name: "Koqi", url: SITE_URL }],
  creator: "Koqi",
  publisher: "Koqi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Koqi — Performance Intelligence for Real Estate Agents",
    description:
      "Koqi quantifies agent skill, rewards pricing accuracy, and gives brokerages real visibility into who is actually good. Free during beta.",
    url: SITE_URL,
    siteName: "Koqi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Dashboard.png",
        width: 1200,
        height: 630,
        alt: "Koqi performance intelligence dashboard showing ACCS score and agent analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koqi — Performance Intelligence for Real Estate",
    description:
      "Quantify your real estate skills. Sharpen your pricing instincts. Get rewarded for improving.",
    images: ["/Dashboard.png"],
    creator: "@koqiai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  category: "technology",
  other: {
    "theme-color": "#2A9D8F",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#2A9D8F" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema()),
          }}
        />
      </head>
      <body>
        <MotionProvider>
          <CursorGlow />
          <LenisProvider>{children}</LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
