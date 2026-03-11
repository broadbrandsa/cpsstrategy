"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BUDGET_SUMMARY, STUDENT_LTV, BUDGET_SCALING, SCALING_TRIGGERS } from "@/content/strategy-data";

export default function BudgetSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-gold rounded-full" />
          <span className="section-label text-cps-gold">
            11 — Budget Summary
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
        >
          Investment overview
        </motion.h2>

        {/* Budget Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 overflow-x-auto"
        >
          <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_130px_1fr] gap-4 px-6 py-4 bg-cps-gold/[0.06] border-b border-cps-gold/15">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-gold uppercase">
                Line Item
              </span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-gold uppercase">
                Monthly Cost
              </span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-gold uppercase">
                Notes
              </span>
            </div>
            {BUDGET_SUMMARY.map((row, i) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                className={`grid grid-cols-[1fr_130px_1fr] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                  i % 2 === 1 ? "bg-black/[0.01]" : ""
                } ${
                  row.item === "Total media spend"
                    ? "!bg-cps-gold/[0.04] !font-semibold"
                    : ""
                }`}
              >
                <span
                  className={`text-sm ${
                    row.item === "Total media spend"
                      ? "text-foreground font-bold"
                      : "text-foreground/55"
                  }`}
                >
                  {row.item}
                </span>
                <span
                  className={`text-sm ${
                    row.item === "Total media spend"
                      ? "text-cps-gold font-bold"
                      : "text-foreground/70 font-semibold"
                  }`}
                >
                  {row.cost}
                </span>
                <span className="text-sm text-foreground/35">{row.notes}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom-line statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-cps-purple/[0.03] to-cps-gold/[0.04] border border-black/[0.05]"
        >
          <p className="text-lg sm:text-xl text-foreground/70 leading-[1.8]">
            At the target CPA of <span className="text-cps-gold font-bold">R400</span>, acquiring 70 students per intake
            (35 per qualification) costs <span className="text-foreground font-semibold">R28,000</span> in total media spend.
            With R15,000/month over a 6-month intake cycle, total available media is{" "}
            <span className="text-foreground font-semibold">R90,000</span> — providing significant headroom for awareness building,
            retargeting, and content amplification beyond direct acquisition.
          </p>
        </motion.div>

        {/* ROI Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Student Lifetime Value & ROI
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="metric-card text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">HCIB LTV</p>
              <p className="text-2xl font-bold text-cps-purple">R{STUDENT_LTV.hcib.total.toLocaleString()}</p>
              <p className="text-[10px] text-foreground/20 mt-1">R{STUDENT_LTV.hcib.monthly.toLocaleString()}/mo x {STUDENT_LTV.hcib.duration}mo</p>
            </div>
            <div className="metric-card text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">ACL6 LTV</p>
              <p className="text-2xl font-bold text-cps-blue">R{STUDENT_LTV.acl6.total.toLocaleString()}</p>
              <p className="text-[10px] text-foreground/20 mt-1">R{STUDENT_LTV.acl6.monthly.toLocaleString()}/mo x {STUDENT_LTV.acl6.duration}mo</p>
            </div>
            <div className="metric-card text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">Total Tuition/Intake</p>
              <p className="text-2xl font-bold text-foreground">R{STUDENT_LTV.totalTuitionPerIntake.toLocaleString()}</p>
              <p className="text-[10px] text-foreground/20 mt-1">{STUDENT_LTV.totalStudents} students (35+35)</p>
            </div>
            <div className="p-6 rounded-2xl bg-cps-green/[0.06] border-2 border-cps-green/20 text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-cps-green/60 uppercase mb-2">ROI</p>
              <p className="text-4xl font-bold text-cps-green">{STUDENT_LTV.roi}</p>
              <p className="text-[10px] text-cps-green/50 mt-1">Before agency costs</p>
            </div>
          </div>
        </motion.div>

        {/* Budget Scaling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Budget Scaling Scenarios
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            What happens at higher spend levels (Target scenario assumptions)
          </p>
          <div className="overflow-x-auto mb-10">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-6 gap-3 px-6 py-4 bg-cps-gold/[0.06] border-b border-cps-gold/15">
                {["Budget", "Google", "Meta", "Enrollments/mo", "CPA", "6mo Total"].map((h) => (
                  <span key={h} className="text-[11px] font-semibold tracking-[0.1em] text-cps-gold uppercase">{h}</span>
                ))}
              </div>
              {BUDGET_SCALING.map((row, i) => (
                <div key={row.budget} className={`grid grid-cols-6 gap-3 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${i % 2 === 1 ? "bg-black/[0.01]" : ""}`}>
                  <span className="text-sm text-foreground font-semibold">{row.budget}</span>
                  <span className="text-sm text-foreground/40">{row.google}</span>
                  <span className="text-sm text-foreground/40">{row.meta}</span>
                  <span className="text-sm text-foreground/60">{row.enrollments}</span>
                  <span className="text-sm text-foreground/60">{row.cpa}</span>
                  <span className="text-sm text-foreground font-semibold">{row.sixMonth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scaling Triggers */}
          <div className="grid sm:grid-cols-2 gap-3">
            {SCALING_TRIGGERS.map((trigger, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-black/[0.04]">
                <p className="text-sm text-foreground/60 font-medium">{trigger.condition}</p>
                <p className="text-xs text-foreground/35 mt-1">{trigger.action}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-foreground/25 italic">
            Diminishing returns likely above R40k as target audience saturates in SA metros. Recommend expanding audience targeting before scaling beyond R40k.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
