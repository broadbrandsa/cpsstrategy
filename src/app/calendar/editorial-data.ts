/* ════════════════════════════════════════════════════════════════════
   CPS Editorial Plan — May to December 2026
   Aligned with the updated Marketing Calendar + Content Editorial Plan.
   Start date: Mon 18 May 2026.
   ════════════════════════════════════════════════════════════════════ */

export type WeekPost = {
  week: string;
  tueLinked: string;
  thuProof: string;
};

export type EditorialArticle = {
  number: number;
  title: string;
  publishDate: string;
  isRefresh?: boolean;
  pillar?: string;
  brief?: string;
};

export type EditorialWhitePaper = {
  number: number;
  title: string;
  publishDate: string;
  brief?: string;
};

export type MonthlyEditorial = {
  monthIdx: number;
  monthName: string;
  theme: string;
  themeStatement: string;
  weight: "B2C heavy" | "B2B heavy" | "Balanced" | "Balanced (B2B-leaning)" | "Balanced (B2C-leaning)";
  cadence: { articles: string; whitePaper?: string; linkedin: string; meta: string };
  articles: EditorialArticle[];
  whitePaper?: EditorialWhitePaper;
  weeks: WeekPost[];
};

export const PILLARS = [
  { id: "01", label: "Career Pathways", channel: "Google / Blog", color: "#6B2D8B" },
  { id: "02", label: "Student Stories", channel: "Meta / IG / TikTok", color: "#00A8E1" },
  { id: "03", label: "Industry Insights", channel: "LinkedIn + White papers", color: "#10B981" },
  { id: "04", label: "Study Life", channel: "IG / WhatsApp / TikTok", color: "#FFD100" },
];

export const APPROVED_PHRASINGS = [
  "University-level qualification. Not university-level fees.",
  "Trusted by Absa, FNB, Standard Bank, and more.",
  "11,400+ professionals trained.",
  "85% completion vs ~67% industry.",
  "Structured learning. Real support. A career that compounds.",
];

export const VOICE_NOTES = [
  { title: "Brand voice", body: "Friendly, conversational, informative, learner-first." },
  { title: "B2C posts (Meta-heavy)", body: "Emotive, story-driven, “you can see yourself here.”" },
  { title: "B2B posts (LinkedIn-heavy)", body: "Industry-grounded, insight-led, not promotional. Lead with the issue, not the offering." },
  { title: "Never lead with AI on B2C", body: "AI is OK as a B2B proof point on the Organisations-CPSLearn surface only." },
];

export const WEEKLY_RHYTHM = [
  { day: "Tuesday", role: "Article-linked post", body: "Drives traffic to the bi-weekly article. Same content adapted across LinkedIn + Meta." },
  { day: "Thursday", role: "Social proof post", body: "Graduation moment, alumni story, completion proof. Same content adapted across LinkedIn + Meta." },
];

export const PREP_WORKFLOW = [
  { stage: "Mon–Wed (prior week)", action: "Broadbrand drafts both posts" },
  { stage: "Thursday (prior week)", action: "CPS approver reviews" },
  { stage: "Friday (prior week)", action: "Finalised" },
  { stage: "Tue + Thu", action: "Published" },
];

/* ─── Existing blog content ─── */

export const BLOG_KEEP = [
  { title: "The Cultivation of Personal Significance: Sales Resilience in Modern Banking", date: "Aug 2025", linkMonth: "Jul" },
  { title: "Leading in Occupational Education: Building High-Impact Financial Advisors", date: "May 2025", linkMonth: "Sep" },
  { title: "Beyond Theory: QCTO Qualifications & Insurance Industry", date: "Apr 2025", linkMonth: "Aug" },
  { title: "The Long Walk to Freedom Goes via Education", date: "Oct 2024", linkMonth: "May" },
  { title: "#FutureShift: R55m Value in SA's Financial Sector", date: "Nov 2024", linkMonth: "Oct" },
  { title: "Vocational Education as a Life Choice (Dr Indira Bhagaloo)", date: "Feb 2023", linkMonth: "May" },
  { title: "Revolutionising Learning Effectiveness Through BIL®", date: "Aug 2023", linkMonth: "Jul" },
  { title: "Post-Masculine Leadership", date: "Aug 2024", linkMonth: "Sep" },
];

