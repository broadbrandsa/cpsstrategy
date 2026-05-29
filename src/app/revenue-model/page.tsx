"use client";

import { useMemo, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  RotateCcw,
  Wand2,
  Info,
} from "lucide-react";
import Footer from "@/components/sections/footer";

/* ─── Constants ─── */

const MONTHS = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

const DEFAULTS = {
  ppm: 2700,
  dur: 12,
  mayConfirmed: 42,
  mayPipeline: 33,
  mayConv: 60,
  octEnrol: 60,
  febRev: 960000,
  target: 3000000,
};

const COLORS = {
  may: "#6B2D8B", // CPS purple
  oct: "#00A8E1", // CPS blue
  feb: "#FFD100", // CPS gold
  accent: "#0B7285", // calculator teal
  target: "#EF4444",
  good: "#10B981",
  warn: "#F59E0B",
  bad: "#EF4444",
};

/* ─── Formatters ─── */

const fmt = (n: number) => "R " + Math.round(n).toLocaleString("en-ZA");
const fmtK = (n: number) => {
  if (Math.abs(n) >= 1e6) return "R " + (n / 1e6).toFixed(2) + "m";
  if (Math.abs(n) >= 1e3) return "R " + Math.round(n / 1e3) + "k";
  return "R " + Math.round(n);
};

/* ─── Scenario presets ─── */

const SCENARIOS = [
  { label: "Lean", oct: 15 },
  { label: "Conservative", oct: 25 },
  { label: "Base", oct: 35 },
  { label: "Stretch", oct: 50 },
  { label: "Aggressive", oct: 75 },
];

/* ════════════════════════════════════════════════════════════════════
   HEADER
   ════════════════════════════════════════════════════════════════════ */

function ModelHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B7285]/[0.04] via-transparent to-[#00A8E1]/[0.03]" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#0B7285]/[0.03] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: COLORS.accent }} />
            <span className="section-label" style={{ color: COLORS.accent }}>
              CPS Enrolment &amp; Revenue Model &middot; FY27
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 tracking-tight mb-5">
            Revenue Model{" "}
            <span style={{ color: COLORS.accent }}>FY27</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/50 max-w-3xl mb-2">
            March 2026 → February 2027 · figures in ZAR. Live calculator — adjust any input and everything updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   INPUT helpers
   ════════════════════════════════════════════════════════════════════ */

function NumberField({
  label,
  value,
  onChange,
  min,
  step,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  step?: number;
  hint?: string;
}) {
  return (
    <div>
      <label className="flex items-center justify-between gap-3 text-[13px] text-foreground/65 mb-1.5">
        <span>{label}</span>
        <input
          type="number"
          value={value}
          min={min ?? 0}
          step={step ?? 1}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-28 px-2 py-1 text-[13px] text-right tabular-nums border border-black/[0.08] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B7285]/40 focus:border-[#0B7285]/40 transition"
        />
      </label>
      {hint && <p className="text-[11px] text-foreground/40 mt-1 leading-[1.5]">{hint}</p>}
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-[13px] text-foreground/65 mb-2">{label}</label>
      <div className="grid grid-cols-[1fr_60px] items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-[#0B7285]"
        />
        <span className="text-[12px] text-right tabular-nums text-foreground/65">{display}</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   STAT cards
   ════════════════════════════════════════════════════════════════════ */

function StatCard({
  label,
  value,
  delta,
  deltaTone,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "good" | "warn" | "bad" | "neutral";
}) {
  const deltaColor =
    deltaTone === "good"
      ? COLORS.good
      : deltaTone === "warn"
        ? COLORS.warn
        : deltaTone === "bad"
          ? COLORS.bad
          : undefined;
  return (
    <div className="card-elevated !p-0 overflow-hidden">
      <div className="h-[3px] w-full" style={{ backgroundColor: COLORS.accent }} />
      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-1">{label}</p>
        <p className="text-2xl sm:text-3xl font-bold tabular-nums tracking-tight text-foreground/90">
          {value}
        </p>
        {delta && (
          <p
            className="text-xs mt-1"
            style={deltaColor ? { color: deltaColor } : { color: "rgba(0,0,0,0.45)" }}
          >
            {delta}
          </p>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════════════════ */

export default function RevenueModelPage() {
  const [ppm, setPpm] = useState(DEFAULTS.ppm);
  const [dur, setDur] = useState(DEFAULTS.dur);
  const [mayConfirmed, setMayConfirmed] = useState(DEFAULTS.mayConfirmed);
  const [mayPipeline, setMayPipeline] = useState(DEFAULTS.mayPipeline);
  const [mayConv, setMayConv] = useState(DEFAULTS.mayConv);
  const [octEnrol, setOctEnrol] = useState(DEFAULTS.octEnrol);
  const [febRev, setFebRev] = useState(DEFAULTS.febRev);
  const [target, setTarget] = useState(DEFAULTS.target);

  const calc = useMemo(() => {
    const mayStudents = mayConfirmed + mayPipeline * (mayConv / 100);
    const mayMonths = Math.min(dur, 10); // May = month 2, FY27 last month = 11 (Feb)
    const mayPerMonth = mayStudents * ppm;
    const may = Array(12).fill(0);
    for (let i = 2; i < 2 + mayMonths; i++) may[i] = mayPerMonth;

    const octMonths = Math.min(dur, 5); // Oct = month 7
    const octPerMonth = octEnrol * ppm;
    const oct = Array(12).fill(0);
    for (let i = 7; i < 7 + octMonths; i++) oct[i] = octPerMonth;

    const febPerMonth = febRev / 12;
    const feb = Array(12).fill(febPerMonth);

    const mayTotal = may.reduce((a, b) => a + b, 0);
    const octTotal = oct.reduce((a, b) => a + b, 0);
    const febTotal = feb.reduce((a, b) => a + b, 0);
    const total = mayTotal + octTotal + febTotal;
    const gap = total - target;
    const gapPct = target > 0 ? (total / target) * 100 : 0;

    const ltv = mayStudents * ppm * dur + octEnrol * ppm * dur + febTotal;
    const totalStudents = mayStudents + octEnrol;

    const mayConvCount = Math.round((mayPipeline * mayConv) / 100);

    return {
      may,
      oct,
      feb,
      mayStudents,
      mayMonths,
      octMonths,
      mayPerMonth,
      octPerMonth,
      mayTotal,
      octTotal,
      febTotal,
      total,
      gap,
      gapPct,
      ltv,
      totalStudents,
      mayConvCount,
    };
  }, [ppm, dur, mayConfirmed, mayPipeline, mayConv, octEnrol, febRev, target]);

  const reset = useCallback(() => {
    setPpm(DEFAULTS.ppm);
    setDur(DEFAULTS.dur);
    setMayConfirmed(DEFAULTS.mayConfirmed);
    setMayPipeline(DEFAULTS.mayPipeline);
    setMayConv(DEFAULTS.mayConv);
    setOctEnrol(DEFAULTS.octEnrol);
    setFebRev(DEFAULTS.febRev);
    setTarget(DEFAULTS.target);
  }, []);

  const solveOct = useCallback(() => {
    const octPpsFY = ppm * calc.octMonths;
    if (octPpsFY <= 0) return;
    const remaining = target - calc.mayTotal - calc.febTotal;
    const needed = Math.max(0, Math.ceil(remaining / octPpsFY));
    setOctEnrol(needed);
  }, [ppm, calc.octMonths, calc.mayTotal, calc.febTotal, target]);

  const deltaTone: "good" | "warn" | "bad" =
    calc.gapPct >= 100 ? "good" : calc.gapPct >= 90 ? "warn" : "bad";

  const gapTone: "good" | "bad" = calc.gap >= 0 ? "good" : "bad";

  const insightMsg = useMemo(() => {
    if (target <= 0) {
      return "Set an FY27 target to see what the October intake needs to deliver.";
    }
    if (calc.gap >= 0) {
      const mayAndFeb = calc.mayTotal + calc.febTotal;
      return `The 2026 locked deal and May intake already book ${fmt(mayAndFeb)} of the ${fmt(
        target
      )} target. October at ${octEnrol} students adds ${fmt(calc.octTotal)} for a total of ${fmt(
        calc.total
      )} — a ${fmt(calc.gap)} surplus.`;
    }
    const octPpsFY = ppm * calc.octMonths;
    const remaining = target - calc.mayTotal - calc.febTotal;
    const octNeeded = octPpsFY > 0 ? Math.max(0, Math.ceil(remaining / octPpsFY)) : 0;
    return `To hit ${fmt(target)} you need ~${octNeeded} students in the October intake (currently modelling ${octEnrol}). Each Oct student is worth ${fmt(
      octPpsFY
    )} in FY27 — short FY because of the late start (${calc.octMonths} months × ${fmt(
      ppm
    )}/mo). Lifetime value per student: ${fmt(ppm * dur)}.`;
  }, [target, calc, octEnrol, ppm, dur]);

  return (
    <main className="min-h-screen bg-white">
      <ModelHeader />

      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[360px_1fr] gap-6">
            {/* ─── Inputs panel ─── */}
            <aside className="card-elevated !p-0 overflow-hidden self-start lg:sticky lg:top-20">
              <div className="h-[3px] w-full" style={{ backgroundColor: COLORS.accent }} />
              <div className="p-5 sm:p-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-1">
                  Assumptions
                </h2>
                <p className="text-[11px] text-foreground/40 mb-5">
                  Adjust any input — everything updates live.
                </p>

                {/* Pricing & course */}
                <div className="space-y-3 mb-5 pb-5 border-b border-black/[0.06]">
                  <h3 className="text-[12px] font-bold text-foreground/80 mb-2">Pricing &amp; course</h3>
                  <NumberField
                    label="Revenue per student / month"
                    value={ppm}
                    onChange={setPpm}
                    step={100}
                  />
                  <NumberField
                    label="Course duration (months)"
                    value={dur}
                    onChange={setDur}
                    min={1}
                    step={1}
                  />
                </div>

                {/* 2026 locked */}
                <div className="space-y-3 mb-5 pb-5 border-b border-black/[0.06]">
                  <h3 className="text-[12px] font-bold text-foreground/80 mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: COLORS.feb }} />
                    2026 locked
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#FFD100]/15 text-[#B8860B]">
                      locked
                    </span>
                  </h3>
                  <NumberField
                    label="FY27 revenue (locked)"
                    value={febRev}
                    onChange={setFebRev}
                    step={50000}
                    hint="A deal locked in 2026, started Feb 2026. Spread evenly across 12 months of FY27."
                  />
                </div>

                {/* May intake */}
                <div className="space-y-3 mb-5 pb-5 border-b border-black/[0.06]">
                  <h3 className="text-[12px] font-bold text-foreground/80 mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: COLORS.may }} />
                    May 2026 intake
                  </h3>
                  <NumberField
                    label="Confirmed enrolments"
                    value={mayConfirmed}
                    onChange={setMayConfirmed}
                  />
                  <NumberField
                    label="In-pipeline (almost finalised)"
                    value={mayPipeline}
                    onChange={setMayPipeline}
                  />
                  <SliderField
                    label="Pipeline conversion rate"
                    value={mayConv}
                    min={0}
                    max={100}
                    step={5}
                    display={`${mayConv}%`}
                    onChange={setMayConv}
                  />
                  <p className="text-[11px] text-foreground/45 leading-[1.5] pt-1">
                    Expected May enrolments:{" "}
                    <strong className="text-foreground/70">{Math.round(calc.mayStudents)}</strong>{" "}
                    ({mayConfirmed} confirmed + ~{calc.mayConvCount} from pipeline)
                  </p>
                </div>

                {/* October intake */}
                <div className="space-y-3 mb-5 pb-5 border-b border-black/[0.06]">
                  <h3 className="text-[12px] font-bold text-foreground/80 mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: COLORS.oct }} />
                    October 2026 intake
                  </h3>
                  <NumberField
                    label="Target enrolments"
                    value={octEnrol}
                    onChange={setOctEnrol}
                  />
                  <SliderField
                    label="Slider"
                    value={octEnrol}
                    min={0}
                    max={150}
                    step={1}
                    display={`${octEnrol}`}
                    onChange={setOctEnrol}
                  />
                </div>

                {/* Target */}
                <div className="space-y-3 mb-5">
                  <h3 className="text-[12px] font-bold text-foreground/80 mb-2">FY27 target</h3>
                  <NumberField
                    label="Revenue target"
                    value={target}
                    onChange={setTarget}
                    step={100000}
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-black/[0.08] text-foreground/65 hover:bg-black/[0.03] transition"
                  >
                    <RotateCcw size={12} aria-hidden="true" />
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={solveOct}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md text-white transition"
                    style={{ backgroundColor: COLORS.accent }}
                  >
                    <Wand2 size={12} aria-hidden="true" />
                    Solve Oct for target
                  </button>
                </div>
              </div>
            </aside>

            {/* ─── Outputs ─── */}
            <div className="space-y-6">
              {/* Stat cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  label="FY27 projected revenue"
                  value={fmt(calc.total)}
                  delta={target > 0 ? `${calc.gapPct.toFixed(1)}% of target` : "no target set"}
                  deltaTone={deltaTone}
                />
                <StatCard
                  label="vs target"
                  value={(calc.gap >= 0 ? "+" : "") + fmt(calc.gap)}
                  delta={calc.gap >= 0 ? "ahead of target" : "shortfall"}
                  deltaTone={gapTone}
                />
                <StatCard
                  label="Total students (FY27)"
                  value={Math.round(calc.totalStudents).toString()}
                  delta={`${Math.round(calc.mayStudents)} May · ${octEnrol} Oct`}
                  deltaTone="neutral"
                />
                <StatCard
                  label="Lifetime book value"
                  value={fmt(calc.ltv)}
                  delta="across full course duration"
                  deltaTone="neutral"
                />
              </div>

              {/* Charts */}
              <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
                <div className="card-elevated !p-0 overflow-hidden">
                  <div className="h-[3px] w-full" style={{ backgroundColor: COLORS.accent }} />
                  <div className="p-5 sm:p-6">
                    <h3 className="text-sm font-bold text-foreground/85 mb-1">
                      Monthly revenue by cohort &mdash; FY27
                    </h3>
                    <p className="text-xs text-foreground/45 mb-4">
                      Stacked: 2026 locked + May intake + October intake. Red line = monthly target run-rate.
                    </p>
                    <MonthlyChart monthly={calc} target={target} />
                    <div className="flex flex-wrap gap-3 mt-3 text-[11px] text-foreground/55">
                      <LegendChip color={COLORS.may} label="May intake" />
                      <LegendChip color={COLORS.oct} label="October intake" />
                      <LegendChip color={COLORS.feb} label="2026 locked" />
                      <LegendChip color={COLORS.target} label="Target run-rate" thin />
                    </div>
                  </div>
                </div>

                <div className="card-elevated !p-0 overflow-hidden">
                  <div className="h-[3px] w-full" style={{ backgroundColor: COLORS.accent }} />
                  <div className="p-5 sm:p-6">
                    <h3 className="text-sm font-bold text-foreground/85 mb-1">
                      Cumulative revenue vs target
                    </h3>
                    <p className="text-xs text-foreground/45 mb-4">
                      Where you land at the end of FY27.
                    </p>
                    <CumulativeChart monthly={calc} target={target} />
                  </div>
                </div>
              </div>

              {/* Cohort table */}
              <div className="card-elevated !p-0 overflow-hidden">
                <div className="h-[3px] w-full" style={{ backgroundColor: COLORS.accent }} />
                <div className="p-5 sm:p-6">
                  <h3 className="text-sm font-bold text-foreground/85 mb-1">
                    Cohort contribution breakdown
                  </h3>
                  <p className="text-xs text-foreground/45 mb-4">
                    FY27 revenue earned within March 2026 &ndash; February 2027.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm tabular-nums">
                      <thead>
                        <tr className="border-b border-black/[0.06]">
                          <th className="text-left text-[10px] font-semibold text-foreground/40 uppercase tracking-wider p-3">Cohort</th>
                          <th className="text-right text-[10px] font-semibold text-foreground/40 uppercase tracking-wider p-3">Students</th>
                          <th className="text-right text-[10px] font-semibold text-foreground/40 uppercase tracking-wider p-3">Months in FY27</th>
                          <th className="text-right text-[10px] font-semibold text-foreground/40 uppercase tracking-wider p-3">FY27 revenue</th>
                          <th className="text-right text-[10px] font-semibold text-foreground/40 uppercase tracking-wider p-3">% of total</th>
                          <th className="text-right text-[10px] font-semibold text-foreground/40 uppercase tracking-wider p-3">Lifetime value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "2026 locked",
                            color: COLORS.feb,
                            students: 0,
                            months: 12,
                            rev: calc.febTotal,
                            ltv: calc.febTotal,
                          },
                          {
                            name: "May 2026 intake",
                            color: COLORS.may,
                            students: calc.mayStudents,
                            months: calc.mayMonths,
                            rev: calc.mayTotal,
                            ltv: calc.mayStudents * ppm * dur,
                          },
                          {
                            name: "October 2026 intake",
                            color: COLORS.oct,
                            students: octEnrol,
                            months: calc.octMonths,
                            rev: calc.octTotal,
                            ltv: octEnrol * ppm * dur,
                          },
                        ].map((row) => (
                          <tr
                            key={row.name}
                            className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.01]"
                          >
                            <td className="p-3 text-left text-foreground/75 font-medium">
                              <span className="inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: row.color }} />
                                {row.name}
                              </span>
                            </td>
                            <td className="p-3 text-right text-foreground/65">
                              {row.students.toFixed(1).replace(/\.0$/, "")}
                            </td>
                            <td className="p-3 text-right text-foreground/65">{row.months}</td>
                            <td className="p-3 text-right text-foreground/75">{fmt(row.rev)}</td>
                            <td className="p-3 text-right text-foreground/55">
                              {calc.total > 0 ? ((row.rev / calc.total) * 100).toFixed(1) : "0"}%
                            </td>
                            <td className="p-3 text-right text-foreground/65">{fmt(row.ltv)}</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-foreground/80">
                          <td className="p-3 text-left font-bold text-foreground/85">Total FY27</td>
                          <td className="p-3 text-right font-bold text-foreground/85">
                            {calc.totalStudents.toFixed(1).replace(/\.0$/, "")}
                          </td>
                          <td className="p-3 text-right text-foreground/55">&mdash;</td>
                          <td className="p-3 text-right font-bold text-foreground/85">{fmt(calc.total)}</td>
                          <td className="p-3 text-right font-bold text-foreground/85">100.0%</td>
                          <td className="p-3 text-right font-bold text-foreground/85">{fmt(calc.ltv)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Insight */}
                  <div
                    className="mt-5 rounded-xl border p-4"
                    style={{
                      backgroundColor:
                        calc.gap >= 0 ? "rgba(16, 185, 129, 0.04)" : "rgba(239, 68, 68, 0.04)",
                      borderColor:
                        calc.gap >= 0 ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <Info
                        size={16}
                        style={{ color: calc.gap >= 0 ? COLORS.good : COLORS.bad }}
                        className="shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-xs sm:text-sm text-foreground/70 leading-[1.7]">
                        <span
                          className="font-semibold"
                          style={{ color: calc.gap >= 0 ? COLORS.good : COLORS.bad }}
                        >
                          {target > 0
                            ? calc.gap >= 0
                              ? "You're on track. "
                              : "Shortfall. "
                            : ""}
                        </span>
                        {insightMsg}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scenarios */}
              <div className="card-elevated !p-0 overflow-hidden">
                <div className="h-[3px] w-full" style={{ backgroundColor: COLORS.accent }} />
                <div className="p-5 sm:p-6">
                  <h3 className="text-sm font-bold text-foreground/85 mb-1">Scenario comparison</h3>
                  <p className="text-xs text-foreground/45 mb-4">
                    What FY27 looks like under different October intake levels. May intake and 2026 locked held at current values.
                  </p>

                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 pb-2 border-b border-black/[0.06] text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
                      <div>Scenario</div>
                      <div className="text-right">FY27 revenue</div>
                      <div className="text-right">vs target</div>
                      <div className="text-right">% target</div>
                    </div>
                    {SCENARIOS.map((s) => {
                      const octRev = s.oct * ppm * calc.octMonths;
                      const sTotal = calc.mayTotal + calc.febTotal + octRev;
                      const sGap = sTotal - target;
                      const sPct = target > 0 ? (sTotal / target) * 100 : 0;
                      const tone: "good" | "warn" | "bad" =
                        sPct >= 100 ? "good" : sPct >= 90 ? "warn" : "bad";
                      const bg =
                        tone === "good"
                          ? "rgba(16, 185, 129, 0.04)"
                          : tone === "warn"
                            ? "rgba(245, 158, 11, 0.04)"
                            : "rgba(239, 68, 68, 0.04)";
                      const color =
                        tone === "good" ? COLORS.good : tone === "warn" ? COLORS.warn : COLORS.bad;
                      return (
                        <div
                          key={s.label}
                          className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-3 py-2 rounded-md text-sm tabular-nums"
                          style={{ backgroundColor: bg }}
                        >
                          <div className="text-foreground/75 font-medium">
                            {s.label} <span className="text-foreground/40 font-normal">— Oct {s.oct}</span>
                          </div>
                          <div className="text-right text-foreground/70">{fmt(sTotal)}</div>
                          <div className="text-right font-semibold" style={{ color }}>
                            {sGap >= 0 ? "+" : ""}{fmt(sGap)}
                          </div>
                          <div className="text-right text-foreground/65">{sPct.toFixed(0)}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ════════════════════════════════════════════════════════════════════
   CHART components (SVG)
   ════════════════════════════════════════════════════════════════════ */

type CalcOutput = {
  may: number[];
  oct: number[];
  feb: number[];
};

function LegendChip({ color, label, thin }: { color: string; label: string; thin?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="rounded-sm"
        style={{ backgroundColor: color, width: 10, height: thin ? 2 : 10 }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function MonthlyChart({ monthly, target }: { monthly: CalcOutput; target: number }) {
  const W = 720;
  const H = 320;
  const padL = 60;
  const padR = 16;
  const padT = 18;
  const padB = 38;

  const totals = MONTHS.map((_, i) => monthly.may[i] + monthly.oct[i] + monthly.feb[i]);
  const maxV = Math.max(...totals, target / 12) * 1.15 || 1;
  const slot = (W - padL - padR) / 12;
  const barW = slot * 0.72;

  const yScale = (v: number) => H - padB - (v / maxV) * (H - padT - padB);
  const ticks = 5;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" className="w-full h-auto">
      {/* Gridlines + y labels */}
      {Array.from({ length: ticks + 1 }, (_, t) => {
        const v = (maxV * t) / ticks;
        const y = yScale(v);
        return (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={y} y2={y} stroke="#eef2f7" />
            <text
              x={padL - 8}
              y={y + 3}
              fontSize={10}
              fill="#64748b"
              textAnchor="end"
              fontFamily="ui-sans-serif"
            >
              {fmtK(v)}
            </text>
          </g>
        );
      })}

      {/* Bars */}
      {MONTHS.map((m, i) => {
        const x = padL + slot * i + (slot - barW) / 2;
        const v1 = monthly.may[i];
        const v2 = monthly.oct[i];
        const v3 = monthly.feb[i];
        let yBase = yScale(0);
        const stack: React.ReactElement[] = [];
        if (v1 > 0) {
          const h = yScale(0) - yScale(v1);
          yBase -= h;
          stack.push(<rect key="may" x={x} y={yBase} width={barW} height={h} fill={COLORS.may} />);
        }
        if (v2 > 0) {
          const h = yScale(0) - yScale(v2);
          yBase -= h;
          stack.push(<rect key="oct" x={x} y={yBase} width={barW} height={h} fill={COLORS.oct} />);
        }
        if (v3 > 0) {
          const h = yScale(0) - yScale(v3);
          yBase -= h;
          stack.push(<rect key="feb" x={x} y={yBase} width={barW} height={h} fill={COLORS.feb} />);
        }
        return (
          <g key={m}>
            {stack}
            <text
              x={padL + slot * i + slot / 2}
              y={H - padB + 14}
              fontSize={11}
              fill="#64748b"
              textAnchor="middle"
              fontFamily="ui-sans-serif"
            >
              {m}
            </text>
          </g>
        );
      })}

      {/* Target line */}
      {target > 0 && (
        <g>
          <line
            x1={padL}
            x2={W - padR}
            y1={yScale(target / 12)}
            y2={yScale(target / 12)}
            stroke={COLORS.target}
            strokeWidth={2}
            strokeDasharray="4 4"
          />
          <text
            x={W - padR}
            y={yScale(target / 12) - 4}
            fontSize={10}
            fill={COLORS.target}
            textAnchor="end"
            fontFamily="ui-sans-serif"
          >
            monthly target {fmtK(target / 12)}
          </text>
        </g>
      )}

      <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="#cbd5e1" />
    </svg>
  );
}

function CumulativeChart({ monthly, target }: { monthly: CalcOutput; target: number }) {
  const W = 480;
  const H = 320;
  const padL = 60;
  const padR = 16;
  const padT = 18;
  const padB = 38;

  let cum = 0;
  const cumArr = MONTHS.map((_, i) => (cum += monthly.may[i] + monthly.oct[i] + monthly.feb[i]));
  const maxV = Math.max(cumArr[11], target) * 1.1 || 1;
  const xScale = (i: number) => padL + ((W - padL - padR) * i) / 11;
  const yScale = (v: number) => H - padB - (v / maxV) * (H - padT - padB);
  const ticks = 5;

  const path = cumArr
    .map((v, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(v)}`)
    .join(" ");
  const areaPath = `${path} L ${xScale(11)} ${yScale(0)} L ${xScale(0)} ${yScale(0)} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" className="w-full h-auto">
      {Array.from({ length: ticks + 1 }, (_, t) => {
        const v = (maxV * t) / ticks;
        const y = yScale(v);
        return (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={y} y2={y} stroke="#eef2f7" />
            <text
              x={padL - 8}
              y={y + 3}
              fontSize={10}
              fill="#64748b"
              textAnchor="end"
              fontFamily="ui-sans-serif"
            >
              {fmtK(v)}
            </text>
          </g>
        );
      })}

      {target > 0 && (
        <g>
          <line
            x1={padL}
            x2={W - padR}
            y1={yScale(target)}
            y2={yScale(target)}
            stroke={COLORS.target}
            strokeWidth={2}
            strokeDasharray="4 4"
          />
          <text
            x={W - padR}
            y={yScale(target) - 4}
            fontSize={10}
            fill={COLORS.target}
            textAnchor="end"
            fontFamily="ui-sans-serif"
          >
            target {fmtK(target)}
          </text>
        </g>
      )}

      <path d={areaPath} fill={COLORS.accent} fillOpacity={0.12} />
      <path d={path} stroke={COLORS.accent} strokeWidth={2.5} fill="none" />
      <circle cx={xScale(11)} cy={yScale(cumArr[11])} r={4} fill={COLORS.accent} />
      <text
        x={xScale(11)}
        y={yScale(cumArr[11]) - 10}
        fontSize={11}
        fill={COLORS.accent}
        textAnchor="end"
        fontWeight={600}
        fontFamily="ui-sans-serif"
      >
        {fmtK(cumArr[11])}
      </text>

      {MONTHS.map((m, i) => {
        if (i % 2 !== 0 && i !== 11) return null;
        return (
          <text
            key={m}
            x={xScale(i)}
            y={H - padB + 14}
            fontSize={11}
            fill="#64748b"
            textAnchor="middle"
            fontFamily="ui-sans-serif"
          >
            {m}
          </text>
        );
      })}

      <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="#cbd5e1" />
    </svg>
  );
}
