// ===================================================
// CPS B2C Digital Marketing Strategy — Content Data
// Prepared by Broadbrand | March 2026
// ===================================================

export const META = {
  title: "Digital Marketing Strategy",
  subtitle: "B2C Student Acquisition",
  company: "Cornerstone Performance Solutions",
  preparedBy: "Broadbrand",
  date: "March 2026",
  focus: "HCIB (Higher Certificate in Banking) & ACL6 (Advanced Certificate in Leadership)",
  target: "35 students per qualification per intake",
  cpaTarget: "R400",
  launchDate: "May 10, 2026",
  mediaBudget: "R15,000/month",
};

export const KEY_METRICS = [
  { label: "Target CPA", value: "R400", description: "Per enrolled student" },
  { label: "Per Qualification", value: "35", description: "Students per intake" },
  { label: "Total Target", value: "70", description: "Students per intake" },
  { label: "Media Budget", value: "R15k", description: "Monthly spend" },
  { label: "Launch Date", value: "May 10", description: "First intake 2026" },
  { label: "Programmes", value: "2", description: "HCIB & ACL6" },
];

export const SITUATION_ANALYSIS = {
  overview:
    "CPS is a 25-year-old education company in strategic transition. Under new leadership, it is shifting from a predominantly B2B model (serving banks and financial institutions) to building a sustainable B2C direct-to-student channel.",
  revenueB2B: 70,
  revenueB2C: 30,
  challenges: [
    "No historical B2C performance data — previous agency retained all analytics and IP",
    "Current website is not optimised for B2C conversion",
    "Google Ads running but generic — focused on NQF levels rather than career outcomes",
    "No Meta (Facebook/Instagram) ads currently active",
    "Lead nurturing flows do not exist — some form submissions receive no confirmation",
    "Application form is an 8-step process with a R300 fee, creating significant friction",
    "Brand awareness among individual students is low",
  ],
  strengths: [
    { title: "CPSLearn Platform", desc: "Proprietary AI-powered personalised learning, reflection tools, and AI marking — no competitor has this" },
    { title: "BEE Level 1", desc: "Critical for corporate clients and students seeking SETA funding" },
    { title: "11,400+ Graduates", desc: "Trained across SA's biggest banks — Absa, Standard Bank, FNB, Capitec, Nedbank" },
    { title: "Brandon Hall Awards", desc: "Learning excellence awards — equivalent to the Oscars in L&D" },
    { title: "20% Below Competitors", desc: "Competitive pricing approximately 20% below major competitors" },
    { title: "CHE & QCTO Accredited", desc: "Council on Higher Education and QCTO accreditation on qualifications" },
    { title: "Proprietary Methods", desc: "RAMPed, Business Impact Learning, Digital Process Facilitation" },
    { title: "AI Assessment Speed", desc: "2-3 minutes vs 45-60 minutes human marking turnaround" },
  ],
};

export const PERSONAS = [
  {
    id: "hcib",
    name: "The Banking Starter",
    programme: "HCIB",
    age: "22–32",
    demographics:
      "Matric graduate or career changer, based in Gauteng/WC/KZN metros, currently employed in entry-level banking or retail, or unemployed seeking entry into financial services.",
    psychographics:
      "Ambitious but uncertain. Fears wasting money on a qualification that won't lead anywhere. Researches extensively before committing. Compares CPS against Milpark, MANCOSA, Regent, and university options.",
    jtbd: "Help me get a real qualification that banks actually recognise, so I can build a career in banking and earn more.",
    color: "#7C3AED",
  },
  {
    id: "acl6",
    name: "The Aspiring Leader",
    programme: "ACL6",
    age: "28–40",
    demographics:
      "Currently employed in financial services or professional services, 3-7 years work experience, seeking management/leadership roles, based in SA metros.",
    psychographics:
      "Has hit a career ceiling. Knows they need formal credentials to advance. Values practical, applicable learning over academic theory. Time-poor and needs flexibility.",
    jtbd: "Help me prove I'm ready for management and get the qualification that unlocks the next level.",
    color: "#2EA3F2",
  },
];

