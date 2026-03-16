"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLATFORM_ROLES = [
  {
    name: "Instagram & Facebook",
    color: "#6B2D8B",
    description:
      "Student stories, testimonials, programme explainers, intake reminders.",
  },
  {
    name: "TikTok / Reels",
    color: "#00A8E1",
    description:
      "Short authentic content explaining study experiences and career outcomes.",
  },
  {
    name: "LinkedIn",
    color: "#10B981",
    description:
      "Industry credibility, thought leadership, and professional positioning.",
  },
  {
    name: "Blog / Website",
    color: "#FFD100",
    description:
      "Long-form educational content supporting SEO and search discovery.",
  },
];

const CONTENT_MIX = [
  { label: "Student stories and proof", percentage: 40, color: "#6B2D8B" },
  { label: "Educational content", percentage: 30, color: "#00A8E1" },
  { label: "Promotional content", percentage: 20, color: "#10B981" },
  { label: "Industry insights", percentage: 10, color: "#F59E0B" },
];

export default function OrganicSocial() {
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
          <div
            className="w-8 h-[2px] rounded-full"
            style={{ backgroundColor: "#10B981" }}
          />
          <span
            className="section-label"
            style={{ color: "#10B981" }}
          >
            Organic Social Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-8 tracking-tight"
        >
          How CPS should use organic social media to{" "}
          <span style={{ color: "#10B981" }}>
            build credibility and trust
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/45 leading-[1.7] mb-16 max-w-2xl"
        >
          Organic social builds familiarity, reduces perceived risk, and supports
          paid media acquisition.
        </motion.p>

        {/* Platform Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Platform Roles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {PLATFORM_ROLES.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: platform.color }}
                />
                <div className="p-6">
                  <h4 className="text-sm font-bold text-foreground mb-2">
                    {platform.name}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Mix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Content Mix
          </h3>
          <div className="card-elevated !p-8">
            {/* Stacked bar */}
            <div className="flex w-full h-12 rounded-xl overflow-hidden mb-6">
              {CONTENT_MIX.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percentage}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                  className="flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="text-white text-xs font-bold">
                    {item.percentage}%
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6">
              {CONTENT_MIX.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-foreground/50">
                    {item.percentage}% {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
