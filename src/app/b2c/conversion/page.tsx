"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ConversionStrategy from "@/components/sections/conversion-strategy";
import LeadNurturing from "@/components/sections/lead-nurturing";
import Footer from "@/components/sections/footer";
import { LeadScoringChart } from "@/components/charts";
import MartechStack from "@/components/sections/martech-stack";
import DataAttribution from "@/components/sections/data-attribution";
import {
  LEAD_SCORING_ACTIONS,
  LEAD_SCORING_TIERS,
  WHATSAPP_AUTOMATION,
} from "@/content/strategy-data";


/* ------------------------------------------------------------------ */
/*  Qualification Selector Tool                                         */
/* ------------------------------------------------------------------ */

const SELECTOR_CARDS = [
  {
    heading: "What it asks",
    body: "The tool should ask simple questions about current role, years of experience, career goals, industry context, and desired next step.",
    color: "#6B2D8B",
  },
  {
    heading: "What it returns",
    body: "The tool should recommend the most relevant qualification pathway, explain why that route fits, and provide the clearest next step.",
    color: "#00A8E1",
  },
  {
    heading: "Why it matters",
    body: "This helps CPS move from a catalogue-style experience to a guided student journey built around clarity, confidence, and progression.",
    color: "#10B981",
  },
];

const SELECTOR_BENEFITS = [
  "Reduce confusion between programmes",
  "Help students self-identify the right pathway",
  "Improve lead quality before application",
  "Create a more guided and confidence-building experience",
  "Support stronger conversion from information stage to inquiry stage",
];

