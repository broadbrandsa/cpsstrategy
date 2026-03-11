"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { META } from "@/content/strategy-data";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative py-24" ref={ref}>
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-black/[0.04]"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/logos/cps-logo.avif"
              alt="CPS"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-xs text-foreground/25">
              {META.company} — {META.subtitle}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs text-foreground/20">
              Prepared by{" "}
              <span className="text-foreground/35 font-medium">{META.preparedBy}</span>
            </span>
            <span className="text-xs text-foreground/20">{META.date}</span>
            <span className="tag bg-cps-grey text-foreground/25 border border-black/[0.04] text-[10px]">
              Confidential
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
