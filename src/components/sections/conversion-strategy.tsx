"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { REDESIGN_PRIORITIES, FUNNEL_STEPS } from "@/content/strategy-data";

export default function ConversionStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conversion" className="relative py-24 sm:py-32">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-blue" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-blue uppercase">
            04 — Website & Conversion Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 max-w-3xl"
        >
          Structured around the{" "}
          <span className="text-cps-blue">student decision journey</span>,
          not the product catalogue
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-white/40 mb-16 max-w-2xl"
        >
          The information architecture should answer questions in the order students ask them
        </motion.p>

        {/* Student Questions → Answers table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24 overflow-x-auto"
        >
          <div className="min-w-[700px]">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-5 py-3 rounded-t-xl bg-cps-purple/10 border border-cps-purple/20">
              <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                Student Question
              </span>
              <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                Where to Answer
              </span>
              <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                Current Gap
              </span>
            </div>

            {/* Rows */}
            {REDESIGN_PRIORITIES.map((row, i) => (
              <motion.div
                key={row.question}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                className={`grid grid-cols-3 gap-4 px-5 py-4 border-x border-b border-white/[0.06] ${
                  i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                } ${i === REDESIGN_PRIORITIES.length - 1 ? "rounded-b-xl" : ""}`}
              >
                <span className="text-sm text-white/80 font-medium italic">
                  &ldquo;{row.question}&rdquo;
                </span>
                <span className="text-sm text-white/60">{row.answer}</span>
                <span className="text-sm text-cps-red/70">{row.gap}</span>
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
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Redesigned Conversion Funnel
          </h3>
          <p className="text-sm text-white/40 mb-10">
            Introducing a micro-conversion step to reduce friction
          </p>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cps-purple/30 via-cps-blue/30 to-cps-green/30 -translate-y-1/2" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {FUNNEL_STEPS.map((step, i) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="relative group"
                >
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-cps-purple/20 group-hover:bg-white/[0.05] transition-all duration-400 text-center">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <div className="text-xs font-bold text-cps-purple/60 tracking-wider uppercase mb-1">
                      {step.stage}
                    </div>
                    <p className="text-[11px] text-white/50 leading-relaxed">
                      {step.action}
                    </p>
                  </div>
                  {/* Arrow */}
                  {i < FUNNEL_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 text-white/15 text-xs z-10">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
