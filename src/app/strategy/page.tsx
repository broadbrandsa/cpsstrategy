import ExecutiveSummary from "@/components/sections/executive-summary";
import SituationAnalysis from "@/components/sections/situation-analysis";
import Benchmarks from "@/components/sections/benchmarks";
import Footer from "@/components/sections/footer";
import CompetitiveLandscape from "@/components/strategy/competitive-landscape";
import B2bB2cFlywheel from "@/components/strategy/b2b-b2c-flywheel";
import StrategyPageHeader from "@/components/strategy/page-header";
import ObjectivesKpi from "@/components/strategy/objectives-kpi";
import CustomerJourney from "@/components/strategy/customer-journey";
import ChannelEcosystem from "@/components/strategy/channel-ecosystem";
import AuthorityTrust from "@/components/strategy/authority-trust";

export default function StrategyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <StrategyPageHeader />
      <ExecutiveSummary />
      <ObjectivesKpi />
      <SituationAnalysis />
      <CustomerJourney />
      <CompetitiveLandscape />
      <AuthorityTrust />
      <Benchmarks />
      <B2bB2cFlywheel />
      <ChannelEcosystem />
      <Footer />
    </div>
  );
}
