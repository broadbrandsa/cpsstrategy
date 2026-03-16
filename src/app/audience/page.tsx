"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "@/components/sections/footer";

/* ─── Persona Data ─── */
const PERSONA_BANKING = {
  tag: "HCIB Programme",
  name: "Persona 1 — The Banking Starter",
  subtitle: "Career starters seeking entry into the banking sector.",
  age: "22–32",
  color: "#6B2D8B",
  lifeStage: [
    "Recently completed matric or tertiary study",
    "Early career retail or service roles",
    "Some already working in banking support roles",
    "Exploring pathways into financial services careers",
  ],
  demographics: {
    location: "South African metros (Gauteng, Western Cape, KwaZulu-Natal)",
    education: "Matric or equivalent — some may have incomplete tertiary education",
    employment:
      "Retail banking assistants, call centre staff, retail workers, graduates seeking first professional role",
    income: "R6,000 – R18,000 monthly",
  },
  psychographics: [
    "Ambitious but uncertain about career direction",
    "Strong desire to enter stable industries such as banking",
    "Fear making a costly mistake by choosing the wrong qualification",
    "Extensive research behaviour before committing",
  ],
  influences: ["Affordability", "Career outcomes", "Brand credibility"],
  drivers: [
    "Career entry into banking",
    "Recognised qualification",
    "Affordable monthly payment",
    "Flexible online learning",
  ],
  barriers: [
    "Fear of wasting money",
    "Uncertainty about qualification recognition",
    "Comparing against universities and other institutions",
  ],
};

const PERSONA_LEADER = {
  tag: "ACL6 Programme",
  name: "Persona 2 — The Aspiring Leader",
  subtitle: "Mid-career professionals seeking leadership progression.",
  age: "28–40",
  color: "#00A8E1",
  lifeStage: [
    "3–10 years professional experience",
    "Already employed in financial services or corporate environments",
    "Beginning to supervise teams or manage projects",
  ],
  demographics: {
    location: "South African metros",
    education: "",
    employment:
      "Financial services professionals, operations managers, team leaders, supervisors",
    income: "R18,000 – R45,000 monthly",
  },
  psychographics: [
    "Highly pragmatic learners",
    "Not looking for academic theory but practical leadership capability",
    "Time-poor and balancing work responsibilities with professional development",
  ],
  influences: [
    "Promotion opportunities",
    "Salary growth",
    "Credibility as a leader",
  ],
  drivers: [
    "Career advancement",
    "Leadership credentials",
    "Flexible study schedule",
    "Recognition by employers",
  ],
  barriers: [
    "Time commitment",
    "Employer support",
    "Perceived ROI of qualification",
  ],
};

/* ─── Psychology Framework ─── */
const PSYCHOLOGY = [
  {
    principle: "Loss Aversion",
    description:
      "Fear of choosing the wrong qualification or wasting money.",
    icon: "🛡",
  },
  {
    principle: "Authority Bias",
    description:
      "Trust in institutions recognised by industry leaders.",
    icon: "🏛",
  },
  {
    principle: "Social Proof",
    description:
      "Confidence increases when students see real success stories.",
    icon: "👥",
  },
  {
    principle: "Present Bias",
    description:
      "Preference for immediate, flexible study options rather than long university programmes.",
    icon: "⚡",
  },
  {
    principle: "Goal Gradient Effect",
    description:
      "Motivation increases as students move closer to completing a qualification.",
    icon: "🎯",
  },
];

/* ─── Google Intent Categories ─── */
const GOOGLE_INTENT = [
  {
    category: "Career Exploration",
    color: "#6B2D8B",
    queries: [
      "career in banking south africa",
      "how to become a banker",
      "banking qualifications south africa",
    ],
  },
  {
    category: "Qualification Research",
    color: "#00A8E1",
    queries: [
      "higher certificate in banking",
      "banking course nqf level 5",
      "leadership qualification south africa",
    ],
  },
  {
    category: "Comparison Searches",
    color: "#10B981",
    queries: [
      "hcib vs bcom",
      "banking qualification cost",
      "online leadership qualification",
    ],
  },
];

/* ─── Meta Targeting ─── */
const META_TARGETING = [
  {
    audience: "Banking Starter",
    color: "#6B2D8B",
    age: "22–32",
    interests: [
      "Banking",
      "Financial services",
      "Career development",
      "Business studies",
      "Personal finance",
    ],
  },
  {
    audience: "Aspiring Leader",
    color: "#00A8E1",
    age: "28–40",
    interests: [
      "Leadership",
      "Management training",
      "Professional development",
      "Business leadership",
    ],
  },
];