export const BLOG_REFRESH = [
  { title: "CPS's Secret Weapon: Stellar Student Support", date: "Oct 2024", refreshWindow: "Jun Wk 1" },
  { title: "CELEBRATING OUR CLASS OF 2024", date: "—", refreshWindow: "Dec Wk 2 (Class of 2026)" },
  { title: "Breaking Barriers: Dr Indira Bhagaloo", date: "Mar 2025", refreshWindow: "Aug Wk 2" },
  { title: "Beyond the AI Hype: Insurance Education", date: "Mar 2025", refreshWindow: "Jul Wk 2" },
  { title: "Here's why the professionalism of financial planners matters", date: "Mar 2024", refreshWindow: "Sep Wk 2" },
  { title: "Transforming Lives: Eastern Cape LTIA", date: "Oct 2024", refreshWindow: "Aug Wk 1" },
  { title: "Bridging the Gap: Thrive Track", date: "Jun 2024", refreshWindow: "Oct Wk 1" },
];

export const BLOG_RETIRE_NOTE =
  "Older 2021 COVID-era online-learning posts and one-off pieces — leave URLs live, don't link to them. The CPS blog has been dormant since 25 August 2025 and is being revived with this plan.";

/* ─── Graduation content needed from CPS ─── */

export const GRADUATION_ASSETS = [
  "Cohort class photos",
  "Individual graduate portraits",
  "Ceremony candids",
  "Bursary recipient moments",
  "Faculty + graduate moments",
  "“Where are they now” workplace photos",
  "Graduation highlight reels",
  "Graduate testimonial videos",
  "Graduate quote cards",
  "Bursary recipient short stories",
  "Consent register",
];

export const GRADUATION_DEADLINES = [
  { window: "May / Jun assets", deadline: "By 25 May 2026" },
  { window: "Jul / Aug / Sep assets", deadline: "By 30 Jun 2026" },
  { window: "Oct / Nov / Dec assets", deadline: "By 30 Sep 2026" },
];

/* ─── MAY ─── */

const MAY: MonthlyEditorial = {
  monthIdx: 0,
  monthName: "May",
  theme: "The Starting Line",
  themeStatement: "Every cohort begins with someone making a decision.",
  weight: "B2C heavy",
  cadence: { articles: "2 new", whitePaper: "#1", linkedin: "4 posts", meta: "4 posts" },
  articles: [
    {
      number: 1,
      title: "HCIB — Everything You Need to Know in 2026",
      publishDate: "Tue 19 May",
      pillar: "Pillar 01 · Career Pathways",
      brief: "Definitive HCIB explainer. Why it matters, who it's for, what banks recognise it. 1,800–2,200 words.",
    },
    {
      number: 2,
      title: "How to Start a Career in Banking in SA",
      publishDate: "Tue 26 May",
      pillar: "Pillar 01 · Career Pathways",
      brief: "Top-of-funnel piece — entry routes, what employers want, where CPS fits. 1,500–1,800 words.",
    },
  ],
  whitePaper: {
    number: 1,
    title: "Beyond Banker — Future Skills Capability",
    publishDate: "Mid-May 2026",
    brief: "Co-authored with an academic partner. Argues the most important capability shift inside SA banks over the next 24 months is behavioural, not technical. Distributed at Webinar 1 follow-up.",
  },
  weeks: [
    {
      week: "Wk of 18 May",
      tueLinked: "Launch of HCIB explainer article — why it matters, who it's for, what banks recognise it.",
      thuProof: "Welcome the May cohort — past cohort class photo, “this is what 12 months from now looks like.”",
    },
    {
      week: "Wk of 25 May",
      tueLinked: "Launch of “How to Start a Banking Career” article — entry routes, what employers want.",
      thuProof: "Bursary recipient — short story, graduate now in a banking role.",
    },
  ],
};

/* ─── JUNE ─── */

