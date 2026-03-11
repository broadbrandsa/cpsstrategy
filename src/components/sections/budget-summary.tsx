"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BUDGET_SUMMARY } from "@/content/strategy-data";

export default function BudgetSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-gold" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-gold uppercase">
            11 — Budget Summary
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-16"
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
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[1fr_130px_1fr] gap-4 px-5 py-3 rounded-t-xl bg-cps-gold/10 border border-cps-gold/20">
              <span className="text-xs font-semibold tracking-wider text-cps-gold uppercase">
                Line Item
              </span>
              <span className="text-xs font-semibold tracking-wider text-cps-gold uppercase">
                Monthly Cost
              </span>
              <span className="text-xs font-semibold tracking-wider text-cps-gold uppercase">
                Notes
              </span>
            </div>
            {BUDGET_SUMMARY.map((row, i) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className={`grid grid-cols-[1fr_130px_1fr] gap-4 px-5 py-3.5 border-x border-b border-white/[0.06] ${
                  i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                } ${i === BUDGET_SUMMARY.length - 1 ? "rounded-b-xl" : ""} ${
                  row.item === "Total media spend"
                    ? "!bg-cps-gold/[0.04] font-semibold"
                    : ""
                }`}
              >
                <span
                  className={`text-sm ${
                    row.item === "Total media spend"
                      ? "text-white font-semibold"
                      : "text-white/60"
                  }`}
                >
                  {row.item}
                </span>
                <span
                  className={`text-sm font-mono ${
                    row.item === "Total media spend"
                      ? "text-cps-gold font-bold"
                      : "text-white/80 font-medium"
                  }`}
                >
                  {row.cost}
                </span>
                <span className="text-sm text-white/40">{row.notes}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom-line statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-cps-purple/5 to-cps-gold/5 border border-white/[0.06]"
        >
          <p className="font-display text-lg sm:text-xl text-white/80 leading-relaxed">
            At the target CPA of <span className="text-cps-gold font-bold">R400</span>, acquiring 70 students per intake
            (35 per qualification) costs <span className="text-white font-semibold">R28,000</span> in total media spend.
            With R15,000/month over a 6-month intake cycle, total available media is{" "}
            <span className="text-white font-semibold">R90,000</span> — providing significant headroom for awareness building,
            retargeting, and content amplification beyond direct acquisition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
