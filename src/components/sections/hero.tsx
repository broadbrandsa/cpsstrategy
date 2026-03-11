"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { META, KEY_METRICS } from "@/content/strategy-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(46,163,242,0.1),transparent_50%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-cps-purple/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cps-blue/8 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-8 px-4 py-1.5 text-xs font-medium tracking-wider border-cps-purple/30 text-cps-purple-light bg-cps-purple/5"
            >
              CONFIDENTIAL — {META.preparedBy.toUpperCase()} × {META.company.toUpperCase()}
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-white">Digital Marketing</span>
            <br />
            <span className="text-gradient-purple">Strategy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-display text-lg sm:text-xl text-white/60 font-light tracking-wide"
          >
            B2C Student Acquisition
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40"
          >
            <span>Focus: <span className="text-white/60">{META.focus}</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Target: <span className="text-white/60">{META.target}</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>CPA: <span className="text-cps-green">{META.cpaTarget}</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Launch: <span className="text-cps-blue">{META.launchDate}</span></span>
          </motion.div>

          {/* Metric cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {KEY_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                className="group relative p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cps-purple/20 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs text-white/40 font-medium tracking-wider uppercase">
                  {metric.label}
                </div>
                <div className="mt-0.5 text-[10px] text-white/25">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-cps-purple" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
