"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Presentation,
  FileText,
  TrendingUp,
  Repeat2,
  Award,
  ClipboardList,
  Globe,
  BookOpen,
  GraduationCap,
  Camera,
  Briefcase,
  Network,
  Building2,
  UserCheck,
  ArrowLeftRight,
  FolderCheck,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const ORGANIC_GROWTH_STEPS = [
  {
    step: "01",
    title: "Map the client",
    body: "Identify all L&D contacts within the current client. Map every division, department, and business unit.",
    color: "#00A8E1",
    icon: Users,
  },
  {
    step: "02",
    title: "Leverage the relationship",
    body: "Use the existing relationship to get introduced to adjacent divisions. Warm introductions convert faster than cold outreach.",
    color: "#6B2D8B",
    icon: Target,
  },
  {
    step: "03",
    title: "Propose a master class",
    body: "Propose a master class using the client\u2019s own data. This demonstrates value, builds trust, and opens new conversations.",
    color: "#10B981",
    icon: Presentation,
  },
  {
    step: "04",
    title: "Present full CPS portfolio",
    body: "Present the full CPS portfolio to new contacts. Show breadth of offering and relevance to their specific division\u2019s needs.",
    color: "#FFD100",
    icon: BookOpen,
  },
  {
    step: "05",
    title: "Follow up with content",
    body: "Follow up with a white paper and brochures. Keep the conversation alive with value-led content that reinforces credibility.",
    color: "#EF4444",
    icon: FileText,
  },
];

const NETWORK_ACTIVATION_CARDS = [
  {
    title: "Shareholder Networks",
    body: "CPS shareholders have extensive industry connections. Scheduled meetings with shareholders to identify warm introductions at target organisations. This is an executive-level pipeline source.",
    color: "#6B2D8B",
    icon: Network,
  },
  {
    title: "Industry Associations",
    body: "Banking and financial services industry bodies, BBBEE forums, skills development conferences \u2014 all places where CPS should have presence and relationships.",
    color: "#00A8E1",
    icon: Building2,
  },
  {
    title: "Alumni Network",
    body: "11,400+ professionals trained by CPS across major banks. These are potential advocates, referral sources, and internal champions at their current organisations.",
    color: "#10B981",
    icon: UserCheck,
  },
];

const B2B_B2C_LOOP = [
  { label: "Employee completes B2B course at their company\u2019s instruction", icon: GraduationCap, color: "#00A8E1" },
  { label: "Certificate delivered electronically with a link: \u2018For all our other courses, click here\u2019", icon: Award, color: "#6B2D8B" },
  { label: "\u2018I\u2019ve been told to attend by my boss. But if you send me my certificate, I\u2019m all excited. I feel very clever. I\u2019m gonna click on the link and see what other courses I can do as part of climbing up the ladder.\u2019", icon: TrendingUp, color: "#10B981" },
  { label: "Employee either self-enrolls in B2C course OR promotes CPS internally to their L&D team \u2192 new B2B relationship opens", icon: Repeat2, color: "#FFD100" },
];

const B2C_B2B_REVERSE_STEPS = [
  { step: "01", text: "B2C student signs up individually (employed at a bank or financial services company)", color: "#10B981" },
  { step: "02", text: "CPS identifies their employer during enrollment", color: "#00A8E1" },
  { step: "03", text: "Post-enrollment: CPS coaches the student to advocate internally \u2014 \u2018Did you know your company could fund this for your whole team?\u2019", color: "#6B2D8B" },
  { step: "04", text: "Student approaches their L&D team or manager", color: "#FFD100" },
  { step: "05", text: "CPS provides the student with a simple brief they can share internally", color: "#EF4444" },
  { step: "06", text: "New B2B relationship opens through internal advocacy", color: "#10B981" },
];

const MASTER_CLASS_FORMATS = [
  {
    format: "Open (online)",
    audience: "L&D community broadly",
    purpose: "Brand building, lead gen",
    frequency: "Monthly",
    color: "#00A8E1",
    icon: Globe,
  },
  {
    format: "Closed (client premises)",
    audience: "Strategic client teams",
    purpose: "Account penetration",
    frequency: "Quarterly per client",
    color: "#6B2D8B",
    icon: Briefcase,
  },
  {
    format: "Data-driven (client data)",
    audience: "Specific client teams",
    purpose: "Demonstrate value",
    frequency: "On request",
    color: "#10B981",
    icon: BarChart3,
  },
  {
    format: "Post-event follow-up",
    audience: "Attendees",
    purpose: "Nurture with white paper",
    frequency: "After every event",
    color: "#FFD100",
    icon: FileText,
  },
];

