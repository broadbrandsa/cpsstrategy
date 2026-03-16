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
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const WHY_B2B_MATTERS = [
  { text: "Anchors institutional credibility", icon: Building2 },
  { text: "Creates larger revenue opportunities", icon: Globe },
  { text: "Strengthens trust in the market", icon: CheckCircle2 },
  { text: "Supports repeat business and programme bundling", icon: Package },
  { text: "Reinforces the B2C brand through visible corporate relationships", icon: Users },
];

const AUDIENCES = [
  {
    title: "Banking & Financial Services L&D Teams",
    subtitle: "Skills Development",
    body: "These buyers are responsible for workforce capability, skills programmes, and qualification planning.",
    color: "#6B2D8B",
    icon: Building2,
    tag: "Primary",
  },
  {
    title: "HR and Talent Development Leaders",
    subtitle: "People & Culture",
    body: "These buyers care about staff development, progression, retention, and practical qualification pathways.",
    color: "#00A8E1",
    icon: Users,
    tag: "Strategic",
  },
  {
    title: "Strategic Partners & Broker Networks",
    subtitle: "Industry Relationships",
    body: "These audiences sit closer to market expansion, industry partnerships, and new logo growth opportunities.",
    color: "#10B981",
    icon: Handshake,
    tag: "Growth",
  },
];

const STRATEGY_AIMS = [
  "Make CPS\u2019s corporate offer easier to understand",
  "Create dedicated pages for enterprise and organisational buyers",
  "Surface stronger corporate proof and case-study style credibility",
  "Package qualifications and solutions in ways that make sense for teams",
  "Support Dylan\u2019s outreach and LinkedIn-led B2B activity",
  "Create presentation-ready proposal experiences that help move opportunities forward",
  "Strengthen CPS\u2019s authority across banking, insurance, investment, and related sectors",
];

const BUILDING_BLOCKS = [
  {
    heading: "Dedicated B2B Pages",
    body: "Pages that explain CPS\u2019s value for organisations, team development, and industry-specific workforce needs.",
    color: "#6B2D8B",
    icon: Globe,
    step: "01",
  },
  {
    heading: "Programme Bundles for Teams",
    body: "Clear packaging of qualifications and learning pathways relevant to organisational capability building.",
    color: "#00A8E1",
    icon: Package,
    step: "02",
  },
  {
    heading: "Corporate Case Studies",
    body: "Proof-led stories showing outcomes, relationships, and sector relevance in the banking and financial services space.",
    color: "#10B981",
    icon: FileText,
    step: "03",
  },
  {
    heading: "LinkedIn-Led Demand Generation",
    body: "A more intentional B2B pipeline using professional targeting, thought leadership, and sector-led messaging.",
    color: "#FFD100",
    icon: Linkedin,
    step: "04",
  },
  {
    heading: "Proposal Experiences",
    body: "Presentation-ready proposal sites, decks, and tailored materials that support enterprise conversations and internal stakeholder buy-in.",
    color: "#EF4444",
    icon: Presentation,
    link: { href: "https://eyproposal.vercel.app/", label: "First proposal site" },
    step: "05",
  },
];

const MESSAGING_FOCUS = [
  { text: "Workforce capability", color: "#6B2D8B" },
  { text: "Guided qualification pathways", color: "#00A8E1" },
  { text: "Industry alignment", color: "#10B981" },
  { text: "Professional credibility", color: "#FFD100" },
  { text: "Measurable outcomes", color: "#EF4444" },
  { text: "Long-term partnership value", color: "#6B2D8B" },
];

const SUCCESS_OUTCOMES = [
  "Clearer B2B proposition",
  "Stronger enterprise sales materials",
  "Better support for corporate conversations",
  "More visible authority in banking and adjacent sectors",
  "Stronger relationship between B2B proof and B2C trust",
  "More proposal-ready assets that accelerate decision-making",
];

/* ════════════════════════════════════════════════════════════════════
   SECTION 0 — Page Header  (gradient hero band)
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
            <span className="section-label text-cps-purple">B2B Strategy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            B2B{" "}
            <span className="text-gradient-purple">Strategy</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-8">
            Building corporate demand, strategic credibility, and presentation-ready growth pathways for organisational buyers.
          </p>
        </motion.div>

        {/* Two-column intro cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-cps-purple" />
            <div className="p-6 sm:p-7">
              <h3 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-3">Existing Strength</h3>
              <p className="text-sm text-foreground/50 leading-[1.8]">
                CPS already has real credibility in B2B through long-standing work with major banks and institutional clients.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-cps-blue" />
            <div className="p-6 sm:p-7">
              <h3 className="text-xs font-bold text-cps-blue uppercase tracking-wider mb-3">The Opportunity</h3>
              <p className="text-sm text-foreground/50 leading-[1.8]">
                Translate that credibility into a clearer, more visible B2B growth engine. This page defines how CPS should position itself to corporate buyers and what outcomes the B2B strategy should achieve.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 1 — Why B2B Still Matters  (icon row on tinted bg)
   ════════════════════════════════════════════════════════════════════ */

