"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Footer from "@/components/sections/footer";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const programmes = [
  {
    title: "Higher Certificate in Banking (HCIB)",
    color: "#6B2D8B",
    tags: ["NQF 5", "12 months", "202 credits", "CHE Accredited"],
    details: [
      { label: "Entry", value: "NQF 4 + employment in banking/financial services" },
      { label: "Fee", value: "R300 application, ~R2,480/month" },
      { label: "Next intake", value: "May 10, 2026" },
      { label: "Delivery", value: "Flexible online via CPSLearn" },
    ],
  },
  {
    title: "Advanced Certificate in Leadership (ACL6)",
    subtitle: "Leadership Agility in the Financial Markets",
    color: "#00A8E1",
    tags: ["NQF 6", "12 months"],
    details: [
      { label: "Target", value: "Working professionals seeking management" },
      { label: "Fee", value: "~R2,688/month" },
      { label: "Delivery", value: "100% online" },
    ],
  },
  {
    title: "Long Term Insurance Advisor (LTIA)",
    color: "#10B981",
    tags: ["NQF 5"],
    details: [
      { label: "Total", value: "R27,360 | App fee: R300 | Reg fee: R500" },
      { label: "Intakes", value: "Oct 2025, Feb 2026" },
    ],
  },
  {
    title: "Agile Banking Professional (ABP)",
    color: "#F59E0B",
    tags: [],
    details: [
      { label: "Entry", value: "Minimum NQF 4" },
      { label: "Status", value: "Active offering" },
    ],
  },
  {
    title: "Business Banking Practitioner",
    color: "#B87FD6",
    tags: [],
    details: [{ label: "Status", value: "Active offering" }],
  },
  {
    title: "Investment Advisor",
    color: "#00A8E1",
    tags: [],
    details: [{ label: "Status", value: "Active offering, info pack available" }],
  },
  {
    title: "Vocational Qualifications",
    color: "#94A3B8",
    tags: [],
    details: [
      { label: "Scope", value: "9 vocational qualifications in banking and insurance" },
      { label: "Note", value: "Transitioning from SETA to QCTO framework" },
    ],
  },
  {
    title: "Foundations of Value Selling",
    subtitle: "Transform sales approaches to create lasting client relationships.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Relationship Manager Development Programme",
    subtitle: "Develop trusted advisors your clients depend on for business growth.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Thrive Track Workplace Development",
    subtitle: "Launch careers with practical skills and workplace confidence.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Branch Manager Development Programme",
    subtitle: "Build branch leadership that drives performance through disruption.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Digital Transformation Programme",
    subtitle: "Build digital transformation capability that delivers business results.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Digital Innovation Programme",
    subtitle: "Build implementation capability that transforms operational performance.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Sales and Client Experience Excellence",
    subtitle: "Develop client experience capability that differentiates your organisation.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
  {
    title: "Principles of Sustainable Investments",
    subtitle: "Build ESG advisory capability across your investment team.",
    color: "#94A3B8",
    tags: ["3–6 months", "Vocational"],
    details: [{ label: "Pricing", value: "Enquire for details" }],
  },
];

const pathwaySteps = [
  { label: "NQF 4 Entry", color: "#94A3B8", bg: "rgba(148,163,184,0.08)" },
  { label: "HCIB (NQF 5)", color: "#6B2D8B", bg: "rgba(107,45,139,0.08)" },
  { label: "ACL6 (NQF 6)", color: "#00A8E1", bg: "rgba(0,168,225,0.08)" },
  { label: "Future NQF 7", color: "#10B981", bg: "rgba(16,185,129,0.08)" },
];

const aiFeatures = [
  { feature: "AI Reflection Tool", status: "LIVE (some products)", notes: "NOT in B2C \u2014 do not advertise" },
  { feature: "AI Assessment Marking", status: "LIVE", notes: "100% AI marked, human moderation, regulator approved" },
  { feature: "AI Program Building", status: "In Progress", notes: "Under testing \u2014 do not reference" },
  { feature: "AI Student Experience", status: "In Testing", notes: "Do not reference publicly" },
];

const competitiveAdvantages = [
  "2\u20133 min AI assessment vs 45\u201360 min human",
  "Only provider with AI reflection + assessment + programme building",
  "100% proprietary platform (not white-label LMS)",
  "Leaps and bounds ahead of competitors on student experience",
];

const complianceRules = [
  "AI Reflection Tool is NOT available in B2C. Do not reference in B2C marketing.",
  "AI Assessment Marking IS live and regulator-approved. You CAN reference this.",
  'Always say "AI-powered with human moderation" \u2014 never imply fully automated.',
  "Platform benchmarking project in progress \u2014 do not reference findings.",
  "Use REGISTERED programme names in all official materials.",
  "Pricing must match current published rates \u2014 verify before every campaign.",
  "Brandon Hall Awards can be referenced.",
  "BEE Level 1 can be claimed.",
];

