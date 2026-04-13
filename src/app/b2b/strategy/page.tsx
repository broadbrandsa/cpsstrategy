"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Briefcase,
  Shield,
  Target,
  TrendingUp,
  Lightbulb,
  Award,
  Layers,
  Zap,
  Globe,
  BarChart3,
  ArrowRight,
  Quote,
  Building2,
  Network,
  GraduationCap,
  Brain,
  Monitor,
  Users,
  BadgeCheck,
  AlertTriangle,
  DollarSign,
  Search,
  Handshake,
  Swords,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Mail,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Data ─── */

const PERSONA_ONE = {
  title: "The L&D Decision Maker",
  role: "Head of L&D / Learning Manager at major bank or financial services company",
  demographics: "Senior professional, 35\u201355, manages training budgets and vendor relationships",
  color: "#00A8E1",
  icon: GraduationCap,
  painPoints: [
    { text: "Budget utilisation pressure \u2014 \u201cI\u2019d be like, guys, I\u2019ve got all this budget, the L&D team are chasing me because we haven\u2019t spent it\u201d (MultiChoice example)", icon: DollarSign },
    { text: "Finding accredited providers who genuinely understand financial services", icon: BadgeCheck },
    { text: "Measuring training impact and linking it to business outcomes", icon: BarChart3 },
    { text: "Scaling programmes across large, distributed workforces with different divisional needs", icon: Users },
  ],
  job: "Find an accredited training partner who understands our industry and can deliver measurable skills development at scale across our organisation.",
  decisionProcess: "Relationship-driven, multiple approvers (CFO, department heads), long cycle. \u2018It takes me a long time to get to the L&D head, because it\u2019s diary coordination, and I\u2019m not their first priority.\u2019",
  discovery: "Almost exclusively through relationships. NOT through website (zero website B2B leads in 10 years).",
};

const PERSONA_TWO = {
  title: "The Corporate Stakeholder / Broker",
  role: "HR Director / Skills Development Manager / Training Broker",
  demographics: "30\u201350, multiple industry connections, focused on BBBEE compliance and skills development",
  color: "#6B2D8B",
  icon: Network,
  painPoints: [
    { text: "Needs trusted accredited providers they can confidently recommend", icon: Shield },
    { text: "Regulatory compliance (QCTO/SETA alignment) is non-negotiable", icon: BadgeCheck },
    { text: "Demonstrable outcomes that satisfy multiple internal stakeholders and WSP reporting", icon: Target },
  ],
  job: "Connect our organisation with a credible, accredited training partner that helps us meet skills development targets and BBBEE requirements.",
  discovery: "Through relationships, conferences, broker networks \u2014 currently NOT through website. This is why the broker model needs standalone collateral.",
};

const COMPARISON_FACTORS = [
  { factor: "Track Record", cps: "25 years in banking & financial services", novia: "~12 years, younger company", edge: "cps" },
  { factor: "Learnership Volume", cps: "30,000+ learnerships delivered", novia: "6,400 learnerships", edge: "cps" },
  { factor: "Platform", cps: "CPSLearn \u2014 proprietary, AI-powered, built in-house", novia: "Third-party LMS", edge: "cps" },
  { factor: "AI Capabilities", cps: "AI assessment marking (LIVE, regulator approved), AI reflection tool (LIVE), AI program building (in progress)", novia: "No known AI integration", edge: "cps" },
  { factor: "Assessment Speed", cps: "2\u00d7 faster feedback to students", novia: "Standard turnaround", edge: "cps" },
  { factor: "Product Breadth", cps: "Focused portfolio across banking, insurance, leadership", novia: "Broader appearing \u2014 clever product naming and category clustering creates \u201cillusion of lots of product\u201d", edge: "tie" },
  { factor: "Brand Building", cps: "Strong institutional credibility with major banks, weak digital brand presence", novia: "Stronger digital visibility through webinars and product naming, weaker institutional depth", edge: "novia" },
  { factor: "Website", cps: "Zero B2B leads in 10 years \u2014 rebuilding", novia: "Recently redesigned (described as \u201cbusy\u201d and \u201cvery obviously AI-generated\u201d by CPS team)", edge: "novia" },
  { factor: "Pricing", cps: "~20% below competitors (confidential \u2014 competitive advantage)", novia: "Not published", edge: "cps" },
  { factor: "Competitive Strength", cps: "Volume, relationships, sector depth, platform technology, pricing", novia: "Perception of modernity, digital brand, webinar-led authority", edge: "tie" },
];

