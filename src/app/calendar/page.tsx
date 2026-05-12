"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  CalendarDays,
  Rocket,
  Briefcase,
  Mic,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Clock,
  Mail,
  Megaphone,
  PenLine,
  ArrowRight,
  ArrowLeft,
  Pin,
  ListChecks,
  GraduationCap,
  FileText,
  Camera,
  Presentation,
  RefreshCw,
  Linkedin,
  Instagram,
  BookOpen,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import {
  EDITORIAL,
  PILLARS,
  APPROVED_PHRASINGS,
  VOICE_NOTES,
  WEEKLY_RHYTHM,
  BLOG_KEEP,
  BLOG_REFRESH,
  BLOG_RETIRE_NOTE,
  GRADUATION_ASSETS,
  GRADUATION_DEADLINES,
  MONTHLY_SUMMARY,
  TOTALS,
  type EditorialArticle,
  type EditorialWhitePaper,
  type WeekPost,
} from "./editorial-data";

/* ─── Date constants ─── */

const TODAY_ISO = "2026-05-12"; // mirrors system date

/* ─── Event categories ─── */

type Category = "intake" | "webinar" | "whitepaper" | "masterclass" | "asset" | "review" | "conference" | "milestone";

const CATEGORY_META: Record<Category, { label: string; color: string; icon: typeof Rocket }> = {
  intake: { label: "B2C Intake", color: "#6B2D8B", icon: GraduationCap },
  webinar: { label: "Webinar", color: "#00A8E1", icon: Mic },
  whitepaper: { label: "White Paper", color: "#10B981", icon: FileText },
  masterclass: { label: "Master Class", color: "#FFD100", icon: Presentation },
  asset: { label: "Brand Asset", color: "#EF4444", icon: Camera },
  review: { label: "Review Window", color: "#94A3B8", icon: RefreshCw },
  conference: { label: "Conference", color: "#F59E0B", icon: Briefcase },
  milestone: { label: "Milestone", color: "#6B2D8B", icon: Pin },
};

type CalendarEvent = {
  id: string;
  date: string; // YYYY-MM-DD
  endDate?: string; // for ranges
  title: string;
  category: Category;
  what: string;
  why: string;
};

const EVENTS: CalendarEvent[] = [
  {
    id: "intake1-launch",
    date: "2026-05-10",
    title: "Intake 1 Launch (HCIB + ACL6)",
    category: "intake",
    what: "The first cohort of 2026 starts — Higher Certificate in Banking (HCIB) and Advanced Certificate in Leadership (ACL6). Already live as of the calendar's first day. Target: 35 enrolled students per programme.",
    why: "Anchors all Phase 3 close-out activity. Marketing focus shifts to converting warm leads, capturing first-week-as-a-student content, and onboarding the new cohort onto CPSLearn.",
  },
  {
    id: "webinar1-leadup",
    date: "2026-05-14",
    title: "Webinar 1 lead-up begins (T-28)",
    category: "milestone",
    what: "Day 1 of the 4-week webinar playbook for Webinar 1. Speaker briefed, landing page built, email sequence drafted, social assets designed.",
    why: "Inaugural webinar in the series — anything missed at T-28 cascades through the rest of the lead-up. Get the foundation right.",
  },
  {
    id: "intake1-review-start",
    date: "2026-06-11",
    endDate: "2026-06-30",
    title: "Intake 1 review window",
    category: "review",
    what: "Phase 4 of the strategy doc. Lower-tempo period. Goal: harvest learnings, build retargeting pools, capture student stories, lay SEO groundwork for Intake 2.",
    why: "Documents CPA, channel performance, creative learnings and benchmarks for Intake 2. Cohort survey runs this window.",
  },
  {
    id: "webinar1",
    date: "2026-06-11",
    title: "Webinar 1 (Q2) — Inaugural B2B Webinar",
    category: "webinar",
    what: "Thu 11h00–12h00 SAST. Topic: \"Beyond banker: what future-skills capability looks like inside SA's leading banks.\" Audience: L&D heads, HR directors, skills-development managers in tier-1 banks.",
    why: "Establishes the series. Proves the playbook. Harvests CPS's first webinar-derived B2B leads. Also signals Intake 1 close-out externally.",
  },
  {
    id: "photo-shoot",
    date: "2026-06-30",
    title: "Professional photo & video shoot booked",
    category: "asset",
    what: "First professional shoot since pre-COVID. Team photos, campus environment, learner moments, corporate story video, CEO thought-leadership series.",
    why: "Brand asset library is bare. Every channel — LinkedIn, proposals, website, conferences — needs fresh, on-brand imagery. Tier-1 deliverable for Q3.",
  },
  {
    id: "whitepaper1",
    date: "2026-05-20",
    title: "White Paper #1 — Beyond Banker: Future Skills Capability",
    category: "whitepaper",
    what: "Co-authored with an academic partner. Argues the most important capability shift inside SA banks over the next 24 months is behavioural, not technical. Gated on the website; distributed at Webinar 1 follow-up.",
    why: "First gated content asset. Sets up Webinar 1 (11 Jun) and starts the inbound B2B lead engine — CPS has had zero website B2B leads in 10 years.",
  },
  {
    id: "whitepaper2",
    date: "2026-07-15",
    title: "White Paper #2 — Capability That Compounds: The 85% Completion Story",
    category: "whitepaper",
    what: "Pulls CPS's completion data into a B2B proof piece. Used as the gated follow-up to Webinar 1 and the lead-in to Webinar 2.",
    why: "Translates the 85% completion stat into a structural B2B argument — completion is a design decision, not a hope.",
  },
  {
    id: "masterclass1",
    date: "2026-08-13",
    title: "Master Class #1 (closed session)",
    category: "masterclass",
    what: "Closed-format session hosted at a strategic client. Uses the client's own coursework data. Pulls the broader L&D community into one room.",
    why: "Account-penetration play. 80% of L&D teams at existing client banks don't know CPS — this is how we get into the room.",
  },
  {
    id: "webinar2-leadup",
    date: "2026-08-20",
    title: "Webinar 2 lead-up begins (T-28)",
    category: "milestone",
    what: "4-week playbook restarts for Webinar 2.",
    why: "Tighter timeline this time — Webinar 2 doubles as a B2C trust signal during Intake 2 soft launch (14 Sep).",
  },
  {
    id: "intake2-softlaunch",
    date: "2026-09-14",
    title: "Intake 2 soft launch",
    category: "intake",
    what: "Phase 6 begins. Landing pages refreshed with November intake CTAs. Email blast to all info-pack downloaders since June. Paid spend steps up to R10k/mo run rate.",
    why: "Mirror of Phase 1 from Intake 1 but with a retargeting pool, a student-story bank, and ranking SEO pages.",
  },
  {
    id: "webinar2",
    date: "2026-09-17",
    title: "Webinar 2 (Q3)",
    category: "webinar",
    what: "Thu 11h00–12h00 SAST. Topic: \"From training delivered to capability tracked: what L&D leaders actually need from a partner in 2026.\" Account-penetration angle, uses CPSLearn's measurement story.",
    why: "Pairs with Intake 2 soft launch — B2B awareness reinforces B2C trust. Doubles as the bridge between the two channels.",
  },
  {
    id: "intake2-ramp",
    date: "2026-10-12",
    title: "Intake 2 ramp",
    category: "intake",
    what: "Phase 7 begins. Full R15k/mo spend reactivated. WhatsApp Business active and staffed. Daily IG, 4x/week TikTok, 2x/week LinkedIn.",
    why: "All systems on. CPL target ≤ R100, CVR ≥ 8%, push toward 35 enrolled per qual.",
  },
  {
    id: "whitepaper3",
    date: "2026-09-17",
    title: "White Paper #3 — From Training Delivered to Capability Tracked",
    category: "whitepaper",
    what: "Released on Webinar 2 day. Argues L&D is in transition from a delivery role to a measurement role. Practical infrastructure for closing the gap — cohort design, progress tracking, pre/post assessment.",
    why: "Pairs with Webinar 2 for the L&D buyer conversation. Doubles as a B2C trust signal during Intake 2 soft launch.",
  },
  {
    id: "conference",
    date: "2026-10-26",
    title: "Conference speaking slot (target Oct/Nov)",
    category: "conference",
    what: "First conference speaking in 2 years. Target: BANKSETA event or financial services conference. Slot must be identified and submitted by end of July.",
    why: "Two-year gap in CPS thought leadership visibility. Conferences are where industry positioning is cemented.",
  },
  {
    id: "webinar3-leadup",
    date: "2026-10-29",
    title: "Webinar 3 lead-up begins (T-28)",
    category: "milestone",
    what: "4-week playbook restarts for Webinar 3.",
    why: "Final webinar of the year — playbook should be polished by now. Use the refinements from Webinars 1 and 2.",
  },
  {
    id: "intake2-launch",
    date: "2026-11-09",
    title: "Intake 2 Launch",
    category: "intake",
    what: "Phase 8 begins. Peak spend day. Intake-launch creative on all channels. Email all warm leads (score ≥ 41): \"It's launch week.\"",
    why: "Same intensity as the May intake, but now with proven creative, working retargeting, and a content library. Target: 35 enrolled per qual.",
  },
  {
    id: "webinar3",
    date: "2026-11-26",
    title: "Webinar 3 (Q4)",
    category: "webinar",
    what: "Thu 11h00–12h00 SAST. Topic: \"The compliance and capability conversation: QCTO, FAIS, and what's coming in 2027.\" Audience: L&D heads, compliance officers, brokers.",
    why: "Year-end positioning. Captures pipeline into Q1 2027. Looks forward — sets up next year's sales conversations.",
  },
  {
    id: "whitepaper4",
    date: "2026-11-18",
    title: "White Paper #4 — The Compliance and Capability Conversation",
    category: "whitepaper",
    what: "QCTO, FAIS, and what's coming in 2027. Paired with Webinar 3 (26 Nov). Year-end strategic paper that sets the table for 2027 L&D conversations.",
    why: "Final gated asset of the year. The downloader list becomes the foundation of 2027's B2B nurture.",
  },
  {
    id: "intake2-review",
    date: "2026-12-08",
    endDate: "2026-12-19",
    title: "Intake 2 review window",
    category: "review",
    what: "Close out Q4. Document Intake 2 nurture performance. Year-end account review with each major client.",
    why: "Critical for planning 2027. What worked? What needs new investment? Where did the B2B→B2C flywheel actually turn?",
  },
  {
    id: "windown",
    date: "2026-12-19",
    endDate: "2026-12-31",
    title: "Year-end wind-down",
    category: "review",
    what: "Light maintenance, no new launches. Brand-search paid only. \"From all of us at CPS\" community-tone content. Plan Q1 2027.",
    why: "Audience switches off. We switch off with them — but stay listed, stay indexed, stay searchable.",
  },
];

