import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { Tension } from "@/sections/Tension";
import { Features } from "@/sections/Features";
import { ProductGlimpse } from "@/sections/ProductGlimpse";
import { Rewards } from "@/sections/Rewards";
import { Brokerage } from "@/sections/Brokerage";
import { Proof } from "@/sections/Proof";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Tension />
        <Features />
        <ProductGlimpse />
        <Rewards />
        <Brokerage />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