const FUNNEL_STEPS = [
  { label: "Relationship Contact", color: "#00A8E1" },
  { label: "Discovery Meeting", color: "#00A8E1" },
  { label: "Solution Proposal", color: "#6B2D8B" },
  { label: "Presentation & Demo", color: "#6B2D8B" },
  { label: "Approval Cycle", color: "#10B981" },
  { label: "Contract", color: "#10B981" },
  { label: "Delivery & Support", color: "#FFD100" },
  { label: "Expand", color: "#EF4444" },
];

const KPI_DATA = [
  { metric: "Website B2B leads", current: "0", target: "First lead in 2026", cadence: "Monthly", owner: "Broadbrand" },
  { metric: "L&D penetration (existing clients)", current: "~20%", target: "50%+", cadence: "Quarterly", owner: "Dylan + Sales" },
  { metric: "Master classes hosted", current: "0", target: "1/month", cadence: "Monthly", owner: "Dylan + Broadbrand" },
  { metric: "White papers published", current: "0", target: "1/quarter", cadence: "Quarterly", owner: "Broadbrand + Academic co-author" },
  { metric: "New divisions penetrated (existing clients)", current: "TBD", target: "2/quarter", cadence: "Quarterly", owner: "Dylan" },
  { metric: "LinkedIn engagement (CEO + company)", current: "Inconsistent", target: "2 posts/week", cadence: "Weekly", owner: "Broadbrand + CEO" },
  { metric: "Conference speaking slots", current: "0 (2yr gap)", target: "2/year", cadence: "Annual", owner: "CPS leadership" },
  { metric: "B2B \u2192 B2C student conversions", current: "0 (no system)", target: "Track from launch", cadence: "Monthly", owner: "Broadbrand" },
  { metric: "Corporate profile distributed", current: "Not created", target: "100% of sales team using same version", cadence: "Once, then maintain", owner: "Broadbrand" },
  { metric: "Professional brand assets", current: "None since pre-COVID", target: "Photo + video shoot completed", cadence: "Within 30 days", owner: "Broadbrand" },
];

const REPORTING_TABLE = [
  { activity: "Website B2B lead tracking", owner: "Broadbrand", frequency: "Weekly", tool: "GA4 + Pipedrive CRM" },
  { activity: "Master class pipeline & scheduling", owner: "Dylan", frequency: "Weekly", tool: "CRM + Calendar" },
  { activity: "KPI dashboard update", owner: "Broadbrand + Dylan", frequency: "Monthly", tool: "Shared dashboard" },
  { activity: "White paper production", owner: "Broadbrand + academic co-author", frequency: "Quarterly", tool: "Content calendar" },
  { activity: "LinkedIn B2B content (drafts)", owner: "Broadbrand", frequency: "2\u00d7/week", tool: "LinkedIn + scheduling tool" },
  { activity: "LinkedIn B2B content (CEO approval)", owner: "CEO", frequency: "2\u00d7/week", tool: "LinkedIn" },
  { activity: "Account penetration review", owner: "Dylan", frequency: "Monthly", tool: "CRM / Pipeline spreadsheet" },
  { activity: "B2B \u2192 B2C tracking", owner: "Broadbrand", frequency: "Monthly", tool: "Analytics + CRM" },
  { activity: "Bursary outcome documentation", owner: "CPS Admin + Broadbrand", frequency: "Quarterly", tool: "Student records" },
  { activity: "Email campaigns (master class promos, white paper distribution)", owner: "Broadbrand", frequency: "Monthly", tool: "MailChimp" },
  { activity: "Collateral version control", owner: "Broadbrand", frequency: "As needed", tool: "Shared drive \u2014 single source of truth" },
  { activity: "Photography/video production", owner: "Broadbrand", frequency: "Schedule within 30 days", tool: "Production brief" },
];

const BURSARY_ACTIONS = [
  { text: "Document outcomes for every bursary student \u2014 completions, employment, career progression", icon: ClipboardList, color: "#00A8E1" },
  { text: "Create 2\u20133 written case studies per year showcasing real impact", icon: FileText, color: "#6B2D8B" },
  { text: "Use stories as social proof on website, LinkedIn, and proposals", icon: Camera, color: "#10B981" },
  { text: "Track employment rates post-qualification to build long-term evidence base", icon: BarChart3, color: "#FFD100" },
];