/* ─── Phases (background tints on date ranges) ─── */

type Phase = { id: string; start: string; end: string; color: string; title: string };

const PHASES: Phase[] = [
  { id: "p3", start: "2026-05-11", end: "2026-06-10", color: "#6B2D8B", title: "Phase 3 — Intake 1 Push" },
  { id: "p4", start: "2026-06-11", end: "2026-06-30", color: "#00A8E1", title: "Phase 4 — Review & Maintenance" },
  { id: "p5", start: "2026-07-01", end: "2026-09-13", color: "#10B981", title: "Phase 5 — Build & Slow Burn" },
  { id: "p6", start: "2026-09-14", end: "2026-10-11", color: "#FFD100", title: "Phase 6 — Intake 2 Soft Launch" },
  { id: "p7", start: "2026-10-12", end: "2026-11-08", color: "#EF4444", title: "Phase 7 — Intake 2 Ramp" },
  { id: "p8", start: "2026-11-09", end: "2026-12-07", color: "#6B2D8B", title: "Phase 8 — Intake 2 Push" },
  { id: "p9", start: "2026-12-08", end: "2026-12-31", color: "#94A3B8", title: "Phase 9 — Wind-down" },
];

/* ─── Organic posting schedule ─── */

type Channel = "linkedin" | "meta";

const CHANNELS: Record<Channel, {
  label: string;
  color: string;
  icon: typeof Linkedin;
  cadence: string;
  weekdays: number[]; // 0=Sun..6=Sat
  bullets: { title: string; detail: string }[];
}> = {
  linkedin: {
    label: "LinkedIn",
    color: "#0A66C2",
    icon: Linkedin,
    cadence: "2 posts/week · Tue + Thu",
    weekdays: [2, 4],
    bullets: [
      { title: "Tue · Article-linked post", detail: "Drives traffic to the bi-weekly article. Same content adapted for LinkedIn voice." },
      { title: "Thu · Social proof post", detail: "Graduation moment, alumni story, completion proof. Adapted for LinkedIn voice." },
    ],
  },
  meta: {
    label: "Meta (Instagram + Facebook)",
    color: "#E4405F",
    icon: Instagram,
    cadence: "2 posts/week · Tue + Thu",
    weekdays: [2, 4],
    bullets: [
      { title: "Tue · Article-linked post", detail: "Same content as LinkedIn, adapted for Meta — warmer, more visual." },
      { title: "Thu · Social proof post", detail: "Graduation imagery, alumni Reels, completion proof — story-first." },
    ],
  },
};

function organicChannelsOn(dateIso: string): Channel[] {
  const [y, m, d] = dateIso.split("-").map(Number);
  const weekday = new Date(y, m - 1, d).getDay();
  return (Object.keys(CHANNELS) as Channel[]).filter((c) =>
    CHANNELS[c].weekdays.includes(weekday)
  );
}

/* ─── Months to render — May to December 2026 ─── */

const MONTHS = [
  { y: 2026, m: 4, name: "May", short: "May" },
  { y: 2026, m: 5, name: "June", short: "Jun" },
  { y: 2026, m: 6, name: "July", short: "Jul" },
  { y: 2026, m: 7, name: "August", short: "Aug" },
  { y: 2026, m: 8, name: "September", short: "Sep" },
  { y: 2026, m: 9, name: "October", short: "Oct" },
  { y: 2026, m: 10, name: "November", short: "Nov" },
  { y: 2026, m: 11, name: "December", short: "Dec" },
];

/* ─── Date helpers ─── */

