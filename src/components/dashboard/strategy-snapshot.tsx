"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StrategySnapshot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Strategy Snapshot
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-elevated !p-8 sm:!p-10"
        >
          <p className="text-base sm:text-lg text-foreground/60 leading-[1.8]">
            Broadbrand &times; CPS engagement targeting B2C student acquisition for the{" "}
            <span className="text-foreground font-semibold">HCIB</span> and{" "}
            <span className="text-foreground font-semibold">ACL6</span> programmes. Goal:{" "}
            <span className="text-cps-green font-semibold">70 enrolled students per intake</span>{" "}
            (35 per qualification) at a target CPA of{" "}
            <span className="text-cps-green font-semibold">R400</span>. Monthly media budget of{" "}
            <span className="text-foreground font-semibold">R15,000</span> split 50/50 between
            Google Search and Meta. First intake:{" "}
            <span className="text-cps-purple font-semibold">May 10, 2026</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
