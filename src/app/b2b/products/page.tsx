"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Landmark,
  Award,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Wrench,
  Package,
  PenTool,
  Monitor,
  Brain,
  BarChart3,
  ClipboardCheck,
  Lock,
  Link2,
  AlertTriangle,
  AlertCircle,
  Quote,
  Zap,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const CATEGORIES = [
  {
    name: "Banking & Financial Services",
    color: "#6B2D8B",
    icon: Landmark,
    products: ["HCIB (NQF 5)", "Business Banking Practitioner"],
    tag: "Core",
  },
  {
    name: "Leadership & Management",
    color: "#00A8E1",
    icon: Award,
    products: ["ACL6 (NQF 6 \u2014 \u201CLeadership Agility in Financial Markets\u201D)"],
    tag: "Flagship",
  },
  {
    name: "Insurance & Risk",
    color: "#10B981",
    icon: ShieldCheck,
    products: ["LTIA (NQF 5)", "Insurance learnerships"],
    tag: "Growth",
  },
  {
    name: "Future Skills & Digital",
    color: "#FFD100",
    icon: Sparkles,
    products: ["Problem-solving", "Critical thinking", "Digital literacy"],
    tag: "Emerging",
  },
  {
    name: "Vocational Qualifications",
    color: "#94A3B8",
    icon: GraduationCap,
    products: [
      "Foundations of Value Selling",
      "Relationship Manager Development Programme",
      "Thrive Track Workplace Development",
      "Branch Manager Development Programme",
      "Digital Transformation Programme",
      "Digital Innovation Programme",
      "Sales and Client Experience Excellence",
      "Principles of Sustainable Investments",
    ],
    tag: "Volume",
  },
  {
    name: "Custom Solutions",
    color: "#EF4444",
    icon: Wrench,
    products: ["Bespoke programmes for specific client needs"],
    tag: "Premium",
  },
];

const INVESTMENT_FEATURES = [
  { text: "Pre-built, curriculum-ready programmes", icon: Package },
  { text: "Standard pricing structure", icon: ClipboardCheck },
  { text: "Quick to deploy across teams", icon: Zap },
  { text: "Proven outcomes and completion data", icon: BarChart3 },
];

const CUSTOM_FEATURES = [
  { text: "Designed for specific business outcomes", icon: Target },
  { text: "Higher-touch, consultative engagement", icon: PenTool },
  { text: "Longer sales cycle, higher value", icon: TrendingUp },
  { text: "Co-designed with client L&D teams", icon: Brain },
];

const PLATFORM_CAPABILITIES = [
  {
    title: "End-to-End Learning Delivery",
    description: "Complete digital learning ecosystem from enrolment through to certification, built for corporate scale.",
    icon: Monitor,
  },
  {
    title: "AI Assessment Marking",
    description: "2\u00D7 faster feedback turnaround. Live, regulator-approved AI marking system already in production.",
    icon: Brain,
  },
  {
    title: "Behavioural Competency Tracking",
    description: "Pre/post competency measurement showing 12\u201320% measurable shifts in learner capability.",
    icon: BarChart3,
  },
  {
    title: "Engagement Analytics for L&D",
    description: "Real-time dashboards giving corporate L&D teams full visibility into learner progress and programme health.",
    icon: ClipboardCheck,
  },
  {
    title: "Exam Functionality",
    description: "Assessment platform approved for higher education examination delivery and proctoring.",
    icon: GraduationCap,
  },
];

const PRICING_PRINCIPLES = [
  "All pricing is negotiated per engagement",
  "Volume-based scaling for larger deployments",
  "Do NOT publish on website \u2014 ever",
  "~20% below competitors (internal benchmark only)",
];

/* ════════════════════════════════════════════════════════════════════
   HEADER
   ════════════════════════════════════════════════════════════════════ */

