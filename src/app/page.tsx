import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { Tension } from "@/sections/Tension";
import { CMA } from "@/sections/CMA";
import { ACCSScore } from "@/sections/ACCSScore";
import { FollowUpBoss } from "@/sections/FollowUpBoss";
import { AICoach } from "@/sections/AICoach";
import { Rewards } from "@/sections/Rewards";
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
        <CMA />
        <ACCSScore />
        <FollowUpBoss />
        <AICoach />
        <Rewards />
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
