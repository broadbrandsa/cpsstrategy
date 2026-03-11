"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WORKSTREAMS = [
  { num: "01", title: "Audience Psychology", desc: "Deep understanding of student decision-making" },
  { num: "02", title: "Website CRO", desc: "Student-centred redesign for conversion" },
  { num: "03", title: "Messaging & Copy", desc: "Benefit-led communication framework" },
  { num: "04", title: "Content Strategy", desc: "SEO and social content pillars" },
  { num: "05", title: "Paid Media", desc: "Google + Meta acquisition engine" },
  { num: "06", title: "Launch Plan", desc: "Phased rollout tied to May 10 intake" },
];

export default function ExecutiveSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-purple" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-purple uppercase">
            01 — Executive Summary
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
            >
              The gap between CPS&apos;s{" "}
              <span className="text-gradient-purple">education strength</span>{" "}
              and its{" "}
              <span className="text-white/40">student-facing experience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base text-white/50 leading-relaxed"
            >
              CPS&apos;s core challenge is not product quality. The current digital presence speaks to organisations, not individuals. Prospective students cannot find clear answers to their most fundamental questions. This strategy addresses these gaps through a coordinated approach across six workstreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-5 rounded-xl bg-cps-purple/5 border border-cps-purple/10"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[60px] bg-gradient-to-b from-cps-purple to-cps-blue rounded-full flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    With a starting media budget of <span className="text-white font-semibold">R15,000/month</span> across
                    Google and Meta, scaling with traction, and two intakes per year to start, this plan is designed to be{" "}
                    <span className="text-cps-purple-light font-medium">lean, measurable, and built for compounding returns</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: workstream grid */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-medium tracking-[0.2em] text-white/30 uppercase mb-6"
            >
              Six coordinated workstreams
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WORKSTREAMS.map((ws, i) => (
                <motion.div
                  key={ws.num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cps-purple/20 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <span className="font-display text-2xl font-bold text-cps-purple/20 group-hover:text-cps-purple/40 transition-colors">
                    {ws.num}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-white">
                    {ws.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/40">{ws.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
