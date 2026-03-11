"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MessagingFramework from "@/components/sections/messaging-framework";
import ContentStrategy from "@/components/sections/content-strategy";
import Footer from "@/components/sections/footer";

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

/* ─── Content Split Data ─── */
const CONTENT_SPLIT = [
  { label: "Student stories / social proof", pct: 40, color: "#6B2D8B" },
  { label: "Educational / value", pct: 30, color: "#00A8E1" },
  { label: "Promotional", pct: 20, color: "#10B981" },
  { label: "Industry insight", pct: 10, color: "#F59E0B" },
];

const PLATFORMS = [
  { name: "Instagram", focus: "Visual stories, Reels" },
  { name: "Facebook", focus: "Detailed posts, ads" },
  { name: "LinkedIn", focus: "B2B / thought leadership" },
  { name: "TikTok", focus: "Short student stories" },
  { name: "Blog", focus: "SEO articles" },
];

const CREATIVE_BRIEF_FIELDS = [
  { label: "Objective", desc: "Awareness / Consideration / Conversion" },
  { label: "Audience Segment", desc: "Banking Starter (HCIB) or Aspiring Leader (ACL6)" },
  { label: "Key Message", desc: "From messaging hierarchy (primary benefit layer)" },
  { label: "Psychological Trigger", desc: "From behavioural framework (e.g. Loss Aversion, Social Proof)" },
  { label: "CTA", desc: "Specific call-to-action (e.g. Download info pack, Apply now)" },
  { label: "Format & Specs", desc: "Platform, dimensions, duration (e.g. Meta Feed 1080\u00d71080, 15s Reel)" },
  { label: "Success Metric", desc: "Primary KPI for this asset (e.g. CTR \u22651.5%, CPL \u2264R100)" },
];

/* ================================================================== */

export default function ContentCreativePage() {
  const headerRef = useRef(null);
  const headlineRef = useRef(null);
  const calendarRef = useRef(null);
  const briefRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const headlineInView = useInView(headlineRef, { once: true, margin: "-100px" });
  const calendarInView = useInView(calendarRef, { once: true, margin: "-100px" });
  const briefInView = useInView(briefRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen bg-white">
      {/* ───────── Page Header ───────── */}
      <section className="relative py-28 sm:py-36" ref={headerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
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

      {/* ───────── Content Strategy (existing) ───────── */}
      <ContentStrategy />

      {/* ───────── Content Calendar Framework ───────── */}
      <section className="relative py-28 sm:py-36 section-tinted" ref={calendarRef}>
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={calendarInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              Content Calendar Framework
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={calendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
          >
            Weekly rhythm and{" "}
            <span className="text-cps-blue">content mix</span>
          </motion.h2>

          {/* Weekly Rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={calendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 mb-14 card-elevated !p-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">
              Weekly Publishing Rhythm
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Social Posts", freq: "3 / week", detail: "Mon \u00b7 Wed \u00b7 Fri", color: "#6B2D8B" },
                { label: "Blog Article", freq: "1 / week", detail: "SEO-focused long-form", color: "#00A8E1" },
                { label: "Nurture Email", freq: "1 / stage", detail: "Per nurture sequence step", color: "#10B981" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={calendarInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="p-5 rounded-xl border bg-white"
                  style={{ borderColor: `${item.color}15` }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                    {item.freq}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                  <div className="text-xs text-foreground/35">{item.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Split */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={calendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-14 card-elevated !p-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">
              Content Split
            </h3>
            {/* Horizontal bar */}
            <div className="flex rounded-xl overflow-hidden h-10 mb-6">
              {CONTENT_SPLIT.map((seg) => (
                <div
                  key={seg.label}
                  className="flex items-center justify-center text-white text-[10px] font-bold tracking-wider"
                  style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
                >
                  {seg.pct}%
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CONTENT_SPLIT.map((seg) => (
                <div key={seg.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                  <span className="text-xs text-foreground/50">
                    <span className="font-semibold" style={{ color: seg.color }}>{seg.pct}%</span>{" "}
                    {seg.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platform Allocation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={calendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-14"
          >
            <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">
              Platform Allocation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {PLATFORMS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={calendarInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  className="card-elevated !p-5 text-center"
                >
                  <div className="text-sm font-bold text-foreground mb-1">{p.name}</div>
                  <div className="text-xs text-foreground/40">{p.focus}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={calendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="p-8 rounded-2xl bg-white border border-cps-blue/8 accent-bar-left pl-10"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-cps-blue/40 uppercase mb-4">
              Content Workflow
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
              <span className="tag bg-cps-purple/8 text-cps-purple border border-cps-purple/15">
                Broadbrand drafts
              </span>
              <span className="text-foreground/20">&rarr;</span>
              <span className="tag bg-cps-blue/8 text-cps-blue border border-cps-blue/15">
                CPS reviews (2 business days)
              </span>
              <span className="text-foreground/20">&rarr;</span>
              <span className="tag bg-cps-green/8 text-cps-green border border-cps-green/15">
                Broadbrand publishes
              </span>
            </div>
          </motion.div>
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
