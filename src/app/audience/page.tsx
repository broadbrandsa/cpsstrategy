"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Footer from "@/components/sections/footer";

/* ─── Pyramid Tiers ─── */
const PYRAMID_TIERS = [
  {
    label: "Immediate Target Audience",
    color: "#6B2D8B",
    width: "45%",
    description:
      "Individuals actively researching qualifications in banking or leadership and comparing providers.",
    bullets: [
      "Searching for qualifications online",
      "Comparing costs and outcomes",
      "Evaluating accreditation",
      "Downloading information packs",
    ],
    note: "These individuals represent the highest probability of enrollment.",
  },
  {
    label: "Career Progression Audience",
    color: "#00A8E1",
    width: "70%",
    description:
      "Individuals currently working in financial services or related industries who are seeking promotion or career advancement.",
    bullets: [
      "Retail banking staff",
      "Call centre agents",
      "Insurance advisors",
      "Operations staff",
      "Junior managers",
    ],
    note: "These individuals may not yet be searching for a qualification but are highly likely to consider one within the next 6\u201324 months.",
  },
  {
    label: "Future Career Audience",
    color: "#10B981",
    width: "100%",
    description:
      "Individuals exploring career options in financial services.",
    bullets: [
      "Recent school leavers",
      "Early-career professionals",
      "Unemployed graduates",
      "Career changers",
    ],
    note: "This audience represents the largest pool of potential future students.",
  },
];

/* ─── Demand Drivers ─── */
const DEMAND_DRIVERS = [
  {
    title: "Industry Professionalisation",
    description:
      "Careers in banking increasingly require formal qualifications and ongoing professional development to progress within organisations.",
    color: "#6B2D8B",
  },
  {
    title: "Skills Gap",
    description:
      "Employers frequently report gaps between graduate skills and workplace expectations, creating demand for practical, career-focused qualifications.",
    color: "#00A8E1",
  },
  {
    title: "Digital Transformation",
    description:
      "Technology and regulatory changes in banking continue to create new skill requirements across the financial services sector.",
    color: "#10B981",
  },
  {
    title: "Career Mobility",
    description:
      "Many professionals seek additional qualifications to move into leadership or management roles.",
    color: "#F59E0B",
  },
  {
    title: "Economic Pressure",
    description:
      "High unemployment and job insecurity drive demand for qualifications that improve employability and career prospects.",
    color: "#EF4444",
  },
];

/* ─── Persona Data ─── */
const PERSONA_BANKING = {
  tag: "HCIB Programme",
  name: "Persona 1 \u2014 The Banking Starter",
  subtitle: "Career starters seeking entry into the banking sector.",
  age: "18\u201330",
  color: "#6B2D8B",
  lifeStage: [
    "Recently completed matric or tertiary study",
    "Early career retail or service roles",
    "Some already working in banking support roles",
    "Exploring pathways into financial services careers",
  ],
  demographics: {
    location: "South African metros (Gauteng, Western Cape, KwaZulu-Natal)",
    education:
      "Matric or equivalent. Some may have incomplete tertiary education.",
    employment:
      "Retail banking assistants, call centre staff, retail workers, unemployed graduates seeking corporate careers",
    income: "R5,000 \u2013 R20,000 monthly",
  },
  psychographics: [
    "Ambitious but uncertain about career direction",
    "Strong desire to enter stable industries such as banking",
    "Highly sensitive to affordability and job prospects",
  ],
  influences: [
    "Affordability",
    "Career outcomes",
    "Brand credibility",
    "Employer recognition",
  ],
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
    "Limited disposable income",
  ],
};

const PERSONA_LEADER = {
  tag: "ACL6 Programme",
  name: "Persona 2 \u2014 The Aspiring Leader",
  subtitle: "Mid-career professionals seeking leadership progression.",
  age: "28\u201340",
  color: "#00A8E1",
  lifeStage: [
    "3\u201310 years professional experience",
    "Already employed in financial services or corporate environments",
    "Beginning to supervise teams or manage projects",
  ],
  demographics: {
    location: "South African metros",
    education: "",
    employment:
      "Financial services professionals, operations managers, team leaders, supervisors",
    income: "R18,000 \u2013 R60,000+ monthly",
  },
  psychographics: [
    "Highly pragmatic learners",
    "Prioritise practical, applicable knowledge over academic theory",
    "Balancing professional responsibilities with personal development",
  ],
  influences: [
    "Promotion opportunities",
    "Salary growth",
    "Credibility as a leader",
    "Professional recognition",
  ],
  drivers: [
    "Career advancement",
    "Leadership credentials",
    "Flexible study schedule",
    "Recognition by employers",
  ],
  barriers: [
    "Time commitment",
    "Employer funding constraints",
    "Uncertainty about return on investment",
  ],
};

