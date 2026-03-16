"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GOOGLE_BENCHMARKS,
  META_BENCHMARKS,
  FUNNEL_BENCHMARKS,
  BENCHMARK_INSIGHTS,
} from "@/content/strategy-data";

export default function Benchmarks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">
            Industry Benchmarks
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          How CPS targets compare to{" "}
          <span className="text-cps-blue">global benchmarks</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-3xl"
        >
          South Africa&apos;s lower auction prices give CPS a significant cost advantage over global education advertisers.
        </motion.p>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-20"
        >
          {BENCHMARK_INSIGHTS.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-1 w-full" style={{ backgroundColor: `${insight.color}40` }} />
              <div className="p-6">
                <h4 className="text-sm font-bold mb-2" style={{ color: insight.color }}>
                  {insight.title}
                </h4>
                <p className="text-sm text-foreground/45 leading-[1.7]">{insight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Ads Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Google Ads — Education (2025)
          </h3>
          <p className="text-sm text-foreground/35 mb-6">Search campaign benchmarks</p>
          <div className="overflow-x-auto">
            <div className="min-w-[700px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-cps-blue/[0.04] border-b border-cps-blue/10">
                {["Metric", "Global", "SA Estimate", "CPS Target", "Source"].map((h) => (
                  <span key={h} className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">{h}</span>
                ))}
              </div>
              {GOOGLE_BENCHMARKS.map((row, i) => (
                <div
                  key={row.metric}
                  className={`grid grid-cols-5 gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${i % 2 === 1 ? "bg-black/[0.01]" : ""}`}
                >
                  <span className="text-sm text-foreground/60 font-medium">{row.metric}</span>
                  <span className="text-sm text-foreground/40">{row.global}</span>
                  <span className="text-sm text-foreground/40">{row.saEstimate}</span>
                  <span className="text-sm text-foreground font-semibold">{row.cpsTarget}</span>
                  <span className="text-[10px] text-foreground/25 font-mono">{row.source}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Meta Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Meta — Education (2025)
          </h3>
          <p className="text-sm text-foreground/35 mb-6">Facebook and Instagram ad benchmarks</p>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
                {["Metric", "Global", "CPS Target", "Notes", "Source"].map((h) => (
                  <span key={h} className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">{h}</span>
                ))}
              </div>
              {META_BENCHMARKS.map((row, i) => (
                <div
                  key={row.metric}
                  className={`grid grid-cols-5 gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${i % 2 === 1 ? "bg-black/[0.01]" : ""}`}
                >
                  <span className="text-sm text-foreground/60 font-medium">{row.metric}</span>
                  <span className="text-sm text-foreground/40">{row.global}</span>
                  <span className="text-sm text-foreground font-semibold">{row.cpsTarget}</span>
                  <span className="text-sm text-foreground/35">{row.notes}</span>
                  <span className="text-[10px] text-foreground/25 font-mono">{row.source}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enrollment Funnel Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Enrollment Funnel Benchmarks
          </h3>
          <p className="text-sm text-foreground/35 mb-6">How industry conversion rates compare to CPS scenario targets</p>
          <div className="overflow-x-auto">
            <div className="min-w-[500px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-cps-green/[0.05] border-b border-cps-green/10">
                {["Stage", "Benchmark", "CPS Model", "Source"].map((h) => (
                  <span key={h} className="text-[11px] font-semibold tracking-[0.1em] text-cps-green uppercase">{h}</span>
                ))}
              </div>
              {FUNNEL_BENCHMARKS.map((row, i) => (
                <div
                  key={row.stage}
                  className={`grid grid-cols-4 gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${i % 2 === 1 ? "bg-black/[0.01]" : ""}`}
                >
                  <span className="text-sm text-foreground/60 font-medium">{row.stage}</span>
                  <span className="text-sm text-foreground/40">{row.benchmark}</span>
                  <span className="text-sm text-foreground font-semibold">{row.cpsModel}</span>
                  <span className="text-[10px] text-foreground/25 font-mono">{row.source}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
