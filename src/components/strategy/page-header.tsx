"use client";

import { motion } from "framer-motion";

export default function StrategyPageHeader() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Strategy &amp; Market Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.12]"
        >
          Understanding our market,{" "}
          <span className="text-foreground/30">audience,</span>{" "}
          <br className="hidden sm:block" />
          and{" "}
          <span className="text-gradient-purple">competitive position</span>
        </motion.h1>
      </div>
    </section>
  );
}
