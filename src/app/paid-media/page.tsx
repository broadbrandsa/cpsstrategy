"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CpaModelling from "@/components/sections/cpa-modelling";
import PaidMedia from "@/components/sections/paid-media";
import Benchmarks from "@/components/sections/benchmarks";
import BudgetSummary from "@/components/sections/budget-summary";
import Footer from "@/components/sections/footer";
import {
  GOOGLE_BENCHMARKS,
  META_BENCHMARKS,
  GOOGLE_CAMPAIGNS,
  META_AUDIENCES,
  AB_TESTING_PLAN,
  BUDGET_SCALING,
  SCALING_TRIGGERS,
} from "@/content/strategy-data";

/* ------------------------------------------------------------------ */
/*  Google Deep Dive                                                    */
/* ------------------------------------------------------------------ */

function GoogleDeepDive() {
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
          <span className="section-label text-cps-purple">
            Google Ads — Deep Dive
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Capture high-intent search demand
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Google Search is the primary engine for bottom-funnel leads already
          researching banking qualifications. Our campaign structure captures
          intent at every stage.
        </motion.p>

        {/* Campaign Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {GOOGLE_CAMPAIGNS.map((campaign, i) => (
            <motion.div
              key={campaign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-2 rounded-full bg-cps-purple"
                />
                <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                  {campaign.name}
                </h4>
              </div>
              <p className="text-[13px] text-foreground/50 mb-3">
                {campaign.purpose}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {campaign.keywords.map((kw: string) => (
                  <span
                    key={kw}
                    className="tag text-[10px] px-2 py-0.5 bg-cps-purple/[0.06] text-cps-purple/70 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Benchmarks Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-elevated overflow-hidden"
        >
          <div className="table-header px-5 py-3">
            <h4 className="text-xs font-semibold text-foreground/60">
              Google Ads — SA Education Benchmarks
            </h4>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {GOOGLE_BENCHMARKS.map((row) => (
              <div key={row.metric} className="table-row px-5 py-3 grid grid-cols-4 gap-4 items-center">
                <span className="text-[13px] font-medium text-foreground/70">{row.metric}</span>
                <span className="text-[13px] text-foreground/60">{row.global}</span>
                <span className="text-[13px] font-semibold text-cps-purple">{row.cpsTarget}</span>
                <span className="text-[11px] text-foreground/40">{row.source}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Meta Deep Dive                                                      */
/* ------------------------------------------------------------------ */

function MetaDeepDive() {
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
            Meta Ads — Deep Dive
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Drive awareness &amp; mid-funnel consideration
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Meta (Facebook &amp; Instagram) is where we generate top-of-funnel
          awareness and nurture mid-funnel consideration with compelling
          creative and precise audience targeting.
        </motion.p>

        {/* Audience Segments */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {META_AUDIENCES.map((aud, i) => (
            <motion.div
              key={`meta-aud-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5"
            >
              <h4 className="text-sm font-semibold text-foreground/80 mb-2">
                {aud.audience}
              </h4>
              <p className="text-[13px] text-foreground/50">
                {aud.targeting}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Meta Benchmarks Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-elevated overflow-hidden"
        >
          <div className="table-header px-5 py-3">
            <h4 className="text-xs font-semibold text-foreground/60">
              Meta Ads — SA Education Benchmarks
            </h4>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {META_BENCHMARKS.map((row, i) => (
              <div key={`meta-bench-${i}`} className="table-row px-5 py-3 grid grid-cols-4 gap-4 items-center">
                <span className="text-[13px] font-medium text-foreground/70">{row.metric}</span>
                <span className="text-[13px] text-foreground/60">{row.global}</span>
                <span className="text-[13px] font-semibold text-cps-blue">{row.cpsTarget}</span>
                <span className="text-[11px] text-foreground/40">{row.source}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  A/B Testing Roadmap                                                 */
/* ------------------------------------------------------------------ */

function ABTestingRoadmap() {
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
            Testing &amp; Optimisation
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          A/B testing roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Structured 5-phase testing calendar ensuring continuous improvement
          across copy, audiences, landing pages, and creative formats.
        </motion.p>

        <div className="space-y-3">
          {AB_TESTING_PLAN.map((test, i) => (
            <motion.div
              key={`ab-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-shrink-0 w-24">
                <span className="text-[11px] font-semibold text-cps-green uppercase tracking-wide">
                  Wk {test.weeks}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground/80 mb-1">
                  {test.test}
                </h4>
                <p className="text-[13px] text-foreground/50">
                  {test.what}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-[11px] text-foreground/40">Impact</span>
                <p className="text-[13px] font-medium text-foreground/70">
                  {test.impact}
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
/*  Budget Scaling Rules                                                */
/* ------------------------------------------------------------------ */

function BudgetScalingRules() {
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
          <div className="w-8 h-[2px] bg-cps-gold rounded-full" />
          <span className="section-label text-cps-gold">
            Budget Scaling Framework
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          When and how to scale spend
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Clear rules for increasing or decreasing budget based on real
          performance data — no guesswork.
        </motion.p>

        {/* Budget Scaling Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated overflow-hidden mb-6"
        >
          <div className="table-header px-5 py-3">
            <h4 className="text-xs font-semibold text-foreground/60">
              Budget Scaling Scenarios
            </h4>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {BUDGET_SCALING.map((row) => (
              <div key={row.budget} className="table-row px-5 py-3 grid grid-cols-5 gap-4 items-center">
                <span className="text-[13px] font-semibold text-foreground/80">{row.budget}</span>
                <span className="text-[13px] text-foreground/50">Google: {row.google}</span>
                <span className="text-[13px] text-foreground/50">Meta: {row.meta}</span>
                <span className="text-[13px] font-medium text-cps-green">{row.enrollments} enrollments/mo</span>
                <span className="text-[13px] font-medium text-cps-purple">{row.sixMonth} in 6 mo</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scaling Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-elevated overflow-hidden"
        >
          <div className="table-header px-5 py-3">
            <h4 className="text-xs font-semibold text-foreground/60">
              Scaling Triggers
            </h4>
          </div>
          <div className="divide-y divide-black/[0.04]">
            {SCALING_TRIGGERS.map((trigger) => (
              <div key={trigger.condition} className="table-row px-5 py-3 flex items-center justify-between">
                <span className="text-[13px] text-foreground/60">
                  {trigger.condition}
                </span>
                <span className="text-[13px] font-medium text-cps-purple">
                  {trigger.action}
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

function PaidMediaHeader() {
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
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">Paid Media</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-4">
            Paid Media &amp; CPA Strategy
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl">
            Google &amp; Meta deep dives, CPA modelling, A/B testing roadmap,
            budget allocation, and scaling rules — everything to drive
            cost-efficient student acquisition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function PaidMediaPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <PaidMediaHeader />
      <PaidMedia />
      <GoogleDeepDive />
      <MetaDeepDive />
      <CpaModelling />
      <Benchmarks />
      <ABTestingRoadmap />
      <BudgetScalingRules />
      <BudgetSummary />
      <Footer />
    </div>
  );
}
