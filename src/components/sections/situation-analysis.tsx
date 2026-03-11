"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITUATION_ANALYSIS } from "@/content/strategy-data";

export default function SituationAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="situation" className="relative py-28 sm:py-36">
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
            02 — Situation Analysis
          </span>
        </motion.div>

        {/* Overview */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-lg sm:text-xl text-foreground/60 leading-[1.8] mt-8 mb-20"
        >
          {SITUATION_ANALYSIS.overview}
        </motion.p>

        {/* Revenue split visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 card-elevated !rounded-2xl p-8"
        >
          <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-6">
            Current Revenue Split
          </p>
          <div className="flex gap-3 h-14 rounded-xl overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "70%" } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-cps-blue to-cps-blue/70 rounded-xl flex items-center justify-center"
            >
              <span className="text-sm font-bold text-white tracking-wide">B2B — 70%</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "30%" } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-cps-purple to-cps-purple/70 rounded-xl flex items-center justify-center"
            >
              <span className="text-sm font-bold text-white tracking-wide">B2C — 30%</span>
            </motion.div>
          </div>
          <p className="mt-4 text-xs text-foreground/30">
            Target: Build a sustainable B2C direct-to-student channel
          </p>
        </motion.div>

        {/* Two columns: Challenges + Strengths */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-red-50/60 border border-red-100/60"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-cps-red/50" />
              <h3 className="text-lg font-bold text-foreground">
                The B2C Challenge
              </h3>
            </div>
            <p className="text-xs text-foreground/30 mb-6 ml-5">Current gaps identified in our audit</p>
            <div className="space-y-3.5">
              {SITUATION_ANALYSIS.challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cps-red/30 group-hover:bg-cps-red/60 transition-colors flex-shrink-0" />
                  <p className="text-sm text-foreground/50 leading-[1.7]">{c}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl bg-emerald-50/60 border border-emerald-100/60"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-cps-green/50" />
              <h3 className="text-lg font-bold text-foreground">
                What CPS Has Going For It
              </h3>
            </div>
            <p className="text-xs text-foreground/30 mb-6 ml-5">Competitive advantages to leverage</p>
            <div className="space-y-3.5">
              {SITUATION_ANALYSIS.strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cps-green/30 group-hover:bg-cps-green/60 transition-colors flex-shrink-0" />
                  <div>
                    <span className="text-sm text-foreground/70 font-semibold">{s.title}</span>
                    <span className="text-sm text-foreground/35"> — {s.desc}</span>
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
