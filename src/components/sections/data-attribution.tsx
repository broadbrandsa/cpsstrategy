"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CONVERSION_EVENTS = ["Lead", "Application", "Enrollment"];

const ATTRIBUTION_METRICS = [
  "Spend by channel",
  "Leads by channel",
  "Landing page conversion rate",
  "Applications by qualification",
  "Enrollments by qualification",
  "Cost per acquisition by channel",
];

const REPORTING_CADENCE = [
  {
    title: "Weekly performance dashboard",
    color: "#6B2D8B",
  },
  {
    title: "Bi-weekly optimisation review",
    color: "#00A8E1",
  },
  {
    title: "Monthly executive reporting",
    color: "#10B981",
  },
];

export default function DataAttribution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36">
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
            Data & Attribution Architecture
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 max-w-3xl tracking-tight"
        >
          What must be{" "}
          <span className="text-cps-blue">measurable from the start</span>
        </motion.h2>

        {/* Core Conversion Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Core Conversion Events
          </h3>
          <div className="flex flex-wrap gap-4">
            {CONVERSION_EVENTS.map((event, i) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                className="card-elevated !px-8 !py-5"
              >
                <span className="text-sm font-bold text-cps-purple">
                  {event}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Attribution Reporting Views */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Attribution Reporting Views
          </h3>
          <div className="overflow-x-auto">
            <div className="card-elevated !rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-cps-blue/[0.04] border-b border-cps-blue/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-blue uppercase">
                  Metric
                </span>
              </div>
              {ATTRIBUTION_METRICS.map((metric, i) => (
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                  className={`px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/55">{metric}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reporting Cadence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Reporting Cadence
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {REPORTING_CADENCE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-[3px] w-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="p-6">
                  <p className="text-sm font-bold text-foreground">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