const voicePrinciples = [
  { title: "Outcome-led, not credential-led", example: '\u201CLaunch a banking career\u201D not \u201CObtain NQF 5\u201D' },
  { title: "Specific, not vague", example: '\u201CR2,480/month for 12 months\u201D not \u201Caffordable pricing\u201D' },
  { title: "Student-centric", example: '\u201CYour career\u201D not \u201COur programme\u201D' },
  { title: "Confident, not arrogant", example: '\u201CTrusted by SA\u2019s biggest banks\u201D not \u201CThe best in SA\u201D' },
  { title: "Warm but professional", example: "Never corporate jargon, never casual slang" },
];

const doDont = [
  { do: "Launch a real banking career", dont: "Obtain your NQF 5 qualification" },
  { do: "R2,480/month for 12 months", dont: "Affordable pricing options" },
  { do: "Trusted by Absa, Standard Bank, Capitec, Nedbank", dont: "We are the best education provider" },
  { do: "Study online while you work", dont: "Flexible learning modalities available" },
];

/* ------------------------------------------------------------------ */
/*  Career Path / NQF Education                                        */
/* ------------------------------------------------------------------ */

const NQF_PARTS = [
  {
    heading: "Why this matters",
    color: "#6B2D8B",
    bullets: [
      "What qualification level is right for me?",
      "What does NQF 5 or NQF 6 actually mean?",
      "Which programme fits my goals?",
      "What comes after this qualification?",
    ],
    outro:
      "If CPS answers these questions clearly, it reduces decision anxiety and improves conversion.",
  },
  {
    heading: "What this content should explain",
    color: "#00A8E1",
    bullets: [
      "What qualification levels mean in simple language",
      "How different CPS qualifications relate to each other",
      "What kind of student each route is best suited to",
      "How a learner can progress from one level to the next over time",
    ],
    outro: null,
  },
  {
    heading: "What this unlocks",
    color: "#10B981",
    bullets: [
      "Improve lead quality",
      "Reduce confusion between programmes",
      "Strengthen trust",
      "Create clearer progression logic",
      "Make the qualification journey feel more guided and less overwhelming",
    ],
    outro: null,
  },
];

