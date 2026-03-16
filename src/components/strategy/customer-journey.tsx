"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const JOURNEY_STAGES = [
  {
    number: "01",
    title: "Discover",
    description:
      "Entry points include paid ads, organic search, referrals, and social media.",
    color: "#6B2D8B", // cps-purple
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Students compare CPS against universities and other providers while reviewing programme fit, accreditation, outcomes, and cost.",
    color: "#00A8E1", // cps-blue
  },
  {
    number: "03",
    title: "Micro-Conversion",
    description:
      "Rather than forcing an immediate application, CPS captures intent through an info pack download or similar step.",
    color: "#6B2D8B",
  },
  {
    number: "04",
    title: "Nurture",
    description:
      "Email and WhatsApp follow-ups answer questions, provide proof, and address objections.",
    color: "#00A8E1",
  },
  {
    number: "05",
    title: "Apply",
    description:
      "A simplified application flow reduces friction and increases completion.",
    color: "#6B2D8B",
  },
  {
    number: "06",
    title: "Enroll",
    description:
      "Admissions finalise enrollment and payment.",
    color: "#00A8E1",
  },
];

export default function CustomerJourney() {
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
            Customer Journey &amp; Decision Pathway
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-3 max-w-3xl mt-8 tracking-tight"
        >
          How prospective students move from first interest to{" "}
          <span className="text-cps-purple">enrollment</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-foreground/35 mb-16 max-w-2xl"
        >
          Students rarely apply immediately. They research, compare options,
          evaluate credibility, and consider affordability before committing. The
          CPS funnel therefore supports a staged decision process.
        </motion.p>

        {/* Journey stages grid */}
        <div className="relative">
          {/* Subtle connection line behind cards */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-px -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, #6B2D8B25, #00A8E125, #6B2D8B25, #00A8E125, #6B2D8B25, #00A8E125)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOURNEY_STAGES.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="relative group"
              >
                <div className="card-elevated !rounded-xl p-6 h-full flex flex-col group-hover:!border-opacity-30 transition-all">
                  {/* Numbered circle */}
                  <div
                    className="w-10 h-10 rounded-full mb-4 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: `${stage.color}12`,
                      color: stage.color,
                    }}
                  >
                    {stage.number}
                  </div>

                  {/* Stage label */}
                  <div
                    className="text-[10px] font-bold tracking-[0.12em] uppercase mb-1.5"
                    style={{ color: stage.color }}
                  >
                    Stage {stage.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-foreground/40 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
