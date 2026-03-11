"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NURTURE_SEQUENCE } from "@/content/strategy-data";

export default function LeadNurturing() {
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
            08 — Lead Nurturing & Email/WhatsApp Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 max-w-3xl"
        >
          A student who has shown intent and gets{" "}
          <span className="text-cps-red">silence will not apply</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-white/40 mb-16 max-w-2xl"
        >
          The current funnel&apos;s single biggest leak: no confirmation email, no follow-up, no WhatsApp response. This automated nurture sequence closes that gap over 14 days.
        </motion.p>

        {/* Email Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Info Pack Download Sequence
          </h3>
          <p className="text-sm text-white/40 mb-10">7 emails over 14 days</p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cps-purple/40 via-cps-blue/30 to-cps-green/20 hidden sm:block" />

            <div className="space-y-4">
              {NURTURE_SEQUENCE.map((email, i) => {
                const progress = i / (NURTURE_SEQUENCE.length - 1);
                const dotColor =
                  progress < 0.3
                    ? "#7C3AED"
                    : progress < 0.7
                      ? "#2EA3F2"
                      : "#10B981";

                return (
                  <motion.div
                    key={email.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="relative flex items-start gap-6 group"
                  >
                    {/* Day dot */}
                    <div className="relative z-10 flex-shrink-0 w-12 flex flex-col items-center">
                      <div
                        className="w-3 h-3 rounded-full border-2 transition-all group-hover:scale-125"
                        style={{
                          borderColor: dotColor,
                          backgroundColor: `${dotColor}30`,
                        }}
                      />
                      <span className="text-[10px] font-mono text-white/30 mt-1">
                        D{email.day}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-white/[0.12] group-hover:bg-white/[0.04] transition-all duration-300 -mt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h4 className="text-sm font-semibold text-white flex-1">
                          {email.email}
                        </h4>
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: `${dotColor}15`,
                            color: dotColor,
                            border: `1px solid ${dotColor}25`,
                          }}
                        >
                          Day {email.day}
                        </span>
                      </div>
                      <p className="text-sm text-white/40 mt-1.5">{email.purpose}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* WhatsApp touchpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-6 rounded-2xl bg-cps-green/[0.03] border border-cps-green/15"
          >
            <h3 className="font-display text-lg font-bold text-white mb-4">
              WhatsApp Touchpoints
            </h3>
            <p className="text-sm text-white/50 mb-4">
              WhatsApp is the dominant communication channel in SA
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Automated confirmation within 5 minutes of any form submission",
                "Follow-up at Day 3 and Day 10 with personal message from an admissions advisor",
                "Community group for prospective students — builds peer connection pre-enrollment",
                "Quick-reply buttons for common questions (pricing, start dates, application process)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]"
                >
                  <span className="text-cps-green/60 text-xs mt-0.5">✓</span>
                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