const CASE_STUDY_TEMPLATE = [
  { field: "Student name (with consent) and background", color: "#00A8E1" },
  { field: "What they studied at CPS", color: "#6B2D8B" },
  { field: "Where they were before the qualification", color: "#10B981" },
  { field: "Where they are now (role, company, career progression)", color: "#FFD100" },
  { field: "Quote from the student", color: "#EF4444" },
  { field: "Key data point (e.g., \u2018promoted within 6 months of completing qualification\u2019)", color: "#00A8E1" },
];

/* ════════════════════════════════════════════════════════════════════
   HEADER
   ════════════════════════════════════════════════════════════════════ */

function GrowthHeader() {
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
            <span className="section-label text-[#00A8E1]">B2B Growth &amp; Operations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            B2B Account Growth{" "}
            <span className="text-[#00A8E1]">&amp; Operations</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-8">
            Turning existing relationships into deeper penetration, systematic master class delivery, and a measurable B2B growth engine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="p-6 sm:p-7">
              <h3 className="text-xs font-bold text-[#00A8E1] uppercase tracking-wider mb-3">The Reality</h3>
              <p className="text-sm text-foreground/50 leading-[1.8]">
                There are huge gaps even in our client base. 80% of the L&amp;D fraternity at Standard Bank know nothing about us.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#6B2D8B]" />
            <div className="p-6 sm:p-7">
              <h3 className="text-xs font-bold text-[#6B2D8B] uppercase tracking-wider mb-3">The Opportunity</h3>
              <p className="text-sm text-foreground/50 leading-[1.8]">
                A systematic playbook for organic account growth, master class-led expansion, and a clear funnel with KPIs that turn activity into measurable outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 01 — Account Penetration Strategy
   ════════════════════════════════════════════════════════════════════ */

function AccountPenetration() {
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
          <span className="section-label text-[#00A8E1]">01 &mdash; Account Penetration Strategy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Organic growth playbook
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-3xl mb-12"
        >
          A 5-step repeatable process for expanding within existing client organisations. Each step builds on the previous, creating compounding account penetration.
        </motion.p>

        {/* 5-step timeline */}
        <div className="relative mb-16">
          <div className="hidden lg:block absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00A8E1]/20 via-[#6B2D8B]/20 to-[#EF4444]/20 rounded-full" />

          <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {ORGANIC_GROWTH_STEPS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="relative lg:pl-16 lg:py-5"
                >
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
                        <h4 className="text-sm font-bold text-foreground mb-1">{card.title}</h4>
                        <p className="text-xs text-foreground/45 leading-[1.7]">{card.body}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Strategic Network Activation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <Network size={18} className="text-[#6B2D8B]" />
            <h3 className="text-lg font-bold text-foreground">Strategic Network Activation</h3>
          </div>
          <p className="text-sm text-foreground/50 max-w-3xl mb-8">
            Beyond organic account growth, CPS has untapped network channels:
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {NETWORK_ACTIVATION_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="card-elevated !p-0 overflow-hidden"
                >
                  <div className="h-[3px] w-full" style={{ backgroundColor: card.color }} />
                  <div className="p-6 sm:p-7">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${card.color}0A`, border: `1px solid ${card.color}15` }}
                    >
                      <Icon size={18} style={{ color: card.color }} />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">{card.title}</h4>
                    <p className="text-xs text-foreground/45 leading-[1.7]">{card.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* B2B to B2C Conversion Loop */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#00A8E1] via-[#6B2D8B] to-[#10B981]" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Repeat2 size={18} className="text-[#00A8E1]" />
              <h3 className="text-sm font-bold text-foreground">B2B &rarr; B2C Conversion Loop</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {B2B_B2C_LOOP.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="relative">
                    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-black/[0.04] h-full">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${step.color}0A`, border: `1px solid ${step.color}15` }}
                      >
                        <Icon size={18} style={{ color: step.color }} />
                      </div>
                      <p className="text-xs text-foreground/55 leading-[1.6]">{step.label}</p>
                    </div>
                    {i < B2B_B2C_LOOP.length - 1 && (
                      <ArrowRight size={14} className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-foreground/20 z-10" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl bg-[#10B981]/[0.04] border border-[#10B981]/10 p-4">
              <p className="text-xs text-foreground/55 leading-[1.7]">
                <span className="font-bold text-[#10B981]">Discount incentive:</span>{" "}
                B2B-trained students get preferential B2C pricing, creating a natural bridge between corporate training and personal development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* B2C to B2B Reverse Loop */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#10B981] via-[#FFD100] to-[#6B2D8B]" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ArrowLeftRight size={18} className="text-[#10B981]" />
              <h3 className="text-sm font-bold text-foreground">The Reverse Loop &mdash; B2C Students Open B2B Doors</h3>
            </div>

            <div
              className="rounded-2xl bg-white border border-black/[0.05] p-5 sm:p-6 mb-6"
              style={{ borderLeft: "4px solid #10B981" }}
            >
              <p className="text-sm text-foreground/50 leading-[1.8] italic">
                &ldquo;If they&apos;re in business banking roles, we can say to them: &lsquo;You&apos;re in the role. Get your mentor, talk to them.&rsquo;&rdquo;
              </p>
            </div>

            <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-5">How it works</h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {B2C_B2B_REVERSE_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-black/[0.04]"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${step.color}0A`, border: `1px solid ${step.color}15` }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: step.color }}>{step.step}</span>
                  </div>
                  <p className="text-xs text-foreground/55 leading-[1.7]">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#FFD100]/[0.06] border border-[#FFD100]/15 p-4">
              <p className="text-xs text-foreground/55 leading-[1.7]">
                <span className="font-bold text-[#FFD100]">Note:</span>{" "}
                This is already happening organically &mdash; &ldquo;A lot of people inquiring about business banking practice&rdquo; through the B2C channel. The opportunity is to systematise it rather than let it happen by accident.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 02 — Master Class as Growth Tool
   ════════════════════════════════════════════════════════════════════ */

function MasterClassGrowth() {
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
          <span className="section-label text-[#6B2D8B]">02 &mdash; Master Class as Growth Tool</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Master class formats
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Four distinct master class formats, each serving a different growth objective. Together they create a continuous pipeline of engagement and conversion.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {MASTER_CLASS_FORMATS.map((mc, i) => {
            const Icon = mc.icon;
            return (
              <motion.div
                key={mc.format}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white"
                style={{ borderLeft: `4px solid ${mc.color}` }}
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${mc.color}0A`, border: `1px solid ${mc.color}15` }}
                    >
                      <Icon size={18} style={{ color: mc.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-foreground mb-1">{mc.format}</h4>
                      <p className="text-[10px] font-medium text-foreground/30 uppercase tracking-wider mb-3">{mc.frequency}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-semibold text-foreground/30 uppercase tracking-wider w-20 shrink-0 pt-0.5">Audience</span>
                      <p className="text-xs text-foreground/55 leading-[1.6]">{mc.audience}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-semibold text-foreground/30 uppercase tracking-wider w-20 shrink-0 pt-0.5">Purpose</span>
                      <p className="text-xs text-foreground/55 leading-[1.6]">{mc.purpose}</p>
                    </div>
                  </div>
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
   SECTION 03 — B2B Sales Funnel & KPIs
   ════════════════════════════════════════════════════════════════════ */

function SalesFunnelKPIs() {
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
          <span className="section-label text-[#10B981]">03 &mdash; Sales Funnel &amp; KPIs</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          B2B sales funnel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          An 8-step funnel from first contact to account expansion. Each stage requires specific actions and collateral.
        </motion.p>

        {/* Funnel visualization */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center gap-2">
            {FUNNEL_STEPS.map((step, i) => {
              const widthPercent = 100 - i * 7;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scaleX: 0.8 }}
                  animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                  className="relative rounded-xl py-3 px-6 text-center transition-all"
                  style={{
                    width: `${widthPercent}%`,
                    maxWidth: "700px",
                    backgroundColor: `${step.color}0A`,
                    border: `1px solid ${step.color}20`,
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: `${step.color}90` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: step.color }}>
                      {step.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* KPI Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={18} className="text-[#10B981]" />
            <h3 className="text-lg font-bold text-foreground">KPI Dashboard</h3>
          </div>

          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-[#10B981] to-[#00A8E1]" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/[0.05]">
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">KPI</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Current</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Target</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Cadence</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {KPI_DATA.map((row, i) => (
                    <motion.tr
                      key={row.metric}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
                      className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors"
                    >
                      <td className="p-4 text-sm font-medium text-foreground/70">{row.metric}</td>
                      <td className="p-4">
                        <span className="text-xs font-semibold text-[#EF4444]/70 bg-[#EF4444]/[0.06] px-2.5 py-1 rounded-full">
                          {row.current}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-xs font-semibold text-[#10B981] bg-[#10B981]/[0.06] px-2.5 py-1 rounded-full">
                          {row.target}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-foreground/40">{row.cadence}</td>
                      <td className="p-4">
                        <span className="text-xs font-semibold text-[#6B2D8B] bg-[#6B2D8B]/[0.06] px-2.5 py-1 rounded-full">
                          {row.owner}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 04 — Reporting & Ownership
   ════════════════════════════════════════════════════════════════════ */

function ReportingOwnership() {
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
          <div className="w-8 h-[2px] bg-[#FFD100] rounded-full" />
          <span className="section-label text-[#FFD100]">04 &mdash; Reporting &amp; Ownership</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Reporting &amp; ownership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Clear ownership and cadence for every B2B growth activity. Without accountability, strategy stays on paper.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#FFD100] to-[#00A8E1]" />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/[0.05]">
                  <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Activity</th>
                  <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Owner</th>
                  <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Frequency</th>
                  <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4 pb-3">Tool</th>
                </tr>
              </thead>
              <tbody>
                {REPORTING_TABLE.map((row, i) => (
                  <motion.tr
                    key={row.activity}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                    className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors"
                  >
                    <td className="p-4 text-sm font-medium text-foreground/70">{row.activity}</td>
                    <td className="p-4">
                      <span className="text-xs font-semibold text-[#6B2D8B] bg-[#6B2D8B]/[0.06] px-2.5 py-1 rounded-full">
                        {row.owner}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-foreground/55">{row.frequency}</td>
                    <td className="p-4 text-xs text-foreground/40">{row.tool}</td>
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
   SECTION 05 — Bursary Impact Stories
   ════════════════════════════════════════════════════════════════════ */

function BursaryImpact() {
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
          <div className="w-8 h-[2px] bg-[#EF4444] rounded-full" />
          <span className="section-label text-[#EF4444]">05 &mdash; Bursary Impact Stories</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Bursary impact stories{" "}
          <span className="text-[#EF4444]">(untapped asset)</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-white border border-black/[0.05] p-6 sm:p-8 mb-10"
          style={{ borderLeft: "4px solid #EF4444" }}
        >
          <p className="text-sm text-foreground/50 leading-[1.8] italic">
            &ldquo;We give 30&ndash;40 bursary students annually. We need to document outcomes. This is one of CPS&apos;s most powerful stories, and it&apos;s currently invisible.&rdquo;
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {BURSARY_ACTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.04] hover:border-black/[0.08] transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}0A`, border: `1px solid ${item.color}15` }}
                >
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <p className="text-sm text-foreground/55 leading-[1.7]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Case Study Template */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#EF4444] via-[#FFD100] to-[#10B981]" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FolderCheck size={18} className="text-[#EF4444]" />
              <h3 className="text-sm font-bold text-foreground">Case Study Template for Each Bursary Story</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {CASE_STUDY_TEMPLATE.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/[0.04]"
                >
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: item.color }} />
                  <p className="text-xs text-foreground/55 leading-[1.7]">{item.field}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#6B2D8B]/[0.04] border border-[#6B2D8B]/10 p-4">
              <p className="text-xs text-foreground/55 leading-[1.7]">
                <span className="font-bold text-[#6B2D8B]">Target:</span>{" "}
                Document 2&ndash;3 bursary case studies per quarter. Use in: LinkedIn posts, white papers, proposals, website, sales presentations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 p-8 sm:p-10 rounded-2xl bg-white border border-[#00A8E1]/8 accent-bar-left pl-10"
        >
          <p className="text-base sm:text-lg text-foreground/60 leading-[1.8] italic">
            Every bursary success story is a proof point for both B2B credibility and B2C aspiration. The security guard who became a bank manager &mdash; that&apos;s not just a feel-good story, it&apos;s a sales tool.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function B2BAccountGrowthPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <GrowthHeader />
      <AccountPenetration />
      <MasterClassGrowth />
      <SalesFunnelKPIs />
      <ReportingOwnership />
      <BursaryImpact />
      <Footer />
    </div>
  );
}
