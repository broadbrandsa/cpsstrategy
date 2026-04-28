"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Handshake,
  Search,
  Lightbulb,
  Presentation,
  Monitor,
  FileText,
  UserCheck,
  FileSignature,
  Globe,
  BookOpen,
  Linkedin,
  PenLine,
  GraduationCap,
  Building2,
  Briefcase,
  LayoutGrid,
  DollarSign,
  CheckCircle2,
  Quote,
  ArrowRight,
  ShieldCheck,
  Package,
  Mail,
  SlidersHorizontal,
  Eye,
  Target,
  Zap,
  BarChart3,
  Lock,
  Play,
  Send,
  MessageSquare,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const SALES_JOURNEY = [
  {
    step: "01",
    title: "Relationship Entry",
    description:
      "Existing contact introduces CPS to L&D head in adjacent division. Also: shareholder network introductions, broker referrals, conference connections.",
    icon: Handshake,
    color: "#6B2D8B",
  },
  {
    step: "02",
    title: "Discovery Meeting",
    description:
      "Understand outcomes, objectives, key success measures. Ask: \u201CWhat are the 3 dynamic behavioural changes you want to see?\u201D and \u201CWhat would true success mean?\u201D and \u201CWhat are the non-negotiables?\u201D",
    icon: Search,
    color: "#00A8E1",
  },
  {
    step: "03",
    title: "Solutioning",
    description:
      "Two paths: match to existing product (off-the-shelf) or design custom programme. For custom: define pre-assessment design and business impact survey approach.",
    icon: Lightbulb,
    color: "#10B981",
  },
  {
    step: "04",
    title: "Presentation",
    description:
      "Master deck (high-level story + vision) for the room, detailed spec deck (costs, outcomes, compliance) for CFO/approvals. \u201CIf it has to go through a CFO or different departments, they can look for their section, tick off the boxes.\u201D",
    icon: Presentation,
    color: "#FFD100",
  },
  {
    step: "05",
    title: "Platform Demo",
    description:
      "Live CPSLearn walkthrough showing AI features, learning experience, think tools, AI reflection, storyline design. \u201CI alternate onto the platform. I show them the learning experience. That somehow creates a lot of interest and demonstrates we are ahead of the curve.\u201D",
    icon: Monitor,
    color: "#00A8E1",
  },
  {
    step: "06",
    title: "Proposal & Negotiation",
    description:
      "Custom pricing, volume considerations, discount structures. NEVER publish pricing \u2014 \u201Cthat\u2019s part of our competitive advantage.\u201D",
    icon: FileText,
    color: "#6B2D8B",
  },
  {
    step: "07",
    title: "Multi-Stakeholder Approval",
    description:
      "Materials circulate to CFO, department heads, other decision makers. Materials must work without CPS in the room.",
    icon: UserCheck,
    color: "#EF4444",
  },
  {
    step: "08",
    title: "Contract & Onboarding",
    description:
      "Formal agreement, cohort setup, student enrollment onto CPSLearn.",
    icon: FileSignature,
    color: "#10B981",
  },
];

const DIGITAL_LEAD_STRATEGIES = [
  { text: "L&D-focused landing pages on CPS website (clear B2B entry point)", icon: Globe },
  { text: "White papers as gated content \u2014 registration captures name, email, company, role", icon: BookOpen },
  { text: "LinkedIn posts driving to website resources and gated content", icon: Linkedin },
  { text: "Blog content for Google indexing (L&D-relevant topics)", icon: PenLine },
  { text: "Master class registration pages (capture attendee details)", icon: GraduationCap },
  { text: "MailChimp email automation: white paper follow-up sequence, master class reminders (1 month, 2 weeks, 2 days before)", icon: Mail },
];

const COLLATERAL_SYSTEM = [
  {
    title: "Corporate Business Profile",
    description:
      "Consistent overview, brand-consistent, critical for broker model",
    icon: Building2,
    color: "#6B2D8B",
    tag: "Foundation",
  },
  {
    title: "Product Brochures",
    description:
      "One per category, story-focused, value props and USPs",
    icon: Briefcase,
    color: "#00A8E1",
    tag: "Per Category",
  },
  {
    title: "Detailed Specification Decks",
    description:
      "CFO-friendly: costs, outcomes, compliance",
    icon: LayoutGrid,
    color: "#10B981",
    tag: "Decision-Maker",
  },
  {
    title: "Master Presentation Deck",
    description:
      "High-level story, customizable per client",
    icon: Presentation,
    color: "#FFD100",
    tag: "Storytelling",
  },
];

