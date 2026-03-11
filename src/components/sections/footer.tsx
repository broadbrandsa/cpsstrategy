"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { META } from "@/content/strategy-data";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative py-20" ref={ref}>
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to launch?
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-8">
            This strategy is designed to be lean, measurable, and built for compounding returns. The May 10 intake starts now.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-cps-purple text-white font-medium text-sm">
              Approve Strategy
            </div>
            <div className="px-6 py-3 rounded-full border border-white/10 text-white/60 font-medium text-sm">
              Request Changes
            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/logos/cps-logo.avif"
              alt="CPS"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-xs text-white/30">
              {META.company} — {META.subtitle}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20">
              Prepared by{" "}
              <span className="text-white/40 font-medium">{META.preparedBy}</span>
            </span>
            <span className="text-xs text-white/20">{META.date}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.06]">
              Confidential
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
