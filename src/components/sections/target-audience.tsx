"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PERSONAS, PSYCHOLOGY_TABLE } from "@/content/strategy-data";

export default function TargetAudience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null);

  return (
    <section id="audience" className="relative py-28 sm:py-36 section-tinted">
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
            03 — Target Audience & Decision Psychology
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
        >
          Two distinct personas,{" "}
          <span className="text-gradient-purple">one strategy</span>
        </motion.h2>

        {/* Persona cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-28">
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="card-elevated group !p-0 overflow-hidden"
            >
              {/* Color accent top */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${persona.color}, ${persona.color}80)` }}
              />
              <div className="p-7 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="tag mb-3"
                      style={{
                        backgroundColor: `${persona.color}0A`,
                        color: persona.color,
                        border: `1px solid ${persona.color}20`,
                      }}
                    >
                      {persona.programme}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
                      {persona.name}
                    </h3>
                    <p className="text-sm text-foreground/35 mt-1">Age {persona.age}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-2">
                      Demographics
                    </p>
                    <p className="text-sm text-foreground/55 leading-[1.7]">
                      {persona.demographics}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-2">
                      Psychographics
                    </p>
                    <p className="text-sm text-foreground/55 leading-[1.7]">
                      {persona.psychographics}
                    </p>
                  </div>
                  <div
                    className="p-5 rounded-xl"
                    style={{ backgroundColor: `${persona.color}06`, border: `1px solid ${persona.color}10` }}
                  >
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-2">
                      Job To Be Done
                    </p>
                    <p className="text-sm text-foreground/70 italic leading-[1.7]">
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
          <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
            Psychological Framework
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            Key principles driving our B2C conversion strategy — click to expand
          </p>

          <div className="grid gap-2">
            {PSYCHOLOGY_TABLE.map((row, i) => (
              <motion.div
                key={row.principle}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
              >
                <button
                  onClick={() =>
                    setExpandedPrinciple(expandedPrinciple === i ? null : i)
                  }
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    expandedPrinciple === i
                      ? "bg-white border-cps-purple/15 shadow-[0_2px_12px_rgba(107,45,139,0.06)]"
                      : "bg-white border-black/[0.04] hover:border-black/[0.08] hover:bg-cps-grey"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-cps-purple/40 w-6 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {row.principle}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedPrinciple === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 rounded-full bg-foreground/[0.04] flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-foreground/30 text-[10px]">▼</span>
                    </motion.div>
                  </div>

                  {expandedPrinciple === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-5 grid sm:grid-cols-2 gap-5 pl-10"
                    >
                      <div className="p-4 rounded-lg bg-cps-blue/[0.04] border border-cps-blue/10">
                        <p className="text-[10px] font-semibold tracking-[0.15em] text-cps-blue uppercase mb-2">
                          Application to CPS
                        </p>
                        <p className="text-sm text-foreground/50 leading-[1.7]">
                          {row.application}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-cps-purple/[0.04] border border-cps-purple/10">
                        <p className="text-[10px] font-semibold tracking-[0.15em] text-cps-purple/60 uppercase mb-2">
                          Implementation
                        </p>
                        <p className="text-sm text-foreground/50 leading-[1.7]">
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
