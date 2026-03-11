"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LAUNCH_PHASES, PRE_LAUNCH_CHECKLIST } from "@/content/strategy-data";

export default function LaunchPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="launch" className="relative py-24 sm:py-32">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-purple" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-purple uppercase">
            09 — Launch Plan — May 10 Intake
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-16"
        >
          Five phases from{" "}
          <span className="text-white/40">foundation</span> to{" "}
          <span className="text-cps-green">review</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Phases */}
          <div className="space-y-6">
            {LAUNCH_PHASES.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
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
                        <p className="text-xs text-white/30 mt-0.5">{phase.dates}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-5 rounded-xl border transition-all duration-300"
                    style={{
                      backgroundColor: `${phase.color}05`,
                      borderColor: `${phase.color}15`,
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-2">
                          Activities
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {phase.activities}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-2">
                          Deliverables
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {phase.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {i < LAUNCH_PHASES.length - 1 && (
                  <div className="hidden lg:block absolute left-[5px] top-[16px] w-px h-[calc(100%+24px)] bg-gradient-to-b from-white/10 to-transparent" />
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
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Pre-Launch Checklist
          </h3>
          <p className="text-sm text-white/40 mb-8">
            Must be in place before any ad spend begins
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-[1fr_160px_80px] gap-4 px-5 py-3 rounded-t-xl bg-cps-purple/10 border border-cps-purple/20">
                <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                  Item
                </span>
                <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                  Owner
                </span>
                <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                  Status
                </span>
              </div>
              {PRE_LAUNCH_CHECKLIST.map((item, i) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
                  className={`grid grid-cols-[1fr_160px_80px] gap-4 px-5 py-3.5 border-x border-b border-white/[0.06] ${
                    i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                  } ${i === PRE_LAUNCH_CHECKLIST.length - 1 ? "rounded-b-xl" : ""}`}
                >
                  <span className="text-sm text-white/60">{item.item}</span>
                  <span className="text-sm text-white/40">{item.owner}</span>
                  <span className="text-xs font-medium text-cps-gold/70 bg-cps-gold/10 px-2 py-0.5 rounded-full text-center">
                    {item.status}
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
