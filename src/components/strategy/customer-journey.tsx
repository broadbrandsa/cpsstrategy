"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Scale,
  FileDown,
  MessageCircle,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

const JOURNEY_STAGES = [
  {
    number: "01",
    title: "Discover",
    description:
      "Entry points include paid ads, organic search, referrals, and social media.",
    color: "#6B2D8B",
    icon: Search,
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Students compare CPS against universities and other providers while reviewing programme fit, accreditation, outcomes, and cost.",
    color: "#00A8E1",
    icon: Scale,
  },
  {
    number: "03",
    title: "Micro-Conversion",
    description:
      "Rather than forcing an immediate application, CPS captures intent through an info pack download or similar step.",
    color: "#10B981",
    icon: FileDown,
  },
  {
    number: "04",
    title: "Nurture",
    description:
      "Email and WhatsApp follow-ups answer questions, provide proof, and address objections.",
    color: "#FFD100",
    icon: MessageCircle,
  },
  {
    number: "05",
    title: "Apply",
    description:
      "A simplified application flow reduces friction and increases completion.",
    color: "#EF4444",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Enroll",
    description: "Admissions finalise enrollment and payment.",
    color: "#6B2D8B",
    icon: GraduationCap,
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

        {/* ── DESKTOP: Horizontal funnel pipeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="hidden lg:block relative mb-8"
        >
          {/* Connector line */}
          <div className="absolute top-[52px] left-[60px] right-[60px] h-[2px]">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #6B2D8B40, #00A8E140, #10B98140, #FFD10040, #EF444440, #6B2D8B40)",
              }}
            />
          </div>

          <div className="grid grid-cols-6 gap-3 relative">
            {JOURNEY_STAGES.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-4 relative z-10 border-2 shadow-sm"
                  style={{
                    backgroundColor: `${stage.color}0A`,
                    borderColor: `${stage.color}25`,
                  }}
                >
                  <stage.icon
                    size={24}
                    strokeWidth={1.8}
                    style={{ color: stage.color }}
                  />
                </div>

                {/* Arrow between nodes */}
                {i < JOURNEY_STAGES.length - 1 && (
                  <div
                    className="absolute top-[34px] z-20"
                    style={{
                      left: `calc(${((i + 1) / 6) * 100}% - 6px)`,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M2 6 L10 6 M7 3 L10 6 L7 9"
                        stroke={stage.color}
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.4"
                      />
                    </svg>
                  </div>
                )}

                {/* Step label */}
                <span
                  className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1"
                  style={{ color: `${stage.color}90` }}
                >
                  Stage {stage.number}
                </span>

                {/* Title */}
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: stage.color }}
                >
                  {stage.title}
                </h3>

                {/* Description card */}
                <div
                  className="w-full rounded-xl border p-3 bg-white shadow-sm"
                  style={{ borderColor: `${stage.color}18` }}
                >
                  <p className="text-[11px] text-foreground/45 leading-[1.65]">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── MOBILE / TABLET: Vertical timeline ── */}
        <div className="lg:hidden mb-8">
          <div className="relative pl-10 ml-2">
            {/* Vertical connector */}
            <div
              className="absolute left-[15px] top-0 bottom-0 w-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, #6B2D8B30, #00A8E130, #10B98130, #FFD10030, #EF444430, #6B2D8B30)",
              }}
            />

            {JOURNEY_STAGES.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                {/* Timeline node */}
                <div
                  className="absolute -left-[25px] top-3 w-10 h-10 rounded-xl flex items-center justify-center border-2 bg-white shadow-sm z-10"
                  style={{
                    borderColor: `${stage.color}30`,
                  }}
                >
                  <stage.icon
                    size={16}
                    strokeWidth={2}
                    style={{ color: stage.color }}
                  />
                </div>

                {/* Content card */}
                <div
                  className="rounded-xl bg-white border p-4 shadow-sm ml-4"
                  style={{ borderColor: `${stage.color}18` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-bold tracking-[0.12em] uppercase"
                      style={{ color: `${stage.color}90` }}
                    >
                      Stage {stage.number}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: stage.color }}
                    >
                      {stage.title}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/45 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="rounded-2xl bg-cps-purple/[0.04] border border-cps-purple/10 p-6"
        >
          <p className="text-sm font-medium text-foreground/55 text-center">
            The journey is rarely linear — prospects may revisit earlier stages
            or skip ahead. The funnel is designed to support re-entry at every
            point.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
