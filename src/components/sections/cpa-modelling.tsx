"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { CPA_MODEL_DEFAULTS, CPA_SCENARIOS } from "@/content/strategy-data";

export default function CpaModelling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [monthlySpend, setMonthlySpend] = useState(CPA_MODEL_DEFAULTS.monthlySpend);
  const [googleSplit, setGoogleSplit] = useState(CPA_MODEL_DEFAULTS.googleSplit);
  const [googleCPC, setGoogleCPC] = useState(CPA_MODEL_DEFAULTS.googleCPC);
  const [metaCPC, setMetaCPC] = useState(CPA_MODEL_DEFAULTS.metaCPC);
  const [lpConversion, setLpConversion] = useState(CPA_MODEL_DEFAULTS.lpConversionRate);
  const [leadToEnrollment, setLeadToEnrollment] = useState(CPA_MODEL_DEFAULTS.leadToEnrollmentRate);

  const calc = useMemo(() => {
    const googleBudget = (monthlySpend * googleSplit) / 100;
    const metaBudget = monthlySpend - googleBudget;
    const googleClicks = googleCPC > 0 ? Math.round(googleBudget / googleCPC) : 0;
    const metaClicks = metaCPC > 0 ? Math.round(metaBudget / metaCPC) : 0;
    const totalClicks = googleClicks + metaClicks;
    const blendedCPC = totalClicks > 0 ? monthlySpend / totalClicks : 0;
    const monthlyLeads = Math.round(totalClicks * (lpConversion / 100));
    const monthlyEnrollments = Math.round(monthlyLeads * (leadToEnrollment / 100));
    const effectiveCPA = monthlyEnrollments > 0 ? monthlySpend / monthlyEnrollments : 0;
    const sixMonthEnrollments = monthlyEnrollments * 6;

    return {
      googleBudget,
      metaBudget,
      googleClicks,
      metaClicks,
      totalClicks,
      blendedCPC,
      monthlyLeads,
      monthlyEnrollments,
      effectiveCPA,
      sixMonthEnrollments,
    };
  }, [monthlySpend, googleSplit, googleCPC, metaCPC, lpConversion, leadToEnrollment]);

  const cpaStatus =
    calc.effectiveCPA === 0
      ? "neutral"
      : calc.effectiveCPA <= 400
        ? "excellent"
        : calc.effectiveCPA <= 800
          ? "good"
          : calc.effectiveCPA <= 1500
            ? "warning"
            : "danger";

  const cpaColor =
    cpaStatus === "excellent"
      ? "#10B981"
      : cpaStatus === "good"
        ? "#2EA3F2"
        : cpaStatus === "warning"
          ? "#F59E0B"
          : cpaStatus === "danger"
            ? "#EF4444"
            : "#94A3B8";

  const scenarioBarData = CPA_SCENARIOS.map((s) => ({
    name: s.name,
    enrollments: s.sixMonthEnrollments,
    cpa: s.effectiveCPA,
  }));

  // Add "Your Model" to bar chart
  const barData = [
    ...scenarioBarData,
    {
      name: "Your Model",
      enrollments: calc.sixMonthEnrollments,
      cpa: Math.round(calc.effectiveCPA),
    },
  ];

  const barColors = ["#94A3B8", "#7C3AED", "#10B981", cpaColor];

  return (
    <section id="cpa" className="relative py-24 sm:py-32">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-green" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-green uppercase">
            CPA Modelling — Interactive
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Adjust the levers,{" "}
          <span className="text-cps-green">see the outcome</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-white/40 mb-12 max-w-2xl"
        >
          Move the sliders below to model different scenarios. The target is R400 CPA with 70 enrollments per intake (6 months).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[1fr_380px] gap-8">
            {/* Sliders */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <h3 className="text-sm font-semibold text-white mb-8">Input Parameters</h3>

              <div className="space-y-8">
                {/* Monthly Spend */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-white/60">Monthly Media Spend</label>
                    <span className="text-sm font-mono font-bold text-white">
                      R{monthlySpend.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[monthlySpend]}
                    onValueChange={(v) => setMonthlySpend((v as number[])[0])}
                    min={5000}
                    max={50000}
                    step={1000}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-white/20">
                    <span>R5,000</span>
                    <span>R50,000</span>
                  </div>
                </div>

                {/* Google/Meta Split */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-white/60">Google / Meta Split</label>
                    <span className="text-sm font-mono font-bold text-white">
                      {googleSplit}% / {100 - googleSplit}%
                    </span>
                  </div>
                  <Slider
                    value={[googleSplit]}
                    onValueChange={(v) => setGoogleSplit((v as number[])[0])}
                    min={0}
                    max={100}
                    step={5}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-white/20">
                    <span>100% Meta</span>
                    <span>100% Google</span>
                  </div>
                </div>

                {/* Google CPC */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-white/60">Google CPC</label>
                    <span className="text-sm font-mono font-bold text-white">R{googleCPC}</span>
                  </div>
                  <Slider
                    value={[googleCPC]}
                    onValueChange={(v) => setGoogleCPC((v as number[])[0])}
                    min={5}
                    max={35}
                    step={1}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-white/20">
                    <span>R5</span>
                    <span>R35</span>
                  </div>
                </div>

                {/* Meta CPC */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-white/60">Meta CPC</label>
                    <span className="text-sm font-mono font-bold text-white">R{metaCPC}</span>
                  </div>
                  <Slider
                    value={[metaCPC]}
                    onValueChange={(v) => setMetaCPC((v as number[])[0])}
                    min={2}
                    max={20}
                    step={1}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-white/20">
                    <span>R2</span>
                    <span>R20</span>
                  </div>
                </div>

                {/* LP Conversion Rate */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-white/60">Landing Page Conversion Rate</label>
                    <span className="text-sm font-mono font-bold text-white">{lpConversion}%</span>
                  </div>
                  <Slider
                    value={[lpConversion]}
                    onValueChange={(v) => setLpConversion((v as number[])[0])}
                    min={1}
                    max={20}
                    step={0.5}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-white/20">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Lead to Enrollment Rate */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-white/60">Lead-to-Enrollment Rate</label>
                    <span className="text-sm font-mono font-bold text-white">
                      {leadToEnrollment}%
                    </span>
                  </div>
                  <Slider
                    value={[leadToEnrollment]}
                    onValueChange={(v) => setLeadToEnrollment((v as number[])[0])}
                    min={2}
                    max={40}
                    step={1}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-white/20">
                    <span>2%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results panel */}
            <div className="space-y-4">
              {/* CPA Hero */}
              <div
                className="p-6 rounded-2xl border-2 text-center"
                style={{
                  backgroundColor: `${cpaColor}08`,
                  borderColor: `${cpaColor}30`,
                }}
              >
                <p className="text-xs tracking-[0.2em] text-white/30 uppercase mb-2">
                  Effective CPA
                </p>
                <div className="font-display text-5xl font-bold" style={{ color: cpaColor }}>
                  R{Math.round(calc.effectiveCPA).toLocaleString()}
                </div>
                <p className="text-xs mt-2" style={{ color: `${cpaColor}90` }}>
                  {cpaStatus === "excellent"
                    ? "Below R400 target"
                    : cpaStatus === "good"
                      ? "Approaching target"
                      : cpaStatus === "warning"
                        ? "Above target — optimise"
                        : calc.effectiveCPA === 0
                          ? "No enrollments"
                          : "Significantly above target"}
                </p>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] tracking-wider text-white/30 uppercase">Total Clicks</p>
                  <p className="text-xl font-display font-bold text-white mt-1">
                    {calc.totalClicks.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-white/25 mt-0.5">
                    G: {calc.googleClicks.toLocaleString()} | M: {calc.metaClicks.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] tracking-wider text-white/30 uppercase">Blended CPC</p>
                  <p className="text-xl font-display font-bold text-white mt-1">
                    R{calc.blendedCPC.toFixed(2)}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] tracking-wider text-white/30 uppercase">Monthly Leads</p>
                  <p className="text-xl font-display font-bold text-cps-blue mt-1">
                    {calc.monthlyLeads}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] tracking-wider text-white/30 uppercase">Monthly Enrollments</p>
                  <p className="text-xl font-display font-bold text-cps-purple-light mt-1">
                    {calc.monthlyEnrollments}
                  </p>
                </div>
              </div>

              {/* 6-month result */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-cps-purple/5 to-cps-blue/5 border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-wider text-white/30 uppercase">
                      6-Month Enrollments
                    </p>
                    <p className="text-3xl font-display font-bold text-white mt-1">
                      {calc.sixMonthEnrollments}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-wider text-white/30 uppercase">Target</p>
                    <p className="text-3xl font-display font-bold text-white/20 mt-1">70</p>
                  </div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: cpaColor,
                      width: `${Math.min((calc.sixMonthEnrollments / 70) * 100, 100)}%`,
                    }}
                    animate={{
                      width: `${Math.min((calc.sixMonthEnrollments / 70) * 100, 100)}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <p className="text-[10px] text-white/25 mt-2">
                  {calc.sixMonthEnrollments >= 70
                    ? `${Math.round((calc.sixMonthEnrollments / 70) * 100)}% of target — exceeds goal`
                    : `${Math.round((calc.sixMonthEnrollments / 70) * 100)}% of 70-enrollment target`}
                </p>
              </div>
            </div>
          </div>

          {/* Scenario Comparison Chart */}
          <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-sm font-semibold text-white mb-2">
              Scenario Comparison — 6-Month Enrollments
            </h3>
            <p className="text-xs text-white/30 mb-6">
              Your model compared against conservative, target, and optimistic scenarios
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#F1F5F9",
                      fontSize: "12px",
                    }}
                    formatter={(value, name) => {
                      if (name === "enrollments") return [String(value), "Enrollments (6mo)"];
                      return [String(value), String(name)];
                    }}
                  />
                  <Bar dataKey="enrollments" radius={[6, 6, 0, 0]}>
                    {barData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Target line label */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-8 h-px bg-cps-red/50 border-dashed" />
              <span className="text-[10px] text-white/30">Target: 70 enrollments per intake</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
