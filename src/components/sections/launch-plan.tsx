"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LAUNCH_PHASES, PRE_LAUNCH_CHECKLIST, RISK_TRIGGERS } from "@/content/strategy-data";

export default function LaunchPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="launch" className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            09 — Launch Plan — May 10 Intake
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
        >
          Five phases from{" "}
          <span className="text-foreground/30">foundation</span> to{" "}
          <span className="text-cps-green">review</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative mb-24">
          <div className="space-y-4">
            {LAUNCH_PHASES.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  {/* Phase header */}
                  <div className="lg:w-56 flex-shrink-0">
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: phase.color }}
                      />
                      <div>
                        <h3
                          className="text-sm font-bold"
                          style={{ color: phase.color }}
                        >
                          {phase.phase}
                        </h3>
                        <p className="text-xs text-foreground/25 mt-0.5">{phase.dates}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-6 rounded-xl border transition-all duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                    style={{
                      backgroundColor: `${phase.color}04`,
                      borderColor: `${phase.color}12`,
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground/25 uppercase mb-2">
                          Activities
                        </p>
                        <p className="text-sm text-foreground/50 leading-[1.7]">
                          {phase.activities}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground/25 uppercase mb-2">
                          Deliverables
                        </p>
                        <p className="text-sm text-foreground/50 leading-[1.7]">
                          {phase.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {i < LAUNCH_PHASES.length - 1 && (
                  <div className="hidden lg:block absolute left-[5px] top-[16px] w-px h-[calc(100%+16px)] bg-gradient-to-b from-black/8 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pre-Launch Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Pre-Launch Checklist
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            Must be in place before any ad spend begins
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_160px_80px] gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Item
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Owner
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Status
                </span>
              </div>
              {PRE_LAUNCH_CHECKLIST.map((item, i) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
                  className={`grid grid-cols-[1fr_160px_80px] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/55">{item.item}</span>
                  <span className="text-sm text-foreground/35">{item.owner}</span>
                  <span className="tag bg-cps-gold/8 text-cps-gold border border-cps-gold/15 text-[10px] justify-center">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Risk Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Risk Triggers & Responses
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            Early warning signals and pre-planned responses for each phase
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[80px_1fr_1fr] gap-4 px-6 py-4 bg-cps-red/[0.04] border-b border-cps-red/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-red uppercase">
                  Phase
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-red uppercase">
                  Signal
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-red uppercase">
                  Response
                </span>
              </div>
              {RISK_TRIGGERS.map((risk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.04 }}
                  className={`grid grid-cols-[80px_1fr_1fr] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="tag bg-cps-purple/8 text-cps-purple border border-cps-purple/15 text-[10px] justify-center">
                    {risk.phase}
                  </span>
                  <span className="text-sm text-cps-red/70 font-medium">{risk.signal}</span>
                  <span className="text-sm text-foreground/50">{risk.response}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
