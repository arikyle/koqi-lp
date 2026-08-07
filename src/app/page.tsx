import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { Tension } from "@/sections/Tension";
import { Platform } from "@/sections/Platform";
import { CMA } from "@/sections/CMA";
import { AICoach } from "@/sections/AICoach";
import { ACCSScore } from "@/sections/ACCSScore";
import { Rewards } from "@/sections/Rewards";
import { FollowUpBoss } from "@/sections/FollowUpBoss";
import { Territory } from "@/sections/Territory";
import { Brokerage } from "@/sections/Brokerage";
import { Consumer } from "@/sections/Consumer";
import { Proof } from "@/sections/Proof";
import { HowItWorks } from "@/sections/HowItWorks";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Tension />
        <Platform />
        <CMA />
        <AICoach />
        <ACCSScore />
        <Rewards />
        <FollowUpBoss />
        <Territory />
        <Brokerage />
        <Consumer />
        <Proof />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
