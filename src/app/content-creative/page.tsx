"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MessagingFramework from "@/components/sections/messaging-framework";
import ContentStrategy from "@/components/sections/content-strategy";
import Footer from "@/components/sections/footer";

import OrganicSocial from "@/components/sections/organic-social";
import GraduateOutcomes from "@/components/sections/graduate-outcomes";

/* ─── Headline Bank Data ─── */
const HEADLINES = [
  {
    angle: "Loss Aversion",
    headline:
      "Every month you wait is a month you\u2019re not earning what you could be",
    useFor: "Meta ads, email subject",
    color: "#6B2D8B",
  },
  {
    angle: "Social Proof",
    headline: "Join 11,400+ professionals who chose CPS",
    useFor: "Landing page hero, Google ads",
    color: "#10B981",
  },
  {
    angle: "Authority",
    headline:
      "Trusted by Absa, FNB, Standard Bank, Capitec, and Nedbank",
    useFor: "Landing page badges, Meta",
    color: "#00A8E1",
  },
  {
    angle: "Aspiration",
    headline: "From where you are to where you want to be",
    useFor: "Brand awareness, Reels",
    color: "#F59E0B",
  },
  {
    angle: "Urgency",
    headline: "May intake closing \u2014 limited places",
    useFor: "Retargeting, email",
    color: "#EF4444",
  },
  {
    angle: "Contrast",
    headline:
      "University-level qualification. Not university-level fees.",
    useFor: "Meta ads, landing page",
    color: "#6B2D8B",
  },
  {
    angle: "Simplicity",
    headline:
      "Apply online. Study from anywhere. Graduate in 12 months.",
    useFor: "Google ads, info pack",
    color: "#10B981",
  },
];


const CREATIVE_BRIEF_FIELDS = [
  { label: "Objective", desc: "Awareness / Consideration / Conversion" },
  { label: "Audience Segment", desc: "Banking Starter (HCIB) or Aspiring Leader (ACL6)" },
  { label: "Key Message", desc: "From messaging hierarchy (primary benefit layer)" },
  { label: "Psychological Trigger", desc: "From behavioural framework (e.g. Loss Aversion, Social Proof)" },
  { label: "CTA", desc: "Specific call-to-action (e.g. Download info pack, Apply now)" },
  { label: "Format & Specs", desc: "Platform, dimensions, duration (e.g. Meta Feed 1080\u00d71080, 15s Reel)" },
  { label: "Success Metric", desc: "Primary KPI for this asset (e.g. CTR ≥1.5%, efficiency target aligned to scenario KPI framework)" },
];

/* ================================================================== */

const CONTENT_ENGINE_ITEMS = [
  {
    title: "How content feeds paid media",
    body: "Educational articles, career guides, and student stories provide raw material that can be adapted into paid ads, social posts, and short-form video creatives. This ensures the advertising system always has fresh, relevant creative rather than relying on repetitive promotional messaging.",
    color: "#6B2D8B",
  },
  {
    title: "How content improves conversion",
    body: "Prospective students frequently search for answers before applying. Clear, informative content addressing questions such as career pathways, qualification comparisons, and pricing builds confidence and reduces perceived risk before a prospect reaches the application stage.",
    color: "#00A8E1",
  },
  {
    title: "How content supports retargeting",
    body: "Visitors who read articles or interact with educational content can be retargeted with programme-specific messaging. For example: career article reader \u2192 HCIB programme ad, leadership article reader \u2192 ACL6 programme ad. This creates a more personalised journey from discovery to application.",
    color: "#10B981",
  },
  {
    title: "How content compounds over time",
    body: "Unlike advertising, which stops generating traffic when spending stops, high-quality content continues attracting prospective students through organic search and social discovery. Over time this reduces reliance on paid media and lowers the blended cost of acquiring new students.",
    color: "#FFD100",
  },
];

