import Hero from "@/components/sections/hero";
import LaunchPlan from "@/components/sections/launch-plan";
import MeasurementKpis from "@/components/sections/measurement-kpis";
import Footer from "@/components/sections/footer";
import QuickLinks from "@/components/dashboard/quick-links";
import StrategySnapshot from "@/components/dashboard/strategy-snapshot";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
      <StrategySnapshot />
      <QuickLinks />
      <LaunchPlan />
      <MeasurementKpis />
      <Footer />
    </div>
  );
}
