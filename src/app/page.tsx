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
        className="absolute left-4 top-4 z-[100] rounded-full bg-accent px-6 py-3 text-sm font-medium text-white -translate-y-full focus:translate-y-0"
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