export default function ContentCreativePage() {
  const headerRef = useRef(null);
  const headlineRef = useRef(null);

  const briefRef = useRef(null);
  const seoRef = useRef(null);
  const engineRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const headlineInView = useInView(headlineRef, { once: true, margin: "-100px" });
  const seoInView = useInView(seoRef, { once: true, margin: "-100px" });
  const briefInView = useInView(briefRef, { once: true, margin: "-100px" });
  const engineInView = useInView(engineRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen bg-white">
      {/* ───────── Page Header ───────── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20" ref={headerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#FFD100" }} />
            <span className="section-label" style={{ color: "#FFD100" }}>
              Content, Messaging &amp; Creative
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-8 tracking-tight max-w-3xl"
          >
            Copy frameworks, content pillars, and{" "}
            <span style={{ color: "#FFD100" }}>creative playbook</span>
          </motion.h1>
        </div>
      </section>

      {/* ───────── Messaging Framework (existing) ───────── */}
      <MessagingFramework />

      {/* ───────── Headline Bank ───────── */}
      <section className="relative py-28 sm:py-36" ref={headlineRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headlineInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              Headline Bank
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            Ready-to-use headlines by{" "}
            <span className="text-cps-purple">psychological angle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-12"
          >
            Grab, adapt, and deploy across channels
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <div className="min-w-[700px] card-elevated !rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[140px_1fr_180px] gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Angle
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Headline
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Use For
                </span>
              </div>

              {/* Rows */}
              {HEADLINES.map((row, i) => (
                <motion.div
                  key={row.angle + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={headlineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className={`grid grid-cols-[140px_1fr_180px] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span
                    className="tag text-[10px] self-start"
                    style={{
                      backgroundColor: `${row.color}10`,
                      color: row.color,
                      border: `1px solid ${row.color}20`,
                    }}
                  >
                    {row.angle}
                  </span>
                  <span className="text-sm text-foreground/70 leading-[1.6] italic">
                    &ldquo;{row.headline}&rdquo;
                  </span>
                  <span className="text-xs text-foreground/40">{row.useFor}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── SEO Opportunity Themes ───────── */}
      <section className="relative py-28 sm:py-36 section-tinted" ref={seoRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={seoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-green rounded-full" />
            <span className="section-label text-cps-green">
              SEO Opportunity Themes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={seoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            Key search topics for{" "}
            <span className="text-cps-green">student discovery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={seoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-4 max-w-3xl"
          >
            Key search topics prospective students use when researching banking and leadership qualifications in South Africa.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={seoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-foreground/35 mb-14 max-w-3xl"
          >
            These keywords represent the primary discovery pathways for prospective students researching qualifications and career progression in financial services. Search volumes will be validated using Google Keyword Planner once advertising accounts are active.
          </motion.p>

          {/* Theme Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={seoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid sm:grid-cols-2 gap-6 mb-10"
          >
            {[
              {
                title: "Banking Career Pathways",
                color: "#6B2D8B",
                desc: "Searches from individuals exploring how to enter the banking industry or move into financial services roles.",
                queries: ["Career in banking South Africa", "How to work in banking", "Banking qualification South Africa", "Banking course South Africa"],
              },
              {
                title: "Higher Certificate in Banking (HCIB)",
                color: "#00A8E1",
                desc: "Searches from prospective students specifically researching the HCIB qualification and entry pathways.",
                queries: ["Higher certificate in banking", "NQF level 5 banking qualification", "Online banking qualification South Africa", "Banking qualification cost South Africa"],
              },
              {
                title: "Leadership Qualification Pathways",
                color: "#10B981",
                desc: "Searches from working professionals exploring leadership or management qualifications.",
                queries: ["Leadership qualification South Africa", "Management qualification online", "Leadership course for managers", "Advanced certificate in leadership"],
              },
              {
                title: "Qualification Comparison & Decision Support",
                color: "#F59E0B",
                desc: "Searches from students comparing different education pathways.",
                queries: ["HCIB vs BCom", "Banking qualification vs university degree", "Is CPS accredited", "CHE accredited banking course"],
              },
            ].map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                animate={seoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: theme.color }} />
                <div className="p-6 sm:p-8">
                  <h3
                    className="text-sm font-bold mb-3 uppercase tracking-wider"
                    style={{ color: theme.color }}
                  >
                    {theme.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-[1.7] mb-5">
                    {theme.desc}
                  </p>
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold tracking-[0.1em] text-foreground/25 uppercase mb-2">
                      Example search queries
                    </p>
                    {theme.queries.map((q) => (
                      <div
                        key={q}
                        className="flex items-center gap-2 text-[13px] text-foreground/60"
                      >
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: theme.color }} />
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Strategy Implication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={seoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-elevated !p-8 sm:!p-10"
          >
            <h3 className="text-lg font-bold text-foreground mb-4 tracking-tight">
              SEO Strategy Implication
            </h3>
            <p className="text-sm text-foreground/50 leading-[1.8]">
              SEO should focus on answering the exact questions prospective students ask during the research phase. High-quality articles, guides, and programme pages targeting these topics will build long-term organic traffic while supporting paid media campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───────── Content Strategy (existing) ───────── */}
      <ContentStrategy />

      {/* ───────── Graduate Outcomes / Success Stories ───────── */}
      <GraduateOutcomes />

      {/* ───────── Organic Social Strategy ───────── */}
      <OrganicSocial />

      {/* ───────── How Content Powers the Acquisition Engine ───────── */}
      <section className="relative py-28 sm:py-36 section-tinted" ref={engineRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={engineInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              Content &amp; Acquisition
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={engineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            How content powers the{" "}
            <span className="text-cps-blue">acquisition engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={engineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-14 max-w-3xl"
          >
            Content is not only a long-term SEO asset. It directly strengthens the paid acquisition system.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {CONTENT_ENGINE_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={engineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: item.color }} />
                <div className="p-6 sm:p-8">
                  <h3
                    className="text-sm font-bold mb-3 uppercase tracking-wider"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Creative Brief Template ───────── */}
      <section className="relative py-28 sm:py-36" ref={briefRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={briefInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#F59E0B" }} />
            <span className="section-label" style={{ color: "#F59E0B" }}>
              Creative Brief Template
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={briefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            Standard brief for every{" "}
            <span style={{ color: "#F59E0B" }}>creative asset</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={briefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-foreground/35 mb-12"
          >
            Use this template to brief every ad, email, social post, and landing page
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={briefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated !rounded-2xl overflow-hidden"
          >
            {CREATIVE_BRIEF_FIELDS.map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -10 }}
                animate={briefInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5 border-b border-black/[0.03] ${
                  i % 2 === 0 ? "bg-black/[0.015]" : ""
                }`}
              >
                <div className="sm:w-48 flex-shrink-0">
                  <span className="text-xs font-bold tracking-wider uppercase text-foreground/40">
                    {field.label}
                  </span>
                </div>
                <p className="text-sm text-foreground/55 leading-relaxed">{field.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <Footer />
    </div>
  );
}
