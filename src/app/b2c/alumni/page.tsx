"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Footer from "@/components/sections/footer";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const FLYWHEEL_STEPS = [
  {
    step: "01",
    title: "Enroll",
    body: "Students join CPS through a qualification pathway such as HCIB or ACL6.",
    color: "#6B2D8B",
  },
  {
    step: "02",
    title: "Support & Progress",
    body: "Students experience stewardship, guidance, structure, communities of practice, and a clearer sense of progression through the qualification journey.",
    color: "#00A8E1",
  },
  {
    step: "03",
    title: "Belonging & Confidence",
    body: "As students progress, they gain confidence, build professional identity, and feel part of a broader CPS learning community rather than an isolated academic process.",
    color: "#10B981",
  },
  {
    step: "04",
    title: "Proof & Advocacy",
    body: "Students and alumni become visible proof through testimonials, stories, referrals, and peer-to-peer recommendation.",
    color: "#FFD100",
  },
  {
    step: "05",
    title: "Growth & Re-entry",
    body: "That proof drives new enrollments, warmer audiences, and future opportunities for students or alumni to re-engage with CPS through additional qualifications, progression pathways, and community participation.",
    color: "#EF4444",
  },
];

const COMMUNITY_GOALS = [
  "Make students feel supported beyond the point of enrollment",
  "Create a visible sense of belonging and professional identity",
  "Strengthen continuity between one qualification and the next",
  "Surface student and alumni proof in a structured way",
  "Encourage peer recommendation and referral behaviour",
  "Create warmer audiences for future intakes",
  "Support a stronger long-term relationship between CPS and its learners",
];

const APP_FEATURES = [
  {
    title: "Community Hub",
    body: "A shared space where students and alumni feel part of an active CPS community rather than a one-time transaction.",
  },
  {
    title: "Communities of Practice",
    body: "Spaces aligned to qualifications, specialisations, or professional interests that help learners connect around real career and learning themes.",
  },
  {
    title: "Progression Pathways",
    body: "Clear visibility into what comes next after a qualification, helping learners understand how CPS can support their continued professional growth.",
  },
  {
    title: "Student & Alumni Stories",
    body: "A structured way to surface transformation stories, milestones, completion moments, and career progression examples that build confidence for others.",
  },
  {
    title: "Referral Pathways",
    body: "Simple, visible ways for satisfied students and alumni to refer peers into relevant programmes when the timing is right.",
  },
  {
    title: "Support Visibility",
    body: "A space that reinforces stewardship by making guidance, key contacts, and support pathways feel accessible and present.",
  },
  {
    title: "Career Identity & Belonging",
    body: "A stronger sense that students are not just completing a qualification, but becoming part of a credible professional learning network.",
  },
];