const PROPOSAL_DECK_SLIDES = [
  {
    slide: 1,
    content: "CPS at a Glance \u2014 More than 20 years (two decades), 35,000+ professionals, bank logos, accreditation badges",
    purpose: "Establish credibility",
    color: "#6B2D8B",
  },
  {
    slide: 2,
    content: "The Challenge We Solve \u2014 Specific to client\u2019s industry/division",
    purpose: "Show understanding",
    color: "#00A8E1",
  },
  {
    slide: 3,
    content: "Our Approach \u2014 Solutioning methodology, platform, measurement framework",
    purpose: "Demonstrate rigour",
    color: "#10B981",
  },
  {
    slide: 4,
    content: "Relevant Programme(s) \u2014 Outcomes, modules, timeline, delivery mode",
    purpose: "Specifics they need",
    color: "#FFD100",
  },
  {
    slide: 5,
    content: "CPSLearn Platform \u2014 AI assessment, 2\u00D7 faster feedback, personalised learning, competency tracking",
    purpose: "Technology differentiator",
    color: "#00A8E1",
  },
  {
    slide: 6,
    content: "Proof Points \u2014 Client outcomes, learnership volume, AXA preferred provider example, bursary impact",
    purpose: "Build confidence",
    color: "#6B2D8B",
  },
  {
    slide: 7,
    content: "Success Metrics \u2014 Pre/post assessment, behavioural shifts, business impact surveys",
    purpose: "Answer the ROI question",
    color: "#10B981",
  },
  {
    slide: 8,
    content: "Investment \u2014 \u201CDiscussed in meeting\u201D \u2014 confidential pricing",
    purpose: "Protect competitive advantage",
    color: "#EF4444",
  },
  {
    slide: 9,
    content: "Next Steps \u2014 Proposed timeline, onboarding process, key contacts",
    purpose: "Move to action",
    color: "#FFD100",
  },
];

const BROKER_REQUIREMENTS = [
  {
    text: "Standalone corporate profile",
    icon: ShieldCheck,
  },
  {
    text: "Product brochures that work without CPS person presenting",
    icon: FileText,
  },
  {
    text: "Clear category organisation for brokers",
    icon: Package,
  },
  {
    text: "Pricing handled through CPS directly",
    icon: DollarSign,
  },
];

const BRAND_ALIGNMENT_ITEMS = [
  { text: "Same corporate business profile PDF", icon: FileText },
  { text: "Same product brochures per category", icon: Briefcase },
  { text: "Same presentation template", icon: Presentation },
  { text: "Same language \u2014 \u201Cskills development partner\u201D not \u201Ctraining provider\u201D", icon: MessageSquare },
];

/* ════════════════════════════════════════════════════════════════════
   HEADER
   ════════════════════════════════════════════════════════════════════ */

function SalesHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E1]/[0.03] via-transparent to-[#6B2D8B]/[0.03]" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#00A8E1]/[0.02] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#00A8E1" }} />
            <span className="section-label" style={{ color: "#00A8E1" }}>
              B2B Sales Enablement
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            B2B Sales Enablement{" "}
            <span style={{ color: "#00A8E1" }}>&amp; Collateral</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-8">
            Equipping CPS with the process, materials, and digital lead generation
            strategy to turn relationships into structured, repeatable B2B growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 01 — Sales Process
   ════════════════════════════════════════════════════════════════════ */

function SalesProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#00A8E1" }} />
          <span className="section-label" style={{ color: "#00A8E1" }}>
            01 &mdash; Sales Process
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          The B2B sales journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Mapping CPS&rsquo;s relationship-driven sales process from first introduction to contract.
        </motion.p>

        {/* Current Reality quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden mb-14"
        >
          <div className="h-[3px] w-full" style={{ backgroundColor: "#EF4444" }} />
          <div className="p-6 sm:p-8 flex gap-4">
            <Quote size={24} className="shrink-0 mt-1" style={{ color: "#EF4444" }} />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#EF4444" }}>
                Current Reality
              </h3>
              <p className="text-sm text-foreground/60 leading-[1.8] italic">
                &ldquo;CPS&rsquo;s B2B proposition is very entrenched in relationships.
                I&rsquo;ve yet to see any lead come through from our website in 10 years.
                All of our client interactions are based on relationships.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sales Journey Map — vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-black/[0.06] hidden sm:block" />

          <div className="space-y-5">
            {SALES_JOURNEY.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="relative flex items-start gap-5"
                >
                  {/* Step circle */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color}0A`,
                      border: `1px solid ${item.color}15`,
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-6 hover:border-black/[0.08] transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${item.color}10`,
                          color: item.color,
                        }}
                      >
                        Step {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-foreground/85">{item.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/50 leading-[1.7]">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Digital Lead Generation Goal — green highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-14 card-elevated !p-0 overflow-hidden"
          style={{ borderLeft: "4px solid #10B981" }}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#10B9810A", border: "1px solid #10B98115" }}
              >
                <Globe size={18} style={{ color: "#10B981" }} />
              </div>
              <h3 className="text-sm font-bold text-foreground/85">Digital Lead Generation Goal</h3>
            </div>

            <div className="rounded-xl p-5 mb-5" style={{ backgroundColor: "#10B9810A" }}>
              <p className="text-sm font-semibold" style={{ color: "#10B981" }}>
                Goal: Generate CPS&rsquo;s first-ever website B2B lead in 2026.
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-foreground/35 mb-4">
              Tactics
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DIGITAL_LEAD_STRATEGIES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.text}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.9 + i * 0.06 }}
                    className="flex items-center gap-3 rounded-xl bg-white border border-black/[0.04] p-3.5 hover:border-[#10B981]/20 transition-all"
                  >
                    <Icon size={16} style={{ color: "#10B981" }} className="shrink-0" />
                    <span className="text-xs text-foreground/55 leading-[1.5]">{s.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 02 — Sales Collateral System
   ════════════════════════════════════════════════════════════════════ */

function CollateralSystem() {
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
          <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#6B2D8B" }} />
          <span className="section-label" style={{ color: "#6B2D8B" }}>
            02 &mdash; Sales Collateral System
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Sales collateral system
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Four core collateral types that support every stage of the sales journey and
          enable the broker model.
        </motion.p>

        {/* 4-card grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {COLLATERAL_SYSTEM.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden hover:-translate-y-1 transition-all"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: item.color }} />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}0A`,
                        border: `1px solid ${item.color}15`,
                      }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <span
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: `${item.color}10`,
                        color: item.color,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground/85 mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground/50 leading-[1.7]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PROPOSAL DECK TEMPLATE
   ════════════════════════════════════════════════════════════════════ */

function ProposalDeckTemplate() {
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
          <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#FFD100" }} />
          <span className="section-label" style={{ color: "#FFD100" }}>
            Proposal Deck Structure
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Proposal Deck Structure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Every B2B proposal should follow this structure so presentations are consistent and professional:
        </motion.p>

        {/* Slide table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full" style={{ backgroundColor: "#FFD100" }} />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/[0.06]">
                  <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-foreground/35">
                    Slide
                  </th>
                  <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-foreground/35">
                    Content
                  </th>
                  <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-foreground/35">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROPOSAL_DECK_SLIDES.map((row, i) => (
                  <motion.tr
                    key={row.slide}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.25 + i * 0.05 }}
                    className="border-b border-black/[0.04] last:border-0 hover:bg-black/[0.01] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold"
                        style={{
                          backgroundColor: `${row.color}10`,
                          color: row.color,
                        }}
                      >
                        {row.slide}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-foreground/60 leading-[1.7]">{row.content}</td>
                    <td className="px-6 py-4">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${row.color}10`,
                          color: row.color,
                        }}
                      >
                        {row.purpose}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 03 — Broker Model Readiness
   ════════════════════════════════════════════════════════════════════ */

function BrokerModelReadiness() {
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
          <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#EF4444" }} />
          <span className="section-label" style={{ color: "#EF4444" }}>
            03 &mdash; Broker Model Readiness
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Broker model readiness
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Preparing collateral and processes so brokers can represent CPS independently and effectively.
        </motion.p>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full" style={{ backgroundColor: "#EF4444" }} />
          <div className="p-6 sm:p-8 flex gap-4">
            <Quote size={24} className="shrink-0 mt-1" style={{ color: "#EF4444" }} />
            <div>
              <p className="text-sm text-foreground/60 leading-[1.8] italic">
                &ldquo;We don&rsquo;t have a profile for CPS. That is going to be
                fundamentally important considering that we&rsquo;re bringing in a broker model.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Requirements list */}
        <div className="grid sm:grid-cols-2 gap-4">
          {BROKER_REQUIREMENTS.map((req, i) => {
            const Icon = req.icon;
            return (
              <motion.div
                key={req.text}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-6 hover:border-[#EF4444]/15 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#EF44440A", border: "1px solid #EF444415" }}
                >
                  <Icon size={18} style={{ color: "#EF4444" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <CheckCircle2 size={14} style={{ color: "#EF4444" }} />
                    <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/30">
                      Requirement
                    </span>
                  </div>
                  <p className="text-sm text-foreground/55 leading-[1.7]">{req.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 rounded-2xl bg-white/60 border border-black/[0.04] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <ArrowRight size={16} style={{ color: "#00A8E1" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#00A8E1" }}>
              Key takeaway
            </span>
          </div>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            Every piece of collateral must be designed to work independently — without a CPS
            salesperson in the room. This is the standard required for the broker model to succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   INTERNAL BRAND ALIGNMENT
   ════════════════════════════════════════════════════════════════════ */

function InternalBrandAlignment() {
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
          <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#6B2D8B" }} />
          <span className="section-label" style={{ color: "#6B2D8B" }}>
            Internal Brand Alignment
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Internal Brand Alignment{" "}
          <span className="text-foreground/40">&mdash; One Voice, One Story</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Ensuring every CPS team member who speaks to a client or prospect uses the same materials and language.
        </motion.p>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full" style={{ backgroundColor: "#6B2D8B" }} />
          <div className="p-6 sm:p-8 flex gap-4">
            <Quote size={24} className="shrink-0 mt-1" style={{ color: "#6B2D8B" }} />
            <div>
              <p className="text-sm text-foreground/60 leading-[1.8] italic">
                &ldquo;When someone says &lsquo;send me something about CPS,&rsquo; we all would
                potentially send things about CPS, but within our own narrative. We need a corporate
                profile that&rsquo;s consistent.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* The rule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-foreground/35 mb-4">
            The Rule
          </p>
          <p className="text-sm text-foreground/55 leading-[1.8] mb-6">
            Every CPS team member who speaks to a client or prospect uses the same materials:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {BRAND_ALIGNMENT_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-6 hover:border-[#6B2D8B]/15 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#6B2D8B0A", border: "1px solid #6B2D8B15" }}
                  >
                    <Icon size={18} style={{ color: "#6B2D8B" }} />
                  </div>
                  <p className="text-sm text-foreground/55 leading-[1.7]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Action card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="card-elevated !p-0 overflow-hidden"
          style={{ borderLeft: "4px solid #6B2D8B" }}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight size={16} style={{ color: "#6B2D8B" }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6B2D8B" }}>
                Action
              </span>
            </div>
            <p className="text-sm text-foreground/50 leading-[1.8]">
              Project managers must include marketing content migration in their project plans.
              When a new product or brochure is created, it replaces ALL previous versions across
              ALL team members. No more individual narrative versions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════════ */

export default function B2BSalesEnablementPage() {
  return (
    <main className="min-h-screen bg-white">
      <SalesHeader />
      <SalesProcess />
      <CollateralSystem />
      <ProposalDeckTemplate />
      <BrokerModelReadiness />
      <InternalBrandAlignment />
      <Footer />
    </main>
  );
}