/* ─── Psychology Framework ─── */
const PSYCHOLOGY = [
  {
    principle: "Loss Aversion",
    description:
      "Fear of choosing the wrong qualification or wasting money.",
  },
  {
    principle: "Authority Bias",
    description:
      "Trust increases when institutions are associated with respected organisations or employers.",
  },
  {
    principle: "Social Proof",
    description:
      "Testimonials and graduate success stories reduce perceived risk.",
  },
  {
    principle: "Present Bias",
    description:
      "Prospective students prefer flexible study options that fit around work commitments.",
  },
  {
    principle: "Goal Gradient Effect",
    description:
      "Motivation increases as individuals move closer to achieving career goals.",
  },
  {
    principle: "Identity Motivation",
    description:
      "People pursue qualifications aligned with the identity they want to achieve, such as becoming a banking professional or recognised leader.",
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
    audience: "Banking Starter Targeting",
    color: "#6B2D8B",
    age: "18\u201330",
    interests: [
      "Banking",
      "Financial services",
      "Career development",
      "Business studies",
      "Personal finance",
    ],
  },
  {
    audience: "Aspiring Leader Targeting",
    color: "#00A8E1",
    age: "28\u201340",
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
  "Price-sensitive but outcome-driven",
  "Require strong trust signals before committing",
];

const RESEARCH_STEPS = [
  "Search for qualifications online",
  "Compare providers and programme structures",
  "Evaluate accreditation and credibility",
  "Speak to colleagues or peers",
  "Download information packs",
  "Consider affordability and career outcomes",
];

/* ─── Growth Timeline ─── */
const GROWTH_TIMELINE = [
  {
    period: "Month 1\u20133",
    label: "Interest-based targeting",
    description: "Initial audience testing",
    color: "#6B2D8B",
  },
  {
    period: "Month 4\u20136",
    label: "Lookalike audiences",
    description: "Optimised targeting based on lead data",
    color: "#00A8E1",
  },
  {
    period: "Month 6+",
    label: "Conversion-based audiences",
    description: "Retargeting and alumni referral expansion",
    color: "#10B981",
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
    <div className="py-3 border-b border-black/[0.04] last:border-0 px-4">
      <span
        className="text-[10px] font-semibold tracking-[0.15em] uppercase block mb-1"
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
            <p
              className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ color: persona.color }}
            >
              Decision Drivers
            </p>
            <ul className="space-y-1.5">
              {persona.drivers.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-foreground/55"
                >
                  <span
                    className="text-xs mt-0.5"
                    style={{ color: persona.color }}
                  >
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
                  <span className="text-xs text-red-400 mt-0.5">{"\u2212"}</span>
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
  const pyramidRef = useRef(null);
  const demandRef = useRef(null);
  const landscapeRef = useRef(null);
  const personaRef = useRef(null);
  const behaviourRef = useRef(null);
  const psychologyRef = useRef(null);
  const googleRef = useRef(null);
  const metaRef = useRef(null);
  const growthRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const pyramidInView = useInView(pyramidRef, { once: true, margin: "-80px" });
  const demandInView = useInView(demandRef, { once: true, margin: "-80px" });
  const landscapeInView = useInView(landscapeRef, { once: true, margin: "-80px" });
  const personaInView = useInView(personaRef, { once: true, margin: "-80px" });
  const behaviourInView = useInView(behaviourRef, { once: true, margin: "-80px" });
  const psychologyInView = useInView(psychologyRef, { once: true, margin: "-80px" });
  const googleInView = useInView(googleRef, { once: true, margin: "-80px" });
  const metaInView = useInView(metaRef, { once: true, margin: "-80px" });
  const growthInView = useInView(growthRef, { once: true, margin: "-80px" });

  return (
    <div className="relative min-h-screen bg-white">
      {/* ─── Page Header ─── */}
      <section
        className="relative py-20 sm:py-28 overflow-hidden"
        ref={headerRef}
      >
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
            Understanding who CPS must reach to build a sustainable B2C student
            acquisition engine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-foreground/40 max-w-3xl leading-relaxed space-y-3"
          >
            <p>
              CPS is transitioning from a predominantly B2B education provider
              to a direct-to-student model. Success depends on understanding the
              motivations, fears, and decision processes of prospective students.
            </p>
            <p>
              The South African financial services sector employs millions of
              people and continues to require new skills as technology,
              regulation, and digital banking reshape the industry. The broader
              finance industry alone employs roughly 2.5 million people in South
              Africa, with the largest concentration of jobs in Gauteng, followed
              by the Western Cape and KwaZulu-Natal.
            </p>
            <p>
              At the same time, South Africa faces one of the highest
              unemployment rates globally, exceeding 30%. As a result, many
              individuals seek practical qualifications that can improve
              employability and career progression.
            </p>
            <p>
              This page defines the audiences CPS must reach, the psychology
              driving their decisions, and how those audiences translate into
              targeting on Google and Meta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 01 Audience Pyramid ─── */}
      <section
        className="relative py-20 sm:py-28 section-tinted"
        ref={pyramidRef}
      >
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={pyramidInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              01 — AUDIENCE PYRAMID
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={pyramidInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            The CPS{" "}
            <span className="text-gradient-purple">Audience Pyramid</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={pyramidInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-12"
          >
            Understanding the full market helps prioritise the most valuable
            audiences.
          </motion.p>

          <div className="space-y-8 max-w-3xl mx-auto">
            {PYRAMID_TIERS.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                animate={pyramidInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="flex flex-col items-center"
              >
                {/* Pyramid bar */}
                <div
                  className="rounded-t-lg py-3 px-6 text-center"
                  style={{
                    width: tier.width,
                    minWidth: "200px",
                    backgroundColor: `${tier.color}10`,
                    borderTop: `2px solid ${tier.color}30`,
                    borderLeft: `1px solid ${tier.color}15`,
                    borderRight: `1px solid ${tier.color}15`,
                  }}
                >
                  <span
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                    style={{ color: tier.color }}
                  >
                    {i === 0
                      ? "Top of Pyramid"
                      : i === 1
                      ? "Middle of Pyramid"
                      : "Base of Pyramid"}
                  </span>
                  <h4 className="text-sm font-bold text-foreground mt-1">
                    {tier.label}
                  </h4>
                </div>

                {/* Details card — matches pyramid bar width */}
                <div
                  className="rounded-b-xl border border-black/[0.04] border-t-0 bg-white p-6"
                  style={{ width: tier.width, minWidth: "200px" }}
                >
                  <p className="text-sm text-foreground/55 leading-relaxed mb-4">
                    {tier.description}
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground/25 uppercase mb-3">
                    {i === 0
                      ? "Estimated behaviour"
                      : i === 1
                      ? "Typical roles"
                      : "Typical characteristics"}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {tier.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-foreground/55"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: tier.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-foreground/40 italic">
                    {tier.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 02 Qualification Demand Drivers ─── */}
      <section className="relative py-20 sm:py-28" ref={demandRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={demandInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              02 — QUALIFICATION DEMAND DRIVERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={demandInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            Why Demand for Banking and Leadership{" "}
            <span className="text-gradient-purple">Qualifications Exists</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={demandInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/45 max-w-2xl mb-10"
          >
            Several macroeconomic factors drive demand for qualifications like
            HCIB and ACL6.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMAND_DRIVERS.map((driver, i) => (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, y: 15 }}
                animate={demandInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${driver.color}, ${driver.color}60)`,
                  }}
                />
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {driver.title}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-relaxed">
                    {driver.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 Audience Landscape ─── */}
      <section
        className="relative py-20 sm:py-28 section-tinted"
        ref={landscapeRef}
      >
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
              03 — AUDIENCE LANDSCAPE
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
                  <span
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                    style={{ color: aud.color }}
                  >
                    Primary programme
                  </span>
                  <p className="text-sm text-foreground/55 mt-1">
                    {aud.programme}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={landscapeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-cps-purple to-cps-blue" />
            <div className="p-7">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-4">
                Shared Characteristics
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {SHARED_TRAITS.map((trait, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground/55"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cps-purple mt-1.5 shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 04 Persona Deep Dives ─── */}
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
              04 — PERSONA DEEP DIVES
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
            <PersonaCard
              persona={PERSONA_BANKING}
              index={0}
              inView={personaInView}
            />
            <PersonaCard
              persona={PERSONA_LEADER}
              index={1}
              inView={personaInView}
            />
          </div>
        </div>
      </section>

      {/* ─── 05 Shared Behaviour ─── */}
      <section
        className="relative py-20 sm:py-28 section-tinted"
        ref={behaviourRef}
      >
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
              05 — SHARED BEHAVIOUR
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
            Both personas follow a similar research journey before enrolling.
            Education decisions typically take between 2 and 8 weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={behaviourInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="px-6 pt-5 pb-3">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase">
                Typical Research Journey
              </p>
            </div>
            <div className="divide-y divide-black/[0.04]">
              {RESEARCH_STEPS.map((step, i) => {
                const color =
                  i < 2 ? "#6B2D8B" : i < 4 ? "#00A8E1" : "#10B981";
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-6 py-3"
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground/60">{step}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 06 Decision Psychology ─── */}
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
              06 — DECISION PSYCHOLOGY
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
            Several behavioural drivers influence enrollment decisions.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PSYCHOLOGY.map((p, i) => (
              <motion.div
                key={p.principle}
                initial={{ opacity: 0, y: 15 }}
                animate={psychologyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="p-6 rounded-xl border border-black/[0.04] bg-white"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {p.principle}
                </h4>
                <p className="text-xs text-foreground/45 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 07 Google Ads Mapping ─── */}
      <section
        className="relative py-20 sm:py-28 section-tinted"
        ref={googleRef}
      >
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
              07 — GOOGLE ADS MAPPING
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
            Google captures high-intent searches from users actively researching
            qualifications.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                        <span className="text-foreground/20">{"\u2192"}</span>
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

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={googleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-sm text-foreground/40 italic"
          >
            These searches indicate strong enrollment intent and form the
            backbone of Google acquisition campaigns.
          </motion.p>
        </div>
      </section>

      {/* ─── 08 Meta Ads Mapping ─── */}
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
              08 — META ADS MAPPING
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
            Meta allows CPS to reach prospective students earlier in their
            decision journey.
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

          {/* Expansion */}
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
              Meta campaigns will expand reach using lookalike audiences from
              leads, lookalike audiences from website visitors, and video
              engagement audiences.
            </p>
            <p className="text-sm text-foreground/55 leading-relaxed">
              Retargeting ensures CPS remains visible during the research phase
              until prospects apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 09 Audience Growth ─── */}
      <section
        className="relative py-20 sm:py-28 section-tinted"
        ref={growthRef}
      >
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
              09 — AUDIENCE GROWTH
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
            As CPS builds its B2C acquisition engine, audience targeting becomes
            more precise.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {GROWTH_TIMELINE.map((phase, i) => (
              <motion.div
                key={phase.period}
                initial={{ opacity: 0, y: 15 }}
                animate={growthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${phase.color}, ${phase.color}60)`,
                  }}
                />
                <div className="p-6">
                  <span
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                    style={{ color: phase.color }}
                  >
                    {phase.period}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground mt-2 mb-2">
                    {phase.label}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={growthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-sm text-foreground/40 italic"
          >
            These compounding data sources improve targeting accuracy and reduce
            acquisition costs over time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={growthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="text-sm text-foreground/40 mt-6 leading-[1.8]"
          >
            Community and alumni participation also strengthen audience growth over time by creating warmer retargeting pools, stronger social proof, and more credible referral pathways.{" "}
            <Link href="/alumni" className="text-cps-purple font-medium hover:underline">
              See Alumni / Community Flywheel &rarr;
            </Link>
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