const JUN: MonthlyEditorial = {
  monthIdx: 1,
  monthName: "June",
  theme: "What Completion Looks Like",
  themeStatement: "Anyone can start. The interesting question is what it takes to finish.",
  weight: "Balanced",
  cadence: { articles: "1 refresh + 1 new", linkedin: "~8 posts", meta: "~8 posts" },
  articles: [
    {
      number: 1,
      title: "CPS's Secret Weapon: Stellar Student Support",
      publishDate: "Tue 2 Jun",
      isRefresh: true,
      pillar: "Pillar 04 · Study Life",
      brief: "Refresh of the Oct 2024 article. Anchor proof piece on the 85% completion story for 2026.",
    },
    {
      number: 2,
      title: "What is NQF Level 5? A Plain-English Guide",
      publishDate: "Tue 16 Jun",
      pillar: "Pillar 01 · Career Pathways",
      brief: "Broad-intent SEO. NQF levels 1–10, where HCIB (5) and ACL6 (6) sit, why levels matter to employers. 1,200–1,500 words.",
    },
  ],
  weeks: [
    {
      week: "Wk of 1 Jun",
      tueLinked: "The 85% completion story — anchor proof piece refreshed for 2026.",
      thuProof: "Walk-the-stage moment — single graduate, big-stat overlay (85% completion).",
    },
    {
      week: "Wk of 8 Jun",
      tueLinked: "Three reasons CPS completion outperforms industry — pull from the refreshed article.",
      thuProof: "Faculty + graduate moment — the team behind every certificate.",
    },
    {
      week: "Wk of 15 Jun",
      tueLinked: "Launch of NQF Level 5 explainer — what it actually means for your career.",
      thuProof: "Cohort class photo — graduation day stat snapshot.",
    },
    {
      week: "Wk of 22 Jun",
      tueLinked: "NQF 5 vs NQF 6 — the practical difference, second-week angle on the article.",
      thuProof: "Family-celebration moment from graduation.",
    },
  ],
};

/* ─── JULY ─── */

const JUL: MonthlyEditorial = {
  monthIdx: 2,
  monthName: "July",
  theme: "Building Capability",
  themeStatement: "Quiet content month: SEO compounds, alumni voices step forward, white paper #2 drops.",
  weight: "Balanced (B2B-leaning)",
  cadence: { articles: "1 new + 1 refresh", whitePaper: "#2", linkedin: "~8 posts", meta: "~8 posts" },
  articles: [
    {
      number: 1,
      title: "From Transactional to Trusted Advisor — Banking Leadership Now",
      publishDate: "Tue 7 Jul",
      pillar: "Pillar 03 · Industry Insights",
      brief: "Thought-leadership piece on the advisory shift inside SA banking. Crosses to LinkedIn. 1,800–2,000 words.",
    },
    {
      number: 2,
      title: "Beyond the AI Hype: Insurance Education",
      publishDate: "Tue 21 Jul",
      isRefresh: true,
      pillar: "Pillar 03 · Industry Insights",
      brief: "Refresh of the Mar 2025 article with current capability list.",
    },
  ],
  whitePaper: {
    number: 2,
    title: "Capability That Compounds — The 85% Completion Story",
    publishDate: "Mid-July 2026",
    brief: "Pulls together CPS's completion data into a B2B proof piece. Used as the gated follow-up to Webinar 1 and the lead-in to Webinar 2.",
  },
  weeks: [
    {
      week: "Wk of 29 Jun / 6 Jul",
      tueLinked: "Trusted advisor article launch — the capability shift inside banking.",
      thuProof: "Alumni “where are they now” — graduate at their current workplace.",
    },
    {
      week: "Wk of 13 Jul",
      tueLinked: "White paper #2 announcement — 85% completion as a B2B proof piece.",
      thuProof: "Class of [year] group photo + 11,400+ stat.",
    },
    {
      week: "Wk of 20 Jul",
      tueLinked: "Refreshed AI in Insurance Education article — current capability list.",
      thuProof: "Graduate quote card — short quote about CPS support.",
    },
    {
      week: "Wk of 27 Jul",
      tueLinked: "Three lines from the trusted advisor article that resonated.",
      thuProof: "Graduation highlight reel video — choir / anthem moment.",
    },
  ],
};

