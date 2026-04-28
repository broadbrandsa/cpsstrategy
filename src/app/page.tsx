"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  Users,
  Target,
  TrendingUp,
  Award,
  ArrowRight,
  RefreshCcw,
  BadgeCheck,
  Share2,
  UserPlus,
  Landmark,
  CalendarClock,
  Percent,
  DollarSign,
  Briefcase,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Hero Stats ─── */

const HERO_STATS = [
  {
    value: "R15k",
    label: "B2C Media Budget",
    description: "Monthly spend",
    color: "#6B2D8B",
  },
  {
    value: "70",
    label: "B2C Student Target",
    description: "Per intake cycle",
    color: "#00A8E1",
  },
  {
    value: "R400",
    label: "B2C Target CPA",
    description: "Cost per acquisition",
    color: "#10B981",
  },
  {
    value: "70%",
    label: "B2B Revenue Share",
    description: "Current split",
    color: "#FFD100",
  },
  {
    value: "30%",
    label: "B2C Revenue Share",
    description: "Growth target",
    color: "#EF4444",
  },
  {
    value: "25 yrs",
    label: "CPS Track Record",
    description: "Industry experience",
    color: "#6B2D8B",
  },
];

const ACCENT_COLORS = ["#6B2D8B", "#00A8E1", "#10B981", "#FFD100", "#EF4444", "#6B2D8B"];

/* ─── Flywheel Data ─── */

const FLYWHEEL_ITEMS = [
  {
    icon: Briefcase,
    title: "B2B Corporate Training",
    description:
      "Banks and insurers enroll employees through corporate contracts. CPS delivers accredited programmes at scale.",
    color: "#00A8E1",
    tag: "B2B",
  },
  {
    icon: GraduationCap,
    title: "Employees Complete Courses",
    description:
      "Professionals earn qualifications. Certificates include a link to B2C courses for personal career advancement.",
    color: "#10B981",
    tag: "Bridge",
  },
  {
    icon: UserPlus,
    title: "Organic B2C Acquisition",
    description:
      "Graduates refer colleagues and enroll in further programmes themselves, driving organic B2C student growth.",
    color: "#6B2D8B",
    tag: "B2C",
  },
  {
    icon: TrendingUp,
    title: "B2C Students Promoted",
    description:
      "Individual students advance their careers, get promoted, and influence training decisions at their organisations.",
    color: "#FFD100",
    tag: "Bridge",
  },
  {
    icon: Building2,
    title: "Organisation Becomes B2B Client",
    description:
      "Promoted alumni champion CPS internally. Their organisation becomes a new B2B corporate client.",
    color: "#EF4444",
    tag: "B2B",
  },
];

const SHARED_PROOF_POINTS = [
  {
    icon: Landmark,
    title: "Bank Trust Signals",
    description:
      "Absa, Standard Bank, Capitec, and Nedbank logos from B2B partnerships serve as powerful B2C trust signals on marketing collateral.",
    color: "#00A8E1",
  },
  {
    icon: Share2,
    title: "Student Referrals",
    description:
      "Referrals are the biggest organic acquisition channel. Both B2B employees and B2C students drive word-of-mouth growth across channels.",
    color: "#6B2D8B",
  },
  {
    icon: Users,
    title: "35,000+ Professionals Trained",
    description:
      "A shared proof point that validates both the B2B corporate offering and the B2C individual programmes with a single powerful number.",
    color: "#10B981",
  },
];

