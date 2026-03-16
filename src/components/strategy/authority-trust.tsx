"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROOF_CATEGORIES = [
  {
    title: "Institutional Proof",
    color: "#6B2D8B",
    points: [
      "CHE accreditation",
      "QCTO aligned qualifications",
      "Level 1 B-BBEE contributor",
    ],
  },
  {
    title: "Market Proof",
    color: "#00A8E1",
    points: [
      "11,400+ graduates",
      "Trusted by Absa, Standard Bank, FNB, Capitec, and Nedbank",
    ],
  },
  {
    title: "Learning Proof",
    color: "#10B981",
    points: [
      "85%+ completion rates",
      "Structured learning journeys with support",
    ],
  },
  {
    title: "Technology Proof",
    color: "#FFD100",
    points: [
      "CPSLearn proprietary platform",
      "AI-powered assessment marking with human moderation",
    ],
  },
];

export default function AuthorityTrust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div
            className="w-8 h-[2px] rounded-full"
            style={{ backgroundColor: "#FFD100" }}
          />
          <span
            className="section-label"
            style={{ color: "#FFD100" }}
          >
            Authority, Proof & Trust Signals
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          The proof CPS already has{" "}
          <span style={{ color: "#FFD100" }}>
            but does not yet fully communicate
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-3xl"
        >
          CPS already holds significant credibility in the South African
          financial services education sector.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROOF_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card-elevated !rounded-2xl overflow-hidden"
            >
              <div
                className="h-[3px]"
                style={{ backgroundColor: category.color }}
              />
              <div className="p-6">
                <h3
                  className="text-base font-bold mb-4"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm text-foreground/60">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
