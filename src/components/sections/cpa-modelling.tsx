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
import { CPA_MODEL_DEFAULTS, CPA_SCENARIOS, CPA_PRESETS } from "@/content/strategy-data";

export default function CpaModelling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [monthlySpend, setMonthlySpend] = useState(CPA_MODEL_DEFAULTS.monthlySpend);
  const [googleSplit, setGoogleSplit] = useState(CPA_MODEL_DEFAULTS.googleSplit);
  const [googleCPC, setGoogleCPC] = useState(CPA_MODEL_DEFAULTS.googleCPC);
  const [metaCPC, setMetaCPC] = useState(CPA_MODEL_DEFAULTS.metaCPC);
  const [lpConversion, setLpConversion] = useState(CPA_MODEL_DEFAULTS.lpConversionRate);
  const [leadToEnrollment, setLeadToEnrollment] = useState(CPA_MODEL_DEFAULTS.leadToEnrollmentRate);
  const [activePreset, setActivePreset] = useState<string | null>("Target");

  const applyPreset = (preset: typeof CPA_PRESETS[number]) => {
    setMonthlySpend(preset.budget);
    setGoogleSplit(preset.gsplit);
    setGoogleCPC(preset.gcpc);
    setMetaCPC(preset.mcpc);
    setLpConversion(preset.lpcvr);
    setLeadToEnrollment(preset.lter);
    setActivePreset(preset.name);
  };

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
    const cpl = monthlyLeads > 0 ? monthlySpend / monthlyLeads : 0;
    const totalIntakeSpend = monthlySpend * 6;

    return {
      googleBudget, metaBudget, googleClicks, metaClicks, totalClicks,
      blendedCPC, monthlyLeads, monthlyEnrollments, effectiveCPA,
      sixMonthEnrollments, cpl, totalIntakeSpend,
    };
  }, [monthlySpend, googleSplit, googleCPC, metaCPC, lpConversion, leadToEnrollment]);

  const cpaColor =
    calc.effectiveCPA === 0 ? "#94A3B8"
    : calc.effectiveCPA <= 400 ? "#10B981"
    : calc.effectiveCPA <= 1000 ? "#F59E0B"
    : "#EF4444";

  const cpaLabel =
    calc.effectiveCPA === 0 ? "No enrollments"
    : calc.effectiveCPA <= 400 ? "Below R400 target"
    : calc.effectiveCPA <= 1000 ? "Above target — optimise"
    : "Significantly above target";

  const enrollColor =
    calc.sixMonthEnrollments >= 70 ? "#10B981"
    : calc.sixMonthEnrollments >= 40 ? "#F59E0B"
    : "#EF4444";

  const cplColor =
    calc.cpl === 0 ? "#94A3B8"
    : calc.cpl <= 100 ? "#10B981"
    : calc.cpl <= 200 ? "#F59E0B"
    : "#EF4444";

  const scenarioBarData = CPA_SCENARIOS.map((s) => ({
    name: s.name,
    enrollments: s.sixMonthEnrollments,
    cpa: s.effectiveCPA,
  }));

  const barData = [
    ...scenarioBarData,
    { name: "Your Model", enrollments: calc.sixMonthEnrollments, cpa: Math.round(calc.effectiveCPA) },
  ];
  const barColors = ["#94A3B8", "#6B2D8B", "#10B981", cpaColor];

  const funnelMax = Math.max(calc.totalClicks, 1);

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
            CPA Modelling — Interactive
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-3 tracking-tight"
        >
          Adjust the levers,{" "}
          <span className="text-cps-green">see the outcome</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-foreground/35 mb-14 max-w-2xl"
        >
          Move the sliders below to model different scenarios. The target is R400 CPA with 70 enrollments per intake (6 months).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[1fr_420px] gap-6">
            {/* Sliders Panel */}
            <div className="card-elevated !p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold text-foreground">Input Parameters</h3>
                {/* Preset buttons */}
                <div className="flex gap-2">
                  {CPA_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => applyPreset(preset)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wide transition-all ${
                        activePreset === preset.name
                          ? "bg-cps-purple text-white shadow-sm"
                          : "bg-cps-grey text-foreground/40 hover:text-foreground/60 border border-black/[0.04]"
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-7">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-foreground/50">Monthly Media Spend</label>
                    <span className="text-sm font-bold text-foreground">R{monthlySpend.toLocaleString()}</span>
                  </div>
                  <Slider value={[monthlySpend]} onValueChange={(v) => setMonthlySpend(Array.isArray(v) ? v[0] : v)} min={5000} max={50000} step={1000} />
                  <div className="flex justify-between mt-1.5 text-[10px] text-foreground/20"><span>R5,000</span><span>R50,000</span></div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-foreground/50">Google / Meta Split</label>
                    <span className="text-sm font-bold text-foreground">{googleSplit}% / {100 - googleSplit}%</span>
                  </div>
                  <Slider value={[googleSplit]} onValueChange={(v) => setGoogleSplit(Array.isArray(v) ? v[0] : v)} min={0} max={100} step={5} />
                  <div className="flex justify-between mt-1.5 text-[10px] text-foreground/20"><span>100% Meta</span><span>100% Google</span></div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm text-foreground/50">Google CPC</label>
                      <span className="text-sm font-bold text-foreground">R{googleCPC}</span>
                    </div>
                    <Slider value={[googleCPC]} onValueChange={(v) => setGoogleCPC(Array.isArray(v) ? v[0] : v)} min={5} max={35} step={1} />
                    <div className="flex justify-between mt-1.5 text-[10px] text-foreground/20"><span>R5</span><span>R35</span></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm text-foreground/50">Meta CPC</label>
                      <span className="text-sm font-bold text-foreground">R{metaCPC}</span>
                    </div>
                    <Slider value={[metaCPC]} onValueChange={(v) => setMetaCPC(Array.isArray(v) ? v[0] : v)} min={2} max={20} step={1} />
                    <div className="flex justify-between mt-1.5 text-[10px] text-foreground/20"><span>R2</span><span>R20</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm text-foreground/50">LP Conversion</label>
                      <span className="text-sm font-bold text-foreground">{lpConversion}%</span>
                    </div>
                    <Slider value={[lpConversion]} onValueChange={(v) => setLpConversion(Array.isArray(v) ? v[0] : v)} min={1} max={20} step={0.5} />
                    <div className="flex justify-between mt-1.5 text-[10px] text-foreground/20"><span>1%</span><span>20%</span></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm text-foreground/50">Lead→Enroll</label>
                      <span className="text-sm font-bold text-foreground">{leadToEnrollment}%</span>
                    </div>
                    <Slider value={[leadToEnrollment]} onValueChange={(v) => setLeadToEnrollment(Array.isArray(v) ? v[0] : v)} min={2} max={40} step={1} />
                    <div className="flex justify-between mt-1.5 text-[10px] text-foreground/20"><span>2%</span><span>40%</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-4">
              {/* CPA Hero */}
              <div className="p-8 rounded-2xl border-2 text-center" style={{ backgroundColor: `${cpaColor}06`, borderColor: `${cpaColor}20` }}>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/25 uppercase mb-3">Effective CPA</p>
                <div className="text-5xl font-bold" style={{ color: cpaColor }}>
                  R{Math.round(calc.effectiveCPA).toLocaleString()}
                </div>
                <p className="text-xs mt-3 font-medium" style={{ color: `${cpaColor}90` }}>{cpaLabel}</p>
              </div>

              {/* Enrollment per Intake */}
              <div className="p-6 rounded-2xl border-2 text-center" style={{ backgroundColor: `${enrollColor}06`, borderColor: `${enrollColor}20` }}>
                <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase mb-2">Total Enrollments per Intake (6mo)</p>
                <p className="text-4xl font-bold" style={{ color: enrollColor }}>{calc.sixMonthEnrollments}</p>
                <p className="text-[10px] mt-2" style={{ color: `${enrollColor}80` }}>
                  Target: 70 {calc.sixMonthEnrollments >= 70 ? "— Target met" : calc.sixMonthEnrollments >= 40 ? "— Approaching target" : "— Below target"}
                </p>
              </div>

              {/* Key metrics 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="metric-card">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase">Monthly Enrollments</p>
                  <p className="text-xl font-bold text-foreground mt-1.5">{calc.monthlyEnrollments}</p>
                  <p className="text-[10px] text-foreground/20 mt-0.5">Target: ~12/mo</p>
                </div>
                <div className="metric-card">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase">Monthly Leads</p>
                  <p className="text-xl font-bold text-cps-blue mt-1.5">{calc.monthlyLeads}</p>
                </div>
                <div className="metric-card">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase">Total Clicks</p>
                  <p className="text-xl font-bold text-foreground mt-1.5">{calc.totalClicks.toLocaleString()}</p>
                </div>
                <div className="metric-card">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-foreground/25 uppercase">Blended CPC</p>
                  <p className="text-xl font-bold text-foreground mt-1.5">R{calc.blendedCPC.toFixed(2)}</p>
                </div>
              </div>

              {/* Channel Breakdown */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-cps-blue/[0.05] border border-cps-blue/10 text-center">
                  <p className="text-[9px] font-bold tracking-wider text-cps-blue uppercase mb-1">Google</p>
                  <p className="text-sm font-bold text-foreground">{calc.googleClicks.toLocaleString()}</p>
                  <p className="text-[9px] text-foreground/25">clicks · R{Math.round(calc.googleBudget).toLocaleString()}/mo</p>
                </div>
                <div className="p-3 rounded-xl bg-cps-purple/[0.05] border border-cps-purple/10 text-center">
                  <p className="text-[9px] font-bold tracking-wider text-cps-purple uppercase mb-1">Meta</p>
                  <p className="text-sm font-bold text-foreground">{calc.metaClicks.toLocaleString()}</p>
                  <p className="text-[9px] text-foreground/25">clicks · R{Math.round(calc.metaBudget).toLocaleString()}/mo</p>
                </div>
                <div className="p-3 rounded-xl border text-center" style={{ backgroundColor: `${cplColor}05`, borderColor: `${cplColor}15` }}>
                  <p className="text-[9px] font-bold tracking-wider uppercase mb-1" style={{ color: cplColor }}>CPL</p>
                  <p className="text-sm font-bold text-foreground">R{Math.round(calc.cpl).toLocaleString()}</p>
                  <p className="text-[9px] text-foreground/25">target ≤R100</p>
                </div>
              </div>

              {/* Intake spend */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cps-purple/[0.04] to-cps-blue/[0.04] border border-black/[0.05] flex justify-between items-center">
                <p className="text-xs text-foreground/40">Total intake media spend (6mo)</p>
                <p className="text-lg font-bold text-foreground">R{calc.totalIntakeSpend.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Visual Funnel */}
          <div className="mt-10 card-elevated !p-8">
            <h3 className="text-sm font-bold text-foreground mb-2">Conversion Funnel</h3>
            <p className="text-xs text-foreground/25 mb-8">Monthly flow from clicks to enrolled students</p>
            <div className="flex items-end justify-center gap-8 h-48">
              {[
                { label: "Clicks", value: calc.totalClicks, color: "#00A8E1" },
                { label: "Leads", value: calc.monthlyLeads, color: "#6B2D8B" },
                { label: "Enrolled", value: calc.monthlyEnrollments, color: "#10B981" },
              ].map((bar) => {
                const height = funnelMax > 0 ? Math.max((bar.value / funnelMax) * 100, 3) : 3;
                return (
                  <div key={bar.label} className="flex flex-col items-center gap-2 flex-1 max-w-[140px]">
                    <span className="text-lg font-bold text-foreground">{bar.value.toLocaleString()}</span>
                    <div
                      className="w-full rounded-t-lg transition-all duration-500"
                      style={{ height: `${height}%`, backgroundColor: bar.color, minHeight: "8px" }}
                    />
                    <span className="text-[10px] font-semibold tracking-wider text-foreground/30 uppercase">{bar.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scenario Comparison Chart */}
          <div className="mt-6 card-elevated !p-8">
            <h3 className="text-sm font-bold text-foreground mb-2">Scenario Comparison — 6-Month Enrollments</h3>
            <p className="text-xs text-foreground/25 mb-8">Your model compared against conservative, target, and optimistic scenarios</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
                  <XAxis dataKey="name" tick={{ fill: "rgba(0,0,0,0.4)", fontSize: 12 }} axisLine={{ stroke: "rgba(0,0,0,0.06)" }} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(0,0,0,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <RechartsTooltip
                    contentStyle={{ backgroundColor: "#FFF", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "12px", fontSize: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    formatter={(value, name) => name === "enrollments" ? [String(value), "Enrollments (6mo)"] : [String(value), String(name)]}
                  />
                  <Bar dataKey="enrollments" radius={[8, 8, 0, 0]}>
                    {barData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-2.5 mt-6">
              <div className="w-8 h-px bg-cps-red/40" />
              <span className="text-[10px] text-foreground/25">Target: 70 enrollments per intake</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
