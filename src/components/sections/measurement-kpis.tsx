"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { KPI_DASHBOARD } from "@/content/strategy-data";

export default function MeasurementKpis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kpis" className="relative py-28 sm:py-36 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            10 — Measurement & KPIs
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-3 tracking-tight"
        >
          North Star Metric
        </motion.h2>

        {/* North Star */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 mb-20 p-8 sm:p-10 rounded-2xl bg-white border border-cps-green/10 accent-bar-left pl-10"
          style={{ ["--tw-border-opacity" as string]: undefined }}
        >
          <p className="text-xl sm:text-2xl text-foreground/80 leading-[1.6]">
            <span className="text-cps-green font-bold">Enrolled students per intake within fixed-spend efficiency targets.</span>{" "}
            Everything else — traffic, leads, click-through rates — is a leading indicator in service of this outcome.
          </p>
        </motion.div>

        {/* KPI Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            KPI Dashboard
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_140px_140px] gap-4 px-6 py-4 bg-cps-green/[0.05] border-b border-cps-green/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-green uppercase">
                  KPI
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Scenario A — 6 Mo
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">
                  Scenario B — 3 Mo
                </span>
              </div>
              {KPI_DASHBOARD.map((row, i) => (
                <motion.div
                  key={row.kpi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                  className={`grid grid-cols-[1fr_140px_140px] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/55">{row.kpi}</span>
                  <span className="text-sm text-foreground font-semibold">
                    {row.scenarioA}
                  </span>
                  <span className="text-sm text-foreground font-semibold">
                    {row.scenarioB}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reporting Cadence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              freq: "Weekly",
              desc: "Automated Looker Studio dashboard with spend, leads, CPA, and channel performance",
              color: "#00A8E1",
            },
            {
              freq: "Bi-Weekly",
              desc: "Broadbrand performance call with CPS — reviewing data, discussing optimisations, flagging issues",
              color: "#6B2D8B",
            },
            {
              freq: "Monthly",
              desc: "Full report with insights, creative performance breakdown, A/B test results, and recommendations",
              color: "#10B981",
            },
            {
              freq: "Post-Intake",
              desc: "Comprehensive review with enrollment data, full-funnel attribution, and strategy updates for next intake",
              color: "#F59E0B",
            },
          ].map((item, i) => (
            <motion.div
              key={item.freq}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.07 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-1 w-full" style={{ backgroundColor: `${item.color}30` }} />
              <div className="p-6">
                <div
                  className="text-sm font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.freq}
                </div>
                <p className="text-xs text-foreground/40 leading-[1.7]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
