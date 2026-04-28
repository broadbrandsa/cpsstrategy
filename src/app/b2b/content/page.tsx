"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Presentation,
  Linkedin,
  CalendarDays,
  BookOpen,
  MessageSquare,
  Mail,
  GraduationCap,
  Target,
  Shield,
  TrendingUp,
  Layers,
  Quote,
  CheckCircle2,
  XCircle,
  Lightbulb,
  BarChart3,
  Award,
  Scale,
  Rocket,
  Camera,
  Video,
  Clock,
  Swords,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const CONTENT_PILLARS = [
  {
    title: "White Papers",
    step: "01",
    color: "#00A8E1",
    icon: FileText,
    description:
      "Research-backed, co-authored with academics. Gated on the website to drive lead capture. Must avoid AI detection — every paper should carry real intellectual weight.",
    themes: [
      "Topics must align to B2B market strategy themes",
      "Co-author with academics/practitioners for credibility",
      "\u201CLet us kill two birds with one stone. When we design white papers, let us put academic relevance in it. Let\u2019s co-author.\u201D",
      "Distribution: Gated on website, post-event follow-up, LinkedIn, proposals",
    ],
  },
  {
    title: "Master Classes & Webinars",
    step: "02",
    color: "#10B981",
    icon: Presentation,
    description:
      "Two formats: Open sessions (online, promoted via LinkedIn, Facebook, email) and Closed sessions (invitation-only, delivered at client premises using their own data). Plan the full year in advance.",
    themes: [
      "For closed sessions: \u201CUse the client\u2019s own coursework data. This demonstrates value and pulls the broader L&D community into one room.\u201D",
      "Reminder automation: MailChimp sequences at 1 month, 2 weeks, and 2 days before each event",
      "Post-event: Send the relevant white paper to all attendees",
      "Two formats: Open (online, broad reach) and Closed (client-specific, invitation-only)",
    ],
  },
  {
    title: "LinkedIn & Blog Content",
    step: "03",
    color: "#6B2D8B",
    icon: Linkedin,
    description:
      "Elevate the CEO profile as a thought leader. Build brand resonance across two tiers — personal authority and institutional credibility. Blog content drives SEO and long-tail discovery.",
    themes: [
      "CEO profile elevation is critical: \u201CBrand resonance on two tiers \u2014 CEO profile and organisational profile\u201D",
      "Blog content must drive Google indexing \u2014 target L&D search queries",
      "Industry commentary, regulation updates, CPS innovation highlights",
      "Bursary stories, graduation moments",
    ],
  },
  {
    title: "Events & Conferences",
    step: "04",
    color: "#FFD100",
    icon: CalendarDays,
    description:
      "CPS has not spoken at a conference in approximately 2 years. This is a significant gap in thought leadership visibility.",
    themes: [
      "Professional video production (graduation highlight reels, corporate story video)",
      "CEO thought leadership video series for LinkedIn",
      "\u201CNo professional photography or video has been produced since before COVID. A production shoot should be scheduled within 30 days.\u201D",
      "Conference speaking engagements and strategic networking",
    ],
  },
];

const BRAND_ASSETS = {
  photography: [
    "Professional team photos (28 staff + key ecosystem members)",
    "Campus/office environment shots",
    "Student learning moments (with consent)",
    "Graduation ceremony photography",
  ],
  video: [
    "Corporate story video (2\u20133 minutes, for conferences and website)",
    "CEO thought leadership series (short-form, 60\u201390 seconds, for LinkedIn)",
    "Graduation highlight reels (\u201Cgreat energy\u201D \u2014 global choir national anthem, celebration moments)",
    "Student transformation stories (interview format)",
  ],
};

const CALENDAR_ITEMS = [
  { cadence: "1 white paper", frequency: "per quarter", icon: FileText, color: "#00A8E1" },
  { cadence: "1 master class", frequency: "per month (alternating open/closed)", icon: Presentation, color: "#10B981" },
  { cadence: "2 LinkedIn posts", frequency: "per week", icon: Linkedin, color: "#6B2D8B" },
  { cadence: "1 blog post", frequency: "per fortnight", icon: BookOpen, color: "#6B2D8B" },
  { cadence: "1 email campaign", frequency: "per month", icon: Mail, color: "#00A8E1" },
  { cadence: "Graduation events", frequency: "per intake cycle", icon: GraduationCap, color: "#FFD100" },
];

