"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PERSONAS, PSYCHOLOGY_TABLE } from "@/content/strategy-data";

export default function TargetAudience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null);

  return (
    <section id="audience" className="relative py-24 sm:py-32">
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
            03 — Target Audience & Decision Psychology
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-16"
        >
          Two distinct personas,{" "}
          <span className="text-gradient-purple">one strategy</span>
        </motion.h2>

        {/* Persona cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Glow border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${persona.color}20, transparent)`,
                }}
              />
              <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className="inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-3"
                      style={{
                        backgroundColor: `${persona.color}15`,
                        color: persona.color,
                        border: `1px solid ${persona.color}30`,
                      }}
                    >
                      {persona.programme}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {persona.name}
                    </h3>
                    <p className="text-sm text-white/40 mt-1">Age {persona.age}</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${persona.color}10` }}
                  >
                    {persona.id === "hcib" ? "🏦" : "📈"}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-1.5">
                      Demographics
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {persona.demographics}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-1.5">
                      Psychographics
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {persona.psychographics}
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: `${persona.color}08`, border: `1px solid ${persona.color}15` }}
                  >
                    <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-1.5">
                      Job To Be Done
                    </p>
                    <p className="text-sm text-white/80 italic leading-relaxed">
                      &ldquo;{persona.jtbd}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Psychological Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Psychological Framework
          </h3>
          <p className="text-sm text-white/40 mb-8">
            Key principles driving our B2C conversion strategy — click to expand
          </p>

          <div className="grid gap-2">
            {PSYCHOLOGY_TABLE.map((row, i) => (
              <motion.div
                key={row.principle}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
              >
                <button
                  onClick={() =>
                    setExpandedPrinciple(expandedPrinciple === i ? null : i)
                  }
                  className="w-full text-left p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cps-purple/15 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-cps-purple/60 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {row.principle}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedPrinciple === i ? 180 : 0 }}
                      className="text-white/30 text-xs"
                    >
                      ▼
                    </motion.span>
                  </div>

                  {expandedPrinciple === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 grid sm:grid-cols-2 gap-4 pl-10"
                    >
                      <div>
                        <p className="text-[10px] tracking-[0.2em] text-cps-blue/60 uppercase mb-1">
                          Application to CPS
                        </p>
                        <p className="text-sm text-white/50 leading-relaxed">
                          {row.application}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] text-cps-purple/60 uppercase mb-1">
                          Implementation
                        </p>
                        <p className="text-sm text-white/50 leading-relaxed">
                          {row.implementation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