function WhyB2BMatters() {
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
          <span className="section-label text-cps-purple">01 &mdash; Why B2B Still Matters</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Why B2B still matters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          CPS is growing its B2C engine, but B2B remains one of its strongest strategic advantages.
        </motion.p>

        {/* Icon row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {WHY_B2B_MATTERS.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-black/[0.04] hover:border-cps-purple/15 transition-all hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-cps-purple/[0.06] border border-cps-purple/10 flex items-center justify-center mb-3">
                <item.icon size={18} className="text-cps-purple" />
              </div>
              <p className="text-xs text-foreground/55 leading-[1.6]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-foreground/50 leading-[1.8] max-w-3xl"
        >
          B2B is not separate from the growth system. It is one of the pillars that strengthens the whole CPS brand.
        </motion.p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 2 — Core Audiences  (large featured cards with tags/icons)
   ════════════════════════════════════════════════════════════════════ */

function CoreAudiences() {
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
          <span className="section-label text-cps-blue">02 &mdash; Core B2B Audiences</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Core B2B audiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          CPS should speak to multiple B2B decision-makers, not just one generic corporate buyer.
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
            Across all three audiences, CPS should position itself as a credible professional partner in education, not just a training vendor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 3 — Strategy Aims  (numbered checklist with accent bar)
   ════════════════════════════════════════════════════════════════════ */

function StrategyAims() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left: heading + intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[2px] bg-cps-green rounded-full" />
              <span className="section-label text-cps-green">03 &mdash; Strategic Outcomes</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
            >
              What the B2B strategy should achieve
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm text-foreground/50 leading-[1.8]"
            >
              The B2B strategy should not only generate leads. It should strengthen CPS&apos;s position in the market and make enterprise conversations easier to open and easier to close.
            </motion.p>
          </div>

          {/* Right: numbered checklist card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-cps-green to-cps-blue" />
            <div className="p-6 sm:p-8">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-5">
                The B2B strategy should aim to
              </p>
              <div className="space-y-4">
                {STRATEGY_AIMS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cps-green/10 text-[10px] font-bold text-cps-green shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground/55 leading-[1.7]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
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
          Core B2B building blocks
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
   SECTION 5 — Messaging Direction  (pill tags on dark-ish card)
   ════════════════════════════════════════════════════════════════════ */

function MessagingDirection() {
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
          <span className="section-label text-cps-blue">05 &mdash; Messaging Direction</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Messaging direction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-10"
        >
          B2B messaging should feel more strategic, credible, and commercially relevant than B2C messaging. It should focus on:
        </motion.p>

        {/* Pill tags in a dark card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-cps-dark-purple p-8 sm:p-10 mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {MESSAGING_FOCUS.map((item, i) => (
              <motion.span
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                className="inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}30`,
                  color: item.color === "#FFD100" ? "#FFD100" : `${item.color}`,
                }}
              >
                {item.text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-white border border-black/[0.05] p-8"
          style={{ borderLeft: "4px solid #00A8E1" }}
        >
          <p className="text-sm text-foreground/50 leading-[1.8]">
            The tone should position CPS as a trusted education and capability partner for regulated, performance-driven sectors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 6 — What Success Looks Like  (2-col: metric cards + text)
   ════════════════════════════════════════════════════════════════════ */

function WhatSuccessLooksLike() {
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
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">06 &mdash; What Success Looks Like</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          What success looks like
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          The B2B strategy is successful when CPS becomes easier to buy from, easier to trust, and easier to present internally.
        </motion.p>

        {/* 2x3 grid of outcome cards with check icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUCCESS_OUTCOMES.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-black/[0.04] hover:border-cps-green/20 transition-all"
            >
              <CheckCircle2 size={16} className="text-cps-green mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/55 leading-[1.6]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 7 — Relationship to B2C  (visual reinforcement loop)
   ════════════════════════════════════════════════════════════════════ */

function RelationshipToB2C() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const reinforcements = [
    { from: "Corporate credibility", to: "Student trust", color: "#6B2D8B" },
    { from: "Student success", to: "Corporate credibility", color: "#00A8E1" },
    { from: "Proposal materials", to: "Enterprise growth", color: "#10B981" },
    { from: "Enterprise relationships", to: "B2C conversion", color: "#FFD100" },
  ];

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
          <span className="section-label text-cps-purple">07 &mdash; Relationship to B2C</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Relationship to B2C
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          B2B and B2C should reinforce each other.
        </motion.p>

        {/* Reinforcement flow cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {reinforcements.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/[0.04]"
            >
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-lg shrink-0"
                style={{ backgroundColor: `${r.color}0A`, color: r.color }}
              >
                {r.from}
              </span>
              <ArrowRight size={16} className="text-foreground/20 shrink-0" />
              <span className="text-sm font-medium text-foreground/60">{r.to}</span>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 sm:p-10 rounded-2xl bg-white border border-cps-purple/8 accent-bar-left pl-10"
        >
          <p className="text-base sm:text-lg text-foreground/60 leading-[1.8] italic">
            The long-term advantage for CPS is not choosing between B2B and B2C. It is building a system where both sides of the business strengthen the other.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function B2BStrategyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <B2BHeader />
      <WhyB2BMatters />
      <CoreAudiences />
      <StrategyAims />
      <BuildingBlocks />
      <MessagingDirection />
      <WhatSuccessLooksLike />
      <RelationshipToB2C />
      <Footer />
    </div>
  );
}
