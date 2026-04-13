"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CpaModelling from "@/components/sections/cpa-modelling";
import PaidMedia from "@/components/sections/paid-media";
import Benchmarks from "@/components/sections/benchmarks";
import BudgetSummary from "@/components/sections/budget-summary";
import Footer from "@/components/sections/footer";
import { BudgetAllocationDonut } from "@/components/charts";
import {
  GOOGLE_CAMPAIGNS,
  META_AUDIENCES,
  AB_TESTING_PLAN,
} from "@/content/strategy-data";

/* ------------------------------------------------------------------ */
/*  Google vs Meta — Different Jobs in the Funnel                       */
/* ------------------------------------------------------------------ */

const GOOGLE_TRAITS = [
  "Intent-led",
  "Query-driven",
  "Captures high-intent demand",
  "Strongest for bottom-funnel traffic",
  "Works when prospects already know what problem they are trying to solve",
];

const META_TRAITS = [
  "Audience-led",
  "Interruption-based discovery",
  "Creates awareness and consideration",
  "Strongest for top- and mid-funnel demand generation",
  "Works by placing relevant messages in front of people based on who they are and what they are likely to care about",
];

function GoogleVsMeta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-gold rounded-full" />
          <span className="section-label text-cps-gold">
            Google vs Meta — Different Jobs in the Funnel
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Two platforms, two different jobs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-3xl mb-10"
        >
          Google and Meta do not perform the same role in this strategy.
        </motion.p>

        {/* Explanation cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-cps-blue" />
            <div className="p-6">
              <h4 className="text-xs font-bold text-cps-blue uppercase tracking-wider mb-3">
                Google captures existing demand
              </h4>
              <p className="text-sm text-foreground/50 leading-[1.8] mb-4">
                It reaches people who are already searching for qualifications, comparing providers, evaluating costs, or looking for a next step in their career. Search campaigns work best when intent already exists.
              </p>
              <div className="rounded-xl bg-cps-blue/[0.04] border border-cps-blue/10 p-4">
                <p className="text-xs font-semibold text-cps-blue mb-3 uppercase tracking-wide">Google Ads</p>
                <div className="space-y-2">
                  {GOOGLE_TRAITS.map((trait, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-blue/60 shrink-0" />
                      <span className="text-xs text-foreground/50 leading-[1.6]">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-cps-purple" />
            <div className="p-6">
              <h4 className="text-xs font-bold text-cps-purple uppercase tracking-wider mb-3">
                Meta creates and shapes demand
              </h4>
              <p className="text-sm text-foreground/50 leading-[1.8] mb-4">
                It allows CPS to place relevant messages in front of people before they actively search, helping the brand build awareness, trust, and consideration earlier in the decision journey.
              </p>
              <div className="rounded-xl bg-cps-purple/[0.04] border border-cps-purple/10 p-4">
                <p className="text-xs font-semibold text-cps-purple mb-3 uppercase tracking-wide">Meta Ads</p>
                <div className="space-y-2">
                  {META_TRAITS.map((trait, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-purple/60 shrink-0" />
                      <span className="text-xs text-foreground/50 leading-[1.6]">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* In simple terms */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          <div className="rounded-xl bg-cps-blue/[0.04] border border-cps-blue/10 px-6 py-4">
            <p className="text-sm text-foreground/55 font-medium">
              Google finds people who are already looking.
            </p>
          </div>
          <div className="rounded-xl bg-cps-purple/[0.04] border border-cps-purple/10 px-6 py-4">
            <p className="text-sm text-foreground/55 font-medium">
              Meta helps CPS get in front of people who should be looking.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-foreground/40 leading-[1.8] max-w-3xl"
        >
          Used together, Google and Meta create a more complete acquisition system. Google converts active demand. Meta expands future demand, nurtures familiarity, and supports retargeting until prospects are ready to act.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Google Deep Dive                                                    */
/* ------------------------------------------------------------------ */

function GoogleDeepDive() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            Google Ads — Deep Dive
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Campaign structure &amp; keyword strategy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Six campaign types capture intent at every stage of the search journey, from branded queries to competitor conquesting.
        </motion.p>

        {/* Campaign Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {GOOGLE_CAMPAIGNS.map((campaign, i) => (
            <motion.div
              key={campaign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-2 rounded-full bg-cps-purple"
                />
                <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                  {campaign.name}
                </h4>
              </div>
              <p className="text-[13px] text-foreground/50 mb-3">
                {campaign.purpose}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {campaign.keywords.map((kw: string) => (
                  <span
                    key={kw}
                    className="tag text-[10px] px-2 py-0.5 bg-cps-purple/[0.06] text-cps-purple/70 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Meta Deep Dive                                                      */
/* ------------------------------------------------------------------ */

function MetaDeepDive() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">
            Meta Ads — Deep Dive
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Audience segments, creative role &amp; retargeting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Meta campaigns target specific audience segments with creative designed to build familiarity, warm up future demand, and retarget engaged visitors until they are ready to act.
        </motion.p>

        {/* Audience Segments */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {META_AUDIENCES.map((aud, i) => (
            <motion.div
              key={`meta-aud-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5"
            >
              <h4 className="text-sm font-semibold text-foreground/80 mb-2">
                {aud.audience}
              </h4>
              <p className="text-[13px] text-foreground/50">
                {aud.targeting}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Creative Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
            Creative Formats
          </h3>
          <p className="text-sm text-foreground/45 leading-[1.8] mb-6 max-w-3xl">
            Meta campaigns rely heavily on visual storytelling. Creative formats should include a mix of static, video, and short-form content to communicate credibility, aspiration, and clarity around the qualifications.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Short video explainers introducing the programme",
              "Testimonial videos from graduates",
              "Carousel ads explaining career pathways",
              "Simple graphic posts highlighting pricing and flexibility",
              "Reels and short-form vertical video explaining study life",
            ].map((format, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-cps-purple/[0.03] border border-cps-purple/8"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cps-purple/50 shrink-0" />
                <span className="text-xs text-foreground/50 leading-[1.6]">{format}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Messaging Layers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-12"
        >
          <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
            Messaging Layers
          </h3>
          <p className="text-sm text-foreground/45 leading-[1.8] mb-6 max-w-3xl">
            Meta campaigns should operate across several messaging layers.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Career Aspiration",
                body: "Position qualifications as the pathway to professional advancement.",
                example: "\u201CLaunch a career in banking with a qualification trusted by SA\u2019s biggest banks.\u201D",
                color: "#6B2D8B",
              },
              {
                title: "Proof & Authority",
                body: "Build trust through credibility signals such as accreditation, graduate numbers, and bank partnerships.",
                example: "\u201CTrusted by professionals from Absa, Standard Bank, FNB and more.\u201D",
                color: "#00A8E1",
              },
              {
                title: "Programme Clarity",
                body: "Explain what the qualification includes, who it is for, and what outcomes students can expect.",
                example: null,
                color: "#10B981",
              },
              {
                title: "Decision Support",
                body: "Retarget warm prospects with pricing information, deadlines, and clear calls to action.",
                example: null,
                color: "#FFD100",
              },
            ].map((layer, i) => (
              <div key={i} className="card-elevated !p-0 overflow-hidden">
                <div className="h-[3px] w-full" style={{ backgroundColor: layer.color }} />
                <div className="p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: layer.color }}>
                    {layer.title}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-[1.7] mb-2">{layer.body}</p>
                  {layer.example && (
                    <p className="text-xs text-foreground/35 italic">{layer.example}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ad Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
            Ad Types
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Awareness Campaigns",
                body: "Introduce CPS and the programme opportunity to relevant audiences.",
                color: "#6B2D8B",
              },
              {
                title: "Consideration Campaigns",
                body: "Encourage info pack downloads and guide prospects to landing pages.",
                color: "#00A8E1",
              },
              {
                title: "Retargeting Campaigns",
                body: "Re-engage website visitors and content viewers with stronger calls to action.",
                color: "#10B981",
              },
            ].map((ad, i) => (
              <div key={i} className="card-elevated !p-0 overflow-hidden">
                <div className="h-[3px] w-full" style={{ backgroundColor: ad.color }} />
                <div className="p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ad.color }}>
                    {ad.title}
                  </h4>
                  <p className="text-xs text-foreground/45 leading-[1.7]">{ad.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Strategy within Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
            Content Strategy within Meta
          </h3>
          <p className="text-sm text-foreground/45 leading-[1.8] mb-6 max-w-3xl">
            Meta campaigns should leverage the broader content strategy rather than operate in isolation. Organic content and blog material can be repurposed into ad creatives, including:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Career advice snippets",
              "Short qualification explainers",
              "Student transformation stories",
              "Programme highlights",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cps-blue/[0.04] border border-cps-blue/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cps-blue/50 shrink-0" />
                <span className="text-sm text-foreground/55">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  A/B Testing Roadmap                                                 */
/* ------------------------------------------------------------------ */

function ABTestingRoadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            Testing &amp; Optimisation
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          A/B testing roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Structured 5-phase testing calendar ensuring continuous improvement
          across copy, audiences, landing pages, and creative formats.
        </motion.p>

        <div className="space-y-3">
          {AB_TESTING_PLAN.map((test, i) => (
            <motion.div
              key={`ab-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-elevated p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-shrink-0 w-24">
                <span className="text-[11px] font-semibold text-cps-green uppercase tracking-wide">
                  Wk {test.weeks}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground/80 mb-1">
                  {test.test}
                </h4>
                <p className="text-[13px] text-foreground/50">
                  {test.what}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-[11px] text-foreground/40">Impact</span>
                <p className="text-[13px] font-medium text-foreground/70">
                  {test.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Budget Scaling Rules                                                */
/* ------------------------------------------------------------------ */

function EfficiencyFramework() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const CARDS = [
    {
      heading: "6-Month Efficiency Target",
      color: "#6B2D8B",
      items: [
        "78 leads per month",
        "12 enrollments per month",
        "CPL ≤ R193",
        "CPA ≤ R1,286",
      ],
    },
    {
      heading: "3-Month Efficiency Target",
      color: "#00A8E1",
      items: [
        "156 leads per month",
        "23 enrollments per month",
        "CPL ≤ R96",
        "CPA ≤ R643",
      ],
    },
    {
      heading: "Operational Implication",
      color: "#10B981",
      items: [
        "The 3-month scenario requires materially stronger conversion performance from creative, landing pages, nurture, and admissions follow-up. The spend does not increase. The system has to get better.",
      ],
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-gold rounded-full" />
          <span className="section-label text-cps-gold">
            Efficiency Framework at Fixed Spend
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Fixed spend, variable efficiency
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          This strategy assumes the monthly media budget remains fixed at R15,000. The growth question is therefore not &ldquo;How much more can we spend?&rdquo; but &ldquo;How efficiently can we convert the same spend into qualified leads and enrollments?&rdquo;
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="card-elevated !p-0 overflow-hidden"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: card.color }} />
              <div className="p-6">
                <h4 className="text-sm font-bold mb-4" style={{ color: card.color }}>
                  {card.heading}
                </h4>
                <div className="space-y-2">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: `${card.color}60` }} />
                      <span className="text-sm text-foreground/55 leading-[1.7]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Header                                                         */
/* ------------------------------------------------------------------ */

function PaidMediaHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
            <span className="section-label text-cps-purple">Paid Media</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-4">
            Paid Media &amp; Intake Efficiency Strategy
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl">
            Google &amp; Meta deep dives, fixed-spend funnel modelling, A/B testing roadmap,
            and efficiency targets designed to reach 70 students per intake without changing the monthly media budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function PaidMediaPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <PaidMediaHeader />
      {/* Budget Allocation Visual */}
      <section className="relative pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <BudgetAllocationDonut />
            <div className="card-elevated !p-6 sm:!p-8 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-foreground/70 mb-2">R15,000/month Fixed Budget</h4>
              <p className="text-[13px] text-foreground/45 leading-[1.7] mb-4">
                Equal 50/50 split between Google Search (bottom-funnel intent) and Meta (top-funnel awareness).
                Monthly spend stays fixed — efficiency determines outcomes.
              </p>
              <div className="flex gap-3">
                <div className="px-3 py-1.5 rounded-full bg-cps-blue/8 text-cps-blue text-[11px] font-medium">Google: R7,500</div>
                <div className="px-3 py-1.5 rounded-full bg-cps-purple/8 text-cps-purple text-[11px] font-medium">Meta: R7,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PaidMedia />
      <GoogleVsMeta />
      <GoogleDeepDive />
      <MetaDeepDive />
      <CpaModelling />
      <Benchmarks />
      <ABTestingRoadmap />
      <BudgetSummary />
      <Footer />
    </div>
  );
}
