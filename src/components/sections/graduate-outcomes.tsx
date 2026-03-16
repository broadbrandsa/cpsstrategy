"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Data ─── */

const OUTCOME_CARDS = [
  {
    heading: "Transformation Stories",
    body: "Stories showing where students started, what challenge they faced, what qualification they chose, and what changed afterward.",
    color: "#6B2D8B",
  },
  {
    heading: "Career Progression Proof",
    body: "Examples of students moving into stronger roles, more responsibility, greater confidence, or improved career direction.",
    color: "#00A8E1",
  },
  {
    heading: "Student Voice",
    body: "Short testimonials, video clips, and personal reflections that make the experience feel real, human, and trustworthy.",
    color: "#10B981",
  },
  {
    heading: "Outcome-Led Messaging",
    body: "Content should focus on what the qualification helped unlock, not just what the programme includes.",
    color: "#FFD100",
  },
];

const CONTENT_GOALS = [
  "Reduce perceived risk",
  "Make career outcomes feel tangible",
  "Build emotional connection",
  "Strengthen trust in the CPS brand",
  "Improve the performance of landing pages, retargeting, and nurture flows",
];

const DISTRIBUTION_CHANNELS = [
  "Landing pages",
  "Nurture emails",
  "WhatsApp follow-up",
  "Meta retargeting",
  "Organic social",
  "The future alumni / community flywheel",
];

/* ─── Component ─── */

export default function GraduateOutcomes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            Graduate Outcomes / Success Stories
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight"
        >
          Graduate Outcomes /{" "}
          <span className="text-cps-green">Success Stories</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-10"
        >
          Proof that the CPS journey leads somewhere meaningful.
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl space-y-4 mb-10"
        >
          <p className="text-sm text-foreground/50 leading-[1.8]">
            In education marketing, credibility is not built through institutional claims alone. Prospective students want to see evidence that real people completed the journey, developed confidence, improved professionally, and moved closer to the careers they wanted.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            Graduate outcomes and success stories are therefore not just &ldquo;nice content&rdquo;. They are one of the most important conversion assets in the system.
          </p>
          <p className="text-sm text-foreground/50 leading-[1.8]">
            This content should achieve several things at once:
          </p>
          <ul className="space-y-2 pl-1">
            {CONTENT_GOALS.map((g) => (
              <li key={g} className="flex items-start gap-3 text-sm text-foreground/50">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-green/60 shrink-0" />
                {g}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4 cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {OUTCOME_CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div
                className="h-[3px] w-full"
                style={{ backgroundColor: card.color }}
              />
              <div className="p-6">
                <h4
                  className="text-sm font-bold mb-2 uppercase tracking-wider"
                  style={{ color: card.color }}
                >
                  {card.heading}
                </h4>
                <p className="text-xs text-foreground/45 leading-[1.7]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Where this content should live */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-cps-green to-cps-blue" />
          <div className="p-7">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-4">
              Where This Content Should Live
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {DISTRIBUTION_CHANNELS.map((ch) => (
                <div
                  key={ch}
                  className="flex items-start gap-3 text-sm text-foreground/55"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cps-green mt-1.5 shrink-0" />
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm text-foreground/50 max-w-3xl leading-[1.8] italic"
        >
          The more visible student success becomes, the less CPS has to rely on abstract claims. Proof lowers friction.
        </motion.p>
      </div>
    </section>
  );
}
