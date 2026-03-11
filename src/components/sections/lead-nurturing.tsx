"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NURTURE_SEQUENCE_ENHANCED, LEAD_SCORING_ACTIONS, LEAD_SCORING_TIERS, WHATSAPP_AUTOMATION } from "@/content/strategy-data";

export default function LeadNurturing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36 section-tinted">
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
            08 — Lead Nurturing & Email/WhatsApp Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-3 max-w-3xl tracking-tight"
        >
          A student who has shown intent and gets{" "}
          <span className="text-cps-red">silence will not apply</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-2xl"
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
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Info Pack Download Sequence
          </h3>
          <p className="text-sm text-foreground/35 mb-10">7 emails over 14 days</p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cps-purple/30 via-cps-blue/20 to-cps-green/15 hidden sm:block" />

            <div className="space-y-3">
              {NURTURE_SEQUENCE_ENHANCED.map((email, i) => {
                const progress = i / (NURTURE_SEQUENCE_ENHANCED.length - 1);
                const dotColor =
                  progress < 0.3
                    ? "#6B2D8B"
                    : progress < 0.7
                      ? "#00A8E1"
                      : "#10B981";

                return (
                  <motion.div
                    key={email.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="relative flex items-start gap-6 group"
                  >
                    {/* Day dot */}
                    <div className="relative z-10 flex-shrink-0 w-12 flex flex-col items-center">
                      <div
                        className="w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-150"
                        style={{
                          borderColor: dotColor,
                          backgroundColor: `${dotColor}20`,
                        }}
                      />
                      <span className="text-[10px] font-medium text-foreground/25 mt-1.5">
                        D{email.day}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5 rounded-xl bg-white border border-black/[0.04] group-hover:border-black/[0.08] group-hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 -mt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h4 className="text-sm font-semibold text-foreground flex-1">
                          {email.email}
                        </h4>
<p className="text-xs text-cps-purple/50 italic mt-1">{email.subject}</p>
                        <span
                          className="tag flex-shrink-0"
                          style={{
                            backgroundColor: `${dotColor}08`,
                            color: dotColor,
                            border: `1px solid ${dotColor}15`,
                          }}
                        >
                          Day {email.day}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/40 mt-2 leading-relaxed">{email.purpose}</p>
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
            className="mt-16 p-8 rounded-2xl bg-emerald-50/60 border border-emerald-100/60"
          >
            <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
              WhatsApp Touchpoints
            </h3>
            <p className="text-sm text-foreground/40 mb-6">
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
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-100/40"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cps-green/50 mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/50 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14"
          >
            <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">
              WhatsApp Automation Messages
            </h3>
            <div className="space-y-3">
              {WHATSAPP_AUTOMATION.map((msg, i) => (
                <div key={i} className="p-5 rounded-xl bg-white border border-black/[0.04]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="tag bg-cps-green/8 text-cps-green border border-cps-green/15 text-[10px]">{msg.timing}</span>
                  </div>
                  <p className="text-sm text-foreground/50 italic leading-[1.7]">&ldquo;{msg.message}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
              Lead Scoring & Handoff
            </h3>
            <p className="text-sm text-foreground/35 mb-8">
              Marketing → Admissions at score 41+. Admissions responds within 4 hours.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Scoring actions */}
              <div className="card-elevated !p-6">
                <h4 className="text-sm font-bold text-foreground mb-4">Scoring Actions</h4>
                <div className="space-y-2">
                  {LEAD_SCORING_ACTIONS.map((item) => (
                    <div key={item.action} className="flex items-center justify-between py-2 border-b border-black/[0.03] last:border-0">
                      <span className="text-sm text-foreground/50">{item.action}</span>
                      <span className="text-sm font-bold text-cps-purple">{item.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier actions */}
              <div className="space-y-3">
                {LEAD_SCORING_TIERS.map((tier) => (
                  <div
                    key={tier.score}
                    className="p-5 rounded-xl border"
                    style={{ backgroundColor: `${tier.color}06`, borderColor: `${tier.color}15` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold" style={{ color: tier.color }}>{tier.status}</span>
                      <span className="text-xs text-foreground/25">Score: {tier.score}</span>
                    </div>
                    <p className="text-sm text-foreground/50">{tier.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
