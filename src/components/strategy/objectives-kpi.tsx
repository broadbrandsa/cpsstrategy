"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const KEY_TARGETS = [
  { label: "Intake Goal", value: "35", unit: "Students per qualification" },
  { label: "Total Target", value: "70", unit: "Students per intake" },
  { label: "Media Budget", value: "R15,000", unit: "Fixed monthly spend" },
];

const SCENARIO_A = [
  { label: "Total spend", value: "R90,000" },
  { label: "Monthly enrollments required", value: "12" },
  { label: "CPA target", value: "≤ R1,286" },
  { label: "Leads required per month", value: "78" },
  { label: "CPL target", value: "≤ R193" },
];

const SCENARIO_B = [
  { label: "Total spend", value: "R45,000" },
  { label: "Monthly enrollments required", value: "23" },
  { label: "CPA target", value: "≤ R643" },
  { label: "Leads required per month", value: "156" },
  { label: "CPL target", value: "≤ R96" },
];

const KPI_ROWS = [
  { kpi: "Students per intake", a: "70", b: "70" },
  { kpi: "Students per month", a: "12", b: "23" },
  { kpi: "Monthly media spend", a: "R15,000", b: "R15,000" },
  { kpi: "Total media spend", a: "R90,000", b: "R45,000" },
  { kpi: "Target CPA", a: "≤ R1,286", b: "≤ R643" },
  { kpi: "Target CPL", a: "≤ R193", b: "≤ R96" },
  { kpi: "Monthly leads required", a: "78", b: "156" },
  { kpi: "Lead-to-enrollment rate", a: "15%", b: "15%" },
  { kpi: "Google Ads CTR", a: "≥ 5%", b: "≥ 5%" },
  { kpi: "Meta Ads CTR", a: "≥ 1.5%", b: "≥ 1.5%" },
  { kpi: "Email open rate", a: "≥ 35%", b: "≥ 35%" },
  { kpi: "Email click rate", a: "≥ 5%", b: "≥ 5%" },
  { kpi: "WhatsApp response rate", a: "≥ 60%", b: "≥ 60%" },
];

export default function ObjectivesKpi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">
            Objectives &amp; KPI Framework
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          What success looks like for{" "}
          <span className="text-cps-blue">CPS B2C</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-3xl space-y-3"
        >
          <p>
            This strategy supports CPS&apos;s shift from a predominantly B2B
            education business to a sustainable direct-to-student acquisition
            engine for HCIB and ACL6.
          </p>
          <p>
            The enrollment goal stays constant across both planning scenarios:{" "}
            <strong className="text-foreground/60 font-semibold">
              35 students per qualification per intake, 70 total students per intake.
            </strong>
          </p>
          <p>
            The difference is time. At a fixed monthly media budget of{" "}
            <strong className="text-foreground/60 font-semibold">R15,000</strong>,
            compressing the intake window increases the efficiency required from
            the funnel.
          </p>
        </motion.div>

        {/* Key Targets — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {KEY_TARGETS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-6 text-center"
            >
              <div className="text-2xl font-bold text-cps-blue mb-1">
                {item.value}
              </div>
              <div className="text-xs text-foreground/40 mb-2">{item.unit}</div>
              <div className="text-sm font-medium text-foreground/60">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scenario Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {/* Scenario A */}
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-cps-purple" />
            <div className="p-6">
              <h3 className="text-sm font-bold text-cps-purple mb-4 uppercase tracking-wider">
                Scenario A — 6-Month Intake
              </h3>
              <div className="space-y-3">
                {SCENARIO_A.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/50">{item.label}</span>
                    <span className="text-sm font-semibold text-foreground/80">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario B */}
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-cps-blue" />
            <div className="p-6">
              <h3 className="text-sm font-bold text-cps-blue mb-4 uppercase tracking-wider">
                Scenario B — 3-Month Intake
              </h3>
              <div className="space-y-3">
                {SCENARIO_B.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/50">{item.label}</span>
                    <span className="text-sm font-semibold text-foreground/80">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* KPI Dashboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="overflow-x-auto">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_160px_160px] gap-4 px-6 py-4 bg-cps-blue/[0.04] border-b border-cps-blue/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">
                  KPI
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Scenario A — 6 Months
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">
                  Scenario B — 3 Months
                </span>
              </div>

              {KPI_ROWS.map((row, i) => (
                <motion.div
                  key={row.kpi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                  className={`grid grid-cols-[1fr_160px_160px] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/60 font-medium">
                    {row.kpi}
                  </span>
                  <span className="text-sm text-foreground font-semibold">
                    {row.a}
                  </span>
                  <span className="text-sm text-foreground font-semibold">
                    {row.b}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 text-sm text-foreground/40 italic max-w-3xl"
        >
          The key strategic implication is simple: with the same monthly spend, a
          shorter intake window demands much stronger funnel efficiency.
        </motion.p>
      </div>
    </section>
  );
}
