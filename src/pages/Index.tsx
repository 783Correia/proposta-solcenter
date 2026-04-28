import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import DiagnosisSection from "@/components/sections/DiagnosisSection";
import CasesSection from "@/components/sections/CasesSection";
import StrategySection from "@/components/sections/StrategySection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import SKUsSection from "@/components/sections/SKUsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import FooterSection from "@/components/sections/FooterSection";
import CountdownBar from "@/components/CountdownBar";
import WelcomeScreen from "@/components/WelcomeScreen";
import FloatingStrategyButton from "@/components/FloatingStrategyButton";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-10">
      <CountdownBar />
      <HeroSection />
      <DiagnosisSection />
      <CasesSection />
      <StrategySection />
      <DifferentiatorsSection />
      <SKUsSection />
      <TimelineSection />
      <InvestmentSection />
      <FooterSection />
      <FloatingStrategyButton />
    </main>
  );
};

export default Index;
