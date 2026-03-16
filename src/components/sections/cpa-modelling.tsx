"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo, useCallback } from "react";
import { Slider } from "@/components/ui/slider";

/* ------------------------------------------------------------------ */
/*  Static scenario data                                               */
/* ------------------------------------------------------------------ */

const SCENARIO_A = {
  heading: "Scenario A — 6-Month Intake",
  color: "#6B2D8B",
  items: [
    { label: "Monthly media spend", value: "R15,000" },
    { label: "Total media spend", value: "R90,000" },
    { label: "Monthly leads required", value: "78" },
    { label: "Monthly enrollments required", value: "12" },
    { label: "Target CPL", value: "≤ R193" },
    { label: "Target CPA", value: "≤ R1,286" },
    { label: "Lead-to-enrollment assumption", value: "15%" },
  ],
};

const SCENARIO_B = {
  heading: "Scenario B — 3-Month Intake",
  color: "#00A8E1",
  items: [
    { label: "Monthly media spend", value: "R15,000" },
    { label: "Total media spend", value: "R45,000" },
    { label: "Monthly leads required", value: "156" },
    { label: "Monthly enrollments required", value: "23" },
    { label: "Target CPL", value: "≤ R96" },
    { label: "Target CPA", value: "≤ R643" },
    { label: "Lead-to-enrollment assumption", value: "15%" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Slider parameter config                                            */
/* ------------------------------------------------------------------ */

const SLIDER_CONFIG = [
  { key: "monthlySpend" as const, label: "Monthly Media Spend", prefix: "R", min: 5000, max: 50000, step: 1000, format: (v: number) => v.toLocaleString() },
  { key: "cpc" as const, label: "Cost Per Click (CPC)", prefix: "R", min: 5, max: 30, step: 1, format: (v: number) => String(v) },
  { key: "lpConversionRate" as const, label: "Landing Page Conversion", suffix: "%", min: 3, max: 15, step: 0.5, format: (v: number) => String(v) },
  { key: "leadToEnrollmentRate" as const, label: "Lead → Enrollment", suffix: "%", min: 5, max: 30, step: 1, format: (v: number) => String(v) },
];

type SliderKey = "monthlySpend" | "cpc" | "lpConversionRate" | "leadToEnrollmentRate";

/* ------------------------------------------------------------------ */
/*  CPA status color helper                                            */
/* ------------------------------------------------------------------ */

function cpaColor(cpa: number): string {
  if (cpa <= 643) return "#10B981";
  if (cpa <= 1286) return "#FFD100";
  return "#EF4444";
}

function cplColor(cpl: number): string {
  if (cpl <= 96) return "#10B981";
  if (cpl <= 193) return "#FFD100";
  return "#EF4444";
}

/* ------------------------------------------------------------------ */
/*  Funnel Visualisation — labels on the side, proportional heights    */
/* ------------------------------------------------------------------ */

function FunnelVisualisation({
  spend,
  clicks,
  leads,
  enrollments,
  cpl,
  cpa,
}: {
  spend: number;
  clicks: number;
  leads: number;
  enrollments: number;
  cpl: number;
  cpa: number;
}) {
  const stages = [
    {
      label: "Ad Spend",
      metric: `R${spend.toLocaleString()}`,
      raw: spend,
      color: "#6B2D8B",
      bg: "rgba(107,45,139,0.08)",
      border: "rgba(107,45,139,0.18)",
    },
    {
      label: "Traffic",
      metric: clicks.toLocaleString(),
      raw: clicks,
      color: "#00A8E1",
      bg: "rgba(0,168,225,0.08)",
      border: "rgba(0,168,225,0.18)",
    },
    {
      label: "Leads",
      metric: leads.toLocaleString(),
      sub: `CPL R${cpl.toLocaleString()}`,
      subColor: cplColor(cpl),
      raw: leads,
      color: "#10B981",
      bg: "rgba(16,185,129,0.07)",
      border: "rgba(16,185,129,0.18)",
    },
    {
      label: "Enrollments",
      metric: `${enrollments}/mo`,
      sub: `CPA R${cpa.toLocaleString()}`,
      subColor: cpaColor(cpa),
      raw: enrollments,
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.20)",
    },
  ];

  // Width percentages — each stage proportional to the one above it
  // Spend is always 100%. Clicks ~80%. Leads and enrollments scale from clicks.
  const clicksPct = 80;
  const leadsPct = clicks > 0 ? Math.max(18, (leads / clicks) * clicksPct) : 18;
  const enrollPct = leads > 0 ? Math.max(10, (enrollments / leads) * leadsPct) : 10;
  const widths = [100, clicksPct, leadsPct, enrollPct];

  return (
    <div className="space-y-0">
      {stages.map((stage, i) => {
        const topW = widths[i];
        const bottomW = widths[i + 1] ?? topW * 0.5;

        return (
          <div key={stage.label} className="relative flex items-stretch" style={{ minHeight: 56 }}>
            {/* Left label column */}
            <div className="w-[120px] sm:w-[150px] flex-shrink-0 flex flex-col justify-center pr-4 text-right">
              <span
                className="text-[11px] font-bold uppercase tracking-wider leading-tight"
                style={{ color: stage.color }}
              >
                {stage.label}
              </span>
              {stage.sub && (
                <span
                  className="text-[10px] font-semibold mt-0.5 tabular-nums transition-colors duration-300"
                  style={{ color: stage.subColor }}
                >
                  {stage.sub}
                </span>
              )}
            </div>

            {/* Funnel shape — CSS trapezoid */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div
                className="w-full transition-all duration-500 ease-out"
                style={{
                  height: 48,
                  clipPath: `polygon(${(100 - topW) / 2}% 0%, ${(100 + topW) / 2}% 0%, ${(100 + bottomW) / 2}% 100%, ${(100 - bottomW) / 2}% 100%)`,
                  background: `linear-gradient(180deg, ${stage.bg}, ${stage.bg.replace(/[\d.]+\)$/, '0.03)')})`,
                  border: 'none',
                  position: 'relative',
                }}
              />
              {/* Border overlay using same clip-path */}
              <div
                className="absolute inset-0 transition-all duration-500 ease-out pointer-events-none"
                style={{
                  clipPath: `polygon(${(100 - topW) / 2}% 0%, ${(100 + topW) / 2}% 0%, ${(100 + bottomW) / 2}% 100%, ${(100 - bottomW) / 2}% 100%)`,
                  boxShadow: `inset 0 0 0 1.5px ${stage.border}`,
                  top: 0,
                  height: 48,
                }}
              />
            </div>

            {/* Right metric column */}
            <div className="w-[100px] sm:w-[130px] flex-shrink-0 flex flex-col justify-center pl-4">
              <span className="text-sm font-bold tabular-nums text-foreground/70">
                {stage.metric}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CpaModelling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [params, setParams] = useState({
    monthlySpend: 15000,
    cpc: 13,
    lpConversionRate: 7,
    leadToEnrollmentRate: 15,
  });

  const updateParam = useCallback((key: SliderKey, raw: number | number[]) => {
    const value = Array.isArray(raw) ? raw[0] : raw;
    setParams((prev) => ({ ...prev, [key]: value }));
  }, []);

  const results = useMemo(() => {
    const clicksPerMonth = Math.round(params.monthlySpend / params.cpc);
    const leadsPerMonth = Math.round(clicksPerMonth * (params.lpConversionRate / 100));
    const enrollmentsPerMonth = Math.round(leadsPerMonth * (params.leadToEnrollmentRate / 100));
    const effectiveCPL = leadsPerMonth > 0 ? Math.round(params.monthlySpend / leadsPerMonth) : 0;
    const effectiveCPA = enrollmentsPerMonth > 0 ? Math.round(params.monthlySpend / enrollmentsPerMonth) : 0;
    const sixMonthEnrollments = enrollmentsPerMonth * 6;
    const threeMonthEnrollments = enrollmentsPerMonth * 3;

    return { clicksPerMonth, leadsPerMonth, enrollmentsPerMonth, effectiveCPL, effectiveCPA, sixMonthEnrollments, threeMonthEnrollments };
  }, [params]);

  return (
    <section id="cpa" className="relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-green rounded-full" />
          <span className="section-label text-cps-green">
            Intake Scenario Modelling
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-3 tracking-tight"
        >
          Same spend,{" "}
          <span className="text-cps-green">different efficiency</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-14 max-w-2xl"
        >
          The monthly media budget stays fixed at R15,000 in both planning scenarios.
          What changes is the level of funnel efficiency required to reach the same intake target of 70 students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Side-by-side Scenario Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[SCENARIO_A, SCENARIO_B].map((scenario) => (
              <div
                key={scenario.heading}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div
                  className="h-[3px] w-full"
                  style={{ backgroundColor: scenario.color }}
                />
                <div className="p-6 sm:p-8">
                  <h3
                    className="text-sm font-bold mb-6 uppercase tracking-wider"
                    style={{ color: scenario.color }}
                  >
                    {scenario.heading}
                  </h3>
                  <div className="space-y-4">
                    {scenario.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-foreground/50">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-foreground/80">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* -------------------------------------------------------- */}
          {/*  Interactive Funnel Calculator                            */}
          {/* -------------------------------------------------------- */}
          <div className="card-elevated !p-0 overflow-hidden">
            <div className="h-[3px] w-full bg-cps-green" />
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  Interactive funnel calculator
                </h3>
                <p className="text-[13px] text-foreground/40 mt-1 max-w-lg">
                  This model shows how marketing spend converts into enrolled students. Adjust the sliders to see how changes in CPC, landing page conversion, and lead-to-enrollment rates affect intake size.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
                {/* Left — Sliders */}
                <div className="space-y-6">
                  {SLIDER_CONFIG.map((cfg) => (
                    <div key={cfg.key}>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-sm text-foreground/50 font-medium">
                          {cfg.label}
                        </label>
                        <span className="text-sm font-bold text-foreground/80 tabular-nums">
                          {cfg.prefix ?? ""}{cfg.format(params[cfg.key])}{cfg.suffix ?? ""}
                        </span>
                      </div>
                      <Slider
                        value={[params[cfg.key]]}
                        min={cfg.min}
                        max={cfg.max}
                        step={cfg.step}
                        onValueChange={(val) => updateParam(cfg.key, val as number | number[])}
                      />
                      <div className="flex justify-between mt-1.5">
                        <span className="text-[10px] text-foreground/20">
                          {cfg.prefix ?? ""}{cfg.key === "monthlySpend" ? cfg.min.toLocaleString() : cfg.min}{cfg.suffix ?? ""}
                        </span>
                        <span className="text-[10px] text-foreground/20">
                          {cfg.prefix ?? ""}{cfg.key === "monthlySpend" ? cfg.max.toLocaleString() : cfg.max}{cfg.suffix ?? ""}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Auto-calculated CPL */}
                  <div className="rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-foreground/50 font-medium">
                      Calculated CPL
                    </span>
                    <span
                      className="text-sm font-bold tabular-nums transition-colors duration-300"
                      style={{ color: cplColor(results.effectiveCPL) }}
                    >
                      R{results.effectiveCPL.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[10px] text-foreground/20 -mt-4">
                    CPL = CPC &divide; LP Conversion Rate
                  </p>
                </div>

                {/* Right — Computed Outputs */}
                <div>
                  {/* Effective CPA */}
                  <div className="rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] p-5 text-center mb-4">
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-1">
                      Effective CPA
                    </p>
                    <p
                      className="text-3xl font-bold tabular-nums transition-colors duration-300"
                      style={{ color: cpaColor(results.effectiveCPA) }}
                    >
                      R{results.effectiveCPA.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-foreground/25 mt-1">
                      Cost per enrolled student
                    </p>
                  </div>

                  {/* Funnel metrics table */}
                  <div className="space-y-0 rounded-xl border border-foreground/[0.06] overflow-hidden">
                    {[
                      { label: "Monthly spend", value: `R${params.monthlySpend.toLocaleString()}` },
                      { label: "CPC", value: `R${params.cpc}` },
                      { label: "Clicks per month", value: results.clicksPerMonth.toLocaleString() },
                      { label: "LP conversion", value: `${params.lpConversionRate}%` },
                      { label: "Leads per month", value: results.leadsPerMonth.toLocaleString(), highlight: true },
                      { label: "Enrollments per month", value: results.enrollmentsPerMonth.toLocaleString(), highlight: true },
                    ].map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between items-center px-4 py-2.5 ${
                          i > 0 ? "border-t border-foreground/[0.04]" : ""
                        } ${row.highlight ? "bg-foreground/[0.02]" : ""}`}
                      >
                        <span className="text-[13px] text-foreground/45">{row.label}</span>
                        <span className={`text-[13px] font-semibold tabular-nums ${row.highlight ? "text-foreground/80" : "text-foreground/60"}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Projected enrollments */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="rounded-xl border-2 border-cps-purple/20 bg-cps-purple/[0.03] p-4 text-center">
                      <p className="text-[10px] font-semibold tracking-[0.12em] text-cps-purple/50 uppercase mb-1">
                        6-Month Intake
                      </p>
                      <p className="text-2xl font-bold text-cps-purple tabular-nums">
                        {results.sixMonthEnrollments.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-foreground/20 mt-1">students</p>
                    </div>
                    <div className="rounded-xl border-2 border-cps-blue/20 bg-cps-blue/[0.03] p-4 text-center">
                      <p className="text-[10px] font-semibold tracking-[0.12em] text-cps-blue/50 uppercase mb-1">
                        3-Month Intake
                      </p>
                      <p className="text-2xl font-bold text-cps-blue tabular-nums">
                        {results.threeMonthEnrollments.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-foreground/20 mt-1">students</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------ */}
              {/*  SVG Funnel Visualisation                                */}
              {/* ------------------------------------------------------ */}
              <div className="mt-10 pt-8 border-t border-foreground/[0.06]">
                <FunnelVisualisation
                  spend={params.monthlySpend}
                  clicks={results.clicksPerMonth}
                  leads={results.leadsPerMonth}
                  enrollments={results.enrollmentsPerMonth}
                  cpl={results.effectiveCPL}
                  cpa={results.effectiveCPA}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
