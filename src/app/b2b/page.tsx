"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  Handshake,
  Globe,
  Package,
  FileText,
  Linkedin,
  Presentation,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  CircleDot,
  TrendingUp,
  BarChart3,
  Target,
  Calendar,
  Rocket,
  Camera,
  Shield,
  BookOpen,
  Megaphone,
  RefreshCw,
  Award,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const HERO_STATS = [
  { value: "97%", label: "B2B revenue share (current)", color: "#6B2D8B" },
  { value: "35,000+", label: "Professionals trained across major SA banks", color: "#00A8E1" },
  { value: "0", label: "Website B2B leads in 10 years (goal: first in 2026)", color: "#EF4444" },
  { value: "80%", label: "Business decision makers not aware of CPS", color: "#FFD100" },
];

const READINESS_ITEMS = [
  { block: "Corporate Business Profile", status: "RED", detail: "Doesn\u2019t exist yet \u2014 critical for broker model" },
  { block: "Product Brochures", status: "AMBER", detail: "Being created, not finalized or brand-consistent" },
  { block: "Website B2B Entry Point", status: "RED", detail: "Zero inbound B2B leads in 10 years" },
  { block: "LinkedIn Presence", status: "RED", detail: "Exists but inconsistent, no cadence — critical gap" },
  { block: "White Papers", status: "RED", detail: "None produced" },
  { block: "Master Classes", status: "RED", detail: "Concept clear, none scheduled — critical gap" },
  { block: "Conference Speaking", status: "RED", detail: "2-year gap since last speaking engagement" },
  { block: "Sales Collateral Consistency", status: "RED", detail: "\u201CWe all send different things about CPS\u201D" },
  { block: "Professional Photography/Video", status: "RED", detail: "No professional shoots since pre-COVID" },
  { block: "Competitive Intelligence", status: "GREEN", detail: "Clear understanding of Novia and market" },
];

const SPRINT_PHASES = [
  {
    title: "Foundation",
    timeline: "Weeks 1\u20132",
    color: "#6B2D8B",
    items: [
      "Finalise corporate business profile document",
      "Audit all existing sales collateral and identify gaps",
      "Set up LinkedIn content calendar and posting cadence",
    ],
  },
  {
    title: "First Assets",
    timeline: "Weeks 3\u20134",
    color: "#00A8E1",
    items: [
      "Complete brand-consistent product brochures",
      "Build first B2B landing page on website",
      "Draft first white paper outline (topic: banking skills gap)",
      "Create standardised proposal template and deck",
      "Prepare for first masterclass",
    ],
  },
  {
    title: "Building Visibility",
    timeline: "Weeks 5\u20138",
    color: "#10B981",
    items: [
      "Publish first white paper (gated for lead capture)",
      "Launch CEO thought leadership series on LinkedIn",
      "Develop first corporate case study (AXA preferred provider win)",
      "Schedule first master class with existing client and alumni (topic dependant)",
    ],
  },
  {
    title: "First Results",
    timeline: "Weeks 9\u201312",
    color: "#FFD100",
    items: [
      "First inbound B2B lead from website",
      "Broker collateral pack complete and distributed",
      "Conference speaking slot secured for Q3/Q4",
      "Internal brand alignment session completed with all client-facing staff",
      "Brief and complete professional photography and video shoots (July)",
      "Full B2B readiness scorecard review \u2014 measure progress against baseline",
    ],
  },
];

const AUDIENCES = [
  {
    title: "Banking & Financial Services L&D Teams",
    subtitle: "Skills Development",
    body: "These buyers own workforce capability, skills programme planning, and qualification budgets. They\u2019re under pressure to demonstrate ROI on every training rand spent. They don\u2019t search for \u2018training providers\u2019 \u2014 they search for accredited partners who understand their industry.",
    color: "#6B2D8B",
    icon: Building2,
    tag: "Primary \u00B7 Skills Development",
  },
  {
    title: "HR and Talent Development Leaders",
    subtitle: "People & Culture",
    body: "These buyers care about staff development, progression pathways, retention, and BBBEE compliance. They need demonstrable outcomes for WSP reporting and partners who make compliance straightforward.",
    color: "#00A8E1",
    icon: Users,
    tag: "Strategic \u00B7 People & Culture",
  },
  {
    title: "Strategic Partners, Brokers & Shareholder Networks",
    subtitle: "New Markets",
    body: "Brokers open doors to new client organisations. Shareholder networks provide warm introductions at executive level. These channels require collateral that works without a CPS person in the room \u2014 the broker model depends on standalone materials.",
    color: "#10B981",
    icon: Handshake,
    tag: "Growth \u00B7 New Markets",
  },
];

