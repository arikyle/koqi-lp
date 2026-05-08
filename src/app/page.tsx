import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { Tension } from "@/sections/Tension";
import { Features } from "@/sections/Features";
import { ProductGlimpse } from "@/sections/ProductGlimpse";
import { Rewards } from "@/sections/Rewards";
import { Brokerage } from "@/sections/Brokerage";
import { Proof } from "@/sections/Proof";
import { MobileShowcase } from "@/sections/MobileShowcase";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Tension />
        <Features />
        <ProductGlimpse />
        <Rewards />
        <Brokerage />
        <Proof />
        <MobileShowcase />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
