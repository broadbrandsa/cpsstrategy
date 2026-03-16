"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CpaModelling from "@/components/sections/cpa-modelling";
import PaidMedia from "@/components/sections/paid-media";
import Benchmarks from "@/components/sections/benchmarks";
import BudgetSummary from "@/components/sections/budget-summary";
import Footer from "@/components/sections/footer";
import { BudgetAllocationDonut } from "@/components/charts";
import {
  GOOGLE_CAMPAIGNS,
  META_AUDIENCES,
  AB_TESTING_PLAN,
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

function EfficiencyFramework() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const CARDS = [
    {
      heading: "6-Month Efficiency Target",
      color: "#6B2D8B",
      items: [
        "78 leads per month",
        "12 enrollments per month",
        "CPL ≤ R193",
        "CPA ≤ R1,286",
      ],
    },
    {
      heading: "3-Month Efficiency Target",
      color: "#00A8E1",
      items: [
        "156 leads per month",
        "23 enrollments per month",
        "CPL ≤ R96",
        "CPA ≤ R643",
      ],
    },
    {
      heading: "Operational Implication",
      color: "#10B981",
      items: [
        "The 3-month scenario requires materially stronger conversion performance from creative, landing pages, nurture, and admissions follow-up. The spend does not increase. The system has to get better.",
      ],
    },
  ];

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
            Efficiency Framework at Fixed Spend
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Fixed spend, variable efficiency
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          This strategy assumes the monthly media budget remains fixed at R15,000. The growth question is therefore not &ldquo;How much more can we spend?&rdquo; but &ldquo;How efficiently can we convert the same spend into qualified leads and enrollments?&rdquo;
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: card.color }} />
              <div className="p-6">
                <h4 className="text-sm font-bold mb-4" style={{ color: card.color }}>
                  {card.heading}
                </h4>
                <div className="space-y-2">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: `${card.color}60` }} />
                      <span className="text-sm text-foreground/55 leading-[1.7]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
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
            Paid Media &amp; Intake Efficiency Strategy
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl">
            Google &amp; Meta deep dives, fixed-spend funnel modelling, A/B testing roadmap,
            and efficiency targets designed to reach 70 students per intake without changing the monthly media budget.
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
      {/* Budget Allocation Visual */}
      <section className="relative pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <BudgetAllocationDonut />
            <div className="card-elevated !p-6 sm:!p-8 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-foreground/70 mb-2">R15,000/month Fixed Budget</h4>
              <p className="text-[13px] text-foreground/45 leading-[1.7] mb-4">
                Equal 50/50 split between Google Search (bottom-funnel intent) and Meta (top-funnel awareness).
                Monthly spend stays fixed — efficiency determines outcomes.
              </p>
              <div className="flex gap-3">
                <div className="px-3 py-1.5 rounded-full bg-cps-blue/8 text-cps-blue text-[11px] font-medium">Google: R7,500</div>
                <div className="px-3 py-1.5 rounded-full bg-cps-purple/8 text-cps-purple text-[11px] font-medium">Meta: R7,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PaidMedia />
      <GoogleDeepDive />
      <MetaDeepDive />
      <CpaModelling />
      <Benchmarks />
      <ABTestingRoadmap />
      <EfficiencyFramework />
      <BudgetSummary />
      <Footer />
    </div>
  );
}