const NOVIA_SELF_CLAIMS = [
  "Future-skills focused (digitization, problem-solving, critical thinking)",
  "Webinar-driven thought leadership",
  "Clever, memorable product naming",
  "12+ product categories that create perception of breadth",
];

const CPS_GENUINE_WINS = [
  { text: "5\u00d7 the learnership volume (30,000+ vs 6,400)", icon: BarChart3 },
  { text: "Proprietary AI-powered platform vs. third-party LMS", icon: Monitor },
  { text: "AI assessment marking \u2014 LIVE and regulator approved (Novia has nothing like this)", icon: Brain },
  { text: "25 years vs ~12 years of track record", icon: Award },
  { text: "~20% lower pricing (but never reveal this upfront \u2014 it\u2019s a closing advantage)", icon: DollarSign },
  { text: "Deep relationships with SA\u2019s major banks (Absa, Standard Bank, FNB, Capitec, Nedbank)", icon: Handshake },
];

const NOVIA_PERCEIVED_ADVANTAGES = [
  {
    claim: "\u201cThey have more products\u201d",
    counter: "\u201cThey cluster and name cleverly. We actually deliver more \u2014 30,000+ learnerships vs their 6,400. We don\u2019t need to create the illusion of breadth; we have the substance.\u201d",
  },
  {
    claim: "\u201cThey look more modern\u201d",
    counter: "\u201cWe\u2019re the ones with AI-powered assessment that\u2019s regulator approved. Our platform was built in-house over 25 years and has capabilities no competitor can match.\u201d",
  },
  {
    claim: "\u201cThey do great webinars\u201d",
    counter: "\u201cWe\u2019re launching our own master class and thought leadership programme. But our competitive advantage is that we can walk into a client, use their own data, and deliver personalised insights no webinar can match.\u201d",
  },
];

const PITCH_RULES = [
  "Demo the CPSLearn platform live \u2014 \u201cThis creates a lot of interest and demonstrates we are ahead of the curve\u201d",
  "Lead with outcomes and measurement, not features",
  "Never reveal pricing until negotiation stage",
  "Use the AXA win story: \u201cWe became preferred provider specifically because our pricing was competitive \u2014 and the competitor didn\u2019t know our structure\u201d",
];

const COMPETITIVE_RESPONSES = [
  {
    heading: "Don\u2019t copy, differentiate",
    body: "\u201cI don\u2019t want us to follow them by any means.\u201d CPS wins on volume, relationships, platform technology, and pricing. Play to those strengths rather than competing on Novia\u2019s terms.",
    color: "#00A8E1",
    icon: Lightbulb,
    step: "01",
  },
  {
    heading: "Product naming matters",
    body: "\u201cPeople buy a name. The name sounds like it\u2019s gonna do it.\u201d Rename programmes to communicate outcomes, not just regulatory codes. \u201cLeadership Agility in the Financial Markets\u201d is better than \u201cAdvanced Certificate in Leadership.\u201d",
    color: "#6B2D8B",
    icon: Award,
    step: "02",
  },
  {
    heading: "Category clustering",
    body: "Maximum 6 meaningful categories. Novia has 12+ which creates confusion. CPS should cluster into: Banking & Financial Services, Leadership & Management, Insurance & Risk, Future Skills & Digital, Vocational Qualifications, Custom Solutions.",
    color: "#10B981",
    icon: Layers,
    step: "03",
  },
  {
    heading: "Future skills positioning",
    body: "\u201cYour bankers don\u2019t want to be seen as bankers. Capitec says \u2018We\u2019re not a bank, we\u2019re fintech.\u2019\u201d Position CPS around foundational skills with industry context.",
    color: "#FFD100",
    icon: Zap,
    step: "04",
  },
];

const POSITIONING_SKILLS = [
  { label: "Problem-solving", icon: Brain, color: "#00A8E1" },
  { label: "Critical thinking", icon: Lightbulb, color: "#6B2D8B" },
  { label: "Digital literacy", icon: Monitor, color: "#10B981" },
  { label: "Leadership agility", icon: TrendingUp, color: "#FFD100" },
];