/* ─── AUGUST ─── */

const AUG: MonthlyEditorial = {
  monthIdx: 3,
  monthName: "August",
  theme: "The Compliance and Capability Conversation",
  themeStatement: "L&D teams open 2027 skills plans. B2B-leaning month.",
  weight: "B2B heavy",
  cadence: { articles: "2 refresh", linkedin: "~8 posts", meta: "~8 posts" },
  articles: [
    {
      number: 1,
      title: "Transforming Lives: Eastern Cape LTIA",
      publishDate: "Tue 4 Aug",
      isRefresh: true,
      pillar: "Pillar 02 · Student Stories",
      brief: "Refresh of the Oct 2024 article with new graduate outcomes.",
    },
    {
      number: 2,
      title: "Breaking Barriers: Dr Indira Bhagaloo",
      publishDate: "Tue 18 Aug",
      isRefresh: true,
      pillar: "Pillar 03 · Industry Insights",
      brief: "Refresh of the Mar 2025 interview — leadership voice on capability + 2027 planning.",
    },
  ],
  weeks: [
    {
      week: "Wk of 3 Aug",
      tueLinked: "LTIA Eastern Cape success — refreshed with new graduate outcomes.",
      thuProof: "Cohort photo + stats card — one graduation, multiple employers.",
    },
    {
      week: "Wk of 10 Aug",
      tueLinked: "Master Class #1 reference — what real consultative B2B delivery looks like.",
      thuProof: "Faculty handing over certificate — moment of recognition.",
    },
    {
      week: "Wk of 17 Aug",
      tueLinked: "Refreshed Dr Indira interview — leadership voice on capability + 2027.",
      thuProof: "Bursary recipient quote card — before / now.",
    },
    {
      week: "Wk of 24 Aug",
      tueLinked: "Most-clicked line from the Indira piece + invite to continue the conversation.",
      thuProof: "Group celebration moment — graduation energy.",
    },
  ],
};

/* ─── SEPTEMBER ─── */

const SEP: MonthlyEditorial = {
  monthIdx: 4,
  monthName: "September",
  theme: "The Next-Step Decision",
  themeStatement:
    "Intake 2 soft-launches. Webinar 2 brings B2C trust and B2B credibility into one conversation.",
  weight: "Balanced",
  cadence: { articles: "1 new + 1 refresh", whitePaper: "#3", linkedin: "~8 posts", meta: "~8 posts" },
  articles: [
    {
      number: 1,
      title: "Application Process for HCIB — Step by Step",
      publishDate: "Tue 1 Sep",
      pillar: "Pillar 01 · Career Pathways",
      brief: "Friction-removing read — what to submit, when, what happens after, when fees are paid. 1,000–1,300 words.",
    },
    {
      number: 2,
      title: "Here's Why the Professionalism of Financial Planners Matters",
      publishDate: "Tue 15 Sep",
      isRefresh: true,
      pillar: "Pillar 03 · Industry Insights",
      brief: "Refresh of the Mar 2024 article. What professionalism in advice actually looks like.",
    },
  ],
  whitePaper: {
    number: 3,
    title: "From Training Delivered to Capability Tracked",
    publishDate: "Thu 17 Sep 2026 (Webinar 2 day)",
    brief:
      "L&D moves from a delivery role to a measurement role. Covers the practical infrastructure required to close the gap — cohort design, progress tracking, pre/post assessment, manager engagement. Uses CPSLearn as a worked example.",
  },
  weeks: [
    {
      week: "Wk of 31 Aug",
      tueLinked: "Application process explainer — the friction-removing read.",
      thuProof: "Previous Nov cohort graduation — “a year from today, the picture is yours.”",
    },
    {
      week: "Wk of 7 Sep",
      tueLinked: "Two reads + one event — combo: HCIB article + Webinar 2 promo.",
      thuProof: "“Is this for me?” cohort reflection — graduate looking back on day-one nerves.",
    },
    {
      week: "Wk of 14 Sep",
      tueLinked: "Refreshed financial planning professionalism article launch.",
      thuProof: "Side-by-side: graduate 12 months ago vs today.",
    },
    {
      week: "Wk of 21 Sep",
      tueLinked: "Refresh second-week angle — what professionalism in advice looks like.",
      thuProof: "Anthem / choir moment from a previous ceremony.",
    },
  ],
};

