"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STUDENT_LTV } from "@/content/strategy-data";

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

        {/* Student Lifetime Value & ROI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Student Lifetime Value &amp; ROI
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            <div className="metric-card text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">HCIB LTV</p>
              <p className="text-2xl font-bold text-cps-purple">R{STUDENT_LTV.hcib.total.toLocaleString()}</p>
              <p className="text-[10px] text-foreground/20 mt-1">R{STUDENT_LTV.hcib.monthly.toLocaleString()}/mo &times; {STUDENT_LTV.hcib.duration}mo</p>
            </div>
            <div className="metric-card text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">ACL6 LTV</p>
              <p className="text-2xl font-bold text-cps-blue">R{STUDENT_LTV.acl6.total.toLocaleString()}</p>
              <p className="text-[10px] text-foreground/20 mt-1">R{STUDENT_LTV.acl6.monthly.toLocaleString()}/mo &times; {STUDENT_LTV.acl6.duration}mo</p>
            </div>
            <div className="metric-card text-center">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">Total Tuition / Intake</p>
              <p className="text-2xl font-bold text-foreground">R{STUDENT_LTV.totalTuitionPerIntake.toLocaleString()}</p>
              <p className="text-[10px] text-foreground/20 mt-1">{STUDENT_LTV.totalStudents} students (35 + 35)</p>
            </div>
          </div>
        </motion.div>

        {/* Scenario Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 mb-10"
        >
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-cps-purple" />
            <div className="p-6">
              <h4 className="text-sm font-bold text-cps-purple mb-4 uppercase tracking-wider">
                Scenario A — 6-Month Intake
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/50">Total spend</span>
                  <span className="text-sm font-semibold text-foreground/80">R90,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/50">CPA target</span>
                  <span className="text-sm font-semibold text-foreground/80">&le; R1,286</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/50">Monthly enrollments required</span>
                  <span className="text-sm font-semibold text-foreground/80">12</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-cps-blue" />
            <div className="p-6">
              <h4 className="text-sm font-bold text-cps-blue mb-4 uppercase tracking-wider">
                Scenario B — 3-Month Intake
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/50">Total spend</span>
                  <span className="text-sm font-semibold text-foreground/80">R45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/50">CPA target</span>
                  <span className="text-sm font-semibold text-foreground/80">&le; R643</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/50">Monthly enrollments required</span>
                  <span className="text-sm font-semibold text-foreground/80">23</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-foreground/40 italic max-w-3xl"
        >
          Both scenarios target the same enrollment outcome. The difference is not budget per month,
          but the efficiency required to convert that fixed monthly spend into students within a shorter time window.
        </motion.p>
      </div>
    </section>
  );
}
