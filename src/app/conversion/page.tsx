"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ConversionStrategy from "@/components/sections/conversion-strategy";
import LeadNurturing from "@/components/sections/lead-nurturing";
import LaunchPlan from "@/components/sections/launch-plan";
import MeasurementKpis from "@/components/sections/measurement-kpis";
import Footer from "@/components/sections/footer";
import {
  RISK_TRIGGERS,
  LEAD_SCORING_ACTIONS,
  LEAD_SCORING_TIERS,
  WHATSAPP_AUTOMATION,
} from "@/content/strategy-data";

/* ------------------------------------------------------------------ */
/*  Admissions Handoff Protocol                                         */
/* ------------------------------------------------------------------ */

const HANDOFF_STEPS = [
  {
    stage: "Lead Capture",
    owner: "Marketing (Broadbrand)",
    action: "Form submission → CRM entry created with UTM, source, programme",
    sla: "Instant",
    color: "#6B2D8B",
  },
  {
    stage: "Lead Scoring",
    owner: "Marketing Automation",
    action: "Score assigned based on engagement signals; routes to tier (Cold / Warm / Hot)",
    sla: "< 5 min",
    color: "#00A8E1",
  },
  {
    stage: "Hot Lead Alert",
    owner: "Marketing → Admissions",
    action: "Score ≥ 80 triggers instant Slack/email notification to CPS admissions team",
    sla: "< 10 min",
    color: "#10B981",
  },
  {
    stage: "First Contact",
    owner: "CPS Admissions",
    action: "Personal call or WhatsApp from admissions advisor with programme details",
    sla: "< 2 hours",
    color: "#FFD100",
  },
  {
    stage: "Application Assist",
    owner: "CPS Admissions",
    action: "Guide student through application form, document upload, and fee payment",
    sla: "24 hours",
    color: "#6B2D8B",
  },
  {
    stage: "Enrollment Confirmed",
    owner: "CPS Admissions",
    action: "CRM status updated → conversion event fires → attribution loop closes",
    sla: "48 hours",
    color: "#10B981",
  },
];

function AdmissionsHandoff() {
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
          <span className="section-label text-cps-green">
            Admissions Handoff
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Marketing → Admissions protocol
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          A clear, SLA-driven handoff from digital lead to enrolled student —
          no leads fall through the cracks.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[18px] top-4 bottom-4 w-px bg-black/[0.06] hidden sm:block" />

          <div className="space-y-4">
            {HANDOFF_STEPS.map((step, i) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0 relative z-10 mt-1.5">
                  <div
                    className="w-[10px] h-[10px] rounded-full ring-4 ring-white"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                <div className="card-elevated p-5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className="text-sm font-semibold text-foreground/80">
                      {step.stage}
                    </h4>
                    <span className="tag text-[10px] px-2 py-0.5 bg-black/[0.04] text-foreground/50 rounded-full">
                      {step.owner}
                    </span>
                    <span
                      className="tag text-[10px] px-2 py-0.5 rounded-full font-medium ml-auto"
                      style={{
                        backgroundColor: step.color + "10",
                        color: step.color,
                      }}
                    >
                      SLA: {step.sla}
                    </span>
                  </div>
                  <p className="text-[13px] text-foreground/50">
                    {step.action}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scoring Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated overflow-hidden"
          >
            <div className="table-header px-5 py-3">
              <h4 className="text-xs font-semibold text-foreground/60">
                Scoring Actions
              </h4>
            </div>
            <div className="divide-y divide-black/[0.04]">
              {LEAD_SCORING_ACTIONS.map((item, i) => (
                <div
                  key={`score-${i}`}
                  className="table-row px-5 py-3 flex items-center justify-between"
                >
                  <span className="text-[13px] text-foreground/60">
                    {item.action}
                  </span>
                  <span className="text-[13px] font-semibold text-cps-purple">
                    +{item.points} pts
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tier Thresholds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated overflow-hidden"
          >
            <div className="table-header px-5 py-3">
              <h4 className="text-xs font-semibold text-foreground/60">
                Tier Thresholds
              </h4>
            </div>
            <div className="divide-y divide-black/[0.04]">
              {LEAD_SCORING_TIERS.map((tier, i) => (
                <div key={`tier-${i}`} className="table-row px-5 py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-foreground/80">
                      {tier.status}
                    </span>
                    <span
                      className="tag text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: tier.color + "15",
                        color: tier.color,
                      }}
                    >
                      {tier.score} pts
                    </span>
                  </div>
                  <p className="text-[13px] text-foreground/50">
                    {tier.action}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Risk Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 card-elevated overflow-hidden"
        >
          <div className="table-header px-5 py-3">
            <h4 className="text-xs font-semibold text-foreground/60">
              Risk Triggers &amp; Auto-Responses
            </h4>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {RISK_TRIGGERS.map((trigger, i) => (
              <div
                key={`risk-${i}`}
                className="table-row px-5 py-3 grid grid-cols-3 gap-4"
              >
                <span className="text-[13px] font-medium text-foreground/70">
                  {trigger.phase}
                </span>
                <span className="text-[13px] text-cps-red/80">
                  {trigger.signal}
                </span>
                <span className="text-[13px] text-foreground/50">
                  {trigger.response}
                </span>
              </div>
            ))}
          </div>
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
    metrics: "A/B test results, scaling decisions, creative pipeline",
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

        {/* Attribution Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-elevated overflow-hidden"
        >
          <div className="table-header px-5 py-3">
            <h4 className="text-xs font-semibold text-foreground/60">
              Multi-Touch Attribution Model (Weighted)
            </h4>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {ATTRIBUTION_MODEL.map((row) => (
              <div
                key={row.touch}
                className="table-row px-5 py-3 grid grid-cols-[120px_60px_1fr] gap-4 items-center"
              >
                <span className="text-[13px] font-medium text-foreground/70">
                  {row.touch}
                </span>
                <span className="text-[13px] font-bold text-cps-purple">
                  {row.weight}
                </span>
                <span className="text-[13px] text-foreground/50">
                  {row.description}
                </span>
              </div>
            ))}
          </div>
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
    <section className="relative pt-16 pb-8 sm:pt-24 sm:pb-12">
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
            scoring, admissions handoff, launch plan, KPIs, and reporting
            attribution.
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
      <LeadNurturing />
      <LeadScoringSummary />
      <WhatsAppTemplates />
      <AdmissionsHandoff />
      <ReportingAttribution />
      <LaunchPlan />
      <MeasurementKpis />
      <Footer />
    </div>
  );
}
