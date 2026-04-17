import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import { MotionProvider } from "@/components/MotionProvider";
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

export const metadata: Metadata = {
  title: "Koqi — Performance Intelligence for Real Estate",
  description:
    "Koqi scores your real estate skills, sharpens your pricing instincts, and rewards you for getting better. The platform agents deserve.",
  openGraph: {
    title: "Koqi — Performance Intelligence for Real Estate",
    description:
      "Koqi scores your real estate skills, sharpens your pricing instincts, and rewards you for getting better.",
    url: "https://koqi.ai",
    siteName: "Koqi",
    type: "website",
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
      <body>
        <MotionProvider>
          <LenisProvider>{children}</LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