function QualificationSelector() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">Coming Later</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Qualification Selector Tool
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-10"
        >
          A guided decision tool to reduce confusion and help students choose the right path.
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl space-y-4 mb-10"
        >
          <p className="text-sm text-foreground/50 leading-[1.8]">
            One of the recurring frictions in the CPS journey is that prospective students are often unsure which qualification is right for them.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            They are not only asking whether CPS is credible. They are also asking:
          </p>
          <ul className="space-y-2 pl-1">
            {[
              "What programme fits my goals?",
              "What qualification level is right for me?",
              "Which option will actually help me progress?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3 text-sm text-foreground/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-purple/60 shrink-0" />
                {q}
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            The qualification selector is a later-phase guided commerce feature that will help solve that problem. Rather than forcing prospective students to interpret qualification structures on their own, CPS can guide them through a short series of decision questions and recommend the most relevant next step.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            This tool should achieve the following:
          </p>
          <ul className="space-y-2 pl-1">
            {SELECTOR_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-purple/60 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3 cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {SELECTOR_CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: card.color }} />
              <div className="p-6">
                <h4 className="text-sm font-bold text-foreground mb-2">{card.heading}</h4>
                <p className="text-xs text-foreground/45 leading-[1.7]">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-white border border-black/[0.05] p-8"
          style={{ borderLeft: "4px solid #6B2D8B" }}
        >
          <h4 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-3">
            Later-Phase Role
          </h4>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            This tool sits after the website and paid media foundation is working. It is designed to improve decision quality, not to replace the core landing page and inquiry system.
          </p>
        </motion.div>

        {/* Cross-link */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-sm text-foreground/40 mt-8 leading-[1.8]"
        >
          For organisation-level pathways and enterprise packaging, see{" "}
          <Link href="/b2b" className="text-cps-purple font-medium hover:underline">
            B2B Strategy &rarr;
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Email Nurture Ecosystem                                             */
/* ------------------------------------------------------------------ */

const NURTURE_STEPS = [
  {
    step: "01",
    title: "Welcome & Info Delivery",
    body: "Deliver the promised information pack or programme guide immediately and set expectations clearly.",
    color: "#6B2D8B",
  },
  {
    step: "02",
    title: "Career & Outcome Framing",
    body: "Help the prospect understand where the qualification leads, what outcomes it supports, and why it matters.",
    color: "#00A8E1",
  },
  {
    step: "03",
    title: "Programme Clarity",
    body: "Explain what the programme includes, who it is for, what the time commitment looks like, and what support exists.",
    color: "#10B981",
  },
  {
    step: "04",
    title: "Decision Support",
    body: "Address affordability, recognition, flexibility, fit, and common concerns through reassurance-led content.",
    color: "#FFD100",
  },
  {
    step: "05",
    title: "Action & Urgency",
    body: "Use deadlines, reminders, transformation proof, and clear next steps to move warm leads toward application.",
    color: "#EF4444",
  },
];

const NURTURE_CONTENT_TYPES = [
  "Programme guides",
  "Career outcome explanations",
  "Timelines and qualification structure",
  "\u201CStill considering?\u201D nudges",
  "Pricing and payment clarity",
  "Graduate stories",
  "FAQs and reassurance content",
];

const NURTURE_ROLES = [
  "Deliver the right information at the right stage",
  "Reinforce trust and credibility",
  "Answer common objections before they become barriers",
  "Support WhatsApp and admissions follow-up with consistent messaging",
  "Move more leads from inquiry to application",
];

function EmailNurtureEcosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">Email Nurture Ecosystem</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Email Nurture Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-10"
        >
          Turning initial interest into confidence, clarity, and application intent.
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl space-y-4 mb-10"
        >
          <p className="text-sm text-foreground/50 leading-[1.8]">
            Most prospective students will not apply immediately after their first interaction with CPS. They need time to evaluate credibility, understand programme fit, compare options, and feel confident that they are making the right move.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            The email nurture ecosystem is designed to support that decision journey in a structured, reassuring, and outcome-led way. This should not behave like generic email marketing. It should behave like guided student support before enrollment.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            The role of the nurture ecosystem is to:
          </p>
          <ul className="space-y-2 pl-1">
            {NURTURE_ROLES.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-foreground/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-green/60 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Sequence steps */}
        <div className="space-y-4 mb-10">
          {NURTURE_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: s.color }} />
              <div className="p-6 flex items-start gap-5">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                  style={{
                    backgroundColor: `${s.color}0A`,
                    border: `1px solid ${s.color}15`,
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: s.color }}>
                    {s.step}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{s.title}</h4>
                  <p className="text-xs text-foreground/45 leading-[1.7]">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-cps-purple to-cps-blue" />
          <div className="p-7">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-4">
              Content Types
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {NURTURE_CONTENT_TYPES.map((t) => (
                <div key={t} className="flex items-start gap-3 text-sm text-foreground/55">
                  <span className="w-1.5 h-1.5 rounded-full bg-cps-blue mt-1.5 shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm text-foreground/50 max-w-3xl leading-[1.8]"
        >
          The email ecosystem works best when paired with WhatsApp, strong landing pages, and fast admissions follow-up. It is part of the conversion system, not a separate communications stream.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WhatsApp Templates                                                  */
/* ------------------------------------------------------------------ */

function WhatsAppTemplates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            WhatsApp Automation
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          WhatsApp message templates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Pre-approved WhatsApp Business API templates for automated lead
          follow-up. South African students are 3x more responsive on WhatsApp
          than email.
        </motion.p>

        <div className="space-y-4">
          {WHATSAPP_AUTOMATION.map((msg, i) => (
            <motion.div
              key={msg.timing}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="card-elevated p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cps-green/10">
                  <svg
                    className="w-4 h-4 text-cps-green"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-cps-green uppercase tracking-wide">
                  {msg.timing}
                </span>
              </div>
              <div className="bg-cps-green/[0.04] rounded-xl p-4 border border-cps-green/10">
                <p className="text-[13px] text-foreground/70 whitespace-pre-line leading-relaxed">
                  {msg.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-sm text-foreground/40 mt-8 leading-[1.8]"
        >
          The long-term goal is not only enrollment, but continued participation in a broader CPS community that strengthens retention, progression, and advocacy.{" "}
          <Link href="/b2c/alumni" className="text-cps-purple font-medium hover:underline">
            See Alumni / Community Flywheel &rarr;
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Lead Scoring Summary                                                */
/* ------------------------------------------------------------------ */

function LeadScoringSummary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">Lead Scoring</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Behavioural lead scoring model
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Every lead action accumulates points. Tier thresholds determine
          routing and follow-up urgency.
        </motion.p>

        {/* Lead Scoring Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="card-elevated !p-6 sm:!p-8 mb-6"
        >
          <h4 className="text-sm font-bold text-foreground/70 mb-1">
            Point Values by Action
          </h4>
          <p className="text-xs text-foreground/35 mb-4">
            Higher-intent actions earn more points toward scoring threshold
          </p>
          <LeadScoringChart />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scoring Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-[1fr_80px] gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">Action</span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase text-right">Points</span>
            </div>
            {LEAD_SCORING_ACTIONS.map((item, i) => (
              <div
                key={`score-${i}`}
                className={`grid grid-cols-[1fr_80px] gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${i % 2 === 1 ? "bg-black/[0.01]" : ""}`}
              >
                <span className="text-sm text-foreground/60">
                  {item.action}
                </span>
                <span className="text-sm font-semibold text-cps-purple text-right">
                  +{item.points}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Tier Thresholds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-[100px_80px_1fr] gap-4 px-6 py-4 bg-cps-blue/[0.04] border-b border-cps-blue/10">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Tier</span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Score</span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Action</span>
            </div>
            {LEAD_SCORING_TIERS.map((tier, i) => (
              <div
                key={`tier-${i}`}
                className={`grid grid-cols-[100px_80px_1fr] gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${i % 2 === 1 ? "bg-black/[0.01]" : ""}`}
              >
                <span className="text-sm font-semibold" style={{ color: tier.color }}>
                  {tier.status}
                </span>
                <span
                  className="text-[11px] px-2 py-0.5 rounded-full font-medium text-center self-center"
                  style={{
                    backgroundColor: tier.color + "15",
                    color: tier.color,
                  }}
                >
                  {tier.score}
                </span>
                <span className="text-sm text-foreground/50">
                  {tier.action}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Performance Escalation Logic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">
            Performance Escalation Logic
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full bg-cps-purple" />
              <div className="p-6">
                <h4 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-4">
                  Scenario A — 6-Month Intake
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-purple/60 flex-shrink-0" />
                    <span className="text-sm text-foreground/55 leading-[1.7]">If monthly leads fall below 78, investigate channel mix, landing page conversion, and admissions handoff</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-purple/60 flex-shrink-0" />
                    <span className="text-sm text-foreground/55 leading-[1.7]">If CPA rises above R1,286, optimise creative, audience quality, and nurture performance before changing strategic assumptions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full bg-cps-blue" />
              <div className="p-6">
                <h4 className="text-xs font-bold text-cps-blue uppercase tracking-wider mb-4">
                  Scenario B — 3-Month Intake
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-blue/60 flex-shrink-0" />
                    <span className="text-sm text-foreground/55 leading-[1.7]">If monthly leads fall below 156, the intake pace is at risk and rapid optimisation is required</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-blue/60 flex-shrink-0" />
                    <span className="text-sm text-foreground/55 leading-[1.7]">If CPA rises above R643, the accelerated intake model is no longer efficient enough and the funnel must be improved urgently</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-foreground/40 italic">
            In both scenarios, the monthly spend remains fixed at R15,000. Escalation is triggered by efficiency breakdown, not by budget expansion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Reporting & Attribution                                             */
/* ------------------------------------------------------------------ */

const REPORTING_CADENCE = [
  {
    frequency: "Daily",
    report: "Spend & Lead Tracker",
    metrics: "Spend, leads, CPA, CPL by channel",
    owner: "Broadbrand",
    color: "#6B2D8B",
  },
  {
    frequency: "Weekly",
    report: "Performance Dashboard",
    metrics: "Funnel conversion rates, top campaigns, spend pacing",
    owner: "Broadbrand → CPS",
    color: "#00A8E1",
  },
  {
    frequency: "Bi-weekly",
    report: "Strategy Sync",
    metrics: "A/B test results, optimisation decisions, creative pipeline",
    owner: "Joint call",
    color: "#10B981",
  },
  {
    frequency: "Monthly",
    report: "Executive Report",
    metrics: "Enrollments, ROI, LTV:CPA ratio, channel attribution, next month plan",
    owner: "Broadbrand → CPS Leadership",
    color: "#FFD100",
  },
];

const ATTRIBUTION_MODEL = [
  { touch: "First Touch", weight: "30%", description: "Channel that first brought the lead (awareness credit)" },
  { touch: "Lead Conversion", weight: "40%", description: "Campaign/ad that drove the form submission (intent credit)" },
  { touch: "Last Touch", weight: "30%", description: "Final interaction before enrollment (closing credit)" },
];

function ReportingAttribution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">
            Reporting &amp; Attribution
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Data-driven reporting cadence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Regular reporting rhythm with clear ownership ensures full
          transparency and fast decision-making.
        </motion.p>

        {/* Reporting Cadence */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {REPORTING_CADENCE.map((item, i) => (
            <motion.div
              key={item.frequency}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5"
            >
              <div
                className="w-full h-1 rounded-full mb-4"
                style={{ backgroundColor: item.color }}
              />
              <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-wide mb-1">
                {item.frequency}
              </h4>
              <p className="text-sm font-semibold text-foreground/80 mb-2">
                {item.report}
              </p>
              <p className="text-[12px] text-foreground/50 mb-3">
                {item.metrics}
              </p>
              <span className="tag text-[10px] px-2 py-0.5 bg-black/[0.04] text-foreground/50 rounded-full">
                {item.owner}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Roles, Ownership & Reporting                                        */
/* ------------------------------------------------------------------ */

const ROLES = [
  {
    name: "Karen",
    responsibility: "Responsible for overall marketing alignment, overseeing strategy and plans, and managing reporting and feedback.",
    color: "#6B2D8B",
  },
  {
    name: "Dylan",
    responsibility: "Point of contact for B2B marketing, including LinkedIn campaigns, website feedback, and reporting from lead through to pipeline and close.",
    color: "#00A8E1",
  },
  {
    name: "Susan",
    responsibility: "Point of contact for B2C marketing, including intake dates, pricing, website updates, and reporting.",
    color: "#10B981",
  },
  {
    name: "Broadbrand",
    responsibility: "Operates as CPS\u2019s outsourced CMO function across strategy, PPC, CRO, UX, content, creative direction, analytics, and growth planning.",
    color: "#FFD100",
  },
];

function RolesOwnership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Roles, Ownership &amp; Reporting
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Clear ownership across B2B and B2C
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Clear ownership is required for the strategy to run effectively across B2B and B2C.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {ROLES.map((role, i) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: role.color }} />
              <div className="p-6">
                <h4 className="text-sm font-bold text-foreground mb-2">
                  {role.name}
                </h4>
                <p className="text-xs text-foreground/45 leading-[1.7]">
                  {role.responsibility}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-white border border-black/[0.05] p-8"
          style={{ borderLeft: "4px solid #6B2D8B" }}
        >
          <h4 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-3">
            Operational Principle
          </h4>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            Broadbrand owns strategic coordination and growth execution across the digital funnel. CPS retains operational ownership of internal decision-making, programme inputs, pricing approval, and student-facing business processes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Header                                                         */
/* ------------------------------------------------------------------ */

function ConversionHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              Conversion &amp; Ops
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-4">
            Conversion, Nurturing &amp; Operations
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl">
            Website conversion strategy, email &amp; WhatsApp nurturing, lead
            scoring, and reporting attribution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function ConversionPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <ConversionHeader />
      <ConversionStrategy />
      <QualificationSelector />
      <LeadNurturing />
      <EmailNurtureEcosystem />
      <LeadScoringSummary />
      <WhatsAppTemplates />
      <MartechStack />
      <DataAttribution />
      <ReportingAttribution />
      <RolesOwnership />
      <Footer />
    </div>
  );
}
