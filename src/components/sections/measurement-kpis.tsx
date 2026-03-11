"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { KPI_DASHBOARD } from "@/content/strategy-data";

export default function MeasurementKpis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kpis" className="relative py-24 sm:py-32">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-green" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-green uppercase">
            10 — Measurement & KPIs
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          North Star Metric
        </motion.h2>

        {/* North Star */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-cps-green/5 to-cps-blue/5 border border-cps-green/15"
        >
          <p className="font-display text-xl sm:text-2xl text-white/90 leading-relaxed">
            <span className="text-cps-green font-bold">Enrolled students per intake at or below R400 CPA.</span>{" "}
            Everything else — traffic, leads, click-through rates — is a leading indicator in service of this outcome.
          </p>
        </motion.div>

        {/* KPI Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-xl font-bold text-white mb-6">
            KPI Dashboard
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-[1fr_120px_100px] gap-4 px-5 py-3 rounded-t-xl bg-cps-green/10 border border-cps-green/20">
                <span className="text-xs font-semibold tracking-wider text-cps-green uppercase">
                  KPI
                </span>
                <span className="text-xs font-semibold tracking-wider text-cps-green uppercase">
                  Target
                </span>
                <span className="text-xs font-semibold tracking-wider text-cps-green uppercase">
                  Frequency
                </span>
              </div>
              {KPI_DASHBOARD.map((row, i) => (
                <motion.div
                  key={row.kpi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                  className={`grid grid-cols-[1fr_120px_100px] gap-4 px-5 py-3.5 border-x border-b border-white/[0.06] ${
                    i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                  } ${i === KPI_DASHBOARD.length - 1 ? "rounded-b-xl" : ""}`}
                >
                  <span className="text-sm text-white/60">{row.kpi}</span>
                  <span className="text-sm text-white font-mono font-semibold">
                    {row.target}
                  </span>
                  <span className="text-sm text-white/40">{row.frequency}</span>
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
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              freq: "Weekly",
              desc: "Automated Looker Studio dashboard with spend, leads, CPA, and channel performance",
              color: "#2EA3F2",
            },
            {
              freq: "Bi-Weekly",
              desc: "Broadbrand performance call with CPS — reviewing data, discussing optimisations, flagging issues",
              color: "#7C3AED",
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
              transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
            >
              <div
                className="text-sm font-bold mb-2"
                style={{ color: item.color }}
              >
                {item.freq}
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
