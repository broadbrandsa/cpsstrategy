"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  GraduationCap,
  Handshake,
  Users,
  Eye,
  Share2,
} from "lucide-react";

const FLYWHEEL_STEPS = [
  {
    icon: Building2,
    title: "Industry Credibility",
    description:
      "CPS already has strong credibility through its B2B relationships with major banks. This is the foundation the entire flywheel builds on.",
    color: "#6B2D8B",
  },
  {
    icon: ShieldCheck,
    title: "Student Trust",
    description:
      "This institutional credibility becomes a powerful trust signal for individual learners considering a B2C programme.",
    color: "#00A8E1",
  },
  {
    icon: GraduationCap,
    title: "Student Success",
    description:
      "Students complete qualifications, develop professional skills, and progress in their careers — creating real outcomes to showcase.",
    color: "#10B981",
  },
  {
    icon: Handshake,
    title: "Advocacy & Proof",
    description:
      "Graduates share experiences, recommend programmes, and provide testimonials that become the most credible form of marketing.",
    color: "#FFD100",
  },
  {
    icon: Users,
    title: "Audience Growth",
    description:
      "These stories generate warmer audiences, referrals, and organic reach — reducing acquisition costs and expanding the pipeline.",
    color: "#EF4444",
  },
];

const SUPPORTING_INSIGHTS = [
  {
    icon: Users,
    text: "B2B employees enroll in B2C programmes for personal career advancement",
  },
  {
    icon: Eye,
    text: "B2C brand awareness (Instagram, Google) makes B2B sales conversations warmer",
  },
  {
    icon: Share2,
    text: "Student referrals are the biggest organic B2C channel \u2014 formalize this",
  },
];

export default function B2bB2cFlywheel() {
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
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            The CPS Growth Flywheel
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          A reinforcing flywheel,{" "}
          <span className="text-gradient-purple">not a linear funnel</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-16 max-w-3xl"
        >
          CPS&apos;s growth is best understood as a five-stage flywheel where each stage feeds the next. As the cycle repeats, the cost of acquiring each new student decreases while brand credibility increases.
        </motion.p>

        {/* Flywheel cycle cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {FLYWHEEL_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card-elevated !p-0 overflow-hidden group relative"
            >
              <div
                className="h-[3px] w-full"
                style={{ backgroundColor: step.color }}
              />
              <div className="p-6">
                {/* Step number + arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${step.color}0A`,
                      border: `1px solid ${step.color}15`,
                    }}
                  >
                    <step.icon size={18} style={{ color: step.color }} />
                  </div>
                  {i < FLYWHEEL_STEPS.length - 1 && (
                    <span className="text-foreground/15 text-lg font-light hidden lg:block">
                      &rarr;
                    </span>
                  )}
                  {i === FLYWHEEL_STEPS.length - 1 && (
                    <span className="text-cps-purple/25 text-lg font-light hidden lg:block">
                      &#x21BB;
                    </span>
                  )}
                </div>

                <span
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase"
                  style={{ color: `${step.color}90` }}
                >
                  Step {i + 1}
                </span>
                <h3 className="text-sm font-bold text-foreground mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-foreground/45 leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting arrow row for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cps-purple/[0.04] border border-cps-purple/10">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-cps-purple/50 uppercase">
              Reinforcing cycle
            </span>
            <span className="text-cps-purple/30">&#x21BB;</span>
          </div>
        </motion.div>

        {/* Supporting insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
            Supporting Insights
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            How B2B and B2C channels feed each other in practice
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {SUPPORTING_INSIGHTS.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div className="h-1 w-full bg-cps-blue/20" />
                <div className="p-6">
                  <div className="w-9 h-9 rounded-lg bg-cps-blue/[0.06] border border-cps-blue/10 flex items-center justify-center mb-4">
                    <insight.icon size={16} className="text-cps-blue" />
                  </div>
                  <p className="text-sm text-foreground/50 leading-[1.7]">
                    {insight.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Callout card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-8 sm:p-10 rounded-2xl bg-white border border-cps-purple/8 accent-bar-left pl-10"
        >
          <p className="text-base sm:text-lg text-foreground/60 leading-[1.8] italic">
            &ldquo;When Dylan walks into a broker&apos;s office and they&apos;ve
            already seen CPS on Instagram, the conversation starts
            differently.&rdquo;
          </p>
        </motion.div>

        {/* Cross-link */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="text-sm text-foreground/40 mt-8 leading-[1.8]"
        >
          For the enterprise side of this system, see{" "}
          <Link href="/b2b" className="text-cps-purple font-medium hover:underline">
            B2B Strategy &rarr;
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
