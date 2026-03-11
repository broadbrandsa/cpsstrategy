import ExecutiveSummary from "@/components/sections/executive-summary";
import SituationAnalysis from "@/components/sections/situation-analysis";
import TargetAudience from "@/components/sections/target-audience";
import Benchmarks from "@/components/sections/benchmarks";
import Footer from "@/components/sections/footer";
import CompetitiveLandscape from "@/components/strategy/competitive-landscape";
import B2bB2cFlywheel from "@/components/strategy/b2b-b2c-flywheel";
import StrategyPageHeader from "@/components/strategy/page-header";

export default function StrategyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <StrategyPageHeader />
      <ExecutiveSummary />
      <SituationAnalysis />
      <TargetAudience />
      <CompetitiveLandscape />
      <Benchmarks />
      <B2bB2cFlywheel />
      <Footer />
    </div>
  );
}
