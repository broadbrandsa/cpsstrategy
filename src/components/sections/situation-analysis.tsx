"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITUATION_ANALYSIS } from "@/content/strategy-data";

export default function SituationAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="situation" className="relative py-24 sm:py-32">
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
            02 — Situation Analysis
          </span>
        </motion.div>

        {/* Overview */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-lg sm:text-xl text-white/70 leading-relaxed mb-16"
        >
          {SITUATION_ANALYSIS.overview}
        </motion.p>

        {/* Revenue split visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-white/30 uppercase mb-4">
            Current Revenue Split
          </p>
          <div className="flex gap-2 h-12 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "70%" } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-cps-blue/80 to-cps-blue/60 rounded-l-lg flex items-center justify-center"
            >
              <span className="text-sm font-bold text-white">B2B — 70%</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "30%" } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-cps-purple/80 to-cps-purple/60 rounded-r-lg flex items-center justify-center"
            >
              <span className="text-sm font-bold text-white">B2C — 30%</span>
            </motion.div>
          </div>
          <p className="mt-3 text-xs text-white/30">
            Target: Build a sustainable B2C direct-to-student channel
          </p>
        </motion.div>

        {/* Two columns: Challenges + Strengths */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-cps-red/[0.03] border border-cps-red/10"
          >
            <h3 className="font-display text-lg font-semibold text-white mb-1">
              The B2C Challenge
            </h3>
            <p className="text-xs text-white/30 mb-5">Current gaps identified in our audit</p>
            <div className="space-y-3">
              {SITUATION_ANALYSIS.challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-red/60 flex-shrink-0" />
                  <p className="text-sm text-white/50 leading-relaxed">{c}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-cps-green/[0.03] border border-cps-green/10"
          >
            <h3 className="font-display text-lg font-semibold text-white mb-1">
              What CPS Has Going For It
            </h3>
            <p className="text-xs text-white/30 mb-5">Competitive advantages to leverage</p>
            <div className="space-y-3">
              {SITUATION_ANALYSIS.strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-green/60 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-white/80 font-medium">{s.title}</span>
                    <span className="text-sm text-white/40"> — {s.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
