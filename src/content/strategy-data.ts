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
  launchDate: "May 10, 2026",
  mediaBudget: "R15,000/month",
};

export const KEY_METRICS = [
  { label: "Spend", value: "R15k", description: "Monthly media budget" },
  { label: "Per Qualification", value: "35", description: "Students per intake" },
  { label: "Total Target", value: "70", description: "Students per intake" },
  { label: "Scenario A", value: "6 mo", description: "CPA ≤ R1,286" },
  { label: "Scenario B", value: "3 mo", description: "CPA ≤ R643" },
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
      "Ambitious but uncertain. Fears wasting money on a qualification that won't lead anywhere. Researches extensively before committing. Compares CPS against Milpark, Chartall, Novia, and university options.",
    jtbd: "Help me get a real qualification that banks actually recognise, so I can build a career in banking and earn more.",
    color: "#6B2D8B",
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
    color: "#00A8E1",
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
    { name: "Google Search", amount: 7500, percentage: 50, color: "#00A8E1" },
    { name: "Meta (FB + IG)", amount: 7500, percentage: 50, color: "#6B2D8B" },
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
    keywords: ["Milpark banking", "Chartall business banking", "Novia leadership"],
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
    color: "#6B2D8B",
  },
  {
    phase: "Phase 2: Ramp",
    dates: "Apr 19 – May 9",
    activities: "Optimise ad creative based on Phase 1 data, launch retargeting campaigns, competitor conquesting begins, email sequences firing, A/B test landing page variants",
    deliverables: "Cost per lead trending toward target, nurture sequences converting, 50% of enrollment target pipeline built",
    color: "#00A8E1",
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
  { kpi: "Students per intake", scenarioA: "70", scenarioB: "70" },
  { kpi: "Students per month", scenarioA: "12", scenarioB: "23" },
  { kpi: "Monthly media spend", scenarioA: "R15,000", scenarioB: "R15,000" },
  { kpi: "Total media spend", scenarioA: "R90,000", scenarioB: "R45,000" },
  { kpi: "Target CPA", scenarioA: "≤ R1,286", scenarioB: "≤ R643" },
  { kpi: "Target CPL", scenarioA: "≤ R193", scenarioB: "≤ R96" },
  { kpi: "Monthly leads required", scenarioA: "78", scenarioB: "156" },
  { kpi: "Lead-to-enrollment rate", scenarioA: "15%", scenarioB: "15%" },
  { kpi: "Google Ads CTR", scenarioA: "≥ 5%", scenarioB: "≥ 5%" },
  { kpi: "Meta Ads CTR", scenarioA: "≥ 1.5%", scenarioB: "≥ 1.5%" },
  { kpi: "Email open rate", scenarioA: "≥ 35%", scenarioB: "≥ 35%" },
  { kpi: "Email click rate", scenarioA: "≥ 5%", scenarioB: "≥ 5%" },
  { kpi: "WhatsApp response rate", scenarioA: "≥ 60%", scenarioB: "≥ 60%" },
];

