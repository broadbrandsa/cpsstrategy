"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MICRO_CONVERSION_BENEFITS = [
  "Capture intent earlier",
  "Nurture prospects through email and WhatsApp",
  "Answer objections before application",
  "Increase overall conversion rates",
];

export default function StrategicChoices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            Strategic Choices
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          Deliberate choices to{" "}
          <span className="text-gradient-purple">maximise impact</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/40 max-w-3xl mb-14"
        >
          This strategy is built on several deliberate choices designed to maximise impact within a constrained media budget.
        </motion.p>

        <div className="space-y-8">
          {/* Choice 1: Why Google + Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-cps-blue" />
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-bold text-cps-blue uppercase tracking-wider mb-4">
                Why Google + Meta first
              </h3>
              <p className="text-sm text-foreground/50 leading-[1.8] mb-4">
                The acquisition strategy begins with two channels that together capture both existing demand and future demand.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl bg-cps-blue/[0.04] border border-cps-blue/10 p-4">
                  <p className="text-xs font-semibold text-cps-blue mb-1">Google Search</p>
                  <p className="text-xs text-foreground/45 leading-[1.7]">
                    Captures people already researching qualifications or career pathways. These prospects demonstrate clear intent and represent the fastest route to qualified leads.
                  </p>
                </div>
                <div className="rounded-xl bg-cps-purple/[0.04] border border-cps-purple/10 p-4">
                  <p className="text-xs font-semibold text-cps-purple mb-1">Meta (Facebook &amp; Instagram)</p>
                  <p className="text-xs text-foreground/45 leading-[1.7]">
                    Allows CPS to reach professionals earlier in their decision journey. Builds awareness, nurtures consideration, and feeds future retargeting audiences.
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/40 leading-[1.8]">
                Together, these channels create a balanced system where Meta expands the potential audience and Google captures those who are ready to act.
              </p>
            </div>
          </motion.div>

          {/* Choice 2: Why micro-conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-cps-green" />
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-bold text-cps-green uppercase tracking-wider mb-4">
                Why the micro-conversion model
              </h3>
              <p className="text-sm text-foreground/50 leading-[1.8] mb-4">
                Education decisions are rarely immediate. Prospective students typically spend several weeks researching providers, comparing options, and evaluating credibility.
              </p>
              <p className="text-sm text-foreground/50 leading-[1.8] mb-4">
                Rather than forcing prospects directly into an application, the strategy introduces a micro-conversion step through information pack downloads and similar actions. This allows CPS to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {MICRO_CONVERSION_BENEFITS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cps-green/[0.04] border border-cps-green/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cps-green/50 shrink-0" />
                    <span className="text-sm text-foreground/55">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
