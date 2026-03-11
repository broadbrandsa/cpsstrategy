"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { META, KEY_METRICS } from "@/content/strategy-data";

const FILTERED_METRICS = KEY_METRICS.filter(m => m.label !== "Launch Date");

const ACCENT_COLORS = ["#6B2D8B", "#00A8E1", "#10B981", "#6B2D8B", "#00A8E1"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* Gradient washes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(107,45,139,0.05),transparent)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(0,168,225,0.04),transparent)]" />
      </div>

      {/* Floating ambient shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-64 h-64 bg-cps-purple/[0.03] rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-cps-blue/[0.03] rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="text-center">
          {/* Confidential badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge
              variant="outline"
              className="mb-10 px-5 py-2 text-[10px] font-semibold tracking-[0.2em] border-cps-purple/20 text-cps-purple/70 bg-cps-purple/[0.03] uppercase"
            >
              {META.preparedBy} &times; {META.company}
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08]"
          >
            <span className="text-foreground">Digital Marketing</span>
            <br />
            <span className="text-gradient-purple">Strategy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-foreground/50 font-light tracking-wide"
          >
            B2C Student Acquisition
          </motion.p>

          {/* Meta info pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { label: "Focus", value: META.focus.split("&")[0].trim() + " & ACL6" },
              { label: "Target", value: META.target },
              { label: "CPA Goal", value: META.cpaTarget, highlight: true },
            ].map((item) => (
              <span
                key={item.label}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs ${
                  item.highlight
                    ? "bg-cps-green/8 text-cps-green border border-cps-green/15"
                    : "bg-foreground/[0.03] text-foreground/50 border border-foreground/[0.06]"
                }`}
              >
                <span className="font-medium">{item.label}:</span>
                <span className={item.highlight ? "font-semibold" : ""}>{item.value}</span>
              </span>
            ))}
          </motion.div>

          {/* Metric cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {FILTERED_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.07 }}
                className="metric-card group relative overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: ACCENT_COLORS[i] }}
                />
                <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mt-1">
                  {metric.value}
                </div>
                <div className="mt-2 text-[10px] text-foreground/35 font-semibold tracking-[0.12em] uppercase">
                  {metric.label}
                </div>
                <div className="mt-0.5 text-[10px] text-foreground/25">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-24 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] text-foreground/25 tracking-[0.3em] uppercase font-medium">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-9 rounded-full border-[1.5px] border-foreground/10 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-cps-purple/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