export const PSYCHOLOGY_TABLE = [
  {
    principle: "Loss Aversion",
    application: "Students fear wasting money more than they desire gaining a qualification. Frame messaging around what they lose by NOT acting.",
    implementation: "Use intake deadlines as genuine urgency.",
  },
  {
    principle: "Social Proof",
    application: "Low brand awareness means students need reassurance from peers.",
    implementation: "Graduate count (11,400+), banking client logos, pass rate data, and peer narratives.",
  },
  {
    principle: "Authority Bias",
    application: "CHE accreditation, BANKSETA awards, and partnerships with SA's top banks are underused trust signals.",
    implementation: "Lead every landing page with accreditation badges. Show banking partner logos prominently.",
  },
  {
    principle: "Goal-Gradient Effect",
    application: "The 8-step form kills momentum. Students who see they're close to finishing are more likely to complete.",
    implementation: "Redesign form as a progress-tracked 3-step process.",
  },
  {
    principle: "Commitment & Consistency",
    application: "Get micro-commitments before asking for the R300 application fee.",
    implementation: "Offer a free info pack download or career quiz as the first action.",
  },
  {
    principle: "Regret Aversion",
    application: "Students fear choosing the wrong programme.",
    implementation: "Money-back guarantee messaging, programme comparison tool.",
  },
  {
    principle: "Present Bias",
    application: "Future career benefits feel abstract. Immediate benefits feel real.",
    implementation: "Emphasise the immediate experience — first module within 48 hours.",
  },
  {
    principle: "Contrast Effect",
    application: "CPS is 20% cheaper than competitors but doesn't lead with this.",
    implementation: "Show competitor pricing benchmarks. University-level qualification, not university-level fees.",
  },
];

export const REDESIGN_PRIORITIES = [
  {
    question: "What can I study?",
    answer: "Homepage hero + programme cards with clear positioning",
    gap: "Homepage talks about organisations, not programmes",
  },
  {
    question: "Is this right for me?",
    answer: "Programme pages with career outcomes, ideal-for sections, time commitment",
    gap: "Programme details hidden in brochures",
  },
  {
    question: "What will it cost?",
    answer: "Transparent pricing on every programme page with payment options",
    gap: "Pricing only visible after form fill or in PDF",
  },
  {
    question: "Can I trust these people?",
    answer: "Trust bar: accreditation badges, partner logos, graduate count, testimonials",
    gap: "Trust signals scattered or absent",
  },
  {
    question: "How do I apply?",
    answer: "Simplified 3-step application with progress bar, auto-confirmation",
    gap: "8-step form, R300 fee upfront, no email confirmation",
  },
  {
    question: "What happens next?",
    answer: "Clear post-application journey: timeline, next steps, support contacts",
    gap: "No post-submission communication in some cases",
  },
];

export const FUNNEL_STEPS = [
  { stage: "Awareness", action: "Paid ad / organic content", icon: "📢" },
  { stage: "Interest", action: "Landing page with dual CTA", icon: "🎯" },
  { stage: "Consideration", action: "Info pack download / career quiz", icon: "📋" },
  { stage: "Nurture", action: "Email + WhatsApp sequence (7-14 days)", icon: "💬" },
  { stage: "Application", action: "Simplified 3-step form", icon: "📝" },
  { stage: "Enrollment", action: "Admissions follow-up + payment setup", icon: "🎓" },
];