const MARKET_DYNAMICS = [
  {
    text: "Banking qualification market is saturating \u2014 organisations thinking more strategically about future-readiness",
    icon: AlertTriangle,
    color: "#EF4444",
  },
  {
    text: "Shift from industry-specific training to foundational future skills that transfer across sectors",
    icon: TrendingUp,
    color: "#00A8E1",
  },
  {
    text: "Transactional mindsets \u2192 trusted advisor capability = core transformation CPS enables",
    icon: Handshake,
    color: "#6B2D8B",
  },
  {
    text: "L&D budget utilisation pressure creates opportunities \u2014 \u201cI always got into trouble for not spending the money\u201d",
    icon: DollarSign,
    color: "#10B981",
  },
  {
    text: "50% of last year\u2019s B2C intake came from direct mail \u2014 test the same approach for B2B (direct mail to L&D leaders)",
    icon: Mail,
    color: "#FFD100",
  },
];

/* ════════════════════════════════════════════════════════════════════
   HEADER — Page Hero
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
            <span className="section-label text-[#00A8E1]">B2B Strategy &amp; Market Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            Understanding who buys, how they decide, and{" "}
            <span className="bg-gradient-to-r from-[#00A8E1] to-[#6B2D8B] bg-clip-text text-transparent">
              where CPS wins
            </span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-8">
            B2B sales at CPS are relationship-driven. Understanding buyer personas, competitive dynamics, and market shifts is the foundation for a growth engine that supplements relationships with digital reach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="p-6 sm:p-7">
              <h3 className="text-xs font-bold text-[#00A8E1] uppercase tracking-wider mb-3">Buyer Understanding</h3>
              <p className="text-sm text-foreground/50 leading-[1.8]">
                B2B sales at CPS are relationship-driven. Understanding buyer personas, pain points, and decision cycles is critical to building a repeatable growth engine.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated !p-0 overflow-hidden"
          >
            <div className="h-[3px] w-full bg-[#6B2D8B]" />
            <div className="p-6 sm:p-7">
              <h3 className="text-xs font-bold text-[#6B2D8B] uppercase tracking-wider mb-3">Competitive Clarity</h3>
              <p className="text-sm text-foreground/50 leading-[1.8]">
                Knowing how competitors position and where CPS can differentiate is the foundation for a B2B strategy that wins on its own terms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 01 — B2B Buyer Personas
   ════════════════════════════════════════════════════════════════════ */