const BUILDING_BLOCKS = [
  {
    heading: "Dedicated B2B Pages",
    body: "Pages that explain CPS\u2019s value for organisations, team development, and industry-specific workforce needs. L&D buyers must find a clear entry point.",
    color: "#6B2D8B",
    icon: Globe,
    step: "01",
  },
  {
    heading: "Programme Bundles for Teams",
    body: "Qualifications and learning pathways packaged for organisational capability building, not individual consumers. Max 6 categories.",
    color: "#00A8E1",
    icon: Package,
    step: "02",
  },
  {
    heading: "Corporate Case Studies",
    body: "Proof-led stories showing outcomes. Start with the AXA preferred provider win story.",
    color: "#10B981",
    icon: FileText,
    step: "03",
  },
  {
    heading: "LinkedIn-Led Demand Generation",
    body: "Professional targeting, CEO thought leadership, sector-led messaging. 2 posts/week minimum.",
    color: "#FFD100",
    icon: Linkedin,
    step: "04",
  },
  {
    heading: "White Papers & Master Classes",
    body: "Research-backed authority. Gated content for lead capture. Master classes for account penetration.",
    color: "#EF4444",
    icon: BookOpen,
    step: "05",
  },
  {
    heading: "Proposal Experiences",
    body: "Presentation-ready proposal sites, decks, and tailored materials that support enterprise conversations and multi-stakeholder buy-in.",
    color: "#6B2D8B",
    icon: Presentation,
    link: { href: "https://eyproposal.vercel.app/", label: "First proposal site" },
    step: "06",
  },
  {
    heading: "Brand Asset Production",
    body: "Professional photography, graduation highlight reels, corporate story video, CEO video series. Nothing professional has been shot since pre-COVID.",
    color: "#00A8E1",
    icon: Camera,
    step: "07",
  },
  {
    heading: "Internal Brand Alignment",
    body: "Every CPS person who speaks to a client sends the same corporate profile, same brochures, same pitch. No more individual narratives.",
    color: "#10B981",
    icon: Shield,
    step: "08",
  },
];

const GROWTH_LOOPS = [
  {
    title: "B2B \u2192 B2C",
    color: "#6B2D8B",
    icon: TrendingUp,
    body: "Corporate training \u2192 employees complete courses \u2192 certificate includes link to B2C courses \u2192 \u201CI\u2019m all excited, I feel very clever, I\u2019m gonna click on the link and see what other courses I can do\u201D \u2192 organic B2C acquisition.",
  },
  {
    title: "B2C \u2192 B2B",
    color: "#00A8E1",
    icon: RefreshCw,
    body: "Individual student employed at bank \u2192 studies with CPS \u2192 tells their L&D team \u2192 \u201CGet your mentor, talk to them\u201D \u2192 new B2B relationship opens.",
  },
  {
    title: "Proof Loop",
    color: "#10B981",
    icon: Award,
    body: "B2B bank logos (Absa, Standard Bank, Capitec, Nedbank) \u2192 B2C trust signals for individual students \u2192 student success stories \u2192 B2B proposal proof points \u2192 reinforces bank partnerships.",
  },
];

/* ════════════════════════════════════════════════════════════════════
   SECTION 0 — Page Header  (gradient hero band + stats)
   ════════════════════════════════════════════════════════════════════ */