function PageHeader() {
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
            <div className="w-8 h-[2px] bg-[#00A8E1] rounded-full" />
            <span className="section-label text-[#00A8E1]">B2B Products</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            B2B Product Portfolio{" "}
            <span className="bg-gradient-to-r from-[#00A8E1] to-[#6B2D8B] bg-clip-text text-transparent">
              &amp; Solutions
            </span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl">
            A structured view of CPS&apos;s product categories, solution architecture, technology platform, and pricing philosophy for corporate buyers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 01 — Product Organisation
   ════════════════════════════════════════════════════════════════════ */

function ProductOrganisation() {
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
          <div className="w-8 h-[2px] bg-[#00A8E1] rounded-full" />
          <span className="section-label text-[#00A8E1]">01 &mdash; Product Organisation</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Category Framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          CPS organises its B2B offering across six product categories, each serving a distinct corporate need.
        </motion.p>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="card-elevated !p-0 overflow-hidden hover:-translate-y-1 transition-all"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: cat.color }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${cat.color}0F`,
                      borderColor: `${cat.color}20`,
                    }}
                  >
                    <cat.icon size={18} style={{ color: cat.color }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${cat.color}0F`,
                      color: cat.color,
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground/80 mb-3">{cat.name}</h3>
                <ul className="space-y-1.5">
                  {cat.products.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-foreground/50 leading-[1.7]">
                      <span className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ backgroundColor: cat.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio rebalance note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
          style={{ borderLeft: "4px solid #FFD100" }}
        >
          <div className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFD100]/[0.08] border border-[#FFD100]/15 flex items-center justify-center shrink-0">
                <AlertCircle size={18} style={{ color: "#FFD100" }} />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#B8860B" }}>
                  Portfolio Note &mdash; Under Review
                </h3>
                <p className="text-sm text-foreground/55 leading-[1.7]">
                  There is overlap between the <span className="font-semibold text-foreground/75">Banking &amp; Financial Services (Core)</span> and{" "}
                  <span className="font-semibold text-foreground/75">Vocational Qualifications</span> categories that needs to be rebalanced. Indira to provide further detail on the product portfolio breakdown so categories can be cleanly separated.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Naming Strategy quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-elevated !p-0 overflow-hidden max-w-3xl mx-auto"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#00A8E1] to-[#6B2D8B]" />
          <div className="p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00A8E1]/[0.06] border border-[#00A8E1]/10 flex items-center justify-center shrink-0">
                <Quote size={18} className="text-[#00A8E1]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#00A8E1] uppercase tracking-wider mb-3">
                  Product Naming Strategy
                </h3>
                <p className="text-sm text-foreground/60 leading-[1.8] italic">
                  &ldquo;People buy a name. The name sounds like it&apos;s gonna do it.&rdquo;
                </p>
                <p className="text-xs text-foreground/40 mt-3">
                  Strong, outcome-oriented product names are a deliberate part of CPS&apos;s B2B positioning.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 02 — Solution Architecture
   ════════════════════════════════════════════════════════════════════ */

function SolutionArchitecture() {
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
          <div className="w-8 h-[2px] bg-[#6B2D8B] rounded-full" />
          <span className="section-label text-[#6B2D8B]">02 &mdash; Solution Architecture</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Two engagement models
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          CPS serves corporate clients through two distinct solution pathways, each designed for different buyer needs and timelines.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Investment Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#00A8E1]/[0.06] border border-[#00A8E1]/10 flex items-center justify-center">
                  <Package size={18} className="text-[#00A8E1]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground/80">Investment Products</h3>
                  <p className="text-[11px] text-[#00A8E1] font-medium">Off-the-Shelf</p>
                </div>
              </div>
              <ul className="space-y-3">
                {INVESTMENT_FEATURES.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#00A8E1]/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={14} className="text-[#00A8E1]" />
                    </div>
                    <span className="text-xs text-foreground/50 leading-[1.7]">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#6B2D8B]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#6B2D8B]/[0.06] border border-[#6B2D8B]/10 flex items-center justify-center">
                  <PenTool size={18} className="text-[#6B2D8B]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground/80">Custom Solutions</h3>
                  <p className="text-[11px] text-[#6B2D8B] font-medium">Bespoke</p>
                </div>
              </div>
              <ul className="space-y-3">
                {CUSTOM_FEATURES.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#6B2D8B]/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={14} className="text-[#6B2D8B]" />
                    </div>
                    <span className="text-xs text-foreground/50 leading-[1.7]">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 03 — CPSLearn Platform (B2B Pitch)
   ════════════════════════════════════════════════════════════════════ */

function CPSLearnPlatform() {
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
          <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
          <span className="section-label text-[#10B981]">03 &mdash; CPSLearn Platform</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Technology that sells itself
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          CPSLearn is not just a learning platform &mdash; it is a competitive differentiator when pitching to corporate L&amp;D teams.
        </motion.p>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PLATFORM_CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="card-elevated p-6 hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/[0.06] border border-[#10B981]/10 flex items-center justify-center mb-4">
                <cap.icon size={18} className="text-[#10B981]" />
              </div>
              <h3 className="text-sm font-bold text-foreground/80 mb-2">{cap.title}</h3>
              <p className="text-xs text-foreground/50 leading-[1.7]">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Blockchain Credential Innovation highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full bg-[#00A8E1]" />
          <div className="p-7 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#00A8E1]/[0.06] border border-[#00A8E1]/10 flex items-center justify-center shrink-0">
                <Link2 size={20} className="text-[#00A8E1]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-sm font-bold text-foreground/80">Blockchain Credential Innovation</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00A8E1]/[0.08] text-[#00A8E1]">
                    In Development
                  </span>
                </div>
                <p className="text-xs text-foreground/50 leading-[1.8] mb-4">
                  CPS is developing blockchain-based credential verification. Qualifications stored on a public blockchain as NFTs held in employee wallets &mdash; permanent, indestructible, portable.
                </p>
                <div className="p-4 rounded-xl bg-[#00A8E1]/[0.03] border border-[#00A8E1]/[0.08]">
                  <p className="text-xs text-foreground/55 leading-[1.7] italic">
                    &ldquo;I don&apos;t think anyone has that at the moment. That&apos;s very unique.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 04 — Pricing Philosophy
   ════════════════════════════════════════════════════════════════════ */

function PricingPhilosophy() {
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
          <div className="w-8 h-[2px] bg-[#EF4444] rounded-full" />
          <span className="section-label text-[#EF4444]">04 &mdash; Pricing Philosophy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Pricing is a competitive weapon
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          B2B pricing at CPS is intentionally opaque. This is not an oversight &mdash; it is strategy.
        </motion.p>

        {/* Warning-style card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-elevated !p-0 overflow-hidden border-[#EF4444]/[0.12]">
            <div className="h-[3px] w-full bg-gradient-to-r from-[#EF4444] to-[#FFD100]" />
            <div className="p-7 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#EF4444]/[0.06] border border-[#EF4444]/10 flex items-center justify-center shrink-0">
                  <AlertTriangle size={20} className="text-[#EF4444]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EF4444]/[0.08] text-[#EF4444]">
                      Internal Only
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFD100]/[0.15] text-[#B8860B]">
                      Amber
                    </span>
                  </div>
                  <p className="text-sm font-bold text-foreground/80 leading-[1.7]">
                    In B2B, we do NOT publish pricing. This is a deliberate competitive advantage.
                  </p>
                </div>
              </div>

              <div className="border-t border-black/[0.04] pt-6">
                <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-4">Key Principles</h4>
                <ul className="space-y-3">
                  {PRICING_PRINCIPLES.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-[#EF4444]/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                        <Lock size={11} className="text-[#EF4444]" />
                      </div>
                      <span className="text-xs text-foreground/50 leading-[1.7]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#EF4444]/[0.02] border border-[#EF4444]/[0.06]">
                <p className="text-[11px] text-foreground/40 leading-[1.7]">
                  <span className="font-bold text-[#EF4444]">Note:</span> This section is for internal strategy reference only. Pricing details must never appear on any public-facing page.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════════ */

export default function B2BProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader />
      <ProductOrganisation />
      <SolutionArchitecture />
      <CPSLearnPlatform />
      <PricingPhilosophy />
      <Footer />
    </main>
  );
}
