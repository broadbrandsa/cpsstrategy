"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const COMPETITORS = [
  {
    factor: "Platform",
    cps: "CPSLearn (proprietary, AI-powered)",
    chartall: "Third-party LMS",
    others: "Third-party LMS",
  },
  {
    factor: "AI Features",
    cps: "Reflection tool, AI assessment marking, AI program building",
    chartall: "None",
    others: "None",
  },
  {
    factor: "Assessment Speed",
    cps: "2\u00D7 faster feedback",
    chartall: "Standard",
    others: "Standard",
  },
  {
    factor: "Pricing",
    cps: "~20% below competitors",
    chartall: "Higher",
    others: "Varies",
  },
  {
    factor: "Accreditation",
    cps: "CHE + QCTO",
    chartall: "CHE",
    others: "CHE",
  },
  {
    factor: "Student Experience",
    cps: "Stewardship model, personalized learning",
    chartall: "Standard",
    others: "Standard",
  },
  {
    factor: "B2B Track Record",
    cps: "11,400+ across Absa, Standard Bank, FNB, Capitec, Nedbank",
    chartall: "Banking focused",
    others: "Multi-sector",
  },
];

export default function CompetitiveLandscape() {
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
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            Competitive Landscape
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          How CPS stacks up against{" "}
          <span className="text-cps-green">the competition</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-3xl"
        >
          CPS holds significant advantages in technology, pricing, and student
          experience that are currently under-communicated to prospective B2C
          students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-x-auto">
            <div className="min-w-[700px] card-elevated !rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[160px_1fr_1fr_1fr] gap-4 px-6 py-4 bg-cps-green/[0.05] border-b border-cps-green/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-green uppercase">
                  Factor
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-green uppercase">
                  CPS
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-foreground/30 uppercase">
                  Chartall
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-foreground/30 uppercase">
                  Milpark / Novia / Others
                </span>
              </div>

              {/* Rows */}
              {COMPETITORS.map((row, i) => (
                <motion.div
                  key={row.factor}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                  className={`grid grid-cols-[160px_1fr_1fr_1fr] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/60 font-medium">
                    {row.factor}
                  </span>
                  <span className="text-sm text-foreground font-semibold bg-cps-green/[0.04] rounded-lg px-3 py-1.5 -mx-1.5 -my-0.5">
                    {row.cps}
                  </span>
                  <span className="text-sm text-foreground/35">
                    {row.chartall}
                  </span>
                  <span className="text-sm text-foreground/35">
                    {row.others}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
