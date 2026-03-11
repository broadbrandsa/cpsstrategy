import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import ExecutiveSummary from "@/components/sections/executive-summary";
import SituationAnalysis from "@/components/sections/situation-analysis";
import TargetAudience from "@/components/sections/target-audience";
import ConversionStrategy from "@/components/sections/conversion-strategy";
import MessagingFramework from "@/components/sections/messaging-framework";
import ContentStrategy from "@/components/sections/content-strategy";
import PaidMedia from "@/components/sections/paid-media";
import CpaModelling from "@/components/sections/cpa-modelling";
import LeadNurturing from "@/components/sections/lead-nurturing";
import LaunchPlan from "@/components/sections/launch-plan";
import MeasurementKpis from "@/components/sections/measurement-kpis";
import BudgetSummary from "@/components/sections/budget-summary";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cps-navy noise-overlay">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <SituationAnalysis />
      <TargetAudience />
      <ConversionStrategy />
      <MessagingFramework />
      <ContentStrategy />
      <PaidMedia />
      <CpaModelling />
      <LeadNurturing />
      <LaunchPlan />
      <MeasurementKpis />
      <BudgetSummary />
      <Footer />
    </div>
  );
}