/* ─── Shared traits ─── */
const SHARED_TRAITS = [
  "Located primarily in South African metros",
  "Seeking career progression in financial services",
  "Evaluating multiple education providers",
  "Highly price-sensitive but outcome-driven",
  "Require strong trust signals before committing",
];

const RESEARCH_STEPS = [
  "Search for qualifications online",
  "Compare costs and programme structures",
  "Evaluate credibility and accreditation",
  "Speak to peers or colleagues",
  "Download information packs",
  "Consider affordability",
];

const GROWTH_CHANNELS = [
  {
    label: "Lookalike audiences",
    description: "Built from lead lists and converters to find similar prospects",
    color: "#6B2D8B",
  },
  {
    label: "Retargeting pools",
    description: "Website visitors, video viewers, and info pack downloaders",
    color: "#00A8E1",
  },
  {
    label: "Organic social engagement",
    description: "Community growth through valuable content and student stories",
    color: "#10B981",
  },
  {
    label: "Referral programmes",
    description: "Leveraging enrolled students as brand advocates",
    color: "#F59E0B",
  },
];

/* ================================================================== */
/*  Sub-components                                                      */
/* ================================================================== */

function DetailRow({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-black/[0.04] last:border-0">
      <span
        className="text-[10px] font-semibold tracking-[0.15em] uppercase shrink-0 w-32"
        style={{ color }}
      >
        {label}
      </span>
      <span className="text-sm text-foreground/55 leading-[1.7]">{value}</span>
    </div>
  );
}