export default function Home() {
  const strategyRef = useRef(null);
  const flywheelRef = useRef(null);
  const strategyInView = useInView(strategyRef, { once: true, margin: "-100px" });
  const flywheelInView = useInView(flywheelRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen bg-white">
      {/* ═══════════════════════════════
          HERO SECTION
          ═══════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(107,45,139,0.05),transparent)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(0,168,225,0.04),transparent)]" />
        </div>

        {/* Floating ambient shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-64 h-64 bg-cps-purple/[0.03] rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-cps-blue/[0.03] rounded-full blur-[100px]"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-flex items-center gap-2 mb-10 px-5 py-2 text-[10px] font-semibold tracking-[0.2em] border border-cps-purple/20 text-cps-purple/70 bg-cps-purple/[0.03] uppercase rounded-full">
                Broadbrand &times; Cornerstone Performance Solutions
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-foreground">CPS Digital Marketing</span>
              <br />
              <span className="text-gradient-purple">Strategy</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-foreground/50 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
            >
              B2C Student Acquisition &amp; B2B Corporate Partnerships
            </motion.p>

            {/* Meta info pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { label: "B2C Focus", value: "HCIB & ACL6" },
                { label: "B2B Focus", value: "Bank & Insurer L&D" },
                { label: "Launch", value: "May 10, 2026" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs bg-foreground/[0.03] text-foreground/50 border border-foreground/[0.06]"
                >
                  <span className="font-medium">{item.label}:</span>
                  <span>{item.value}</span>
                </span>
              ))}
            </motion.div>

            {/* Hero stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.07 }}
                  className="metric-card group relative overflow-hidden"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: ACCENT_COLORS[i] }}
                  />
                  <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mt-1">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] text-foreground/35 font-semibold tracking-[0.12em] uppercase">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-[10px] text-foreground/25">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-24 flex flex-col items-center gap-3"
            >
              <span className="text-[10px] text-foreground/25 tracking-[0.3em] uppercase font-medium">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-9 rounded-full border-[1.5px] border-foreground/10 flex items-start justify-center pt-1.5"
              >
                <div className="w-1 h-2 rounded-full bg-cps-purple/50" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          B2C & B2B STRATEGY CARDS
          ═══════════════════════════════ */}
      <section className="relative py-20 sm:py-28 section-tinted" ref={strategyRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={strategyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">Two Strategic Pillars</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            One strategy,{" "}
            <span className="text-gradient-purple">two growth engines</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-16 max-w-3xl"
          >
            CPS operates across B2C student acquisition and B2B corporate partnerships. Both channels reinforce each other and share credibility, audiences, and proof points.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* B2C Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={strategyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/b2c" className="block h-full">
                <div className="card-elevated !p-0 overflow-hidden h-full group hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="h-[4px] w-full" style={{ backgroundColor: "#6B2D8B" }} />
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(107, 45, 139, 0.06)",
                          border: "1px solid rgba(107, 45, 139, 0.12)",
                        }}
                      >
                        <GraduationCap size={22} style={{ color: "#6B2D8B" }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-cps-purple/60">
                          B2C Strategy
                        </span>
                        <h3 className="text-xl font-bold text-foreground tracking-tight">
                          Student Acquisition
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/50 leading-[1.8] mb-6">
                      Targeting individual professionals for the{" "}
                      <span className="text-foreground font-semibold">HCIB</span> and{" "}
                      <span className="text-foreground font-semibold">ACL6</span> programmes.
                      Building a direct-to-consumer acquisition engine through paid media,
                      content marketing, and conversion optimisation.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { icon: Target, text: "70 students/intake" },
                        { icon: DollarSign, text: "R15k/mo budget" },
                        { icon: CalendarClock, text: "Launch: May 10, 2026" },
                      ].map((item) => (
                        <span
                          key={item.text}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] bg-cps-purple/[0.04] text-cps-purple/70 border border-cps-purple/10"
                        >
                          <item.icon size={12} />
                          {item.text}
                        </span>
                      ))}
                    </div>

                    <span
                      className="text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5"
                      style={{ color: "#6B2D8B" }}
                    >
                      Explore B2C Strategy <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* B2B Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={strategyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/b2b" className="block h-full">
                <div className="card-elevated !p-0 overflow-hidden h-full group hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="h-[4px] w-full" style={{ backgroundColor: "#00A8E1" }} />
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(0, 168, 225, 0.06)",
                          border: "1px solid rgba(0, 168, 225, 0.12)",
                        }}
                      >
                        <Building2 size={22} style={{ color: "#00A8E1" }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-cps-blue/60">
                          B2B Strategy
                        </span>
                        <h3 className="text-xl font-bold text-foreground tracking-tight">
                          Corporate Partnerships
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/50 leading-[1.8] mb-6">
                      Expanding bank, insurance, and fintech partnerships through LinkedIn
                      thought leadership, a dedicated B2B landing page, and relationship-driven
                      sales enablement. Currently represents{" "}
                      <span className="text-foreground font-semibold">97% of revenue</span>.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { icon: Percent, text: "97% current revenue" },
                        { icon: Target, text: "First web B2B lead in 2026" },
                        { icon: Award, text: "20+ years in market" },
                      ].map((item) => (
                        <span
                          key={item.text}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] bg-cps-blue/[0.04] text-cps-blue/70 border border-cps-blue/10"
                        >
                          <item.icon size={12} />
                          {item.text}
                        </span>
                      ))}
                    </div>

                    <span
                      className="text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5"
                      style={{ color: "#00A8E1" }}
                    >
                      Explore B2B Strategy <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          B2B ↔ B2C FLYWHEEL
          ═══════════════════════════════ */}
      <section className="relative py-28 sm:py-36" ref={flywheelRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={flywheelInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              The Growth Flywheel
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            B2B and B2C{" "}
            <span className="text-gradient-purple">reinforce each other</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-16 max-w-3xl"
          >
            CPS&apos;s growth is not two separate funnels &mdash; it&apos;s a reinforcing flywheel where corporate partnerships feed individual student acquisition, and vice versa.
          </motion.p>

          {/* Flywheel cycle cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {FLYWHEEL_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-elevated !p-0 overflow-hidden group relative"
              >
                <div
                  className="h-[3px] w-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}0A`,
                        border: `1px solid ${item.color}15`,
                      }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    {i < FLYWHEEL_ITEMS.length - 1 && (
                      <span className="text-foreground/15 text-lg font-light hidden lg:block">
                        &rarr;
                      </span>
                    )}
                    {i === FLYWHEEL_ITEMS.length - 1 && (
                      <span className="text-cps-purple/25 text-lg font-light hidden lg:block">
                        &#x21BB;
                      </span>
                    )}
                  </div>

                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold tracking-[0.1em] uppercase mb-2"
                    style={{
                      backgroundColor: `${item.color}10`,
                      color: `${item.color}CC`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground/45 leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reinforcing cycle indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={flywheelInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cps-purple/[0.04] border border-cps-purple/10">
              <RefreshCcw size={12} className="text-cps-purple/50" />
              <span className="text-[10px] font-semibold tracking-[0.15em] text-cps-purple/50 uppercase">
                Reinforcing cycle &mdash; each turn lowers CPA
              </span>
            </div>
          </motion.div>

          {/* Shared proof points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
              Shared Proof Points
            </h3>
            <p className="text-sm text-foreground/35 mb-8">
              Assets and signals that power both B2B and B2C simultaneously
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {SHARED_PROOF_POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="card-elevated !p-0 overflow-hidden"
                >
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: `${point.color}30` }}
                  />
                  <div className="p-6">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${point.color}0A`,
                        border: `1px solid ${point.color}15`,
                      }}
                    >
                      <point.icon size={16} style={{ color: point.color }} />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-foreground/45 leading-[1.7]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-8 sm:p-10 rounded-2xl bg-white border border-cps-purple/8 accent-bar-left pl-10"
          >
            <p className="text-base sm:text-lg text-foreground/60 leading-[1.8] italic">
              &ldquo;When Dylan walks into a broker&apos;s office and they&apos;ve
              already seen CPS on Instagram, the conversation starts
              differently. B2C brand visibility makes B2B sales warmer.&rdquo;
            </p>
          </motion.div>

          {/* Cross-links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              href="/b2c"
              className="inline-flex items-center gap-1.5 text-sm text-cps-purple font-medium hover:underline"
            >
              <BadgeCheck size={14} />
              B2C Student Acquisition &rarr;
            </Link>
            <Link
              href="/b2b"
              className="inline-flex items-center gap-1.5 text-sm text-cps-blue font-medium hover:underline"
            >
              <Building2 size={14} />
              B2B Corporate Partnerships &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