export const MESSAGING_HCIB = [
  { layer: "Primary benefit", message: "Launch a real banking career with a qualification SA's top banks trust" },
  { layer: "Supporting benefit 1", message: "Study online, at your own pace, while you work" },
  { layer: "Supporting benefit 2", message: "R2,480/month — less than most university fees, with better career outcomes" },
  { layer: "Supporting benefit 3", message: "AI-powered personalised learning adapts to your gaps and strengths" },
  { layer: "Trust signal", message: "Accredited by the Council on Higher Education | NQF 5 | 11,400+ graduates" },
  { layer: "Objection handler", message: "No matric exemption needed — just your NSC and the drive to succeed" },
  { layer: "Urgency", message: "Next intake: May 10 — limited places available" },
];

export const MESSAGING_ACL6 = [
  { layer: "Primary benefit", message: "Get the leadership qualification that opens the door to management" },
  { layer: "Supporting benefit 1", message: "Built for working professionals — 100% online, 12 months" },
  { layer: "Supporting benefit 2", message: "R2,688/month — an investment in your next promotion" },
  { layer: "Supporting benefit 3", message: "Practical leadership frameworks you can apply at work immediately" },
  { layer: "Trust signal", message: "Developed with SA's leading banks | NQF 6 | Brandon Hall Award-winning methodology" },
  { layer: "Objection handler", message: "Designed for professionals with 3+ years experience, not academic theorists" },
  { layer: "Urgency", message: "Intake closes May 10 — start your leadership journey this quarter" },
];

export const CONTENT_PILLARS = [
  {
    pillar: "Career Pathways",
    purpose: "Capture search intent from people exploring banking/leadership careers",
    types: "Blog posts, career guides, salary insights",
    channel: "Google / SEO",
    icon: "🧭",
  },
  {
    pillar: "Student Stories",
    purpose: "Build social proof and emotional connection",
    types: "Video testimonials, written case studies, before/after narratives",
    channel: "Meta / Instagram / TikTok",
    icon: "🗣️",
  },
  {
    pillar: "Industry Insights",
    purpose: "Position CPS as a thought leader in banking education",
    types: "Articles on banking trends, SETA/QCTO updates, skills gap data",
    channel: "LinkedIn / Blog",
    icon: "📊",
  },
  {
    pillar: "Study Life",
    purpose: "Reduce uncertainty and build community",
    types: "What to expect guides, study tips, platform walkthroughs",
    channel: "Instagram / WhatsApp / TikTok",
    icon: "📚",
  },
];

export const BUDGET_ALLOCATION = {
  total: 15000,
  channels: [
    { name: "Google Search", amount: 7500, percentage: 50, color: "#2EA3F2" },
    { name: "Meta (FB + IG)", amount: 7500, percentage: 50, color: "#7C3AED" },
  ],
};

export const CPA_MODEL_DEFAULTS = {
  monthlySpend: 15000,
  googleSplit: 50,
  googleCPC: 15,
  metaCPC: 6,
  lpConversionRate: 7,
  leadToEnrollmentRate: 15,
};

export const CPA_SCENARIOS = [
  {
    name: "Conservative",
    monthlySpend: 15000,
    googleCPC: 20,
    metaCPC: 8,
    lpConversionRate: 4,
    leadToEnrollmentRate: 10,
    googleClicks: 375,
    metaClicks: 938,
    totalClicks: 1313,
    blendedCPC: 11.43,
    monthlyLeads: 53,
    monthlyEnrollments: 5,
    effectiveCPA: 2857,
    sixMonthEnrollments: 32,
  },
  {
    name: "Target",
    monthlySpend: 15000,
    googleCPC: 15,
    metaCPC: 6,
    lpConversionRate: 7,
    leadToEnrollmentRate: 15,
    googleClicks: 500,
    metaClicks: 1250,
    totalClicks: 1750,
    blendedCPC: 8.57,
    monthlyLeads: 123,
    monthlyEnrollments: 18,
    effectiveCPA: 816,
    sixMonthEnrollments: 110,
  },
  {
    name: "Optimistic",
    monthlySpend: 15000,
    googleCPC: 12,
    metaCPC: 5,
    lpConversionRate: 10,
    leadToEnrollmentRate: 20,
    googleClicks: 625,
    metaClicks: 1500,
    totalClicks: 2125,
    blendedCPC: 7.06,
    monthlyLeads: 213,
    monthlyEnrollments: 43,
    effectiveCPA: 353,
    sixMonthEnrollments: 255,
  },
];