export const BUDGET_SUMMARY = [
  { item: "Google Ads media spend", cost: "R7,500", notes: "50% of fixed monthly media budget" },
  { item: "Meta Ads media spend", cost: "R7,500", notes: "50% of fixed monthly media budget" },
  { item: "Total media spend", cost: "R15,000", notes: "Fixed monthly budget" },
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

// ===================================================
// Industry Benchmarks
// ===================================================

export const GOOGLE_BENCHMARKS = [
  { metric: "CPC (Search)", global: "$6.23 (~R115)", saEstimate: "R10–R30", cpsTarget: "R12–R20", source: "WordStream 2025" },
  { metric: "CTR (Search)", global: "5.74%", saEstimate: "~5–6%", cpsTarget: "≥5%", source: "WordStream 2025" },
  { metric: "CVR (Search)", global: "11.38%", saEstimate: "~8–12%", cpsTarget: "7–10%", source: "WordStream 2025" },
  { metric: "CPL (Search)", global: "~$90 (~R1,665)", saEstimate: "~R500–R1,500", cpsTarget: "A: ≤R193 · B: ≤R96", source: "WordStream 2025" },
  { metric: "CPC (Display)", global: "$0.47 (~R9)", saEstimate: "~R3–R8", cpsTarget: "N/A Phase 2", source: "WordStream 2025" },
];

export const META_BENCHMARKS = [
  { metric: "CPC", global: "$1.05 (~R19)", cpsTarget: "R5–R8", notes: "SA typically lower", source: "SuperAds 2025" },
  { metric: "CTR", global: "1.66%", cpsTarget: "≥1.5%", notes: "Below all-industry 1.86%", source: "SuperAds 2025" },
  { metric: "CPL", global: "$19.27 (~R357)", cpsTarget: "A: ≤R193 · B: ≤R96", notes: "Blended target", source: "SuperAds 2025" },
  { metric: "CPL Trend", global: "$15→$21.57 (+44%)", cpsTarget: "—", notes: "Budget for Q3/Q4 inflation", source: "SuperAds 2025" },
];

export const FUNNEL_BENCHMARKS = [
  { stage: "LP → Lead (education)", benchmark: "8.4% median", cpsModel: "4–10%", source: "Unbounce 2025" },
  { stage: "LP → Lead (higher ed)", benchmark: "6.3%", cpsModel: "—", source: "Unbounce 2025" },
  { stage: "Lead → Enrollment", benchmark: "3–5% industry", cpsModel: "10–20%", source: "Multiple" },
  { stage: "Cost/enrolled student", benchmark: "$2,849 (~R52,700)", cpsModel: "A: ≤R1,286 · B: ≤R643", source: "UPCEA 2023" },
  { stage: "Email nurture CVR", benchmark: "14.1%", cpsModel: "≥10%", source: "Industry reports" },
];

export const BENCHMARK_INSIGHTS = [
  {
    title: "SA CPC Advantage",
    description: "Global education CPC is R115. SA is R10-30. CPS benefits from 75%+ lower auction prices.",
    color: "#10B981",
  },
  {
    title: "Rising Meta CPL",
    description: "Education CPL rose 44% through 2025. Plan for cost inflation in Q3/Q4 near intake deadlines.",
    color: "#F59E0B",
  },
  {
    title: "CPS vs World",
    description: "Global median cost per enrolled student is substantially higher than CPS's required economics. Scenario A (6 months): CPA ≤ R1,286. Scenario B (3 months): CPA ≤ R643.",
    color: "#6B2D8B",
  },
];

// ===================================================
// CPA Preset Scenarios (for buttons)
// ===================================================

export const CPA_PRESETS = [
  { name: "Conservative", budget: 15000, gsplit: 50, gcpc: 20, mcpc: 8, lpcvr: 4, lter: 10 },
  { name: "Target", budget: 15000, gsplit: 50, gcpc: 15, mcpc: 6, lpcvr: 7, lter: 15 },
  { name: "Optimistic", budget: 15000, gsplit: 50, gcpc: 12, mcpc: 5, lpcvr: 10, lter: 20 },
];

// ===================================================
// Budget Scaling Scenarios
// ===================================================

// Budget scaling and scaling triggers removed — replaced by fixed-spend efficiency framework

// ===================================================
// Ad Copy Angles with full copy
// ===================================================

export const AD_COPY_ANGLES = [
  {
    angle: "Career Transformation",
    psychology: "Loss Aversion + Contrast",
    copy: "Still stuck in the same role? A Higher Certificate in Banking could change that. Accredited. Flexible. Trusted by Absa, FNB, Standard Bank, and more. From R2,480/month.",
    color: "#6B2D8B",
  },
  {
    angle: "Social Proof + Authority",
    psychology: "Bandwagon + Authority Bias",
    copy: "Join 11,400+ professionals who've built their careers with CPS. NQF-accredited qualifications designed with SA's top banks. Applications now open.",
    color: "#00A8E1",
  },
  {
    angle: "Present Bias + Simplicity",
    psychology: "Present Bias + Goal-Gradient",
    copy: "Start your banking qualification this month. Study online. Pay monthly. Graduate in 12 months. Download the free info pack.",
    color: "#10B981",
  },
  {
    angle: "Aspiration + Specificity",
    psychology: "Identity + Contrast",
    copy: "Ready to lead? The Advanced Certificate in Leadership (NQF 6) gives you the frameworks, credibility, and accreditation to step up. From R2,688/month.",
    color: "#F59E0B",
  },
];

// ===================================================
// SEO Content Plan with keyword data
// ===================================================

export const SEO_CONTENT_PLAN = [
  { article: "Higher Certificate in Banking: Everything You Need to Know in 2026", keyword: "higher certificate in banking", volume: "500-800", difficulty: "Medium" },
  { article: "How to Start a Career in Banking in SA", keyword: "career in banking south africa", volume: "800-1,200", difficulty: "Medium" },
  { article: "HCIB vs BCOM: Which is Right for You?", keyword: "hcib vs bcom", volume: "200-400", difficulty: "Low" },
  { article: "What is NQF Level 5? Simple Guide", keyword: "nqf level 5", volume: "1,500-2,500", difficulty: "Low" },
  { article: "Leadership Qualifications in SA: Complete Guide", keyword: "leadership qualification south africa", volume: "300-500", difficulty: "Medium" },
  { article: "How Much Does a Banking Qualification Cost in 2026?", keyword: "banking qualification cost", volume: "400-700", difficulty: "Low" },
  { article: "Is CPS Accredited? Understanding CHE & QCTO", keyword: "CPS accredited", volume: "100-200", difficulty: "Low" },
];

// ===================================================
// Enhanced Nurture Sequence with subject lines
// ===================================================

export const NURTURE_SEQUENCE_ENHANCED = [
  { day: 0, email: "Info pack + Welcome", purpose: "Deliver value, set expectations", subject: "Your CPS info pack is ready", preview: "Everything you need to know about [Programme]..." },
  { day: 2, email: "Why students choose CPS", purpose: "Social proof", subject: "[Name], here's why 11,400 professionals chose CPS", preview: "Students like you share their stories..." },
  { day: 4, email: "Programme deep-dive", purpose: "Answer research questions", subject: "Here's exactly what you'll study in [Programme]", preview: "Module breakdown, schedule, outcomes inside..." },
  { day: 7, email: "Is this right for you?", purpose: "Objection handling", subject: "Is [Programme] right for you? Let's find out", preview: "Honest answers to the 5 biggest questions..." },
  { day: 9, email: "Student transformation story", purpose: "Emotional proof", subject: "From security guard to bank manager: [Student]'s story", preview: "How CPS changed one student's career..." },
  { day: 11, email: "Pricing breakdown", purpose: "Remove financial uncertainty", subject: "R2,480/month — here's how the numbers work", preview: "Payment plans, total cost, and how it compares..." },
  { day: 14, email: "Applications closing", purpose: "Urgency + CTA", subject: "May intake closes soon — your place is waiting", preview: "Apply in 3 steps. We're here to help..." },
];

// ===================================================
// Lead Scoring
// ===================================================

export const LEAD_SCORING_ACTIONS = [
  { action: "Info pack download", points: "+10" },
  { action: "Email open", points: "+2" },
  { action: "Email click", points: "+5" },
  { action: "Landing page revisit", points: "+8" },
  { action: "Pricing page visit", points: "+15" },
  { action: "WhatsApp reply", points: "+20" },
  { action: "Application started", points: "+30" },
];

export const LEAD_SCORING_TIERS = [
  { score: "0-20", status: "Cold", action: "Nurture sequence only", color: "#94A3B8" },
  { score: "21-40", status: "Warm", action: "Advisor WhatsApp outreach", color: "#F59E0B" },
  { score: "41+", status: "Hot", action: "Phone call within 4 hours", color: "#EF4444" },
];

// ===================================================
// Risk Triggers
// ===================================================

export const RISK_TRIGGERS = [
  { phase: "1", signal: "CPC >R25 on Google", response: "Shift 60/40 toward Meta. Review keywords." },
  { phase: "1", signal: "LP CVR <3%", response: "Pause ads. Fix LP. A/B test new variant." },
  { phase: "2", signal: "Zero applications after 2 weeks", response: "Emergency review: check nurture, forms, admissions response." },
  { phase: "3", signal: "Monthly leads below scenario target", response: "Investigate channel mix, LP conversion, and admissions handoff." },
];

// ===================================================
// ROI & Student Lifetime Value
// ===================================================

export const STUDENT_LTV = {
  hcib: { monthly: 2480, duration: 12, total: 29760 },
  acl6: { monthly: 2688, duration: 12, total: 32256 },
  totalStudents: 70,
  totalTuitionPerIntake: 2170560,
};

// ===================================================
// A/B Testing Plan
// ===================================================

export const AB_TESTING_PLAN = [
  { weeks: "1-2", test: "Copy angles", what: "4 angles x 2 creatives = 8 ads per platform", impact: "Identify winning message" },
  { weeks: "3-4", test: "Kill & scale", what: "Drop bottom 50%, scale winners, test new headlines", impact: "Improve CTR 20-30%" },
  { weeks: "5-6", test: "Audiences", what: "Interest vs lookalike vs retargeting", impact: "Find lowest CPA audience" },
  { weeks: "7-8", test: "Landing pages", what: "Long-form vs short-form, video vs static", impact: "Improve LP CVR" },
  { weeks: "Ongoing", test: "Creative refresh", what: "Rotate every 3-4 weeks", impact: "Prevent ad fatigue" },
];

// ===================================================
// WhatsApp Automation
// ===================================================

export const WHATSAPP_AUTOMATION = [
  { timing: "0 min", message: "Hi [Name]! Thanks for downloading the [Programme] info pack. Your guide is on its way to [email]. Any questions? Just reply — I'm a real person! — [Advisor], CPS Admissions" },
  { timing: "Day 3", message: "Hi [Name], did you get a chance to look through the info pack? Happy to answer any questions — no pressure." },
  { timing: "Day 10", message: "Quick check-in — the May intake is filling up. Want me to walk you through the application? Takes about 5 minutes." },
];