const BUSINESS_VALUE = [
  {
    title: "Trust Compounding",
    body: "Visible community and alumni proof reduces perceived risk for new prospects.",
    color: "#6B2D8B",
  },
  {
    title: "Referral Growth",
    body: "Referrals become easier and more natural when students remain connected and proud of the CPS experience.",
    color: "#00A8E1",
  },
  {
    title: "Stronger Retention",
    body: "Learners are more likely to progress into future qualifications when the relationship continues beyond the first enrollment.",
    color: "#10B981",
  },
  {
    title: "Better Content",
    body: "Community activity creates a richer source of real stories, testimonials, and proof-led marketing assets.",
    color: "#FFD100",
  },
  {
    title: "Warmer Audiences",
    body: "Existing students and alumni create better retargeting, lookalike, and advocacy-led acquisition pathways over time.",
    color: "#EF4444",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AlumniPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  const flywheelRef = useRef(null);
  const flywheelInView = useInView(flywheelRef, { once: true, margin: "-80px" });

  const goalsRef = useRef(null);
  const goalsInView = useInView(goalsRef, { once: true, margin: "-80px" });

  const appRef = useRef(null);
  const appInView = useInView(appRef, { once: true, margin: "-80px" });

  const valueRef = useRef(null);
  const valueInView = useInView(valueRef, { once: true, margin: "-80px" });

  const principleRef = useRef(null);
  const principleInView = useInView(principleRef, { once: true, margin: "-80px" });

  const whyAlumniRef = useRef(null);
  const whyAlumniInView = useInView(whyAlumniRef, { once: true, margin: "-80px" });

  return (
    <div className="relative min-h-screen bg-white">
      {/* ============================================================ */}
      {/*  Header                                                       */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-cps-green rounded-full" />
              <span className="section-label text-cps-green">
                Alumni / Community Flywheel
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-4">
              Alumni / Community{" "}
              <span className="text-gradient-purple">Flywheel</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-6">
              Building a community that strengthens trust, retention, referrals, and long-term brand equity.
            </p>
            <p className="text-sm text-foreground/40 max-w-3xl leading-[1.8]">
              CPS already has one of the most valuable B2C growth assets in the business: students and alumni who have experienced the learning journey, progressed professionally, and can validate the value of the qualification to others.
            </p>
            <p className="text-sm text-foreground/40 max-w-3xl leading-[1.8] mt-4">
              The opportunity is to make this flywheel more intentional. Instead of treating enrollment as the end of the journey, CPS should treat it as the start of a longer relationship that builds community, strengthens student confidence, surfaces proof, and turns satisfied students into visible advocates for future intakes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  01 — Why This Matters                                        */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={whyRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={whyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              01 — WHY THIS MATTERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6"
          >
            Value on both sides of the business
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full bg-cps-purple" />
              <div className="p-6">
                <h4 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-3">
                  For Students & Alumni
                </h4>
                <p className="text-sm text-foreground/50 leading-[1.8]">
                  Continued connection, support, identity, and progression beyond a single qualification.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full bg-cps-blue" />
              <div className="p-6">
                <h4 className="text-xs font-bold text-cps-blue uppercase tracking-wider mb-3">
                  For CPS
                </h4>
                <p className="text-sm text-foreground/50 leading-[1.8]">
                  A compounding system that strengthens trust, social proof, student experience, referrals, and long-term brand visibility.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-foreground/40 mt-8 max-w-3xl leading-[1.8]"
          >
            A stronger community increases the likelihood that prospective students will see CPS not only as a provider of qualifications, but as a trusted professional partner in their career journey.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  02 — The Flywheel                                            */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={flywheelRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={flywheelInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              02 — THE FLYWHEEL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-10"
          >
            From enrollment to advocacy —{" "}
            <span className="text-gradient-purple">a continuous loop</span>
          </motion.h2>

          {/* ---- CIRCULAR FLYWHEEL GRAPHIC (desktop) ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={flywheelInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative mb-12"
          >
            <div className="relative w-full" style={{ height: 600 }}>
              {/* SVG ring + arrows */}
              <svg
                viewBox="0 0 700 600"
                className="absolute inset-0 w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer track ring — very faint */}
                <circle
                  cx="350"
                  cy="290"
                  r="210"
                  stroke="url(#ringGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.35"
                />

                {/* Gradient arcs between nodes */}
                {(() => {
                  const cx = 350, cy = 290, r = 210;
                  const angles = [-90, -18, 54, 126, 198].map(
                    (a) => (a * Math.PI) / 180
                  );
                  const pts = angles.map((a) => ({
                    x: cx + r * Math.cos(a),
                    y: cy + r * Math.sin(a),
                  }));
                  const colors = [
                    "#6B2D8B",
                    "#00A8E1",
                    "#10B981",
                    "#FFD100",
                    "#EF4444",
                  ];

                  return pts.map((_, i) => {
                    const next = (i + 1) % 5;
                    const midAngle = (angles[i] + angles[next] + (angles[next] < angles[i] ? 2 * Math.PI : 0)) / 2;
                    const mx = cx + (r + 0) * Math.cos(midAngle);
                    const my = cy + (r + 0) * Math.sin(midAngle);
                    return (
                      <g key={`arc-${i}`}>
                        <defs>
                          <linearGradient
                            id={`arcGrad${i}`}
                            x1={pts[i].x}
                            y1={pts[i].y}
                            x2={pts[next].x}
                            y2={pts[next].y}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor={colors[i]} stopOpacity="0.5" />
                            <stop offset="1" stopColor={colors[next]} stopOpacity="0.5" />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M ${pts[i].x} ${pts[i].y} Q ${mx} ${my} ${pts[next].x} ${pts[next].y}`}
                          stroke={`url(#arcGrad${i})`}
                          strokeWidth="2.5"
                          fill="none"
                        />
                        {/* Arrowhead at midpoint */}
                        <circle
                          cx={mx}
                          cy={my}
                          r="4"
                          fill={colors[next]}
                          opacity="0.5"
                        />
                      </g>
                    );
                  });
                })()}

                {/* Ring gradient definition */}
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B2D8B" />
                    <stop offset="25%" stopColor="#00A8E1" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="75%" stopColor="#FFD100" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: -10 }}>
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center mx-auto">
                    <div>
                      <span className="text-cps-purple text-xl">&#x21BB;</span>
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground/40 uppercase mt-0.5">
                        Flywheel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Positioned node cards */}
              {(() => {
                const cx = 350, cy = 290, r = 210;
                const anglesD = [-90, -18, 54, 126, 198];
                const labelOffsets = [
                  { tx: -90, ty: -68 },
                  { tx: 22, ty: -40 },
                  { tx: 10, ty: 12 },
                  { tx: -190, ty: 12 },
                  { tx: -202, ty: -40 },
                ];

                return FLYWHEEL_STEPS.map((s, i) => {
                  const angle = (anglesD[i] * Math.PI) / 180;
                  const nx = cx + r * Math.cos(angle);
                  const ny = cy + r * Math.sin(angle);
                  const off = labelOffsets[i];

                  return (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        flywheelInView
                          ? { opacity: 1, scale: 1 }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.12,
                      }}
                      className="absolute"
                      style={{
                        left: `calc(${(nx / 700) * 100}% + ${off.tx}px)`,
                        top: `calc(${(ny / 600) * 100}% + ${off.ty}px)`,
                      }}
                    >
                      {/* Node circle */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2 mx-auto mb-2"
                        style={{
                          backgroundColor: `${s.color}12`,
                          borderColor: `${s.color}40`,
                        }}
                      >
                        <span
                          className="text-xs font-bold"
                          style={{ color: s.color }}
                        >
                          {s.step}
                        </span>
                      </div>
                      {/* Label card */}
                      <div
                        className="w-[180px] rounded-xl bg-white border p-3 shadow-sm"
                        style={{
                          borderColor: `${s.color}20`,
                        }}
                      >
                        <p
                          className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1"
                          style={{ color: s.color }}
                        >
                          {s.title}
                        </p>
                        <p className="text-[11px] text-foreground/45 leading-[1.6]">
                          {s.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </motion.div>

          {/* ---- VERTICAL TIMELINE (mobile / tablet) ---- */}
          <div className="lg:hidden mb-8">
            <div className="relative pl-8 border-l-2 border-dashed border-cps-purple/15 ml-4">
              {FLYWHEEL_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -15 }}
                  animate={flywheelInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[41px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{
                      backgroundColor: `${s.color}12`,
                      borderColor: `${s.color}40`,
                    }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: s.color }}
                    >
                      {s.step}
                    </span>
                  </div>
                  {/* Content */}
                  <div
                    className="rounded-xl bg-white border p-4 shadow-sm"
                    style={{ borderColor: `${s.color}20` }}
                  >
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1"
                      style={{ color: s.color }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs text-foreground/45 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                  {/* Arrow connector */}
                  {i < FLYWHEEL_STEPS.length - 1 && (
                    <div className="absolute -left-[29px] top-10 h-[calc(100%-16px)] flex items-center">
                      <div
                        className="w-[2px] h-full"
                        style={{
                          background: `linear-gradient(to bottom, ${s.color}30, ${FLYWHEEL_STEPS[i + 1].color}30)`,
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
              {/* Loop-back indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={flywheelInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-2 border-cps-purple/30 bg-cps-purple/[0.06]">
                  <span className="text-cps-purple text-sm">&#x21BB;</span>
                </div>
                <div className="rounded-xl bg-cps-purple/[0.04] border border-cps-purple/10 p-4">
                  <p className="text-xs font-semibold text-cps-purple/70">
                    Cycle repeats — each successful learner makes the next easier to convert.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={flywheelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="rounded-2xl bg-cps-purple/[0.04] border border-cps-purple/10 p-6"
          >
            <p className="text-sm font-medium text-foreground/60 text-center">
              The power of the flywheel is that every successful learner makes the next learner easier to convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  03 — What the Community Should Achieve                       */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={goalsRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={goalsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-green rounded-full" />
            <span className="section-label text-cps-green">
              03 — COMMUNITY OBJECTIVES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            What the community experience should achieve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-foreground/40 max-w-3xl mb-10"
          >
            This is not about building technology for its own sake. It is about creating a structured experience that strengthens connection, trust, and career momentum.
          </motion.p>

          <div className="card-elevated !p-0 overflow-hidden">
            <div className="px-6 py-4 bg-cps-green/[0.04] border-b border-cps-green/10">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-green uppercase">
                The community / alumni experience should help CPS achieve the following
              </span>
            </div>
            {COMMUNITY_GOALS.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={goalsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className={`flex items-start gap-3 px-6 py-3.5 border-b border-black/[0.03] ${
                  i % 2 === 1 ? "bg-black/[0.01]" : ""
                }`}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-green/60 shrink-0" />
                <span className="text-sm text-foreground/55 leading-[1.7] capitalize">
                  {goal}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  04 — Community / Alumni App Experience                       */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={appRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={appInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              04 — APP EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={appInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4"
          >
            Community / alumni app experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={appInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-foreground/40 max-w-3xl mb-10"
          >
            The app experience should be designed around student and alumni value, not around feature bloat. Its purpose is to help people feel guided, connected, and supported as they progress through and beyond a qualification.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {APP_FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={appInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="card-elevated !p-6"
              >
                <h4 className="text-sm font-bold text-foreground mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-foreground/45 leading-[1.7]">
                  {feat.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  05 — Business Value to CPS                                   */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={valueRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={valueInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-gold rounded-full" />
            <span className="section-label text-cps-gold">
              05 — BUSINESS VALUE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-10"
          >
            Business value to CPS
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_VALUE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: item.color }} />
                <div className="p-6">
                  <h4 className="text-sm font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  06 — Strategic Principle                                     */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={principleRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={principleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
            <span className="section-label text-cps-blue">
              06 — STRATEGIC PRINCIPLE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={principleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl bg-white border border-black/[0.05] p-8 sm:p-10"
            style={{ borderLeft: "4px solid #6B2D8B" }}
          >
            <p className="text-lg text-foreground/60 leading-[1.8] mb-4">
              The alumni / community layer should not be treated as a &ldquo;nice to have&rdquo; after marketing is done. It is part of the growth system itself.
            </p>
            <p className="text-lg text-foreground/60 leading-[1.8]">
              For CPS, community strengthens conversion, support, retention, referral, and long-term brand equity at the same time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  07 — Why Alumni and Community Matter                         */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 section-tinted">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={whyAlumniRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={whyAlumniInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">
              07 — WHY ALUMNI AND COMMUNITY MATTER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whyAlumniInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6"
          >
            Reducing perceived risk through visible proof
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyAlumniInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-3xl space-y-4 mb-10"
          >
            <p className="text-sm text-foreground/50 leading-[1.8]">
              Education decisions carry significant perceived risk. Prospective students want reassurance that a qualification will deliver real career outcomes.
            </p>
            <p className="text-sm text-foreground/50 leading-[1.8]">
              An active community of students and alumni provides one of the strongest possible signals of credibility. When prospective learners see others who have successfully completed the journey, the perceived risk of enrolling decreases.
            </p>
            <p className="text-sm text-foreground/50 leading-[1.8]">
              A visible alumni network also reinforces the idea that CPS is not simply a qualification provider, but a long-term professional partner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyAlumniInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden max-w-3xl"
          >
            <div className="px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                Community participation strengthens
              </span>
            </div>
            {[
              "Stronger social proof",
              "Higher referral rates",
              "Improved student retention",
              "Increased progression into additional qualifications",
              "Richer marketing content through real success stories",
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-6 py-3.5 border-b border-black/[0.03] ${
                  i % 2 === 1 ? "bg-black/[0.01]" : ""
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cps-purple/50 shrink-0" />
                <span className="text-sm text-foreground/55">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
