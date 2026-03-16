"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STACK_LAYERS = [
  {
    title: "Website & Landing Pages",
    description:
      "CPS website and dedicated qualification landing pages.",
    color: "#6B2D8B",
  },
  {
    title: "Tracking Layer",
    description: "GA4, Google Tag Manager, Meta Pixel.",
    color: "#00A8E1",
  },
  {
    title: "CRM Layer",
    description: "Pipedrive configured for B2C lead management.",
    color: "#10B981",
  },
  {
    title: "Nurture Layer",
    description:
      "Email automation for the nurture sequence. WhatsApp Business automated responses.",
    color: "#FFD100",
  },
  {
    title: "Reporting Layer",
    description: "Looker Studio dashboard for campaign reporting.",
    color: "#F59E0B",
  },
];

export default function MartechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Marketing Technology Stack
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 max-w-3xl tracking-tight"
        >
          Technology enabling the{" "}
          <span className="text-cps-purple">B2C acquisition funnel</span>
        </motion.h2>

        {/* Stack layers */}
        <div className="space-y-4">
          {STACK_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div
                className="flex items-start p-6"
                style={{ borderLeft: `4px solid ${layer.color}` }}
              >
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-foreground/45 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