const CONTENT_THEMES = [
  { label: "Future Skills", color: "#00A8E1" },
  { label: "AI in Education", color: "#10B981" },
  { label: "Leadership in Financial Services", color: "#6B2D8B" },
  { label: "Banking Trends", color: "#FFD100" },
  { label: "Student & Client Success", color: "#00A8E1" },
  { label: "Bursary Impact Stories", color: "#10B981" },
];

const MESSAGING_HIERARCHY = [
  { level: "Primary", label: "Outcome-focused", description: "Lead with what the client achieves, not what CPS sells.", color: "#00A8E1", icon: Target },
  { level: "Secondary", label: "Future skills alignment", description: "Position CPS as forward-looking, connected to where the industry is heading.", color: "#10B981", icon: TrendingUp },
  { level: "Tertiary", label: "Platform & innovation", description: "CPSLearn as the delivery mechanism — technology that enables scale.", color: "#6B2D8B", icon: Layers },
  { level: "Trust", label: "Track record", description: "More than 20 years (two decades), 35,000+ professionals. Proof that this works at scale.", color: "#FFD100", icon: Shield },
];

const PROBLEM_LED = [
  {
    problem: "Our teams have transactional mindsets",
    solution: "Leadership development programmes",
    outcome: "Trusted advisor capability across teams",
    color: "#00A8E1",
    icon: Lightbulb,
  },
  {
    problem: "We can\u2019t measure training impact",
    solution: "Pre/post assessment via CPSLearn",
    outcome: "12\u201320% measurable competency shifts",
    color: "#10B981",
    icon: BarChart3,
  },
  {
    problem: "We need to meet BBBEE targets",
    solution: "Accredited QCTO qualifications",
    outcome: "Compliant skills development spend",
    color: "#6B2D8B",
    icon: Award,
  },
  {
    problem: "Our L&D can\u2019t scale",
    solution: "CPSLearn online delivery",
    outcome: "One platform, multiple divisions",
    color: "#FFD100",
    icon: Rocket,
  },
];

const COMPETITOR_COUNTERS = [
  {
    claim: "\u201CWe\u2019re future-skills focused\u201D",
    counter: "\u201CSo are we \u2014 and we\u2019ve been doing it for more than 20 years (two decades) with 30,000+ learnerships delivered\u201D",
    useIn: "LinkedIn, proposals",
    color: "#00A8E1",
  },
  {
    claim: "\u201COur programmes are cutting-edge\u201D",
    counter: "\u201COur AI assessment marking is live and regulator-approved. Our platform was built in-house, not bought off the shelf.\u201D",
    useIn: "Platform demos, proposals",
    color: "#10B981",
  },
  {
    claim: "\u201CWe have 12+ product categories\u201D",
    counter: "\u201CWe have focused, proven categories. 30,000 learnerships vs 6,400. Breadth of naming isn\u2019t breadth of delivery.\u201D",
    useIn: "Sales conversations",
    color: "#6B2D8B",
  },
  {
    claim: "\u201CWe do great webinars\u201D",
    counter: "\u201CWe deliver master classes using your own data, in your environment. That\u2019s not a broadcast \u2014 it\u2019s a consultation.\u201D",
    useIn: "Client pitches",
    color: "#FFD100",
  },
];

const DO_SAY = [
  "Skills development partner",
  "Future skills",
  "Outcome-focused",
  "Measurable impact",
];

const DONT_SAY = [
  "Training provider",
  "Courses for sale",
  "Cheap",
  "Online classes",
];

/* ════════════════════════════════════════════════════════════════════
   SECTION 0 — Page Header
   ════════════════════════════════════════════════════════════════════ */

function PageHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E1]/[0.03] via-transparent to-[#6B2D8B]/[0.03]" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#00A8E1]/[0.02] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#00A8E1] rounded-full" />
            <span className="section-label text-[#00A8E1]">B2B Content Strategy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            B2B Content &{" "}
            <span className="bg-gradient-to-r from-[#00A8E1] to-[#6B2D8B] bg-clip-text text-transparent">
              Thought Leadership
            </span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-10">
            A structured approach to building authority, generating demand, and positioning CPS as the definitive voice in skills development for financial services.
          </p>
        </motion.div>

        {/* Opening quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#00A8E1] to-[#6B2D8B]" />
          <div className="p-6 sm:p-8 flex gap-4">
            <Quote size={28} className="text-[#00A8E1]/30 shrink-0 mt-1" />
            <div>
              <p className="text-sm sm:text-base text-foreground/60 leading-[1.9] italic">
                &ldquo;Thought leadership has been minimized to LinkedIn posts. We haven&rsquo;t gone broader from a perspective of creativity. We just have so much depth within Cornerstone which we are not augmenting.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 1 — Content Hierarchy (4 Pillars)
   ════════════════════════════════════════════════════════════════════ */

function ContentHierarchy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#00A8E1] rounded-full" />
          <span className="section-label text-[#00A8E1]">01 &mdash; Content Hierarchy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Four pillars of content
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Each pillar serves a distinct role in the content ecosystem — from deep research that builds authority to frequent social posts that maintain visibility.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {CONTENT_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="card-elevated !p-0 overflow-hidden group hover:-translate-y-1 transition-all"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: pillar.color }} />
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${pillar.color}0A`, border: `1px solid ${pillar.color}15` }}
                    >
                      <Icon size={18} style={{ color: pillar.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: pillar.color }}>
                        Pillar {pillar.step}
                      </span>
                      <h3 className="text-base font-semibold text-foreground/85">{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/50 leading-[1.8] mb-5">{pillar.description}</p>
                  <div className="space-y-2">
                    {pillar.themes.map((theme) => (
                      <div key={theme} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                          style={{ backgroundColor: pillar.color }}
                        />
                        <span className="text-xs text-foreground/45 leading-[1.6]">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 1B — Brand Asset Production
   ════════════════════════════════════════════════════════════════════ */

function BrandAssetProduction() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#EF4444] rounded-full" />
          <span className="section-label text-[#EF4444]">Brand Assets</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Brand Asset Production &mdash; What Needs to Be Created
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-3xl mb-12"
        >
          CPS has not invested in professional brand assets since before COVID. This is a critical gap that affects every channel — from LinkedIn to proposals to conferences.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Photography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden hover:-translate-y-1 transition-all"
          >
            <div className="h-[3px] w-full bg-[#6B2D8B]" />
            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#6B2D8B0A", border: "1px solid #6B2D8B15" }}
                >
                  <Camera size={18} className="text-[#6B2D8B]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B2D8B]">
                    Photography
                  </span>
                  <h3 className="text-base font-semibold text-foreground/85">Professional Photography</h3>
                </div>
              </div>
              <div className="space-y-2">
                {BRAND_ASSETS.photography.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 bg-[#6B2D8B]" />
                    <span className="text-xs text-foreground/45 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="card-elevated !p-0 overflow-hidden hover:-translate-y-1 transition-all"
          >
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#00A8E10A", border: "1px solid #00A8E115" }}
                >
                  <Video size={18} className="text-[#00A8E1]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A8E1]">
                    Video
                  </span>
                  <h3 className="text-base font-semibold text-foreground/85">Video Production</h3>
                </div>
              </div>
              <div className="space-y-2">
                {BRAND_ASSETS.video.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 bg-[#00A8E1]" />
                    <span className="text-xs text-foreground/45 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="card-elevated !p-0 overflow-hidden"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#EF4444] to-[#FFD100]" />
          <div className="p-6 sm:p-8 flex gap-4 items-start">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#EF44440A", border: "1px solid #EF444415" }}
            >
              <Clock size={16} className="text-[#EF4444]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF4444] block mb-1">
                Timeline
              </span>
              <p className="text-sm text-foreground/60 leading-[1.8]">
                Book the first production shoot within 30 days. Prioritise corporate story video and team photography.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 2 — Content Calendar Framework
   ════════════════════════════════════════════════════════════════════ */

function ContentCalendar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
          <span className="section-label text-[#10B981]">02 &mdash; Content Calendar</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Quarterly rhythm
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          A consistent publishing cadence that balances depth with frequency. Each content type has a defined rhythm to maintain momentum without overloading the team.
        </motion.p>

        {/* Calendar cadence cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {CALENDAR_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.cadence}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="card-elevated flex items-center gap-4 hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}0A`, border: `1px solid ${item.color}15` }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/80">{item.cadence}</p>
                  <p className="text-xs text-foreground/40">{item.frequency}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content themes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-5">
            Rotating Content Themes
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {CONTENT_THEMES.map((theme) => (
              <span
                key={theme.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  color: theme.color,
                  borderColor: `${theme.color}20`,
                  backgroundColor: `${theme.color}06`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                {theme.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 3 — B2B Messaging Framework
   ════════════════════════════════════════════════════════════════════ */

function MessagingFramework() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-[#6B2D8B] rounded-full" />
          <span className="section-label text-[#6B2D8B]">03 &mdash; Messaging Framework</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          B2B messaging framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          A structured messaging system that ensures every piece of content reinforces the same strategic position — from white papers to LinkedIn posts.
        </motion.p>

        {/* Core positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#00A8E1] via-[#6B2D8B] to-[#10B981]" />
          <div className="p-6 sm:p-8 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B2D8B] mb-3 block">
              Core Positioning
            </span>
            <p className="text-base sm:text-lg font-semibold text-foreground/80 leading-[1.7] max-w-2xl mx-auto">
              &ldquo;CPS transforms lives through education. We are not a training provider — we are a partner in skills development.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Messaging Hierarchy */}
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-5">
          Messaging Hierarchy
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {MESSAGING_HIERARCHY.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="card-elevated !p-0 overflow-hidden hover:-translate-y-1 transition-all"
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: item.color }} />
                <div className="p-5 sm:p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}0A`, border: `1px solid ${item.color}15` }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block mb-1"
                    style={{ color: item.color }}
                  >
                    {item.level}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground/80 mb-2">{item.label}</h4>
                  <p className="text-xs text-foreground/45 leading-[1.7]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Problem-Led Messaging */}
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-5">
          Problem-Led Messaging
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {PROBLEM_LED.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white"
                style={{ borderLeft: `4px solid ${item.color}` }}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}0A`, border: `1px solid ${item.color}15` }}
                    >
                      <Icon size={15} style={{ color: item.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/30 block mb-0.5">
                        Client says
                      </span>
                      <p className="text-sm font-medium text-foreground/70 italic">
                        &ldquo;{item.problem}&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2.5 ml-12">
                    <div className="flex items-start gap-2">
                      <MessageSquare size={12} className="text-foreground/25 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">CPS responds with</span>
                        <p className="text-xs text-foreground/55 leading-[1.6]">{item.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target size={12} style={{ color: item.color }} className="mt-0.5 shrink-0 opacity-60" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">Outcome</span>
                        <p className="text-xs font-medium leading-[1.6]" style={{ color: item.color }}>
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What Competitors Say (And How We Counter) */}
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-5">
          What Competitors Say (And How We Counter)
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="card-elevated !p-0 overflow-hidden mb-14"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#EF4444] to-[#6B2D8B]" />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-black/[0.05]">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                    Competitor Claim
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                    CPS Counter
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                    Use In
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_COUNTERS.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/[0.03] last:border-b-0"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                          style={{ backgroundColor: row.color }}
                        />
                        <span className="text-xs text-foreground/55 leading-[1.6]">{row.claim}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-foreground/60 leading-[1.6] font-medium">{row.counter}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-medium border"
                        style={{
                          color: row.color,
                          borderColor: `${row.color}20`,
                          backgroundColor: `${row.color}06`,
                        }}
                      >
                        {row.useIn}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Do Say / Don't Say */}
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-5">
          Language Guidelines
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#10B981]" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                <h4 className="text-sm font-semibold text-foreground/80">Do Say</h4>
              </div>
              <div className="space-y-2.5">
                {DO_SAY.map((phrase) => (
                  <div key={phrase} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="text-sm text-foreground/55">{phrase}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#EF4444]" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={16} className="text-[#EF4444]" />
                <h4 className="text-sm font-semibold text-foreground/80">Don&rsquo;t Say</h4>
              </div>
              <div className="space-y-2.5">
                {DONT_SAY.map((phrase) => (
                  <div key={phrase} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                    <span className="text-sm text-foreground/55 line-through decoration-[#EF4444]/30">{phrase}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE EXPORT
   ════════════════════════════════════════════════════════════════════ */

export default function B2BContentPage() {
  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-poppins)]">
      <PageHeader />
      <ContentHierarchy />
      <BrandAssetProduction />
      <ContentCalendar />
      <MessagingFramework />
      <Footer />
    </main>
  );
}
