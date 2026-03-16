"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { REDESIGN_PRIORITIES, FUNNEL_STEPS } from "@/content/strategy-data";
import { FunnelVisualization } from "@/components/charts";

export default function ConversionStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conversion" className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">
            04 — Website & Conversion Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-3 max-w-3xl mt-8 tracking-tight"
        >
          Structured around the{" "}
          <span className="text-cps-blue">student decision journey</span>,
          not the product catalogue
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-foreground/35 mb-16 max-w-2xl"
        >
          The information architecture should answer questions in the order students ask them
        </motion.p>

        {/* Student Questions table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-28 overflow-x-auto"
        >
          <div className="min-w-[700px] card-elevated !rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                Student Question
              </span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                Where to Answer
              </span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                Current Gap
              </span>
            </div>

            {/* Rows */}
            {REDESIGN_PRIORITIES.map((row, i) => (
              <motion.div
                key={row.question}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                className={`grid grid-cols-3 gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                  i % 2 === 1 ? "bg-black/[0.01]" : ""
                }`}
              >
                <span className="text-sm text-foreground/70 font-medium italic">
                  &ldquo;{row.question}&rdquo;
                </span>
                <span className="text-sm text-foreground/50">{row.answer}</span>
                <span className="text-sm text-cps-red/80 font-medium">{row.gap}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conversion Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
            Redesigned Conversion Funnel
          </h3>
          <p className="text-sm text-foreground/35 mb-10">
            Introducing a micro-conversion step to reduce friction
          </p>

          {/* Funnel Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="card-elevated !p-6 sm:!p-8 mb-10"
          >
            <FunnelVisualization />
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-px -translate-y-1/2" style={{ background: "linear-gradient(90deg, #6B2D8B30, #00A8E130, #10B98130)" }} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {FUNNEL_STEPS.map((step, i) => {
                const progress = i / (FUNNEL_STEPS.length - 1);
                const color = progress < 0.3 ? "#6B2D8B" : progress < 0.7 ? "#00A8E1" : "#10B981";
                return (
                  <motion.div
                    key={step.stage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                    className="relative group"
                  >
                    <div className="card-elevated !rounded-xl p-5 text-center h-full flex flex-col items-center justify-center group-hover:!border-opacity-30"
                      style={{ ["--tw-border-opacity" as string]: undefined }}
                    >
                      <div
                        className="w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ backgroundColor: `${color}15`, color: color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color }}>
                        {step.stage}
                      </div>
                      <p className="text-[11px] text-foreground/40 leading-relaxed">
                        {step.action}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