export const GOOGLE_CAMPAIGNS = [
  {
    name: "Brand Search",
    status: "Always on",
    budget: "R1,000/month",
    keywords: ["CPS", "Cornerstone Performance Solutions", "CPS banking", "CPS HCIB"],
    purpose: "Capture branded searches and protect against competitors bidding on CPS name",
  },
  {
    name: "High-Intent Non-Brand",
    status: "Core",
    budget: "R5,500/month",
    keywords: ["higher certificate in banking", "banking qualification online", "NQF 5 banking course", "leadership qualification South Africa"],
    purpose: "Target high-intent searchers actively looking for banking/leadership qualifications",
  },
  {
    name: "Competitor Conquesting",
    status: "Phase 2",
    budget: "R1,000/month",
    keywords: ["Milpark banking", "MANCOSA leadership", "Regent banking course"],
    purpose: "Intercept students comparing options — focus on CPS differentiators",
  },
];

export const META_AUDIENCES = [
  { audience: "Banking career seekers", targeting: "Interest: Banking, Financial services, Career development. Age 22-32. SA metros", programme: "HCIB" },
  { audience: "Working professionals", targeting: "Interest: Leadership, Management, Professional development. Age 28-40. Financial services", programme: "ACL6" },
  { audience: "Lookalike audiences", targeting: "Build 1% lookalike from lead list once 50+ leads collected", programme: "Both" },
  { audience: "Retargeting", targeting: "Website visitors (30 days), Landing page viewers, Info pack downloaders", programme: "Both" },
];

export const NURTURE_SEQUENCE = [
  { day: 0, email: "Info pack delivery + Welcome", purpose: "Deliver value, set expectations, introduce CPS" },
  { day: 2, email: "Why students choose CPS (social proof)", purpose: "Student testimonial + partner logos + accreditation" },
  { day: 4, email: "Programme deep-dive (modules, outcomes, schedule)", purpose: "Answer questions they're still researching" },
  { day: 7, email: "Is this right for you? (objection handling)", purpose: "Address cost, time commitment, difficulty concerns" },
  { day: 9, email: "Student story: transformation narrative", purpose: "Emotional proof — someone like them who succeeded" },
  { day: 11, email: "Pricing breakdown + payment options", purpose: "Remove financial uncertainty, show affordability" },
  { day: 14, email: "Applications closing soon + direct CTA", purpose: "Urgency + clear next step to apply" },
];

export const LAUNCH_PHASES = [
  {
    phase: "Phase 0: Foundation",
    dates: "Mar 11 – Mar 28",
    activities: "Analytics setup (GA4, GTM, conversion tracking), CRM/Pipedrive configuration, email automation build, WhatsApp Business setup, landing page wireframes and copy",
    deliverables: "Tracking infrastructure live, nurture sequences built, landing page designs approved",
    color: "#94A3B8",
  },
  {
    phase: "Phase 1: Soft Launch",
    dates: "Mar 29 – Apr 18",
    activities: "Landing pages live, Google brand + high-intent campaigns launch, Meta awareness campaigns launch, info pack lead magnet created, first 3 blog posts published",
    deliverables: "First leads captured, baseline CPCs and conversion rates established, initial lead quality assessment",
    color: "#7C3AED",
  },
  {
    phase: "Phase 2: Ramp",
    dates: "Apr 19 – May 9",
    activities: "Optimise ad creative based on Phase 1 data, launch retargeting campaigns, competitor conquesting begins, email sequences firing, A/B test landing page variants",
    deliverables: "Cost per lead trending toward target, nurture sequences converting, 50% of enrollment target pipeline built",
    color: "#2EA3F2",
  },
  {
    phase: "Phase 3: Intake Push",
    dates: "May 10 – Jun 10",
    activities: "Urgency messaging activated, retargeting intensified, direct outreach to warm leads, social proof content amplified, WhatsApp community active",
    deliverables: "35 students enrolled per qualification (70 total)",
    color: "#10B981",
  },
  {
    phase: "Phase 4: Review",
    dates: "Jun 11 – Jun 30",
    activities: "Full performance review, CPA analysis, channel attribution report, learnings documented, strategy adjustment for Intake 2",
    deliverables: "Performance dashboard, optimisation recommendations, Intake 2 plan",
    color: "#F59E0B",
  },
];