function CareerPathNQF() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 sm:py-36 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Career Path / NQF Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          Career Path /{" "}
          <span className="text-cps-purple">NQF Education</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-10"
        >
          Helping prospective students understand where they are, what level they need, and what comes next.
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl space-y-4 mb-12"
        >
          <p className="text-sm text-foreground/50 leading-[1.8]">
            One of the most important gaps in the current market journey is that many prospective students do not fully understand qualification levels, progression pathways, or how a specific programme fits into their career development.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            This creates confusion at exactly the moment CPS needs clarity. The role of this content is to educate prospects, reduce uncertainty, and help them see how CPS qualifications connect to real career movement.
          </p>
        </motion.div>

        {/* 3-part block */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {NQF_PARTS.map((part, i) => (
            <motion.div
              key={part.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div
                className="h-[3px] w-full"
                style={{ backgroundColor: part.color }}
              />
              <div className="p-6">
                <h4
                  className="text-sm font-bold mb-3 uppercase tracking-wider"
                  style={{ color: part.color }}
                >
                  {part.heading}
                </h4>
                {part.heading === "Why this matters" && (
                  <p className="text-xs text-foreground/45 leading-[1.7] mb-3">
                    Students often ask:
                  </p>
                )}
                {part.heading === "What this content should explain" && (
                  <p className="text-xs text-foreground/45 leading-[1.7] mb-3">
                    This section on the main CPS website should clearly explain:
                  </p>
                )}
                {part.heading === "What this unlocks" && (
                  <p className="text-xs text-foreground/45 leading-[1.7] mb-3">
                    When career-path and NQF content is explained clearly, CPS can:
                  </p>
                )}
                <ul className="space-y-2">
                  {part.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-foreground/45 leading-[1.7]"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: `${part.color}60` }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                {part.outro && (
                  <p className="text-xs text-foreground/45 leading-[1.7] mt-3">
                    {part.outro}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-white border border-black/[0.05] p-8"
          style={{ borderLeft: "4px solid #6B2D8B" }}
        >
          <h4 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-3">
            Website Role
          </h4>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            This content should live prominently on the CPS website as a practical education layer, not only inside brochures or forms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProgrammesPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const portfolioRef = useRef(null);
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });

  const pathwayRef = useRef(null);
  const pathwayInView = useInView(pathwayRef, { once: true, margin: "-100px" });

  const platformRef = useRef(null);
  const platformInView = useInView(platformRef, { once: true, margin: "-100px" });

  const complianceRef = useRef(null);
  const complianceInView = useInView(complianceRef, { once: true, margin: "-100px" });

  const voiceRef = useRef(null);
  const voiceInView = useInView(voiceRef, { once: true, margin: "-100px" });

  const referralRef = useRef(null);
  const referralInView = useInView(referralRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* ============================================================ */}
      {/*  1 — Page Header                                              */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">Programme &amp; Brand Bible</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            What we sell, what we can claim,{" "}
            <span className="text-cps-blue">and how we sound</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 max-w-2xl"
          >
            A single reference for every programme, compliance rule, and brand guideline the marketing team needs.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2 — Full Course Portfolio                                    */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={portfolioRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={portfolioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">Full Course Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
          >
            Every programme at a glance
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: prog.color }} />
                <div className="p-6">
                  <h3 className="text-sm font-bold text-foreground mb-1">{prog.title}</h3>
                  {prog.subtitle && (
                    <p className="text-xs text-foreground/40 mb-3">{prog.subtitle}</p>
                  )}

                  {prog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {prog.tags.map((t) => (
                        <span
                          key={t}
                          className="tag bg-cps-grey text-foreground/45 border border-black/[0.04] text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    {prog.details.map((d) => (
                      <div key={d.label} className="flex gap-2 text-sm">
                        <span className="text-foreground/30 font-medium min-w-[70px]">{d.label}</span>
                        <span className="text-foreground/60">{d.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3 — Programme Progression Pathway                            */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={pathwayRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={pathwayInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-green rounded-full" />
            <span className="section-label text-cps-green">Programme Progression</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={pathwayInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
          >
            Career pathway with CPS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pathwayInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-elevated !p-8"
          >
            {/* Desktop: horizontal flow */}
            <div className="hidden sm:flex items-center justify-between gap-2">
              {pathwaySteps.map((step, i) => (
                <div key={step.label} className="flex items-center flex-1">
                  <div
                    className="flex-1 flex items-center justify-center py-5 px-4 rounded-xl border-2 text-center"
                    style={{
                      backgroundColor: step.bg,
                      borderColor: `${step.color}25`,
                    }}
                  >
                    <span className="text-sm font-bold" style={{ color: step.color }}>
                      {step.label}
                    </span>
                  </div>
                  {i < pathwaySteps.length - 1 && (
                    <div className="flex items-center mx-1 text-foreground/15">
                      <div className="w-6 h-[2px] bg-current" />
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                        <path d="M0 0L10 6L0 12V0Z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical flow */}
            <div className="flex sm:hidden flex-col items-center gap-2">
              {pathwaySteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center w-full">
                  <div
                    className="w-full flex items-center justify-center py-4 px-4 rounded-xl border-2 text-center"
                    style={{
                      backgroundColor: step.bg,
                      borderColor: `${step.color}25`,
                    }}
                  >
                    <span className="text-sm font-bold" style={{ color: step.color }}>
                      {step.label}
                    </span>
                  </div>
                  {i < pathwaySteps.length - 1 && (
                    <div className="flex flex-col items-center my-1 text-foreground/15">
                      <div className="w-[2px] h-4 bg-current" />
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor">
                        <path d="M0 0L12 0L6 10Z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-foreground/30 text-center mt-8">
              Build a complete career pathway with CPS
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={pathwayInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-foreground/40 mt-8 leading-[1.8]"
          >
            For organisational learning and team-level packaging, see{" "}
            <Link href="/b2b" className="text-cps-purple font-medium hover:underline">
              B2B Strategy &rarr;
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3b — Career Path / NQF Education                             */}
      {/* ============================================================ */}
      <CareerPathNQF />

      {/* ============================================================ */}
      {/*  4 — CPSLearn Platform Reference                              */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={platformRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={platformInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">CPSLearn Platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={platformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-6 tracking-tight"
          >
            The technology advantage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={platformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-16 max-w-3xl"
          >
            Built in-house over more than 20 years (two decades). 2,000&ndash;2,700 current students. End-to-end learning platform.
          </motion.p>

          {/* AI Features Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={platformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 overflow-x-auto"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">AI Features</h3>
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
                {["Feature", "Status", "Marketing Notes"].map((h) => (
                  <span key={h} className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                    {h}
                  </span>
                ))}
              </div>
              {aiFeatures.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/60 font-medium">{row.feature}</span>
                  <span className="text-sm text-foreground/40">{row.status}</span>
                  <span className="text-sm text-foreground/50">{row.notes}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Competitive Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={platformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">
              Competitive Advantages
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {competitiveAdvantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={platformInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="card-elevated !p-6"
                >
                  <p className="text-sm text-foreground/60 leading-[1.7]">{adv}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5 — Compliance Warning                                       */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={complianceRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-cps-red/15 bg-cps-red/[0.04] p-8 sm:p-10"
            style={{ borderLeft: "4px solid #EF4444" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-2xl" role="img" aria-label="warning">
                &#x26D4;
              </span>
              <h2 className="text-xl font-bold text-foreground tracking-tight">
                Compliance: AI Feature Marketing Rules
              </h2>
            </div>

            <ul className="space-y-3">
              {complianceRules.map((rule, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={complianceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                  className="flex items-start gap-3 text-sm text-foreground/60 leading-[1.7]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-red/60 shrink-0" />
                  {rule}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6 — Brand Voice Guidelines                                   */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={voiceRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={voiceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">Brand Voice</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={voiceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-6 tracking-tight"
          >
            How CPS sounds
          </motion.h2>

          {/* Positioning statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={voiceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl bg-white border border-black/[0.05] p-8 mb-14"
            style={{ borderLeft: "4px solid #00A8E1" }}
          >
            <p className="text-lg italic text-foreground/60 leading-[1.8]">
              CPS helps working professionals and career starters in financial services earn recognised qualifications that unlock real career progression &mdash; through a proprietary, AI-powered learning platform trusted by South Africa&apos;s biggest banks.
            </p>
          </motion.div>

          {/* Voice Principles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {voicePrinciples.map((vp, i) => (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 15 }}
                animate={voiceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="card-elevated !p-6"
              >
                <h4 className="text-sm font-bold text-foreground mb-2">{vp.title}</h4>
                <p className="text-xs text-foreground/40 leading-[1.7]">{vp.example}</p>
              </motion.div>
            ))}
          </div>

          {/* Do / Don't */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={voiceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">Do / Don&apos;t</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Do column */}
              <div className="card-elevated !p-0 overflow-hidden">
                <div className="px-6 py-3 bg-cps-green/[0.06] border-b border-cps-green/15">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-green uppercase">
                    Do
                  </span>
                </div>
                {doDont.map((row, i) => (
                  <div
                    key={i}
                    className={`px-6 py-3.5 border-b border-black/[0.03] text-sm text-foreground/60 ${
                      i % 2 === 1 ? "bg-black/[0.01]" : ""
                    }`}
                  >
                    {row.do}
                  </div>
                ))}
              </div>

              {/* Don't column */}
              <div className="card-elevated !p-0 overflow-hidden">
                <div className="px-6 py-3 bg-cps-red/[0.06] border-b border-cps-red/15">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-red uppercase">
                    Don&apos;t
                  </span>
                </div>
                {doDont.map((row, i) => (
                  <div
                    key={i}
                    className={`px-6 py-3.5 border-b border-black/[0.03] text-sm text-foreground/40 line-through ${
                      i % 2 === 1 ? "bg-black/[0.01]" : ""
                    }`}
                  >
                    {row.dont}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7 — Student Referral Programme                               */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={referralRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={referralInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-gold rounded-full" />
            <span className="section-label text-cps-gold">Referral Programme</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={referralInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
          >
            Student referrals
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={referralInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-elevated !p-8 sm:!p-10"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">Current State</h3>
                <p className="text-sm text-foreground/45 leading-[1.7] mb-6">
                  Organic &mdash; biggest B2C intakes currently come from student referrals. No formal incentive structure exists.
                </p>

                <h3 className="text-sm font-bold text-foreground mb-3">Beta Testing</h3>
                <p className="text-sm text-foreground/45 leading-[1.7]">
                  &ldquo;Through the roof&rdquo; response rates in early testing. Students are highly willing to refer when prompted.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">Recommendation</h3>
                <p className="text-sm text-foreground/45 leading-[1.7] mb-6">
                  Formalize with R500 tuition credit incentive for every successful referral. Low cost per acquisition vs paid media.
                </p>

                <h3 className="text-sm font-bold text-foreground mb-3">Goal</h3>
                <div className="p-4 rounded-xl bg-cps-gold/[0.06] border border-cps-gold/15">
                  <p className="text-sm font-semibold text-foreground">
                    20% of new enrollments from referrals within 12 months
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={referralInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-foreground/40 mt-8 leading-[1.8]"
          >
            This referral opportunity becomes significantly stronger when students remain connected through an intentional alumni and community experience.{" "}
            <Link href="/b2c/alumni" className="text-cps-purple font-medium hover:underline">
              See Alumni / Community Flywheel &rarr;
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Footer                                                       */}
      {/* ============================================================ */}
      <Footer />
    </>
  );
}