function PersonaCard({
  persona,
  index,
  inView,
}: {
  persona: typeof PERSONA_BANKING;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="card-elevated !p-0 overflow-hidden"
    >
      {/* Color accent */}
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${persona.color}, ${persona.color}80)`,
        }}
      />
      <div className="p-7 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <span
            className="tag mb-3"
            style={{
              backgroundColor: `${persona.color}0A`,
              color: persona.color,
              border: `1px solid ${persona.color}20`,
            }}
          >
            {persona.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
            {persona.name}
          </h3>
          <p className="text-sm text-foreground/45 mt-1">{persona.subtitle}</p>
          <p className="text-sm text-foreground/35 mt-1">
            Age range: {persona.age}
          </p>
        </div>

        {/* Life Stage */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-3">
            Typical Life Stage
          </p>
          <ul className="space-y-1.5">
            {persona.lifeStage.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/55"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: persona.color }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Demographics */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-3">
            Demographics
          </p>
          <div className="rounded-xl border border-black/[0.04] bg-white overflow-hidden">
            <DetailRow
              label="Location"
              value={persona.demographics.location}
              color={persona.color}
            />
            {persona.demographics.education && (
              <DetailRow
                label="Education"
                value={persona.demographics.education}
                color={persona.color}
              />
            )}
            <DetailRow
              label="Employment"
              value={persona.demographics.employment}
              color={persona.color}
            />
            <DetailRow
              label="Income"
              value={persona.demographics.income}
              color={persona.color}
            />
          </div>
        </div>

        {/* Psychographics */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-3">
            Psychographics
          </p>
          <ul className="space-y-1.5 mb-4">
            {persona.psychographics.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/55"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: persona.color }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-foreground/35 mb-2">
            Often influenced by:
          </p>
          <div className="flex flex-wrap gap-2">
            {persona.influences.map((inf) => (
              <span
                key={inf}
                className="tag"
                style={{
                  backgroundColor: `${persona.color}08`,
                  color: persona.color,
                  border: `1px solid ${persona.color}15`,
                }}
              >
                {inf}
              </span>
            ))}
          </div>
        </div>

        {/* Drivers & Barriers */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: `${persona.color}06`,
              border: `1px solid ${persona.color}10`,
            }}
          >
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: persona.color }}>
              Decision Drivers
            </p>
            <ul className="space-y-1.5">
              {persona.drivers.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-foreground/55"
                >
                  <span className="text-xs mt-0.5" style={{ color: persona.color }}>
                    +
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-red-500/[0.04] border border-red-500/10">
            <p className="text-[10px] font-semibold tracking-[0.15em] text-red-500/60 uppercase mb-3">
              Decision Barriers
            </p>
            <ul className="space-y-1.5">
              {persona.barriers.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-foreground/55"
                >
                  <span className="text-xs text-red-400 mt-0.5">−</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  Page                                                                */
/* ================================================================== */

export default function AudiencePage() {
  const headerRef = useRef(null);
  const landscapeRef = useRef(null);
  const personaRef = useRef(null);
  const behaviourRef = useRef(null);
  const psychologyRef = useRef(null);
  const googleRef = useRef(null);
  const metaRef = useRef(null);
  const growthRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const landscapeInView = useInView(landscapeRef, { once: true, margin: "-80px" });
  const personaInView = useInView(personaRef, { once: true, margin: "-80px" });
  const behaviourInView = useInView(behaviourRef, { once: true, margin: "-80px" });
  const psychologyInView = useInView(psychologyRef, { once: true, margin: "-80px" });
  const googleInView = useInView(googleRef, { once: true, margin: "-80px" });
  const metaInView = useInView(metaRef, { once: true, margin: "-80px" });
  const growthInView = useInView(growthRef, { once: true, margin: "-80px" });

  const [expandedPsych, setExpandedPsych] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-white">
      {/* ─── Page Header ─── */}
      <section className="relative py-20 sm:py-28 overflow-hidden" ref={headerRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-cps-purple/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">AUDIENCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6"
          >
            Audience{" "}
            <span className="text-gradient-purple">Strategy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-foreground/50 max-w-3xl leading-relaxed mb-4"
          >
            Understanding who CPS must reach in order to build a sustainable B2C
            student acquisition engine.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-foreground/40 max-w-3xl leading-relaxed"
          >
            CPS is transitioning from a predominantly B2B education provider to a
            direct-to-student model. Success depends on understanding the
            motivations, fears, and decision processes of prospective students.
            This page defines the audiences CPS must reach, the psychology driving
            their decisions, and how those audiences translate into targeting on
            Google and Meta.
          </motion.p>
        </div>
      </section>

      {/* ─── Audience Landscape ─── */}
      <section className="relative py-20 sm:py-28 section-tinted" ref={landscapeRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={landscapeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              01 — AUDIENCE LANDSCAPE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={landscapeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            The CPS B2C{" "}
            <span className="text-gradient-purple">Audience Landscape</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={landscapeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-12"
          >
            CPS serves two primary B2C audiences aligned to its flagship
            programmes.
          </motion.p>

          {/* Two audience cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                label: "Audience 1",
                name: "Aspiring Banking Professionals",
                programme: "Higher Certificate in Banking (HCIB)",
                color: "#6B2D8B",
              },
              {
                label: "Audience 2",
                name: "Emerging Leaders in Financial Services",
                programme: "Advanced Certificate in Leadership (ACL6)",
                color: "#00A8E1",
              },
            ].map((aud, i) => (
              <motion.div
                key={aud.name}
                initial={{ opacity: 0, y: 20 }}
                animate={landscapeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${aud.color}, ${aud.color}80)`,
                  }}
                />
                <div className="p-7">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase">
                    {aud.label}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                    {aud.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: aud.color }}>
                      Primary programme
                    </span>
                  </div>
                  <p className="text-sm text-foreground/55 mt-1">{aud.programme}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shared characteristics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={landscapeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-elevated"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-4">
              Shared Characteristics
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SHARED_TRAITS.map((trait, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-cps-purple/[0.03] border border-cps-purple/[0.06]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cps-purple mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/55">{trait}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Persona Deep Dives ─── */}
      <section className="relative py-20 sm:py-28" ref={personaRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={personaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              02 — PERSONA DEEP DIVES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={personaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-12"
          >
            Two distinct personas,{" "}
            <span className="text-gradient-purple">one strategy</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <PersonaCard persona={PERSONA_BANKING} index={0} inView={personaInView} />
            <PersonaCard persona={PERSONA_LEADER} index={1} inView={personaInView} />
          </div>
        </div>
      </section>

      {/* ─── Shared Behaviour ─── */}
      <section className="relative py-20 sm:py-28 section-tinted" ref={behaviourRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={behaviourInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              03 — SHARED BEHAVIOUR
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={behaviourInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            Shared Audience{" "}
            <span className="text-gradient-purple">Behaviour</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={behaviourInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-12"
          >
            Both personas share several behavioural patterns. Prospective students
            typically spend several weeks researching before committing. They often
            compare CPS with universities, private colleges, and online education
            providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={behaviourInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card-elevated"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-6">
              Typical Research Process
            </p>
            <div className="space-y-0">
              {RESEARCH_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 border-b border-black/[0.04] last:border-0"
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i < 2
                          ? "#6B2D8B"
                          : i < 4
                          ? "#00A8E1"
                          : "#10B981"
                      }, ${
                        i < 2
                          ? "#6B2D8B80"
                          : i < 4
                          ? "#00A8E180"
                          : "#10B98180"
                      })`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/60">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Decision Psychology ─── */}
      <section className="relative py-20 sm:py-28" ref={psychologyRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={psychologyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              04 — DECISION PSYCHOLOGY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={psychologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            Decision{" "}
            <span className="text-gradient-purple">Psychology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={psychologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-10"
          >
            Key psychological drivers influencing enrollment decisions.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PSYCHOLOGY.map((p, i) => (
              <motion.button
                key={p.principle}
                initial={{ opacity: 0, y: 15 }}
                animate={psychologyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                onClick={() =>
                  setExpandedPsych(expandedPsych === i ? null : i)
                }
                className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                  expandedPsych === i
                    ? "bg-white border-cps-purple/15 shadow-[0_2px_12px_rgba(107,45,139,0.08)]"
                    : "bg-white border-black/[0.04] hover:border-black/[0.08]"
                }`}
              >
                <span className="text-2xl mb-3 block">{p.icon}</span>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {p.principle}
                </h4>
                <p className="text-xs text-foreground/45 leading-relaxed">
                  {p.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Google Ads Mapping ─── */}
      <section className="relative py-20 sm:py-28 section-tinted" ref={googleRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={googleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              05 — GOOGLE ADS MAPPING
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={googleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            How These Audiences Map to{" "}
            <span className="text-gradient-purple">Google Ads</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={googleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-10"
          >
            Google captures high-intent searches from users already researching
            qualifications. These searches indicate strong enrollment intent and
            form the backbone of Google acquisition campaigns.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {GOOGLE_INTENT.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={googleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}, ${cat.color}60)`,
                  }}
                />
                <div className="p-6">
                  <h4
                    className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
                    style={{ color: cat.color }}
                  >
                    {cat.category}
                  </h4>
                  <ul className="space-y-2">
                    {cat.queries.map((q) => (
                      <li
                        key={q}
                        className="text-sm text-foreground/55 flex items-center gap-2"
                      >
                        <span className="text-foreground/20">→</span>
                        <code className="text-xs bg-black/[0.03] rounded px-2 py-1">
                          {q}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Meta Ads Mapping ─── */}
      <section className="relative py-20 sm:py-28" ref={metaRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={metaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              06 — META ADS MAPPING
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={metaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            How These Audiences Map to{" "}
            <span className="text-gradient-purple">Meta Ads</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={metaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-10"
          >
            Meta allows CPS to reach potential students before they begin
            searching for qualifications. Audience targeting focuses on interests
            aligned with the personas.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {META_TARGETING.map((t, i) => (
              <motion.div
                key={t.audience}
                initial={{ opacity: 0, y: 20 }}
                animate={metaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${t.color}, ${t.color}60)`,
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-foreground">
                      {t.audience}
                    </h4>
                    <span
                      className="tag"
                      style={{
                        backgroundColor: `${t.color}0A`,
                        color: t.color,
                        border: `1px solid ${t.color}20`,
                      }}
                    >
                      Age {t.age}
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground/25 uppercase mb-3">
                    Interest Targeting
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.interests.map((int) => (
                      <span
                        key={int}
                        className="text-xs px-3 py-1.5 rounded-full bg-black/[0.03] text-foreground/50 border border-black/[0.04]"
                      >
                        {int}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expansion & Retargeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={metaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-elevated"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-3">
              Audience Expansion
            </p>
            <p className="text-sm text-foreground/55 leading-relaxed mb-3">
              Meta also enables expansion through lookalike audiences created from
              lead lists, website visitors, and video engagement.
            </p>
            <p className="text-sm text-foreground/55 leading-relaxed">
              Retargeting ensures CPS remains visible during the research phase
              until prospects apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Audience Growth ─── */}
      <section className="relative py-20 sm:py-28 section-tinted" ref={growthRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={growthInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-green-500 rounded-full" />
            <span className="section-label text-green-600">
              07 — AUDIENCE GROWTH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={growthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            Audience Growth{" "}
            <span className="text-gradient-purple">Over Time</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={growthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-10"
          >
            As CPS grows its B2C acquisition engine, audience targeting will
            expand through compounding data sources that improve targeting accuracy
            and reduce acquisition costs over time.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {GROWTH_CHANNELS.map((ch, i) => (
              <motion.div
                key={ch.label}
                initial={{ opacity: 0, y: 15 }}
                animate={growthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${ch.color}, ${ch.color}60)`,
                  }}
                />
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {ch.label}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