export const KPI_DASHBOARD = [
  { kpi: "Enrolled students (per qualification per intake)", target: "35", frequency: "Per intake" },
  { kpi: "Cost per acquisition (CPA)", target: "≤ R400", frequency: "Monthly" },
  { kpi: "Cost per lead", target: "≤ R100", frequency: "Monthly" },
  { kpi: "Landing page conversion rate", target: "≥ 8%", frequency: "Weekly" },
  { kpi: "Lead-to-enrollment conversion rate", target: "≥ 20%", frequency: "Monthly" },
  { kpi: "Email open rate (nurture sequence)", target: "≥ 35%", frequency: "Weekly" },
  { kpi: "Email click rate (nurture sequence)", target: "≥ 5%", frequency: "Weekly" },
  { kpi: "Google Ads CTR", target: "≥ 5%", frequency: "Weekly" },
  { kpi: "Meta Ads CTR", target: "≥ 1.5%", frequency: "Weekly" },
  { kpi: "WhatsApp response rate", target: "≥ 60%", frequency: "Weekly" },
  { kpi: "Website traffic (organic + paid)", target: "Growth MoM", frequency: "Monthly" },
];

export const BUDGET_SUMMARY = [
  { item: "Google Ads media spend", cost: "R7,500", notes: "50% of media budget; scales with performance" },
  { item: "Meta Ads media spend", cost: "R7,500", notes: "50% of media budget; scales with performance" },
  { item: "Total media spend", cost: "R15,000", notes: "Starting budget, increases with traction" },
  { item: "Agency retainer (Broadbrand)", cost: "Per agreement", notes: "Covers strategy, creative, CRO, reporting, nurture management" },
  { item: "Content production", cost: "Minimal additional", notes: "UGC-style content, Canva creatives, blog posts included in retainer" },
  { item: "Software/tools", cost: "CPS existing", notes: "GA4 (free), GTM (free), Looker Studio (free), Pipedrive (CPS existing)" },
];

export const PRE_LAUNCH_CHECKLIST = [
  { item: "GA4 + GTM installed with conversion events", owner: "Broadbrand", status: "To do" },
  { item: "Pipedrive CRM configured for B2C lead flow", owner: "Broadbrand + CPS", status: "To do" },
  { item: "HCIB landing page live with pricing, modules, outcomes", owner: "Broadbrand", status: "To do" },
  { item: "ACL6 landing page live with same structure", owner: "Broadbrand", status: "To do" },
  { item: "Info pack PDF created for each qualification", owner: "Broadbrand + CPS", status: "To do" },
  { item: "Email nurture sequence (7 emails) built and tested", owner: "Broadbrand", status: "To do" },
  { item: "WhatsApp Business automated responses configured", owner: "Broadbrand + CPS", status: "To do" },
  { item: "Google Ads account structured and campaigns ready", owner: "Broadbrand", status: "To do" },
  { item: "Meta Ads account configured with pixel and events", owner: "Broadbrand", status: "To do" },
  { item: "Looker Studio dashboard connected and shared", owner: "Broadbrand", status: "To do" },
];
