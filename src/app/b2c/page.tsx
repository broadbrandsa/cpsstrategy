import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import QuickLinks from "@/components/dashboard/quick-links";
import StrategySnapshot from "@/components/dashboard/strategy-snapshot";
import StrategicThesis from "@/components/dashboard/strategic-thesis";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
      <StrategySnapshot />
      <StrategicThesis />
      <QuickLinks />
      <Footer />
    </div>
  );
}