/* ─── OCTOBER ─── */

const OCT: MonthlyEditorial = {
  monthIdx: 5,
  monthName: "October",
  theme: "Why Qualifications Matter Now",
  themeStatement:
    "Intake 2 ramp meets year-end skills-budget conversations. ROI and accreditation.",
  weight: "Balanced (B2C-leaning)",
  cadence: { articles: "1 refresh + 1 new", linkedin: "~8 posts", meta: "~8 posts" },
  articles: [
    {
      number: 1,
      title: "Bridging the Gap: Thrive Track",
      publishDate: "Tue 6 Oct",
      isRefresh: true,
      pillar: "Pillar 02 · Student Stories",
      brief: "Refresh of the Jun 2024 article. Early-career capability success story.",
    },
    {
      number: 2,
      title: "Pricing & Payment — How CPS Compares",
      publishDate: "Tue 20 Oct",
      pillar: "Pillar 01 · Career Pathways",
      brief: "“University-level qualification. Not university-level fees.” HCIB R2,480/mo, ACL6 R2,688/mo vs market. 1,200–1,500 words.",
    },
  ],
  weeks: [
    {
      week: "Wk of 28 Sep / 5 Oct",
      tueLinked: "Thrive Track refresh — early-career capability success story.",
      thuProof: "Mid-career professional graduate (ACL6) — leadership outcome.",
    },
    {
      week: "Wk of 12 Oct",
      tueLinked: "A line from Thrive Track that opens the right door for L&D.",
      thuProof: "ACL6 cohort photo — leaders graduating together.",
    },
    {
      week: "Wk of 19 Oct",
      tueLinked: "Pricing article launch — “University-level qualification. Not university-level fees.”",
      thuProof: "Graduate + certificate + new employer (with permission).",
    },
    {
      week: "Wk of 26 Oct",
      tueLinked: "Comparison table from the pricing article — CPS vs market.",
      thuProof: "High-energy group graduation moment.",
    },
  ],
};

/* ─── NOVEMBER ─── */

const NOV: MonthlyEditorial = {
  monthIdx: 6,
  monthName: "November",
  theme: "Step Into Your Next Role",
  themeStatement: "Intake 2 push + Webinar 3 + year-end statement.",
  weight: "B2C heavy",
  cadence: { articles: "2 new", whitePaper: "#4", linkedin: "~8 posts", meta: "~8 posts" },
  articles: [
    {
      number: 1,
      title: "Will My Bank Pay For My HCIB? A Practical Guide",
      publishDate: "Tue 3 Nov",
      pillar: "Pillar 01 · Career Pathways + Pillar 03 · Industry Insights",
      brief: "WSP / Skills Levy mechanisms, how to make the case internally, sample language for L&D conversations. 1,200–1,500 words.",
    },
    {
      number: 2,
      title: "Career Outcomes — Where 11,400+ CPS Graduates Are Now",
      publishDate: "Tue 17 Nov",
      pillar: "Pillar 02 · Student Stories",
      brief: "Proof-heavy article. 5–7 short profile vignettes (with consent), bank logos, role distribution. 1,500–2,000 words.",
    },
  ],
  whitePaper: {
    number: 4,
    title: "The Compliance and Capability Conversation",
    publishDate: "Mid-November 2026 (paired with Webinar 3 on 26 Nov)",
    brief:
      "QCTO, FAIS, and what's coming in 2027. Year-end strategic paper that sets the table for 2027 L&D conversations.",
  },
  weeks: [
    {
      week: "Wk of 2 Nov",
      tueLinked: "“Will my bank pay?” article — practical guide for self-funded prospects.",
      thuProof: "Class of Nov 2024 + Class of Nov 2025 side-by-side.",
    },
    {
      week: "Wk of 9 Nov",
      tueLinked: "Intake 2 launched yesterday — short anchor post + link to the article.",
      thuProof: "Day-one cohort energy — past cohort first-week moment.",
    },
    {
      week: "Wk of 16 Nov",
      tueLinked: "Career outcomes article launch — 5 graduate profiles, role distribution.",
      thuProof: "Composite of graduates from multiple cohorts / banks.",
    },
    {
      week: "Wk of 23 Nov",
      tueLinked: "Two reads + one event — career outcomes article + Webinar 3 promo.",
      thuProof: "Year-end roundup photo — breadth of 2026 graduations.",
    },
  ],
};

