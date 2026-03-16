"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CHANNEL_ROLES = [
  {
    title: "Paid Demand Capture",
    description:
      "Google Search captures high-intent prospects actively searching for banking and leadership qualifications.",
    color: "#6B2D8B",
  },
  {
    title: "Awareness & Consideration",
    description:
      "Meta advertising builds awareness, creates demand, and feeds retargeting audiences.",
    color: "#00A8E1",
  },
  {
    title: "Owned Conversion Layer",
    description:
      "Landing pages, programme pages, info packs, and forms convert interest into leads.",
    color: "#10B981",
  },
  {
    title: "Nurture Layer",
    description:
      "Email automation and WhatsApp messaging move leads toward application.",
    color: "#FFD100",
  },
  {
    title: "Organic Growth Layer",
    description:
      "SEO and social content compound long-term discoverability and brand familiarity.",
    color: "#F59E0B",
  },
];

export default function ChannelEcosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            Channel Ecosystem Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          How channels work{" "}
          <span className="text-cps-green">together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-3xl"
        >
          CPS requires a coordinated acquisition system rather than disconnected
          marketing activities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHANNEL_ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated !rounded-2xl overflow-hidden"
            >
              <div
                className="h-[3px]"
                style={{ backgroundColor: role.color }}
              />
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