function PersonaCard({
  persona,
  index,
  inView,
}: {
  persona: typeof PERSONA_ONE | typeof PERSONA_TWO;
  index: number;
  inView: boolean;
}) {
  const isFirst = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="card-elevated !p-0 overflow-hidden"
    >
      <div className="h-[3px] w-full" style={{ backgroundColor: persona.color }} />
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${persona.color}10`, border: `1px solid ${persona.color}20` }}
          >
            <persona.icon size={22} style={{ color: persona.color }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground/90">{persona.title}</h3>
            <p className="text-sm text-foreground/50 mt-1">{persona.role}</p>
          </div>
        </div>

        {/* Demographics */}
        <div className="flex items-center gap-2 mb-6">
          <User size={14} className="text-foreground/30" />
          <span className="text-xs text-foreground/40">{persona.demographics}</span>
        </div>

        {/* Pain Points */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-4">Pain Points</h4>
          <div className="space-y-3">
            {persona.painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/[0.02] border border-black/[0.03]">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${persona.color}10` }}
                >
                  <point.icon size={14} style={{ color: persona.color }} />
                </div>
                <p className="text-sm text-foreground/55 leading-[1.7]">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job To Be Done */}
        <div className="mb-6 p-4 rounded-xl border-l-[3px]" style={{ borderColor: persona.color, backgroundColor: `${persona.color}06` }}>
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">Job To Be Done</h4>
          <p className="text-sm text-foreground/70 leading-[1.7] italic">&ldquo;{persona.job}&rdquo;</p>
        </div>

        {/* Decision Process */}
        {isFirst && (
          <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.03] mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">Decision Process</h4>
            <p className="text-sm text-foreground/55 leading-[1.7]">
              {(persona as typeof PERSONA_ONE).decisionProcess}
            </p>
          </div>
        )}

        {/* Discovery Channel */}
        <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.03]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">
            Discovery Channel
          </h4>
          <p className="text-sm text-foreground/55 leading-[1.7]">
            {persona.discovery}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function BuyerPersonas() {
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
          <span className="section-label text-[#00A8E1]">01 &mdash; B2B Buyer Personas</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Who Buys B2B Training at CPS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          Two primary buyer personas drive corporate training decisions. Understanding their motivations, pain points, and decision processes is the foundation for effective B2B positioning.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6">
          <PersonaCard persona={PERSONA_ONE} index={0} inView={inView} />
          <PersonaCard persona={PERSONA_TWO} index={1} inView={inView} />
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 02 — Competitive Landscape
   ════════════════════════════════════════════════════════════════════ */

function CompetitiveLandscape() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const battleRef = useRef(null);
  const battleInView = useInView(battleRef, { once: true, margin: "-80px" });

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
          <span className="section-label text-[#6B2D8B]">02 &mdash; Competitive Landscape</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Competitive Landscape &mdash; CPS vs. Novia One Business School
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-3xl mb-12"
        >
          Novia One Business School is CPS&rsquo;s primary direct competitor. They&rsquo;re aggressive, digitally visible, and &ldquo;really kind of in our faces.&rdquo; Understanding exactly where CPS wins and where Novia has perceived advantage is critical for positioning.
        </motion.p>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#00A8E1] to-[#6B2D8B]" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/[0.06]">
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground/40">Factor</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#00A8E1]">CPS</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6B2D8B]">Novia One</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FACTORS.map((row, i) => (
                  <tr key={row.factor} className={`${i % 2 === 0 ? "bg-black/[0.01]" : ""} border-b border-black/[0.03] last:border-b-0`}>
                    <td className="px-6 py-4 font-medium text-foreground/70">{row.factor}</td>
                    <td className="px-6 py-4 text-foreground/55">
                      <div className="flex items-center gap-2">
                        {row.edge === "cps" && (
                          <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                        )}
                        {row.edge === "novia" && (
                          <span className="w-2 h-2 rounded-full bg-[#EF4444]/40 shrink-0" />
                        )}
                        {row.edge === "tie" && (
                          <span className="w-2 h-2 rounded-full bg-[#FFD100] shrink-0" />
                        )}
                        {row.cps}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground/55">
                      <div className="flex items-center gap-2">
                        {row.edge === "novia" && (
                          <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                        )}
                        {row.edge === "cps" && (
                          <span className="w-2 h-2 rounded-full bg-[#EF4444]/40 shrink-0" />
                        )}
                        {row.edge === "tie" && (
                          <span className="w-2 h-2 rounded-full bg-[#FFD100] shrink-0" />
                        )}
                        {row.novia}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Legend */}
          <div className="px-6 py-3 border-t border-black/[0.04] flex items-center gap-5 text-[11px] text-foreground/35">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]" /> Advantage</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#EF4444]/40" /> Behind</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FFD100]" /> Even</span>
          </div>
        </motion.div>

        {/* Key Insight Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-elevated !p-0 overflow-hidden mb-12"
        >
          <div className="h-[3px] w-full bg-[#FFD100]" />
          <div className="p-6 sm:p-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFD100]/10 border border-[#FFD100]/20 flex items-center justify-center shrink-0">
              <Quote size={18} className="text-[#FFD100]" />
            </div>
            <div>
              <p className="text-base sm:text-lg text-foreground/75 leading-[1.8] italic font-medium">
                &ldquo;Novia don&rsquo;t compete with us on volume, but definitely on value. Sometimes we take their lunch, sometimes they take ours &mdash; but we want to be taking their lunch more often.&rdquo;
              </p>
              <p className="text-xs text-foreground/35 mt-3">Key stakeholder insight</p>
            </div>
          </div>
        </motion.div>

        {/* ── Battle Card ── */}
        <div ref={battleRef}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={battleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#EF4444] rounded-full" />
              <span className="section-label text-[#EF4444]">Competitive Battle Card</span>
            </div>
            <h3 className="text-xl font-bold text-foreground/90 mb-2">
              When You&rsquo;re Up Against Novia
            </h3>
          </motion.div>

          {/* What Novia Says */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={battleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated !p-0 overflow-hidden mb-5"
          >
            <div className="h-[3px] w-full bg-[#6B2D8B]" />
            <div className="p-6 sm:p-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B2D8B] mb-4">What Novia Says About Themselves</h4>
              <div className="space-y-3">
                {NOVIA_SELF_CLAIMS.map((claim, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/[0.02] border border-black/[0.03]">
                    <span className="w-2 h-2 rounded-full bg-[#6B2D8B]/40 shrink-0 mt-1.5" />
                    <p className="text-sm text-foreground/55 leading-[1.7]">{claim}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Where CPS Genuinely Wins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={battleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-elevated !p-0 overflow-hidden mb-5"
          >
            <div className="h-[3px] w-full bg-[#10B981]" />
            <div className="p-6 sm:p-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-4">Where CPS Genuinely Wins</h4>
              <div className="space-y-3">
                {CPS_GENUINE_WINS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#10B981]/[0.03] border border-[#10B981]/[0.08]">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#10B98110" }}
                    >
                      <item.icon size={14} className="text-[#10B981]" />
                    </div>
                    <p className="text-sm text-foreground/55 leading-[1.7]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Where Novia Has Perceived Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={battleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated !p-0 overflow-hidden mb-5"
          >
            <div className="h-[3px] w-full bg-[#EF4444]" />
            <div className="p-6 sm:p-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#EF4444] mb-4">
                Where Novia Has Perceived Advantage (And How to Counter)
              </h4>
              <div className="space-y-4">
                {NOVIA_PERCEIVED_ADVANTAGES.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.04]">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#EF4444]/10">
                        <XCircle size={14} className="text-[#EF4444]" />
                      </div>
                      <p className="text-sm font-medium text-foreground/70 leading-[1.7]">{item.claim}</p>
                    </div>
                    <div className="flex items-start gap-3 ml-10">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#10B981]/10">
                        <ArrowRight size={14} className="text-[#10B981]" />
                      </div>
                      <p className="text-sm text-foreground/55 leading-[1.7] italic">Counter: {item.counter}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* In a Competitive Pitch, Always */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={battleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card-elevated !p-0 overflow-hidden mb-12"
          >
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="p-6 sm:p-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A8E1] mb-4">In a Competitive Pitch, Always</h4>
              <div className="space-y-3">
                {PITCH_RULES.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#00A8E1]/[0.03] border border-[#00A8E1]/[0.08]">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#00A8E110" }}
                    >
                      <CheckCircle2 size={14} className="text-[#00A8E1]" />
                    </div>
                    <p className="text-sm text-foreground/55 leading-[1.7]">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Competitive Response Strategy ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-foreground/90 mb-2">Four Strategic Moves</h3>
          <p className="text-sm text-foreground/45 max-w-2xl">
            Four strategic moves to differentiate CPS from Novia and create a distinctive market position.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {COMPETITIVE_RESPONSES.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="card-elevated !p-0 overflow-hidden group hover:-translate-y-1 transition-all"
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: item.color }} />
              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: item.color }}>
                      {item.step}
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-foreground/80 mb-2">{item.heading}</h4>
                <p className="text-sm text-foreground/50 leading-[1.8]">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SECTION 03 — Market Intelligence
   ════════════════════════════════════════════════════════════════════ */

function MarketIntelligence() {
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
          <span className="section-label text-[#10B981]">03 &mdash; Market Intelligence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-4 tracking-tight"
        >
          Market Intelligence &amp; Positioning Shifts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/50 max-w-2xl mb-12"
        >
          The B2B training market is shifting. CPS must read these signals and position accordingly.
        </motion.p>

        {/* Industry Positioning Shift Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated !p-0 overflow-hidden mb-10"
        >
          <div className="h-[3px] w-full bg-[#00A8E1]" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#00A8E1]/10 border border-[#00A8E1]/20 flex items-center justify-center shrink-0">
                <Quote size={18} className="text-[#00A8E1]" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8E1] mb-3">Industry Positioning Shift</h3>
                <p className="text-base sm:text-lg text-foreground/75 leading-[1.8] italic font-medium">
                  &ldquo;Your bankers don&rsquo;t want to be seen as bankers. Capitec says &lsquo;We&rsquo;re not a bank, we&rsquo;re fintech.&rsquo;&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-black/[0.05]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-5">
                CPS should position around
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {POSITIONING_SKILLS.map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.04] hover:border-black/[0.08] transition-all"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${skill.color}10` }}
                    >
                      <skill.icon size={16} style={{ color: skill.color }} />
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* B2B Market Dynamics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-foreground/90 mb-2">B2B Market Dynamics</h3>
          <p className="text-sm text-foreground/45 max-w-2xl">
            Key forces shaping the corporate training landscape that CPS must respond to.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {MARKET_DYNAMICS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.04] hover:border-black/[0.08] transition-all hover:-translate-y-0.5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
              >
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <p className="text-sm text-foreground/55 leading-[1.8]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE — B2B Strategy & Market
   ════════════════════════════════════════════════════════════════════ */

export default function B2BStrategyMarketPage() {
  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-poppins)]">
      <PageHeader />
      <BuyerPersonas />
      <CompetitiveLandscape />
      <MarketIntelligence />
      <Footer />
    </main>
  );
}
