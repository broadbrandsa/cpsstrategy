"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CHALLENGES = [
  "what CPS offers",
  "why it is credible",
  "how it compares to alternatives",
  "how to take the next step",
];

const OBJECTIVES = [
  { num: "1", text: "Captures high-intent demand" },
  { num: "2", text: "Builds early-stage awareness" },
  { num: "3", text: "Converts interest into qualified leads" },
  { num: "4", text: "Nurtures prospects toward enrollment" },
  { num: "5", text: "Compounds growth through community, alumni advocacy, and referrals" },
];

export default function StrategicThesis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Strategic Thesis
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6"
        >
          The challenge is not the product
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl space-y-4 mb-10"
        >
          <p className="text-sm text-foreground/50 leading-[1.8]">
            CPS already has the credibility, technology, and outcomes to win in B2C education.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8] font-medium text-foreground/60">
            The challenge is visibility, trust, and conversion.
          </p>
          <p className="text-sm text-foreground/45 leading-[1.8]">
            CPS has trained more than 11,000 professionals across South Africa&apos;s major financial institutions, operates a proprietary learning platform, and delivers accredited qualifications aligned to real industry needs.
          </p>
          <p className="text-sm text-foreground/45 leading-[1.8]">
            However, prospective students currently struggle to clearly understand:
          </p>
        </motion.div>

        {/* Challenge bullets */}
        <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-2xl">
          {CHALLENGES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cps-red/[0.04] border border-cps-red/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cps-red/50 shrink-0" />
              <span className="text-sm text-foreground/55">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-sm text-foreground/50 font-medium mb-8"
        >
          This strategy focuses on closing that gap.
        </motion.p>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-elevated !p-0 overflow-hidden max-w-3xl"
        >
          <div className="px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
            <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
              Build a sustainable B2C acquisition system that
            </span>
          </div>
          {OBJECTIVES.map((obj, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-6 py-3.5 border-b border-black/[0.03] ${
                i % 2 === 1 ? "bg-black/[0.01]" : ""
              }`}
            >
              <span className="w-7 h-7 rounded-full bg-cps-purple/[0.08] flex items-center justify-center text-[11px] font-bold text-cps-purple shrink-0">
                {obj.num}
              </span>
              <span className="text-sm text-foreground/55">{obj.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