function isoDate(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function eventsOn(date: string): CalendarEvent[] {
  return EVENTS.filter((e) => {
    if (e.endDate) return date >= e.date && date <= e.endDate;
    return e.date === date;
  });
}

function phaseFor(date: string): Phase | undefined {
  return PHASES.find((p) => date >= p.start && date <= p.end);
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

/* ─── Tabs ─── */

const TABS = [
  { id: "calendar", label: "Calendar", icon: CalendarDays, color: "#10B981" },
  { id: "b2c", label: "B2C Calendar", icon: Rocket, color: "#6B2D8B" },
  { id: "b2b", label: "B2B Strategy", icon: Briefcase, color: "#00A8E1" },
  { id: "webinar", label: "Webinar Playbook", icon: Mic, color: "#10B981" },
  { id: "kpis", label: "KPIs & Verification", icon: BarChart3, color: "#FFD100" },
];

const CHANNEL_ICONS: Record<string, typeof Mail> = {
  PAID: BarChart3,
  OWNED: Mail,
  ORGANIC: Megaphone,
  "SEO/BLOG": PenLine,
};

const CHANNEL_COLORS: Record<string, string> = {
  PAID: "#00A8E1",
  OWNED: "#6B2D8B",
  ORGANIC: "#10B981",
  "SEO/BLOG": "#FFD100",
};

/* ════════════════════════════════════════════════════════════════════
   HEADER
   ════════════════════════════════════════════════════════════════════ */

function CalendarHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/[0.03] via-transparent to-[#6B2D8B]/[0.03]" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#10B981]/[0.02] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "#10B981" }} />
            <span className="section-label" style={{ color: "#10B981" }}>
              Marketing Calendar &middot; May &mdash; December 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            Marketing Calendar{" "}
            <span style={{ color: "#10B981" }}>May &mdash; Dec 2026</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-8">
            Every B2C intake, B2B webinar, white paper, and milestone for the second half of 2026 — visualised on the calendar with the detail of each item below.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: CalendarDays, label: "8 months", desc: "May → Dec 2026", color: "#10B981" },
              { icon: Mic, label: "3 webinars", desc: "11 Jun · 17 Sep · 26 Nov", color: "#00A8E1" },
              { icon: ListChecks, label: `${EVENTS.length} milestones`, desc: "to deliver this period", color: "#FFD100" },
            ].map((card) => (
              <div key={card.label} className="card-elevated !p-0 overflow-hidden">
                <div className="h-[3px] w-full" style={{ backgroundColor: card.color }} />
                <div className="p-5 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${card.color}0F`, border: `1px solid ${card.color}20` }}
                  >
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground/85">{card.label}</div>
                    <div className="text-xs text-foreground/45 leading-[1.5]">{card.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   TAB NAV
   ════════════════════════════════════════════════════════════════════ */

function TabBar({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <div className="sticky top-14 md:top-0 z-30 bg-white/80 backdrop-blur-md border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 -mx-1 px-1">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "text-white shadow-sm"
                    : "text-foreground/55 hover:text-foreground/80 hover:bg-black/[0.04]"
                }`}
                style={isActive ? { backgroundColor: tab.color } : undefined}
              >
                <Icon size={14} aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   THEME BANNER — prominent header above the month grid
   ════════════════════════════════════════════════════════════════════ */

function ThemeBanner({ monthIdx, monthName }: { monthIdx: number; monthName: string }) {
  const data = EDITORIAL[monthIdx];
  if (!data) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl mb-6 sm:mb-8 border border-black/[0.05]">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B2D8B]/[0.08] via-[#00A8E1]/[0.04] to-[#10B981]/[0.06]" />
      <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[#6B2D8B]/[0.08] blur-[100px]" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-[#10B981]/[0.06] blur-[100px]" aria-hidden="true" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B2D8B]/70">
            Theme of the month
          </span>
          <span className="text-[10px] text-foreground/35">·</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/45">
            {monthName} 2026
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/90 tracking-tight mb-4 leading-[1.15]">
          <span className="text-foreground/40">{monthName} · </span>
          <span className="text-foreground/90">{data.theme}</span>
        </h2>

        <p className="text-sm sm:text-base text-foreground/60 leading-[1.8] max-w-4xl mb-6 italic">
          &ldquo;{data.themeStatement}&rdquo;
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border bg-white/70"
            style={{
              color: data.weight.includes("B2C") ? "#6B2D8B" : data.weight.includes("B2B") ? "#00A8E1" : "#10B981",
              borderColor: data.weight.includes("B2C") ? "#6B2D8B33" : data.weight.includes("B2B") ? "#00A8E133" : "#10B98133",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: data.weight.includes("B2C") ? "#6B2D8B" : data.weight.includes("B2B") ? "#00A8E1" : "#10B981",
              }}
              aria-hidden="true"
            />
            {data.weight}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/70 border border-black/[0.06] text-foreground/65">
            <FileText size={11} aria-hidden="true" />
            {data.cadence.articles} articles
          </span>
          {data.whitePaper && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981]">
              <BookOpen size={11} aria-hidden="true" />
              White paper {data.cadence.whitePaper ?? `#${data.whitePaper.number}`}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/70 border border-black/[0.06] text-foreground/65">
            <Linkedin size={11} aria-hidden="true" />
            {data.cadence.linkedin}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/70 border border-black/[0.06] text-foreground/65">
            <Instagram size={11} aria-hidden="true" />
            {data.cadence.meta}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   MONTH GRID — LARGE (single-month view)
   ════════════════════════════════════════════════════════════════════ */

function MonthGrid({ y, m, name, onEventClick }: { y: number; m: number; name: string; onEventClick: (id: string) => void }) {
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const startWeekday = first.getDay();
  const daysInMonth = last.getDate();

  const cells: Array<null | { d: number; date: string; events: CalendarEvent[]; phase: Phase | undefined; isToday: boolean; organic: Channel[] }> = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const date = isoDate(y, m, d);
    cells.push({
      d,
      date,
      events: eventsOn(date),
      phase: phaseFor(date),
      isToday: date === TODAY_ISO,
      organic: organicChannelsOn(date),
    });
  }

  // Pad to complete final week
  while (cells.length % 7 !== 0) cells.push(null);

  const eventCount = cells.filter((c) => c && c.events.length > 0).length;

  return (
    <div className="card-elevated !p-0 overflow-hidden">
      <div className="h-[3px] w-full bg-gradient-to-r from-[#10B981] to-[#00A8E1]" />
      <div className="p-5 sm:p-7">
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground/85 tracking-tight">
            {name} 2026
          </h3>
          <span className="text-xs text-foreground/45">
            {eventCount} event{eventCount === 1 ? "" : "s"}
          </span>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
            <div key={i} className="text-center text-[10px] font-bold uppercase tracking-wider text-foreground/35 py-2">
              <span className="hidden sm:inline">{d}</span>
              <span className="sm:hidden">{d.charAt(0)}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((cell, i) => {
            if (!cell) return <div key={i} className="aspect-square sm:aspect-[1.2/1]" />;
            const { d, date, events, phase, isToday, organic } = cell;
            const hasEvents = events.length > 0;

            const organicTooltip =
              organic.length > 0
                ? organic.map((c) => `${CHANNELS[c].label} post scheduled`).join("\n")
                : "";
            const eventTooltip = events.map((e) => e.title).join("\n");
            const cellTitle = [eventTooltip, organicTooltip].filter(Boolean).join("\n");

            const cellInner = (
              <div
                className={`relative w-full h-full rounded-lg p-2 transition-all overflow-hidden ${
                  hasEvents ? "cursor-pointer hover:shadow-sm" : ""
                } ${isToday ? "" : "hover:bg-black/[0.02]"}`}
                style={{
                  backgroundColor: phase ? `${phase.color}0E` : undefined,
                  ...(isToday ? { boxShadow: `inset 0 0 0 2px #10B981` } : {}),
                  border: phase ? `1px solid ${phase.color}25` : "1px solid rgba(0,0,0,0.04)",
                }}
                title={cellTitle || phase?.title || undefined}
              >
                <div className="flex items-start justify-between mb-1">
                  <span
                    className={`text-xs font-bold ${isToday ? "text-[#10B981]" : "text-foreground/70"}`}
                  >
                    {d}
                  </span>
                  {isToday && (
                    <span className="text-[8px] font-bold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 px-1 rounded">
                      Today
                    </span>
                  )}
                </div>

                {hasEvents && (
                  <div className="space-y-0.5">
                    {events.slice(0, 2).map((e) => {
                      const meta = CATEGORY_META[e.category];
                      return (
                        <div
                          key={e.id}
                          className="flex items-center gap-1 rounded-sm px-1 py-0.5"
                          style={{ backgroundColor: `${meta.color}18` }}
                        >
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ backgroundColor: meta.color }}
                            aria-hidden="true"
                          />
                          <span
                            className="text-[9px] font-semibold leading-tight truncate"
                            style={{ color: meta.color }}
                          >
                            {e.title}
                          </span>
                        </div>
                      );
                    })}
                    {events.length > 2 && (
                      <div className="text-[9px] font-bold text-foreground/45 px-1">
                        +{events.length - 2} more
                      </div>
                    )}
                  </div>
                )}

                {/* Organic post markers (LinkedIn / Meta) */}
                {organic.length > 0 && (
                  <div className="absolute bottom-1 right-1 flex items-center gap-0.5">
                    {organic.map((c) => {
                      const ch = CHANNELS[c];
                      const Icon = ch.icon;
                      return (
                        <span
                          key={c}
                          className="w-3.5 h-3.5 rounded-[3px] flex items-center justify-center"
                          style={{ backgroundColor: `${ch.color}1A` }}
                          aria-label={`${ch.label} post`}
                        >
                          <Icon size={9} style={{ color: ch.color }} aria-hidden="true" />
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );

            return (
              <div key={i} className="aspect-square sm:aspect-[1.2/1] min-h-[80px]">
                {hasEvents ? (
                  <button
                    type="button"
                    onClick={() => onEventClick(events[0].id)}
                    aria-label={`${events[0].title} on ${formatDate(date)}`}
                    className="w-full h-full text-left"
                  >
                    {cellInner}
                  </button>
                ) : (
                  cellInner
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   MONTH SELECTOR
   ════════════════════════════════════════════════════════════════════ */

function MonthSelector({ activeIdx, onChange }: { activeIdx: number; onChange: (idx: number) => void }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, activeIdx - 1))}
          disabled={activeIdx === 0}
          aria-label="Previous month"
          className="w-9 h-9 rounded-full flex items-center justify-center border border-black/[0.06] bg-white hover:bg-black/[0.02] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
        >
          <ArrowLeft size={14} className="text-foreground/55" />
        </button>

        <div className="flex-1 flex gap-1.5 overflow-x-auto -mx-1 px-1 py-1">
          {MONTHS.map((mo, idx) => {
            const isActive = idx === activeIdx;
            const monthEvents = EVENTS.filter((e) =>
              e.date.startsWith(`${mo.y}-${String(mo.m + 1).padStart(2, "0")}`)
            ).length;
            return (
              <button
                key={`${mo.y}-${mo.m}`}
                type="button"
                onClick={() => onChange(idx)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "text-white shadow-sm"
                    : "text-foreground/55 hover:text-foreground/80 bg-white border border-black/[0.06] hover:border-black/[0.12]"
                }`}
                style={isActive ? { backgroundColor: "#10B981" } : undefined}
              >
                <span>{mo.short} 2026</span>
                {monthEvents > 0 && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/25" : "bg-black/[0.06]"
                    }`}
                  >
                    {monthEvents}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onChange(Math.min(MONTHS.length - 1, activeIdx + 1))}
          disabled={activeIdx === MONTHS.length - 1}
          aria-label="Next month"
          className="w-9 h-9 rounded-full flex items-center justify-center border border-black/[0.06] bg-white hover:bg-black/[0.02] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
        >
          <ArrowRight size={14} className="text-foreground/55" />
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   EDITORIAL BRIEF — per-month theme, articles, white paper, posts
   ════════════════════════════════════════════════════════════════════ */

function EditorialBrief({ monthIdx, monthName }: { monthIdx: number; monthName: string; monthShort: string }) {
  const data = EDITORIAL[monthIdx];
  if (!data) return null;

  return (
    <div className="mt-16">
      {/* Editorial brief header */}
      <div className="mb-2 flex items-center gap-3">
        <div className="w-8 h-[2px] rounded-full bg-[#6B2D8B]" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B2D8B]">
          Editorial brief
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight mb-6">
        Content plan for {monthName}
      </h2>

      {/* Articles */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/85">
            Articles this month
          </h3>
          <span className="text-[11px] text-foreground/40">
            {data.cadence.articles} · bi-weekly cadence
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {data.articles.map((a) => (
            <ArticleCard key={a.number} article={a} />
          ))}
        </div>
      </div>

      {/* White paper */}
      {data.whitePaper && (
        <div className="mb-10">
          <div className="flex items-baseline gap-3 mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/85">
              White paper #{data.whitePaper.number}
            </h3>
            <span className="text-[11px] text-foreground/40">Gated · bi-monthly cadence (May · Jul · Sep · Nov)</span>
          </div>
          <WhitePaperCard paper={data.whitePaper} />
        </div>
      )}

      {/* Weekly post plan */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/85">
            Weekly post plan
          </h3>
          <span className="text-[11px] text-foreground/40">
            Tue + Thu · same content adapted across LinkedIn + Meta
          </span>
        </div>
        <p className="text-xs text-foreground/50 mb-5 max-w-3xl leading-[1.7]">
          Tuesday drives traffic to the bi-weekly article. Thursday is the social-proof post — a graduation moment, alumni story or completion proof. CPS supplies the graduation imagery referenced in each Thursday post.
        </p>
        <div className="space-y-3">
          {data.weeks.map((wk) => (
            <WeekCard key={wk.week} week={wk} />
          ))}
        </div>
      </div>

      {/* May-only reference blocks: rhythm, pillars, phrasings, voice */}
      {monthIdx === 0 && (
        <div className="mt-12 space-y-4">
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A8E1] mb-3">Weekly rhythm — reference</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {WEEKLY_RHYTHM.map((r) => (
                  <div key={r.day} className="rounded-lg p-3 bg-[#00A8E1]/[0.04] border border-[#00A8E1]/15">
                    <div className="text-[11px] font-bold text-[#00A8E1] mb-0.5">{r.day} · {r.role}</div>
                    <p className="text-xs text-foreground/55 leading-[1.6]">{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full bg-[#6B2D8B]" />
              <div className="p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B2D8B] mb-3">Content pillars</h4>
                <ul className="space-y-2">
                  {PILLARS.map((p) => (
                    <li key={p.id} className="flex items-start gap-2 text-xs text-foreground/60 leading-[1.6]">
                      <span className="text-[10px] font-bold mt-0.5 shrink-0" style={{ color: p.color }}>{p.id}</span>
                      <span>
                        <span className="font-semibold text-foreground/80">{p.label}</span>{" "}
                        <span className="text-foreground/40">→ {p.channel}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full bg-[#10B981]" />
              <div className="p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-3">Approved phrasings</h4>
                <ul className="space-y-2">
                  {APPROVED_PHRASINGS.map((p) => (
                    <li key={p} className="text-xs text-foreground/60 leading-[1.6] italic">
                      &ldquo;{p}&rdquo;
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-[#FFD100]" />
            <div className="p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#B8860B" }}>Voice notes</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {VOICE_NOTES.map((v) => (
                  <div key={v.title} className="rounded-lg p-3 bg-[#FFD100]/[0.05] border border-[#FFD100]/15">
                    <div className="text-[11px] font-bold mb-0.5" style={{ color: "#B8860B" }}>
                      {v.title}
                    </div>
                    <p className="text-xs text-foreground/60 leading-[1.6]">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WeekCard({ week }: { week: WeekPost }) {
  return (
    <div className="card-elevated !p-0 overflow-hidden rounded-2xl">
      <div className="p-5 sm:p-6">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">
            {week.week}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#0A66C2]/15 bg-[#0A66C2]/[0.03] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Linkedin size={11} className="text-[#0A66C2]" aria-hidden="true" />
              <Instagram size={11} className="text-[#E4405F]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A66C2]">
                Tue · Article-linked
              </span>
            </div>
            <p className="text-xs text-foreground/70 leading-[1.6]">{week.tueLinked}</p>
          </div>
          <div className="rounded-xl border border-[#10B981]/15 bg-[#10B981]/[0.03] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Linkedin size={11} className="text-[#0A66C2]" aria-hidden="true" />
              <Instagram size={11} className="text-[#E4405F]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                Thu · Social proof
              </span>
            </div>
            <p className="text-xs text-foreground/70 leading-[1.6]">{week.thuProof}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: EditorialArticle }) {
  const isRefresh = article.isRefresh;
  const accent = isRefresh ? "#F59E0B" : "#6B2D8B";
  return (
    <div className="card-elevated !p-0 overflow-hidden rounded-2xl">
      <div className="h-[3px] w-full" style={{ backgroundColor: accent }} />
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${accent}0F`, border: `1px solid ${accent}25` }}
          >
            {isRefresh ? (
              <RefreshCw size={16} style={{ color: accent }} aria-hidden="true" />
            ) : (
              <FileText size={16} style={{ color: accent }} aria-hidden="true" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: `${accent}10`, color: accent }}>
                Article {article.number}
              </span>
              {isRefresh && (
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: `${accent}10`, color: accent }}>
                  Refresh
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-foreground/55">
                <CalendarDays size={10} aria-hidden="true" />
                {article.publishDate}
              </span>
            </div>
            <h4 className="text-sm font-bold text-foreground/85 leading-[1.4] mb-1">{article.title}</h4>
            {article.pillar && (
              <p className="text-[10px] text-foreground/40">{article.pillar}</p>
            )}
          </div>
        </div>
        {article.brief && <p className="text-xs text-foreground/55 leading-[1.7] mt-2">{article.brief}</p>}
      </div>
    </div>
  );
}

function WhitePaperCard({ paper }: { paper: EditorialWhitePaper }) {
  return (
    <div className="card-elevated !p-0 overflow-hidden rounded-2xl" style={{ borderLeft: "4px solid #10B981" }}>
      <div className="h-[3px] w-full bg-[#10B981]" />
      <div className="p-6 sm:p-7">
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#10B98110", border: "1px solid #10B98125" }}
          >
            <BookOpen size={18} style={{ color: "#10B981" }} aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981]">
                White Paper #{paper.number}
              </span>
              <span className="text-[10px] text-foreground/45 inline-flex items-center gap-1">
                <CalendarDays size={11} aria-hidden="true" />
                {paper.publishDate}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-foreground/85 leading-[1.4]">{paper.title}</h4>
          </div>
        </div>

        {paper.brief && (
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/35 mb-1.5">Brief</div>
            <p className="text-sm text-foreground/60 leading-[1.7] whitespace-pre-line">{paper.brief}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function OrganicCadenceCompact({ activeMonth }: { activeMonth: { y: number; m: number; short: string } }) {
  return (
    <div className="mt-10 rounded-2xl bg-white border border-black/[0.05] p-5">
      <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-3">
        Weekly posting rhythm — runs all month
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {(Object.keys(CHANNELS) as Channel[]).map((c) => {
          const ch = CHANNELS[c];
          const Icon = ch.icon;
          const monthlyPosts = (() => {
            const daysInMonth = new Date(activeMonth.y, activeMonth.m + 1, 0).getDate();
            let count = 0;
            for (let d = 1; d <= daysInMonth; d++) {
              const date = isoDate(activeMonth.y, activeMonth.m, d);
              if (organicChannelsOn(date).includes(c)) count++;
            }
            return count;
          })();
          return (
            <div key={c} className="flex items-center gap-3 rounded-xl p-3 border" style={{ backgroundColor: `${ch.color}05`, borderColor: `${ch.color}20` }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${ch.color}12`, border: `1px solid ${ch.color}25` }}
              >
                <Icon size={14} style={{ color: ch.color }} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-foreground/80">{ch.label}</div>
                <div className="text-[11px]" style={{ color: ch.color }}>{ch.cadence}</div>
              </div>
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap"
                style={{ backgroundColor: `${ch.color}14`, color: ch.color }}
              >
                {monthlyPosts} in {activeMonth.short}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PANEL: CALENDAR (overview)
   ════════════════════════════════════════════════════════════════════ */

function CalendarPanel() {
  /* Default to current month (May 2026 = index 0) */
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMonth = MONTHS[activeIdx];
  const monthEvents = EVENTS.filter((e) =>
    e.date.startsWith(`${activeMonth.y}-${String(activeMonth.m + 1).padStart(2, "0")}`)
  );

  /* Phases that overlap the active month */
  const activeMonthStart = `${activeMonth.y}-${String(activeMonth.m + 1).padStart(2, "0")}-01`;
  const lastDay = new Date(activeMonth.y, activeMonth.m + 1, 0).getDate();
  const activeMonthEnd = `${activeMonth.y}-${String(activeMonth.m + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
  const activePhases = PHASES.filter((p) => p.end >= activeMonthStart && p.start <= activeMonthEnd);

  const onEventClick = (id: string) => {
    const el = document.getElementById(`event-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-[#10B981]");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-[#10B981]");
      }, 1800);
    }
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Month selector */}
        <MonthSelector activeIdx={activeIdx} onChange={setActiveIdx} />

        {/* Theme banner + month grid — animate together when month switches */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMonth.y}-${activeMonth.m}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <ThemeBanner monthIdx={activeIdx} monthName={activeMonth.name} />
            <MonthGrid
              y={activeMonth.y}
              m={activeMonth.m}
              name={activeMonth.name}
              onEventClick={onEventClick}
            />
          </motion.div>
        </AnimatePresence>

        {/* Phase legend — only phases touching this month */}
        {activePhases.length > 0 && (
          <div className="mt-6">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-3">
              Active phase{activePhases.length > 1 ? "s" : ""} this month
            </h3>
            <div className="flex flex-wrap gap-2">
              {activePhases.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 border"
                  style={{ backgroundColor: `${p.color}08`, borderColor: `${p.color}25` }}
                >
                  <span
                    className="w-2 h-2 rounded-sm"
                    style={{ backgroundColor: p.color }}
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-semibold" style={{ color: p.color }}>
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event-type legend */}
        <div className="mt-5">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-3">
            Event types
          </h3>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(CATEGORY_META) as Category[]).map((cat) => {
              const meta = CATEGORY_META[cat];
              const Icon = meta.icon;
              return (
                <div
                  key={cat}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 border"
                  style={{ backgroundColor: `${meta.color}08`, borderColor: `${meta.color}25` }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: meta.color }}
                    aria-hidden="true"
                  />
                  <Icon size={11} style={{ color: meta.color }} aria-hidden="true" />
                  <span className="text-[11px] font-semibold" style={{ color: meta.color }}>
                    {meta.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Organic channel legend */}
        <div className="mt-5">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-3">
            Organic posting days — small icons in cell corners
          </h3>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(CHANNELS) as Channel[]).map((c) => {
              const ch = CHANNELS[c];
              const Icon = ch.icon;
              return (
                <div
                  key={c}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 border"
                  style={{ backgroundColor: `${ch.color}08`, borderColor: `${ch.color}25` }}
                >
                  <span
                    className="w-4 h-4 rounded-[3px] flex items-center justify-center"
                    style={{ backgroundColor: `${ch.color}1A` }}
                  >
                    <Icon size={9} style={{ color: ch.color }} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-semibold" style={{ color: ch.color }}>
                    {ch.label} &middot; {ch.cadence}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Brief for the active month */}
        <EditorialBrief monthIdx={activeIdx} monthName={activeMonth.name} monthShort={activeMonth.short} />

        {/* Compact organic posting cadence summary */}
        <OrganicCadenceCompact activeMonth={activeMonth} />

        {/* Detail section for the active month */}
        <div className="mt-14">
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight">
              What&apos;s happening in {activeMonth.name}
            </h2>
          </div>
          <p className="text-sm text-foreground/50 max-w-3xl mb-8">
            {monthEvents.length === 0
              ? `No major events scheduled in ${activeMonth.name}. Always-on activities (LinkedIn cadence, account outreach, ongoing nurture) continue through this month.`
              : `${monthEvents.length} ${monthEvents.length === 1 ? "item" : "items"} on the calendar this month — click any cell above to jump to a card below.`}
          </p>

          {monthEvents.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${activeMonth.y}-${activeMonth.m}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {monthEvents.map((event) => {
                  const meta = CATEGORY_META[event.category];
                  const Icon = meta.icon;
                  return (
                    <div
                      key={event.id}
                      id={`event-${event.id}`}
                      className="card-elevated !p-0 overflow-hidden rounded-2xl transition-shadow"
                    >
                      <div className="h-[3px] w-full" style={{ backgroundColor: meta.color }} />
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `${meta.color}0F`,
                              border: `1px solid ${meta.color}25`,
                            }}
                          >
                            <Icon size={16} style={{ color: meta.color }} aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span
                                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: `${meta.color}10`,
                                  color: meta.color,
                                }}
                              >
                                {meta.label}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/55">
                                <CalendarDays size={11} aria-hidden="true" />
                                {formatDate(event.date)}
                                {event.endDate && (
                                  <>
                                    <span className="text-foreground/30">→</span>
                                    {formatDate(event.endDate)}
                                  </>
                                )}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-foreground/85 leading-[1.4]">
                              {event.title}
                            </h4>
                          </div>
                        </div>

                        <div className="space-y-3 mt-4">
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/35 mb-1.5">
                              What it is
                            </div>
                            <p className="text-sm text-foreground/60 leading-[1.7]">{event.what}</p>
                          </div>
                          <div className="rounded-lg p-3" style={{ backgroundColor: `${meta.color}06` }}>
                            <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: meta.color }}>
                              Why it matters
                            </div>
                            <p className="text-xs text-foreground/55 leading-[1.7]">{event.why}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}

          <div className="mt-10 rounded-2xl bg-white border border-[#FFD100]/15 p-5" style={{ borderLeft: "4px solid #FFD100" }}>
            <div className="flex items-start gap-3">
              <AlertCircle size={18} style={{ color: "#B8860B" }} className="shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-foreground/55 leading-[1.7]">
                <span className="font-semibold text-foreground/80">Confirm before publish:</span>{" "}
                Intake 2 date (placeholder: 9 Nov), webinar dates and times, speaker availability, and the conference speaking slot for Oct/Nov. See the KPIs &amp; Verification tab for the full 14-item verification queue.
              </p>
            </div>
          </div>
        </div>

        {/* Monthly summary roll-up — always shown so the year is legible at a glance */}
        <MonthlySummarySection />

        {/* May-only: production assets and existing blog content */}
        {activeIdx === 0 && (
          <>
            <GraduationContentSection />
            <BlogPlanSection />
          </>
        )}
      </div>
    </section>
  );
}

function MonthlySummarySection() {
  return (
    <div className="mt-16">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight">
          The year at a glance
        </h2>
      </div>
      <p className="text-sm text-foreground/50 max-w-3xl mb-6">
        Monthly content roll-up across all 8 months. Totals: <span className="text-foreground/75 font-semibold">{TOTALS.articles}</span> articles · {TOTALS.whitePapers} · {TOTALS.linkedin} · {TOTALS.meta}.
      </p>
      <div className="card-elevated !p-0 overflow-hidden">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#6B2D8B] via-[#00A8E1] to-[#10B981]" />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-black/[0.05]">
                <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Month</th>
                <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Theme</th>
                <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Articles</th>
                <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">White paper</th>
                <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">LinkedIn</th>
                <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Meta</th>
              </tr>
            </thead>
            <tbody>
              {MONTHLY_SUMMARY.map((m) => (
                <tr key={m.month} className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors">
                  <td className="p-3 text-sm font-bold text-foreground/80">{m.month}</td>
                  <td className="p-3 text-xs text-foreground/60">{m.theme}</td>
                  <td className="p-3 text-xs text-foreground/55">{m.articles}</td>
                  <td className="p-3">
                    {m.whitePaper === "—" ? (
                      <span className="text-xs text-foreground/35">—</span>
                    ) : (
                      <span className="text-xs font-semibold text-[#10B981] bg-[#10B981]/[0.08] px-2 py-0.5 rounded-full">{m.whitePaper}</span>
                    )}
                  </td>
                  <td className="p-3">
                    <span className="text-xs font-semibold text-[#0A66C2] bg-[#0A66C2]/[0.08] px-2 py-0.5 rounded-full">{m.linkedin}</span>
                  </td>
                  <td className="p-3">
                    <span className="text-xs font-semibold text-[#E4405F] bg-[#E4405F]/[0.08] px-2 py-0.5 rounded-full">{m.meta}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function GraduationContentSection() {
  return (
    <div className="mt-16">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight">
          Graduation content needed from CPS
        </h2>
      </div>
      <p className="text-sm text-foreground/50 max-w-3xl mb-6">
        Each Thursday post is anchored to a real graduation moment. CPS supplies the imagery and stories — Broadbrand schedules the posts. Production deadlines are time-boxed so each content quarter is loaded before it's needed.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {GRADUATION_DEADLINES.map((d) => (
          <div key={d.window} className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-[#FFD100]" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Camera size={14} style={{ color: "#B8860B" }} aria-hidden="true" />
                <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: "#B8860B" }}>
                  {d.window}
                </h4>
              </div>
              <p className="text-sm font-semibold text-foreground/75">{d.deadline}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 card-elevated !p-0 overflow-hidden">
        <div className="h-[3px] w-full bg-[#FFD100]" />
        <div className="p-5 sm:p-6">
          <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#B8860B" }}>
            Asset types
          </h4>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
            {GRADUATION_ASSETS.map((a) => (
              <li key={a} className="flex items-start gap-2 text-xs text-foreground/60 leading-[1.6]">
                <CheckCircle2 size={11} className="text-[#FFD100]/80 mt-1 shrink-0" aria-hidden="true" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BlogPlanSection() {
  return (
    <div className="mt-16">
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight">
          Existing CPS blog — keep, refresh, retire
        </h2>
      </div>
      <p className="text-sm text-foreground/50 max-w-3xl mb-6 leading-[1.7]">
        The cps.co.za blog has ~51 posts and has been dormant since 25 August 2025. This plan revives it. <span className="text-foreground/75 font-medium">{BLOG_KEEP.length} posts to keep & promote</span> · <span className="text-foreground/75 font-medium">{BLOG_REFRESH.length} to refresh</span> · the rest to retire (URLs stay live).
      </p>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Keep & promote */}
        <div className="card-elevated !p-0 overflow-hidden">
          <div className="h-[3px] w-full bg-[#10B981]" />
          <div className="p-5 sm:p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-3">
              Keep &amp; promote ({BLOG_KEEP.length})
            </h4>
            <ul className="space-y-2.5">
              {BLOG_KEEP.map((b) => (
                <li key={b.title} className="rounded-lg bg-[#10B981]/[0.04] border border-[#10B981]/12 p-3">
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <p className="text-xs font-semibold text-foreground/75 leading-[1.5]">{b.title}</p>
                    <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/12 px-1.5 py-0.5 rounded shrink-0">
                      → {b.linkMonth}
                    </span>
                  </div>
                  <p className="text-[10px] text-foreground/40">{b.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Refresh */}
        <div className="card-elevated !p-0 overflow-hidden">
          <div className="h-[3px] w-full bg-[#F59E0B]" />
          <div className="p-5 sm:p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-3">
              Refresh ({BLOG_REFRESH.length}) — counts toward bi-weekly cadence
            </h4>
            <ul className="space-y-2.5">
              {BLOG_REFRESH.map((b) => (
                <li key={b.title} className="rounded-lg bg-[#F59E0B]/[0.04] border border-[#F59E0B]/15 p-3">
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <p className="text-xs font-semibold text-foreground/75 leading-[1.5]">{b.title}</p>
                    <span className="text-[10px] font-bold text-[#F59E0B] bg-[#F59E0B]/12 px-1.5 py-0.5 rounded shrink-0">
                      {b.refreshWindow}
                    </span>
                  </div>
                  <p className="text-[10px] text-foreground/40">{b.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-white border border-black/[0.06] p-5" style={{ borderLeft: "4px solid #94A3B8" }}>
        <div className="flex items-start gap-3">
          <AlertCircle size={16} className="text-foreground/40 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-foreground/55 leading-[1.7]">
            <span className="font-semibold text-foreground/75">Retire (URLs stay live, don't link):</span>{" "}
            {BLOG_RETIRE_NOTE}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PANEL: B2C
   ════════════════════════════════════════════════════════════════════ */

const B2C_PHASES = [
  {
    phase: "PHASE 3 (continued)",
    dates: "11 May → 10 Jun",
    title: "Intake 1 Push",
    color: "#6B2D8B",
    intro: "The first cohort launched yesterday. The job now is to close out applications, convert warm leads, and start producing student-experience content from inside the cohort.",
    weeks: [
      { week: "Wk of 11 May", theme: "Urgency + last-week close", rows: [
        { c: "PAID", t: "Run 'intake closes soon' creative on both Google and Meta. Push CPL ≤ R100, target CVR ≥ 8%. Hold spend at R15k/mo target." },
        { c: "OWNED", t: "Email 7 ('Applications closing soon') fires to all warm leads at day 14. WhatsApp follow-up to anyone scoring ≥ 41." },
        { c: "ORGANIC", t: "5 IG posts/week — focus on 'Started Today' content: cohort welcome, platform first look, what week 1 looks like." },
        { c: "SEO/BLOG", t: "Publish: 'Higher Certificate in Banking — Everything You Need to Know in 2026' (Pillar 01)." },
      ]},
      { week: "Wk of 18 May", theme: "Onboarding stories", rows: [
        { c: "PAID", t: "Reduce broad-prospecting spend ~30%. Shift to retargeting + lookalike-of-applicants." },
        { c: "OWNED", t: "Onboarding email sequence for newly enrolled students kicks in." },
        { c: "ORGANIC", t: "Student UGC starts — first-week short videos for Reels and TikTok." },
        { c: "SEO/BLOG", t: "Publish: 'How to Start a Career in Banking in South Africa' (Pillar 01)." },
      ]},
      { week: "Wk of 25 May", theme: "Conversion of fence-sitters", rows: [
        { c: "PAID", t: "Hold Meta retargeting at full spend. Add 'Speak to an advisor' creative on Google." },
        { c: "OWNED", t: "Email re-engagement to anyone who opened but didn't apply. Hand off score-41+ to admissions." },
        { c: "ORGANIC", t: "'Why I chose CPS' student-voice posts (with consent). Carry through to LinkedIn." },
        { c: "SEO/BLOG", t: "Publish: 'HCIB vs BCOM: Which Banking Qualification is Right for You?'" },
      ]},
      { week: "Wk of 1 Jun", theme: "Final push + first-cohort stories", rows: [
        { c: "PAID", t: "Final week of full-tilt Intake 1 spend. Last urgency creative on Meta." },
        { c: "OWNED", t: "Final email-cycle reminder for any Q3-intent leads (push to Nov intake list)." },
        { c: "ORGANIC", t: "First cohort 'two weeks in' story content. Start collecting first testimonials." },
        { c: "SEO/BLOG", t: "Publish: 'How Much Does a Banking Qualification Cost in 2026?'" },
      ]},
    ],
  },
  {
    phase: "PHASE 4",
    dates: "11 Jun → 30 Jun",
    title: "Review and Maintenance",
    color: "#00A8E1",
    intro: "Lower-tempo period. Goal: harvest learnings, build retargeting pools, capture student stories, lay SEO groundwork for Intake 2.",
    weeks: [
      { week: "Wk of 8 Jun", theme: "Webinar 1 + cohort impact", rows: [
        { c: "PAID", t: "Pause urgency creatives. Run light brand-awareness on Meta (~R3k for the week)." },
        { c: "OWNED", t: "Send Webinar 1 follow-up sequence. Tag webinar attendees in CRM." },
        { c: "ORGANIC", t: "Cover Webinar 1 live on LinkedIn. Repost clips to IG." },
        { c: "SEO/BLOG", t: "Publish: 'What is NQF Level 5? A Plain-English Guide.'" },
      ]},
      { week: "Wk of 15 Jun", theme: "Performance review", rows: [
        { c: "PAID", t: "Pause most paid spend. Document CPA, channel performance, creative learnings." },
        { c: "OWNED", t: "Survey enrolled cohort — qualitative feedback for testimonials." },
        { c: "ORGANIC", t: "Student-of-the-month feature. Reels showcasing CPSLearn experience." },
        { c: "SEO/BLOG", t: "Publish: 'Leadership Qualifications in South Africa: What Counts.'" },
      ]},
      { week: "Wk of 22 Jun", theme: "Build for Intake 2", rows: [
        { c: "PAID", t: "Build new audiences in Meta: lookalike of enrolled students, lookalike of high-engagement leads." },
        { c: "OWNED", t: "Begin writing Intake 2 nurture sequence." },
        { c: "ORGANIC", t: "Behind-the-scenes content: how CPS designs programmes, faculty intro vignettes." },
        { c: "SEO/BLOG", t: "Publish: 'Banking Career Path in SA — Entry to Mid-Senior.'" },
      ]},
      { week: "Wk of 29 Jun", theme: "Quarter-end wrap", rows: [
        { c: "PAID", t: "Document baseline CPC, CTR, CVR, CPL from Intake 1 for benchmarking." },
        { c: "OWNED", t: "Send 'Welcome to the community of practice' to enrolled students." },
        { c: "ORGANIC", t: "Publish 'Class of May 2026' thank-you post." },
        { c: "SEO/BLOG", t: "Publish: 'How CPS programmes work — a learner's guide.'" },
      ]},
    ],
  },
  {
    phase: "PHASE 5",
    dates: "1 Jul → 13 Sep",
    title: "Build and Slow Burn",
    color: "#10B981",
    intro: "No active intake push. SEO compounds, organic audience grows, retargeting pool expands, student stories get produced. Paid spend trimmed to ~30% of full-intake budget.",
    weeks: [
      { week: "1 Jul → 13 Jul", theme: "Reset and produce", rows: [
        { c: "PAID", t: "Brand search only (R1k/wk). No prospecting spend." },
        { c: "OWNED", t: "Slow drip on info-pack downloads. No urgency." },
        { c: "ORGANIC", t: "4–5 posts/wk IG/TikTok mixing Career Pathways + Study Life pillars." },
        { c: "SEO/BLOG", t: "Publish: 'From Transactional to Trusted Advisor.'" },
      ]},
      { week: "14 Jul → 27 Jul", theme: "Story batch", rows: [
        { c: "PAID", t: "Same. CPC ≤ R20." },
        { c: "OWNED", t: "First 'alumni in 6 weeks' check-ins to graduates." },
        { c: "ORGANIC", t: "2-week UGC sprint — record 6 short-form student-story videos for Oct/Nov use." },
        { c: "SEO/BLOG", t: "Publish: 'BANKSETA / QCTO / SAQA Plain-English Explainer.'" },
      ]},
      { week: "28 Jul → 10 Aug", theme: "Audience growth", rows: [
        { c: "PAID", t: "Re-introduce broad Meta prospecting (R3k/wk) on best-performing creative." },
        { c: "OWNED", t: "Build Intake 2 nurture sequence — 9 emails (Intake 1 learnings)." },
        { c: "ORGANIC", t: "LinkedIn ACL6 content (B2C-relevant, professional voice)." },
        { c: "SEO/BLOG", t: "Publish: 'Banking Qualifications Compared — CPS, MANCOSA, Regent, Milpark.'" },
      ]},
      { week: "11 Aug → 24 Aug", theme: "Pre-launch warmth", rows: [
        { c: "PAID", t: "Increase Meta to R5k/wk. Begin testing Intake 2 creative variants." },
        { c: "OWNED", t: "Email teaser to dormant list — 'Next intake November — early applications open.'" },
        { c: "ORGANIC", t: "Bring rhythm back to 5x/wk IG with new student stories." },
        { c: "SEO/BLOG", t: "Publish: 'Is CPS Accredited? CHE, QCTO, SAQA Explained.'" },
      ]},
      { week: "25 Aug → 7 Sep", theme: "Soft re-engagement", rows: [
        { c: "PAID", t: "Add Google high-intent (R3k/wk). Use new audiences built in Jun/Jul." },
        { c: "OWNED", t: "Begin Intake 2 nurture to new info-pack downloads from this point." },
        { c: "ORGANIC", t: "Publish 'second-half career-shift window' content. Subtle urgency." },
        { c: "SEO/BLOG", t: "Publish: 'Application Process for HCIB — Step-by-Step.'" },
      ]},
    ],
  },
  {
    phase: "PHASE 6",
    dates: "14 Sep → 11 Oct",
    title: "Intake 2 Soft Launch",
    color: "#FFD100",
    intro: "Mirror of Phase 1 from Intake 1 but with a retargeting pool, a student-story bank, and ranking SEO pages.",
    weeks: [
      { week: "Wk of 14 Sep", theme: "Launch announcement", rows: [
        { c: "PAID", t: "Step up to R10k/mo run rate. Google brand + high-intent live. Meta prospecting + retargeting on." },
        { c: "OWNED", t: "'November intake now open' email blast to all info-pack downloaders since June." },
        { c: "ORGANIC", t: "LinkedIn announcement from CEO. Co-ordinate with Webinar 2 (17 Sep)." },
        { c: "SEO/BLOG", t: "Refresh published SEO articles with 'November 2026 intake' CTAs." },
      ]},
      { week: "Wk of 21 Sep", theme: "Post-webinar momentum", rows: [
        { c: "PAID", t: "Increase Meta to full R7.5k/mo run rate." },
        { c: "OWNED", t: "Webinar 2 follow-up sequence. Tag attendees with B2C-interest flag." },
        { c: "ORGANIC", t: "Webinar 2 clip extraction to LinkedIn/IG." },
        { c: "SEO/BLOG", t: "Publish: 'Banking Career Pathways After HCIB — Where Graduates Go.'" },
      ]},
      { week: "Wk of 28 Sep", theme: "Story-driven push", rows: [
        { c: "PAID", t: "Hold spend. New Meta creative based on student stories. Test 4 variants." },
        { c: "OWNED", t: "Mid-funnel content: 'What you'll actually learn in 12 months.'" },
        { c: "ORGANIC", t: "First-cohort alumni voice video (consent permitting)." },
        { c: "SEO/BLOG", t: "Publish: 'ACL6 vs MBA — When Each Makes Sense.'" },
      ]},
      { week: "Wk of 5 Oct", theme: "Mid-cycle optimisation", rows: [
        { c: "PAID", t: "Cut bottom-2 ads per platform. Scale top performers 25%." },
        { c: "OWNED", t: "Email open-rate review. Subject line A/B test in next send." },
        { c: "ORGANIC", t: "Cross-post highest-performing TikTok content to Reels and IG." },
        { c: "SEO/BLOG", t: "Publish: 'Pricing & Payment — How CPS Compares.'" },
      ]},
    ],
  },
  {
    phase: "PHASE 7",
    dates: "12 Oct → 8 Nov",
    title: "Intake 2 Ramp",
    color: "#EF4444",
    intro: "Full R15k/mo spend reactivated. Heavy retargeting. WhatsApp active. Two new SEO comparison posts to capture late-stage research traffic.",
    weeks: [
      { week: "Wk of 12 Oct", theme: "Full ramp", rows: [
        { c: "PAID", t: "R15k/mo run rate. All campaigns live. Push CPL toward R100." },
        { c: "OWNED", t: "Nurture at full cadence. WhatsApp Business active and staffed." },
        { c: "ORGANIC", t: "Daily IG, 4x/wk TikTok, 2x LinkedIn." },
        { c: "SEO/BLOG", t: "Publish: 'Will My Bank Pay For My HCIB?'" },
      ]},
      { week: "Wk of 19 Oct", theme: "'What you get' depth", rows: [
        { c: "PAID", t: "Add creative around platform, support model, completion focus." },
        { c: "OWNED", t: "'Behind the scenes of CPS' email — deep value to dormant leads." },
        { c: "ORGANIC", t: "Day-in-the-life from the May cohort, now 6 months in." },
        { c: "SEO/BLOG", t: "Publish: 'Stewardship at CPS — How Learner Support Actually Works.'" },
      ]},
      { week: "Wk of 26 Oct", theme: "Social proof intensifies", rows: [
        { c: "PAID", t: "Carousel ads on Meta showcasing bank logos and graduate count (11,400+)." },
        { c: "OWNED", t: "Email: graduate stories." },
        { c: "ORGANIC", t: "Bank-logo trust visuals on IG and LinkedIn." },
        { c: "SEO/BLOG", t: "Publish: 'Career Outcomes — Where 11,400+ CPS Graduates Are Now.'" },
      ]},
      { week: "Wk of 2 Nov", theme: "Final pre-launch push", rows: [
        { c: "PAID", t: "Urgency creative tested early. Phone-back CTA added." },
        { c: "OWNED", t: "Email reminder: 'Applications close 9 Nov.'" },
        { c: "ORGANIC", t: "Daily countdown content. Direct CTA in every post." },
        { c: "SEO/BLOG", t: "Light publishing — focus on amplification." },
      ]},
    ],
  },
  {
    phase: "PHASE 8",
    dates: "9 Nov → 7 Dec",
    title: "Intake 2 Push",
    color: "#6B2D8B",
    intro: "Same intensity as the May intake, but with proven creative, working retargeting, and a content library.",
    weeks: [
      { week: "Wk of 9 Nov", theme: "Launch day + urgency", rows: [
        { c: "PAID", t: "Peak spend day. Intake-launch creative on all channels." },
        { c: "OWNED", t: "Email all warm leads (score ≥ 41): 'It's launch week.'" },
        { c: "ORGANIC", t: "Live launch-day content. Behind-the-scenes from the November cohort start." },
        { c: "SEO/BLOG", t: "Publish: 'What it's like inside CPS — first 30 days.'" },
      ]},
      { week: "Wk of 16 Nov", theme: "Mid-push conversions", rows: [
        { c: "PAID", t: "Hold spend. Best-performing creatives only." },
        { c: "OWNED", t: "Re-engage opens-but-didn't-apply." },
        { c: "ORGANIC", t: "First 'Hello from the November cohort' content." },
        { c: "SEO/BLOG", t: "Publish: 'Banking Qualification ROI — Is the R29,760 worth it?'" },
      ]},
      { week: "Wk of 23 Nov", theme: "Webinar 3 + last-call", rows: [
        { c: "PAID", t: "Bridge spend (~R5k/wk). 'Last call' creative." },
        { c: "OWNED", t: "Webinar 3 reminder sequence (firing 26 Nov)." },
        { c: "ORGANIC", t: "LinkedIn-heavy: Webinar 3 promotion blended with November cohort onboarding." },
        { c: "SEO/BLOG", t: "Light publishing — focus on the webinar." },
      ]},
      { week: "Wk of 30 Nov", theme: "Close-out", rows: [
        { c: "PAID", t: "Final urgency. Final CPA / CPL review." },
        { c: "OWNED", t: "Final reminder." },
        { c: "ORGANIC", t: "'Class of November 2026' announcement. Mirror May." },
        { c: "SEO/BLOG", t: "Publish: 'Two intakes a year — when's the next CPS cohort?'" },
      ]},
    ],
  },
  {
    phase: "PHASE 9",
    dates: "8 Dec → 31 Dec",
    title: "Review and Wind-down",
    color: "#94A3B8",
    intro: "Light maintenance, no new launches.",
    weeks: [
      { week: "Wk of 7 Dec", theme: "Review and capture", rows: [
        { c: "PAID", t: "Pause all paid except brand search (R1k/wk)." },
        { c: "OWNED", t: "Document Intake 2 nurture performance." },
        { c: "ORGANIC", t: "Year-in-review content: numbers, stories, milestones." },
        { c: "SEO/BLOG", t: "Publish: '2026 in numbers — the year at CPS.'" },
      ]},
      { week: "Wk of 14 Dec", theme: "2027 planning", rows: [
        { c: "PAID", t: "Paid paused." },
        { c: "OWNED", t: "Year-end thank you to community." },
        { c: "ORGANIC", t: "'From all of us at CPS' — team-tone, community-focused." },
        { c: "SEO/BLOG", t: "Plan Q1 2027 content map." },
      ]},
      { week: "Wk of 21 Dec", theme: "Holiday quiet", rows: [
        { c: "PAID", t: "Brand search only." },
        { c: "OWNED", t: "Drip continues for late info-pack downloaders." },
        { c: "ORGANIC", t: "Reposts of best-performing 2026 content." },
        { c: "SEO/BLOG", t: "No new publishing." },
      ]},
      { week: "Wk of 28 Dec", theme: "Soft re-emerge", rows: [
        { c: "PAID", t: "Light paid begins again. New Year creative tested." },
        { c: "OWNED", t: "'Make 2027 the year you start' sequence drafted." },
        { c: "ORGANIC", t: "New Year energy: aspiration content." },
        { c: "SEO/BLOG", t: "Publish: 'How to choose a qualification in 2027 — a CPS guide.'" },
      ]},
    ],
  },
];

function B2CPanel() {
  const [openPhase, setOpenPhase] = useState<string | null>(B2C_PHASES[0].phase);

  return (
    <section className="relative py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-3 tracking-tight">
          B2C marketing calendar
        </h2>
        <p className="text-sm text-foreground/50 max-w-3xl mb-6">
          HCIB and ACL6 acquisition across paid, owned and earned channels. Each phase contains weekly themes for the four channel groups.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {Object.entries(CHANNEL_COLORS).map(([name, color]) => {
            const Icon = CHANNEL_ICONS[name];
            return (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 border"
                style={{ backgroundColor: `${color}08`, borderColor: `${color}25` }}
              >
                <Icon size={12} style={{ color }} />
                <span className="text-[11px] font-semibold" style={{ color }}>
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          {B2C_PHASES.map((phase) => {
            const isOpen = openPhase === phase.phase;
            return (
              <div key={phase.phase} className="card-elevated !p-0 overflow-hidden">
                <button
                  onClick={() => setOpenPhase(isOpen ? null : phase.phase)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="h-[3px] w-full" style={{ backgroundColor: phase.color }} />
                  <div className="p-5 sm:p-6 flex items-center gap-4 hover:bg-black/[0.01] transition-colors">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${phase.color}0F`, border: `1px solid ${phase.color}20` }}
                    >
                      <Clock size={18} style={{ color: phase.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: phase.color }}>
                          {phase.phase}
                        </span>
                        <span className="text-[11px] text-foreground/40">{phase.dates}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground/85">{phase.title}</h3>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight size={16} style={{ color: phase.color }} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-7 border-t border-black/[0.05]">
                        <p className="text-sm text-foreground/55 leading-[1.7] mb-6 italic">{phase.intro}</p>
                        <div className="space-y-5">
                          {phase.weeks.map((wk) => (
                            <div key={wk.week} className="rounded-xl bg-white border border-black/[0.04] p-5">
                              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                                <span className="text-xs font-bold text-foreground/85">{wk.week}</span>
                                <span className="text-[11px] text-foreground/40">&middot; {wk.theme}</span>
                              </div>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {wk.rows.map((row) => {
                                  const Icon = CHANNEL_ICONS[row.c];
                                  const color = CHANNEL_COLORS[row.c];
                                  return (
                                    <div
                                      key={row.c}
                                      className="rounded-lg border border-black/[0.04] p-3 flex gap-3"
                                      style={{ backgroundColor: `${color}05` }}
                                    >
                                      <div
                                        className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: `${color}10`, border: `1px solid ${color}15` }}
                                      >
                                        <Icon size={13} style={{ color }} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color }}>
                                          {row.c}
                                        </div>
                                        <p className="text-xs text-foreground/55 leading-[1.6]">{row.t}</p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PANEL: B2B
   ════════════════════════════════════════════════════════════════════ */

const B2B_ALWAYS_ON = [
  { activity: "LinkedIn — Company page posts", cadence: "2x/week (Tue, Thu)", owner: "Broadbrand drafts → CEO/marketing approves", notes: "Mix industry insight, regulation commentary, CPS innovation highlights, bursary stories." },
  { activity: "LinkedIn — CEO profile posts", cadence: "2x/week (Mon, Wed)", owner: "CEO with Broadbrand draft support", notes: "First-person thought leadership voice. Industry takes, not promotional." },
  { activity: "Account-penetration outreach", cadence: "Weekly check-in", owner: "Indira (B2B sales lead)", notes: "Target: 2 new divisions per quarter. The gap is awareness, not credibility." },
  { activity: "Sales-enablement upkeep", cadence: "Bi-weekly review", owner: "Broadbrand + Indira", notes: "One corporate profile, one master deck, one product brochure per qualification." },
  { activity: "Bursary case study collection", cadence: "1 case per month", owner: "CPS admin + Broadbrand", notes: "Goal: 3 case studies by Sep, 6 by Dec. Used in proposals, LinkedIn, white papers." },
];

const B2B_BY_MONTH = [
  { month: "May 2026", items: ["Webinar 1 lead-up begins Thu 14 May (T-28).", "LinkedIn cadence starts immediately — 2 posts/week each from CEO and company page.", "Corporate business profile finalised by 30 May."] },
  { month: "June 2026", items: ["11 Jun · Webinar 1.", "Post-webinar follow-up sequence T+1 to T+14.", "White paper writing begins (target publish 15 Jul).", "First bursary case study documented."] },
  { month: "July 2026", items: ["15 Jul · First white paper published.", "Photography/video shoot completed.", "Internal brand alignment rolled out across client-facing CPS staff."] },
  { month: "August 2026", items: ["13 Aug · Master Class #1 (closed, at strategic client).", "Webinar 2 lead-up begins Thu 20 Aug (T-28).", "Bursary case study #2 documented."] },
  { month: "September 2026", items: ["17 Sep · Webinar 2. Doubles as B2C trust signal during Intake 2 soft launch.", "Post-webinar follow-up.", "Account penetration: 2 new divisions targeted."] },
  { month: "October 2026", items: ["14 Oct · Second white paper published.", "Webinar 3 lead-up begins Thu 29 Oct (T-28).", "Bursary case study #3 documented.", "Conference speaking slot delivered (if confirmed)."] },
  { month: "November 2026", items: ["26 Nov · Webinar 3.", "Post-webinar follow-up coordinated with Intake 2 push."] },
  { month: "December 2026", items: ["7 Dec · Third white paper published.", "Year-end account review with each major client.", "2027 strategy planning."] },
];

function B2BPanel() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-3 tracking-tight">
            B2B strategy calendar
          </h2>
          <p className="text-sm text-foreground/50 max-w-3xl mb-10">
            Three modes running in parallel: always-on activities, big-moment activities, and support activities.
          </p>

          <h3 className="text-sm font-bold text-foreground/80 mb-4 uppercase tracking-wider">Always-on activities</h3>
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/[0.05]">
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Activity</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Cadence</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Owner</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {B2B_ALWAYS_ON.map((row) => (
                    <tr key={row.activity} className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors align-top">
                      <td className="p-4 text-sm font-semibold text-foreground/75">{row.activity}</td>
                      <td className="p-4 text-xs text-foreground/55">{row.cadence}</td>
                      <td className="p-4">
                        <span className="text-xs font-semibold text-[#00A8E1] bg-[#00A8E1]/[0.06] px-2.5 py-1 rounded-full">
                          {row.owner}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-foreground/55 leading-[1.6]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground/80 mb-4 uppercase tracking-wider">B2B calendar by month</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {B2B_BY_MONTH.map((m) => (
              <div key={m.month} className="card-elevated !p-0 overflow-hidden">
                <div className="h-[3px] w-full bg-[#00A8E1]" />
                <div className="p-5">
                  <h4 className="text-sm font-bold text-foreground/85 mb-3">{m.month}</h4>
                  <ul className="space-y-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs text-foreground/55 leading-[1.6]">
                        <CheckCircle2 size={12} className="text-[#00A8E1]/70 mt-1 shrink-0" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PANEL: WEBINAR PLAYBOOK
   ════════════════════════════════════════════════════════════════════ */

const WEBINAR_ROLES = [
  { role: "Webinar lead", owner: "Broadbrand", does: "Owns timeline, registrations, email, comms" },
  { role: "Subject-matter presenter", owner: "CPS (CEO, CFO, academic lead, guest)", does: "Owns content and delivery" },
  { role: "Sales follow-up", owner: "Indira + sales team", does: "Owns the post-webinar conversion path" },
  { role: "Marketing assets", owner: "Broadbrand", does: "Design landing page, social cards, email templates" },
  { role: "CRM and registrations", owner: "Broadbrand (Pipedrive + MailChimp)", does: "Tracks every registrant and attendee" },
];

const WEBINAR_WEEKS = [
  { title: "Week 4 — T-28 to T-22 (Setup)", color: "#6B2D8B", goal: "Everything you need to start promoting is ready by end of this week.", rows: [
    { day: "Mon T-28", action: "Confirm webinar topic, presenter, date, time, platform", owner: "CPS + Broadbrand" },
    { day: "Mon T-28", action: "Brief speaker(s) — talk track, key data points, slide expectations", owner: "Broadbrand → Speaker" },
    { day: "Tue T-27", action: "Build registration landing page", owner: "Broadbrand" },
    { day: "Tue T-27", action: "Draft 4-email sequence (T-21, T-14, T-7, T-1)", owner: "Broadbrand" },
    { day: "Wed T-26", action: "Design social assets — LinkedIn, IG square, story version", owner: "Broadbrand" },
    { day: "Wed T-26", action: "Build invite list — segment by audience", owner: "Broadbrand + Indira" },
    { day: "Fri T-22", action: "Internal soft-launch — share registration link in CPS company channels", owner: "CPS + Broadbrand" },
  ]},
  { title: "Week 3 — T-21 to T-15 (Promotion Launch)", color: "#00A8E1", goal: "Move from zero external visibility to active promotion. First 100 external registrations.", rows: [
    { day: "Mon T-21", action: "Email 1 (Invite) sent to full segmented list", owner: "Broadbrand" },
    { day: "Mon T-21", action: "LinkedIn company-page launch post", owner: "Broadbrand draft → approval" },
    { day: "Tue T-20", action: "CEO LinkedIn launch post (first-person framing)", owner: "CEO + Broadbrand" },
    { day: "Tue T-20", action: "Direct outreach to top 20 prospects from pipeline", owner: "Indira" },
    { day: "Thu T-18", action: "Second LinkedIn company post — different angle", owner: "Broadbrand" },
    { day: "Fri T-15", action: "Week-end progress check on registrations and traffic-source split", owner: "Broadbrand" },
  ]},
  { title: "Week 2 — T-14 to T-8 (Amplification)", color: "#10B981", goal: "Reminder sequence active. Aim for 300 total registrations.", rows: [
    { day: "Mon T-14", action: "Email 2 (Reminder — '2 weeks away') fires", owner: "Broadbrand" },
    { day: "Mon T-14", action: "LinkedIn CEO post: 'Here's what we're going to cover'", owner: "CEO + Broadbrand" },
    { day: "Tue T-13", action: "Sales-team push — every CPS client-facing person personally invites top 5 contacts", owner: "Indira + sales team" },
    { day: "Wed T-12", action: "Webinar run-of-show drafted — order, timing, who says what", owner: "Broadbrand + Speaker" },
    { day: "Thu T-11", action: "First tech check — speaker tests setup (camera, mic, screen share)", owner: "Broadbrand + Speaker" },
    { day: "Fri T-8", action: "Internal rehearsal — full 60-minute run-through", owner: "All" },
  ]},
  { title: "Week 1 — T-7 to T-1 (Final Push)", color: "#FFD100", goal: "Maximise show-up rate. Industry benchmark is 35–45%. We want 50%+.", rows: [
    { day: "Mon T-7", action: "Email 3 (Reminder — 'One week to go') fires", owner: "Broadbrand" },
    { day: "Tue T-6", action: "Personal DM to anyone who registered but hasn't engaged", owner: "Broadbrand" },
    { day: "Wed T-5", action: "Final speaker prep — 30-min sync, key questions, anticipated objections", owner: "Broadbrand + Speaker" },
    { day: "Thu T-4", action: "Second tech rehearsal — full dry run with all presenters", owner: "All" },
    { day: "Mon T-1", action: "Email 4 (Day-before reminder) fires at 17h00", owner: "Broadbrand" },
    { day: "Tue T-1", action: "Final registration push — last 24h is when 15–20% of registrations come in", owner: "Broadbrand" },
  ]},
];

function WebinarPanel() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-3 tracking-tight">
            4-week webinar lead-up playbook
          </h2>
          <p className="text-sm text-foreground/50 max-w-3xl mb-8">
            Repeatable playbook for every webinar in the series. Run it once for Webinar 1, refine, then re-use for Webinars 2 and 3.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full bg-[#6B2D8B]" />
              <div className="p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B2D8B] mb-3">Conventions</h4>
                <ul className="space-y-1.5 text-xs text-foreground/55 leading-[1.7]">
                  <li>• <span className="font-semibold text-foreground/75">T-0</span> = webinar day. T-28 = 4 weeks before.</li>
                  <li>• Default time: <span className="font-semibold text-foreground/75">Thursday 11h00–12h00 SAST</span></li>
                  <li>• Default duration: 60 minutes (45 min content + 15 min Q&amp;A)</li>
                  <li>• Default platform: Zoom Webinar or LinkedIn Live</li>
                </ul>
              </div>
            </div>
            <div className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full bg-[#00A8E1]" />
              <div className="p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A8E1] mb-3">Roles</h4>
                <ul className="space-y-1.5 text-xs text-foreground/55 leading-[1.7]">
                  {WEBINAR_ROLES.map((r) => (
                    <li key={r.role}>
                      <span className="font-semibold text-foreground/75">{r.role}</span> — {r.owner}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {WEBINAR_WEEKS.map((wk) => (
            <div key={wk.title} className="card-elevated !p-0 overflow-hidden">
              <div className="h-[3px] w-full" style={{ backgroundColor: wk.color }} />
              <div className="p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-foreground/85 mb-1">{wk.title}</h3>
                <p className="text-xs text-foreground/45 italic mb-5">Goal: {wk.goal}</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-black/[0.05]">
                        <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Day</th>
                        <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Action</th>
                        <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-3">Owner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wk.rows.map((row, i) => (
                        <tr key={i} className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors align-top">
                          <td className="p-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: `${wk.color}10`, color: wk.color }}>
                              {row.day}
                            </span>
                          </td>
                          <td className="p-3 text-foreground/70 leading-[1.6]">{row.action}</td>
                          <td className="p-3 text-foreground/55">{row.owner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PANEL: KPIs & VERIFICATION
   ════════════════════════════════════════════════════════════════════ */

const B2C_KPIS = [
  { kpi: "Enrolled students per programme", t1: "35", t2: "35", cadence: "Per intake" },
  { kpi: "Cost per acquisition (CPA)", t1: "≤ R400", t2: "≤ R400", cadence: "Monthly" },
  { kpi: "Cost per lead (CPL)", t1: "≤ R100", t2: "≤ R100", cadence: "Weekly" },
  { kpi: "Landing page CVR", t1: "≥ 8%", t2: "≥ 8%", cadence: "Weekly" },
  { kpi: "Lead-to-enrollment rate", t1: "≥ 20%", t2: "≥ 25% (post-learnings)", cadence: "Monthly" },
  { kpi: "Email open rate", t1: "≥ 35%", t2: "≥ 40% (better lists)", cadence: "Weekly" },
];

const B2B_KPIS = [
  { kpi: "Website B2B leads", target: "First lead in 2026 (currently 0 in 10 years)", cadence: "Monthly" },
  { kpi: "L&D penetration at existing client banks", target: "From ~20% → 50%+", cadence: "Quarterly" },
  { kpi: "Webinars hosted", target: "3 (Jun, Sep, Nov)", cadence: "Per webinar" },
  { kpi: "Webinar registrations", target: "≥ 500 per webinar", cadence: "Per webinar" },
  { kpi: "Webinar attendance rate", target: "≥ 35%", cadence: "Per webinar" },
  { kpi: "White papers published", target: "3 (Jul, Oct, Dec)", cadence: "Per release" },
  { kpi: "LinkedIn cadence", target: "2 posts/week, CEO + company", cadence: "Weekly" },
  { kpi: "New L&D divisions penetrated", target: "2 per quarter", cadence: "Quarterly" },
  { kpi: "Bursary case studies documented", target: "6 by end of year", cadence: "Quarterly" },
  { kpi: "Conference speaking slots", target: "1–2 in second half of 2026", cadence: "Annual" },
];

const VERIFICATION_QUEUE = [
  { item: "Intake 2 date — placeholder 9 Nov 2026", why: "All Phase 6–8 dates derive from this" },
  { item: "Three webinar dates (11 Jun, 17 Sep, 26 Nov)", why: "All lead-up timelines anchor on these" },
  { item: "Three webinar topics — proposed in B2B Strategy tab", why: "Speaker availability and content build depends on this" },
  { item: "Speakers for each webinar", why: "Determines T-28 brief content" },
  { item: "Photography/video shoot booked by 30 Jun", why: "First professional shoot since pre-COVID — needed for asset library" },
  { item: "Master Class #1 host client and date", why: "Account-penetration play depends on client agreement" },
  { item: "Conference speaking opportunities for Oct/Nov", why: "Needs ~6-month lead time" },
  { item: "Bursary case studies — student consent process", why: "Need formal consent before publishing" },
  { item: "White paper academic co-authors", why: "Source co-author for Paper 1 by 31 May" },
  { item: "LinkedIn approval process — CEO post review path", why: "Affects cadence reliability" },
  { item: "Pipedrive + MailChimp configured for webinar registration", why: "Must be tested before T-22 of Webinar 1" },
  { item: "WhatsApp Business staffing — SLA + responder", why: "Critical for B2C nurture; ready before 14 Sep" },
  { item: "Existing creative assets for Intake 1 close-out", why: "Affects Wk of 11 May actions" },
  { item: "Website ready to gate white papers behind email capture", why: "Tier-1 blocker for Webinar 1 follow-up" },
];

function KPIPanel() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-3 tracking-tight">
            KPIs and verification queue
          </h2>
          <p className="text-sm text-foreground/50 max-w-3xl mb-10">
            What success looks like, and what needs CPS sign-off before each activity goes live.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground/80 mb-4 uppercase tracking-wider">B2C KPIs (per intake)</h3>
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-[#6B2D8B]" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/[0.05]">
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">KPI</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Target (Intake 1)</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Target (Intake 2)</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Cadence</th>
                  </tr>
                </thead>
                <tbody>
                  {B2C_KPIS.map((row) => (
                    <tr key={row.kpi} className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors">
                      <td className="p-4 text-sm font-medium text-foreground/70">{row.kpi}</td>
                      <td className="p-4">
                        <span className="text-xs font-semibold text-[#6B2D8B] bg-[#6B2D8B]/[0.06] px-2.5 py-1 rounded-full">
                          {row.t1}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-xs font-semibold text-[#10B981] bg-[#10B981]/[0.06] px-2.5 py-1 rounded-full">
                          {row.t2}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-foreground/40">{row.cadence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground/80 mb-4 uppercase tracking-wider">B2B KPIs (May → Dec 2026)</h3>
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-[#00A8E1]" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/[0.05]">
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">KPI</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Target</th>
                    <th className="text-left text-[10px] font-semibold text-foreground/30 uppercase tracking-wider p-4">Cadence</th>
                  </tr>
                </thead>
                <tbody>
                  {B2B_KPIS.map((row) => (
                    <tr key={row.kpi} className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01] transition-colors">
                      <td className="p-4 text-sm font-medium text-foreground/70">{row.kpi}</td>
                      <td className="p-4 text-xs text-foreground/60 leading-[1.6]">{row.target}</td>
                      <td className="p-4 text-xs text-foreground/40">{row.cadence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground/80 mb-4 uppercase tracking-wider">Verification queue — confirm with CPS before going live</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {VERIFICATION_QUEUE.map((v, i) => (
              <div key={i} className="rounded-xl border border-black/[0.05] bg-white p-4 hover:border-[#FFD100]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 bg-[#FFD100]/10 border border-[#FFD100]/20">
                    <span className="text-[10px] font-bold" style={{ color: "#B8860B" }}>{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground/80 mb-1 leading-[1.5]">{v.item}</p>
                    <p className="text-xs text-foreground/45 italic leading-[1.6]">{v.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════════ */

export default function CalendarPage() {
  const [active, setActive] = useState<string>("calendar");

  return (
    <main className="min-h-screen bg-white">
      <CalendarHeader />
      <TabBar active={active} onChange={setActive} />

      {active === "calendar" && <CalendarPanel />}
      {active === "b2c" && <B2CPanel />}
      {active === "b2b" && <B2BPanel />}
      {active === "webinar" && <WebinarPanel />}
      {active === "kpis" && <KPIPanel />}

      <Footer />
    </main>
  );
}