/* ─── DECEMBER ─── */

const DEC: MonthlyEditorial = {
  monthIdx: 7,
  monthName: "December",
  theme: "Looking Forward to 2027",
  themeStatement: "Wind-down + set-up. Year-end review + 2027 outlook.",
  weight: "B2B heavy",
  cadence: { articles: "1 new + 1 refresh", linkedin: "~6 posts", meta: "~6 posts" },
  articles: [
    {
      number: 1,
      title: "2026 in Numbers — The Year at CPS",
      publishDate: "Tue 1 Dec",
      pillar: "Pillar 03 · Industry Insights + Pillar 04 · Study Life",
      brief: "Public year-in-review. Students enrolled, completion rate, white papers, webinar attendees, bursary recipients. Visual + 800–1,000 words.",
    },
    {
      number: 2,
      title: "CELEBRATING OUR CLASS OF 2026",
      publishDate: "Tue 15 Dec",
      isRefresh: true,
      pillar: "Pillar 02 · Student Stories",
      brief: "Refresh of the Class of 2024 piece — Class of 2026 graduation celebration.",
    },
  ],
  weeks: [
    {
      week: "Wk of 30 Nov / 7 Dec",
      tueLinked: "2026 in numbers — annual highlights, 11,470+ trained.",
      thuProof: "Best graduation photo of 2026 — single iconic image.",
    },
    {
      week: "Wk of 14 Dec",
      tueLinked: "Class of 2026 graduation refresh — celebrate the Nov cohort.",
      thuProof: "End-of-year community photo — staff + students + alumni.",
    },
    {
      week: "Wk of 21 Dec",
      tueLinked: "Last article of 2026 + light “see you in Jan” tone.",
      thuProof: "Quiet warm year-end moment — single graduate, simple quote.",
    },
  ],
};

export const EDITORIAL: Record<number, MonthlyEditorial> = {
  0: MAY,
  1: JUN,
  2: JUL,
  3: AUG,
  4: SEP,
  5: OCT,
  6: NOV,
  7: DEC,
};

/* ─── Monthly summary roll-up ─── */

export const MONTHLY_SUMMARY = [
  { month: "May", theme: "The starting line", articles: "2 new", whitePaper: "#1", linkedin: "4", meta: "4" },
  { month: "Jun", theme: "What completion looks like", articles: "1 refresh, 1 new", whitePaper: "—", linkedin: "~8", meta: "~8" },
  { month: "Jul", theme: "Building capability", articles: "1 new, 1 refresh", whitePaper: "#2", linkedin: "~8", meta: "~8" },
  { month: "Aug", theme: "Compliance + capability", articles: "2 refresh", whitePaper: "—", linkedin: "~8", meta: "~8" },
  { month: "Sep", theme: "The next-step decision", articles: "1 new, 1 refresh", whitePaper: "#3", linkedin: "~8", meta: "~8" },
  { month: "Oct", theme: "Why qualifications matter now", articles: "1 refresh, 1 new", whitePaper: "—", linkedin: "~8", meta: "~8" },
  { month: "Nov", theme: "Step into your next role", articles: "2 new", whitePaper: "#4", linkedin: "~8", meta: "~8" },
  { month: "Dec", theme: "Looking forward to 2027", articles: "1 new, 1 refresh", whitePaper: "—", linkedin: "~6", meta: "~6" },
];

export const TOTALS = {
  articles: "16 (10 new, 6 refreshed)",
  whitePapers: "4 (May · Jul · Sep · Nov)",
  linkedin: "~66 posts",
  meta: "~66 posts",
};
