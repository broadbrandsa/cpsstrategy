"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTENT_PILLARS, SEO_CONTENT_PLAN } from "@/content/strategy-data";


export default function ContentStrategy() {
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
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">
            06 — Content Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          Four pillars serving{" "}
          <span className="text-cps-blue">search</span> and{" "}
          <span className="text-cps-purple">social</span>
        </motion.h2>

        {/* Content Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 mb-24">
          {CONTENT_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.pillar}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="card-elevated group !p-0 overflow-hidden"
            >
              <div className="h-1 w-full" style={{ background: i % 2 === 0 ? "#6B2D8B20" : "#00A8E120" }} />
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-2">
                  {pillar.pillar}
                </h3>
                <p className="text-sm text-foreground/45 leading-[1.7] mb-5">
                  {pillar.purpose}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-foreground/25 uppercase">
                      Content Types
                    </span>
                    <p className="text-xs text-foreground/45 mt-1">{pillar.types}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-foreground/25 uppercase">
                      Primary Channel
                    </span>
                    <p className="text-xs text-cps-blue font-medium mt-1">
                      {pillar.channel}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            High-Intent SEO Content Plan
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            Priority articles with keyword data — verify volumes with Google Keyword Planner once accounts are live
          </p>
          <div className="overflow-x-auto">
            <div className="min-w-[700px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_160px_100px_80px] gap-4 px-6 py-4 bg-cps-blue/[0.04] border-b border-cps-blue/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Article</span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Primary Keyword</span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Est. Volume</span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">Difficulty</span>
              </div>
              {SEO_CONTENT_PLAN.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                  className={`grid grid-cols-[1fr_160px_100px_80px] gap-4 px-6 py-3.5 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/55">{row.article}</span>
                  <span className="text-xs text-cps-blue/70 font-mono">{row.keyword}</span>
                  <span className="text-sm text-foreground/40">{row.volume}/mo</span>
                  <span className={`tag text-[10px] justify-center ${
                    row.difficulty === "Low" ? "bg-cps-green/8 text-cps-green border border-cps-green/15"
                    : "bg-cps-gold/8 text-cps-gold border border-cps-gold/15"
                  }`}>{row.difficulty}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
