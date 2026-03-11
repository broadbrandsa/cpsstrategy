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
    <section id="overview" className="relative py-28 sm:py-36 section-tinted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            01 — Executive Summary
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
          {/* Left: statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.15] tracking-tight"
            >
              The gap between CPS&apos;s{" "}
              <span className="text-gradient-purple">education strength</span>{" "}
              and its{" "}
              <span className="text-foreground/30">student-facing experience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-base text-foreground/50 leading-[1.8]"
            >
              CPS&apos;s core challenge is not product quality. The current digital presence speaks to organisations, not individuals. Prospective students cannot find clear answers to their most fundamental questions. This strategy addresses these gaps through a coordinated approach across six workstreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 p-6 rounded-2xl bg-white border border-cps-purple/8 accent-bar-left pl-8"
            >
              <p className="text-sm text-foreground/60 leading-[1.8]">
                With a starting media budget of <span className="text-foreground font-semibold">R15,000/month</span> across
                Google and Meta, scaling with traction, and two intakes per year to start, this plan is designed to be{" "}
                <span className="text-cps-purple font-semibold">lean, measurable, and built for compounding returns</span>.
              </p>
            </motion.div>
          </div>

          {/* Right: workstream grid */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-6"
            >
              Six coordinated workstreams
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WORKSTREAMS.map((ws, i) => (
                <motion.div
                  key={ws.num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="card-flat group relative p-5 hover:!bg-white"
                >
                  <span className="text-[28px] font-extrabold text-cps-purple/[0.06] group-hover:text-cps-purple/[0.12] transition-colors leading-none">
                    {ws.num}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {ws.title}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/40 leading-relaxed">{ws.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
