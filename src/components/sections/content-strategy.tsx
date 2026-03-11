"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTENT_PILLARS } from "@/content/strategy-data";

const SEO_TOPICS = [
  "Higher Certificate in Banking: Everything You Need to Know in 2026",
  "How to Start a Career in Banking in South Africa",
  "HCIB vs BCOM: Which Banking Qualification is Right for You?",
  "What is NQF Level 5? A Simple Guide for South African Students",
  "Leadership Qualifications in South Africa: Your Complete Guide",
  "How Much Does a Banking Qualification Cost in 2026?",
  "Is CPS Accredited? Understanding CHE and QCTO Accreditation",
];

export default function ContentStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32">
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
            06 — Content Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Four pillars serving{" "}
          <span className="text-cps-blue">search</span> and{" "}
          <span className="text-cps-purple-light">social</span>
        </motion.h2>

        {/* Content Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-20">
          {CONTENT_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.pillar}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cps-purple/20 hover:bg-white/[0.05] transition-all duration-400"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {pillar.pillar}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {pillar.purpose}
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] tracking-[0.15em] text-white/30 uppercase">
                    Content Types
                  </span>
                  <p className="text-xs text-white/50 mt-0.5">{pillar.types}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.15em] text-white/30 uppercase">
                    Primary Channel
                  </span>
                  <p className="text-xs text-cps-blue/70 font-medium mt-0.5">
                    {pillar.channel}
                  </p>
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
          <h3 className="font-display text-xl font-bold text-white mb-2">
            High-Intent SEO Content
          </h3>
          <p className="text-sm text-white/40 mb-6">
            Blog posts targeting people actively searching for banking qualifications and career information
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {SEO_TOPICS.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-cps-blue/15 transition-colors"
              >
                <span className="text-cps-blue/50 text-xs mt-0.5">▸</span>
                <span className="text-sm text-white/60">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