function B2BHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-cps-purple/[0.03] via-transparent to-cps-blue/[0.03]" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-cps-purple/[0.02] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">B2B Corporate Partnerships Strategy &middot; 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            Corporate Partnership Strategy for{" "}
            <span className="text-gradient-purple italic">Banking & Financial Services</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-8">
            CPS&apos;s B2B business represents 97% of revenue, built on more than 20 years (two decades) of deep relationships with South Africa&apos;s major banks. This strategy transforms that foundation into a visible, scalable B2B growth engine &mdash; expanding within existing accounts, building digital lead generation, and establishing CPS as the definitive voice in financial services skills development. A strong strategic drive is required to embed and build brand resonance across the corporate partnership market.
          </p>
        </motion.div>

        {/* Hero stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: stat.color }} />
              <div className="p-6 sm:p-7">
                <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-xs text-foreground/50 leading-[1.6]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 1 — B2B Readiness Scorecard
   ════════════════════════════════════════════════════════════════════ */

const STATUS_CONFIG: Record<string, { bg: string; text: string; border: string; label: string }> = {
  RED: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", label: "Critical Gap" },
  AMBER: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", label: "In Progress" },
  GREEN: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", label: "Ready" },
};

function ReadinessScorecard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">01 &mdash; B2B Readiness Scorecard</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          B2B Readiness &mdash; Where We Stand Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-3xl mb-12"
        >
          This is an honest assessment of where CPS is right now. Green means ready. Amber means in progress. Red means critical gap.
        </motion.p>

        {/* Scorecard table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500" />
          <div className="divide-y divide-black/[0.04]">
            {/* Table header */}
            <div className="hidden sm:grid sm:grid-cols-[1fr_140px_1.2fr] gap-4 px-6 py-4 bg-black/[0.015]">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase">Building Block</p>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase">Status</p>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase">Detail</p>
            </div>
            {READINESS_ITEMS.map((item, i) => {
              const cfg = STATUS_CONFIG[item.status];
              return (
                <motion.div
                  key={item.block}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                  className="sm:grid sm:grid-cols-[1fr_140px_1.2fr] gap-4 px-6 py-4 items-center"
                >
                  <p className="text-sm font-medium text-foreground/70 mb-2 sm:mb-0">{item.block}</p>
                  <div className="mb-2 sm:mb-0">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${cfg.bg} ${cfg.text} border ${cfg.border}`}>
                      <CircleDot size={10} />
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/45 leading-[1.7]">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 rounded-2xl bg-cps-grey p-6 sm:p-8 border border-black/[0.03]"
        >
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-cps-purple mt-0.5 shrink-0" />
            <p className="text-sm text-foreground/50 leading-[1.8]">
              This scorecard isn&apos;t a criticism &mdash; it&apos;s a starting point. Every red item has a clear fix, and most can be addressed within 90 days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 2 — 90-Day Sprint Plan
   ════════════════════════════════════════════════════════════════════ */

function SprintPlan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">02 &mdash; 90-Day Sprint Plan</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          First 90 Days &mdash; What Happens Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          This isn&apos;t a strategy that waits. Here&apos;s what gets built and when.
        </motion.p>

        {/* Phase cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {SPRINT_PHASES.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: phase.color }} />
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${phase.color}0A`, border: `1px solid ${phase.color}15` }}
                  >
                    <Calendar size={16} style={{ color: phase.color }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{phase.title}</h4>
                    <p className="text-[10px] font-medium text-foreground/30 uppercase tracking-wider">{phase.timeline}</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Rocket size={12} className="mt-1 shrink-0" style={{ color: phase.color }} />
                      <p className="text-xs text-foreground/50 leading-[1.7]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 3 — Core Audiences
   ════════════════════════════════════════════════════════════════════ */

function CoreAudiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">03 &mdash; Core B2B Audiences</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Who We&apos;re Talking To
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          CPS speaks to three distinct B2B audiences &mdash; each with different needs, different buying processes, and different reasons to choose CPS.
        </motion.p>

        {/* Large audience cards */}
        <div className="space-y-5 mb-10">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white"
                style={{ borderLeft: `4px solid ${a.color}` }}
              >
                <div className="flex items-start gap-5 p-6 sm:p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${a.color}0A`, border: `1px solid ${a.color}15` }}
                  >
                    <Icon size={20} style={{ color: a.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-bold text-foreground">{a.title}</h4>
                      <span
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{ backgroundColor: `${a.color}10`, color: a.color }}
                      >
                        {a.tag}
                      </span>
                    </div>
                    <p className="text-[10px] font-medium text-foreground/30 uppercase tracking-wider mb-2">{a.subtitle}</p>
                    <p className="text-sm text-foreground/50 leading-[1.7]">{a.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-cps-grey p-6 sm:p-8 border border-black/[0.03]"
        >
          <p className="text-sm text-foreground/50 leading-[1.8] italic">
            Across all three audiences, CPS positions as a credible professional partner in skills development &mdash; not a training vendor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 4 — Building Blocks  (stepped vertical timeline)
   ════════════════════════════════════════════════════════════════════ */

function BuildingBlocks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">04 &mdash; Core B2B Building Blocks</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-12 tracking-tight"
        >
          The Building Blocks
        </motion.h2>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div className="hidden lg:block absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cps-purple/20 via-cps-blue/20 to-cps-green/20 rounded-full" />

          <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {BUILDING_BLOCKS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.heading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="relative lg:pl-16 lg:py-5"
                >
                  {/* Step indicator — desktop */}
                  <div
                    className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl items-center justify-center z-10"
                    style={{ backgroundColor: `${card.color}0A`, border: `2px solid ${card.color}25` }}
                  >
                    <span className="text-xs font-bold" style={{ color: card.color }}>{card.step}</span>
                  </div>

                  <div className="card-elevated !p-0 overflow-hidden">
                    <div className="h-[3px] w-full lg:hidden" style={{ backgroundColor: card.color }} />
                    <div className="p-6 sm:p-7 flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 lg:hidden"
                        style={{ backgroundColor: `${card.color}0A`, border: `1px solid ${card.color}15` }}
                      >
                        <span className="text-[10px] font-bold" style={{ color: card.color }}>{card.step}</span>
                      </div>
                      <div
                        className="hidden lg:flex w-10 h-10 rounded-lg items-center justify-center shrink-0"
                        style={{ backgroundColor: `${card.color}0A`, border: `1px solid ${card.color}15` }}
                      >
                        <Icon size={16} style={{ color: card.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-foreground mb-1">{card.heading}</h4>
                        <p className="text-xs text-foreground/45 leading-[1.7]">{card.body}</p>
                        {card.link && (
                          <a
                            href={card.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-cps-purple hover:text-cps-purple/80 transition-colors"
                          >
                            {card.link.label}
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 5 — Growth Loop (B2B <-> B2C Flywheel)
   ════════════════════════════════════════════════════════════════════ */

function GrowthLoop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">05 &mdash; Growth Loop</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          The Growth Loop &mdash; B2B and B2C Reinforce Each Other
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          This is not two separate businesses. It&apos;s one system where each side strengthens the other.
        </motion.p>

        {/* Loop cards */}
        <div className="space-y-5 mb-12">
          {GROWTH_LOOPS.map((loop, i) => {
            const Icon = loop.icon;
            return (
              <motion.div
                key={loop.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white"
                style={{ borderLeft: `4px solid ${loop.color}` }}
              >
                <div className="flex items-start gap-5 p-6 sm:p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${loop.color}0A`, border: `1px solid ${loop.color}15` }}
                  >
                    <Icon size={20} style={{ color: loop.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-foreground mb-2">{loop.title}</h4>
                    <p className="text-sm text-foreground/50 leading-[1.7]">{loop.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 sm:p-10 rounded-2xl bg-white border border-cps-purple/8 accent-bar-left pl-10"
        >
          <p className="text-base sm:text-lg text-foreground/60 leading-[1.8] italic">
            The long-term advantage for CPS is not choosing between B2B and B2C. It&apos;s building a system where every B2B student becomes a potential B2C customer, and every B2C success story strengthens the next B2B proposal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── B2B Quick Links ─── */

const B2B_PAGES = [
  { title: "Strategy & Market", href: "/b2b/strategy", color: "#00A8E1", desc: "Buyer personas, competitive landscape, market intelligence" },
  { title: "Product Portfolio", href: "/b2b/products", color: "#6B2D8B", desc: "Categories, solution architecture, CPSLearn platform, pricing philosophy" },
  { title: "Sales Enablement", href: "/b2b/sales", color: "#10B981", desc: "Sales process, collateral system, broker model readiness" },
  { title: "Content & Thought Leadership", href: "/b2b/content", color: "#FFD100", desc: "White papers, master classes, LinkedIn strategy, messaging" },
  { title: "Account Growth & Ops", href: "/b2b/growth", color: "#EF4444", desc: "Account penetration, master class growth, KPIs, reporting" },
];

function B2BQuickLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">Explore B2B Strategy</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {B2B_PAGES.map((page, i) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            >
              <Link href={page.href} className="block h-full">
                <div className="card-elevated !p-0 overflow-hidden h-full group">
                  <div className="h-[3px] w-full" style={{ backgroundColor: page.color }} />
                  <div className="p-6">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">{page.title}</h3>
                    <p className="text-xs text-foreground/40 leading-[1.6] mb-4">{page.desc}</p>
                    <span
                      className="text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-block"
                      style={{ color: page.color }}
                    >
                      Open &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function B2BStrategyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <B2BHeader />
      <ReadinessScorecard />
      <SprintPlan />
      <CoreAudiences />
      <BuildingBlocks />
      <GrowthLoop />
      <B2BQuickLinks />
      <Footer />
    </div>
  );
}
