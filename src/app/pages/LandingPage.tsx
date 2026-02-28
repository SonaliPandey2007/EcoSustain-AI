import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { ProblemStatement } from '../components/ProblemStatement';
import { KeyInsights } from '../components/KeyInsights';
import { SolutionSection } from '../components/SolutionSection';
import { HighRiskZones } from '../components/HighRiskZones';
import { ImplementationPlan } from '../components/ImplementationPlan';
import { ExpectedImpact } from '../components/ExpectedImpact';
import { EcoRewardSystem } from '../components/EcoRewardSystem';
import { Scalability } from '../components/Scalability';
import { InteractiveDemoSection } from '../components/InteractiveDemoSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';

export default function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation onRequestDemo={() => setIsDemoModalOpen(true)} />
      <HeroSection onRequestDemo={() => setIsDemoModalOpen(true)} />
      <ProblemStatement />
      <KeyInsights />
      <SolutionSection />
      <HighRiskZones />
      <ImplementationPlan />
      <ExpectedImpact />
      <EcoRewardSystem />
      <Scalability />
      <InteractiveDemoSection onRequestDemo={() => setIsDemoModalOpen(true)} />
      <FinalCTA onRequestDemo={() => setIsDemoModalOpen(true)} />
      <Footer />
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}