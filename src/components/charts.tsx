"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";

/* ------------------------------------------------------------------ */
/*  Shared styles / config                                              */
/* ------------------------------------------------------------------ */

const CHART_COLORS = {
  purple: "#6B2D8B",
  blue: "#00A8E1",
  green: "#10B981",
  gold: "#FFD100",
  red: "#EF4444",
  grey: "#94A3B8",
};

const tooltipStyle = {
  backgroundColor: "rgba(255,255,255,0.97)",
  border: "1px solid rgba(0,0,0,0.06)",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  padding: "12px 16px",
  fontSize: "12px",
  lineHeight: "1.6",
};

/* ------------------------------------------------------------------ */
/*  1 — CPC Benchmark Comparison (Strategy / Benchmarks)                */
/* ------------------------------------------------------------------ */

const CPC_DATA = [
  { metric: "Google CPC", global: 115, sa: 20, cps: 16 },
  { metric: "Meta CPC", global: 19, sa: 12, cps: 6.5 },
  { metric: "Google CPL", global: 1665, sa: 1000, cps: 100 },
];

export function BenchmarkCPCChart() {
  return (
    <div className="card-elevated !p-6 sm:!p-8 mb-14">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Cost Comparison — CPC (Rands)
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        Global vs South Africa vs CPS targets
      </p>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              { name: "Google CPC", Global: 115, "SA Avg": 20, "CPS Target": 16 },
              { name: "Meta CPC", Global: 19, "SA Avg": 12, "CPS Target": 6.5 },
            ]}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `R${v}`}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`R${value}`, undefined]}
            />
            <Bar dataKey="Global" fill={CHART_COLORS.grey} radius={[4, 4, 0, 0]} />
            <Bar dataKey="SA Avg" fill={CHART_COLORS.blue} radius={[4, 4, 0, 0]} />
            <Bar dataKey="CPS Target" fill={CHART_COLORS.green} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {[
          { label: "Global", color: CHART_COLORS.grey },
          { label: "SA Average", color: CHART_COLORS.blue },
          { label: "CPS Target", color: CHART_COLORS.green },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-foreground/50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  2 — CPL Benchmark Comparison                                        */
/* ------------------------------------------------------------------ */

export function BenchmarkCPLChart() {
  return (
    <div className="card-elevated !p-6 sm:!p-8 mb-14">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Cost Per Lead Comparison (Rands)
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        Global CPL vs CPS target — 94% below global benchmark
      </p>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              { name: "Google CPL", Global: 1665, "SA Range": 1000, "CPS Target": 100 },
              { name: "Meta CPL", Global: 357, "SA Range": 200, "CPS Target": 100 },
            ]}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `R${v.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`R${Number(value).toLocaleString()}`, undefined]}
            />
            <Bar dataKey="Global" fill={CHART_COLORS.grey} radius={[4, 4, 0, 0]} />
            <Bar dataKey="SA Range" fill={CHART_COLORS.blue} radius={[4, 4, 0, 0]} />
            <Bar dataKey="CPS Target" fill={CHART_COLORS.green} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {[
          { label: "Global", color: CHART_COLORS.grey },
          { label: "SA Range", color: CHART_COLORS.blue },
          { label: "CPS Target", color: CHART_COLORS.green },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-foreground/50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3 — Cost Per Enrolled Student Comparison                            */
/* ------------------------------------------------------------------ */

export function EnrolledStudentCostChart() {
  const data = [
    { name: "Global Avg", value: 52700, color: CHART_COLORS.grey },
    { name: "CPS 6mo", value: 1286, color: CHART_COLORS.purple },
    { name: "CPS 3mo", value: 643, color: CHART_COLORS.blue },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8 mb-14">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Cost Per Enrolled Student — CPS vs Global
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        CPS efficiency targets are substantially below the global median of R52,700
      </p>
      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `R${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`R${Number(value).toLocaleString()}`, "CPA"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  4 — Budget Allocation Donut                                         */
/* ------------------------------------------------------------------ */

export function BudgetAllocationDonut() {
  const data = [
    { name: "Google Search", value: 7500, color: CHART_COLORS.blue },
    { name: "Meta (FB + IG)", value: 7500, color: CHART_COLORS.purple },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Monthly Budget Allocation
      </h4>
      <p className="text-xs text-foreground/35 mb-4">R15,000/month split across channels</p>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`R${Number(value).toLocaleString()}`, undefined]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Center label (overlaid) */}
      <div className="flex flex-wrap gap-4 justify-center -mt-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-foreground/50">
              <span className="font-semibold" style={{ color: item.color }}>50%</span>{" "}
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  5 — Budget Scaling Line Chart                                       */
/* ------------------------------------------------------------------ */

export function BudgetScalingChart() {
  const data = [
    { budget: "R15k", monthly: 18, sixMonth: 110 },
    { budget: "R25k", monthly: 31, sixMonth: 184 },
    { budget: "R40k", monthly: 49, sixMonth: 294 },
    { budget: "R60k", monthly: 73, sixMonth: 441 },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8 mb-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Enrollment Projections by Budget Level
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        Monthly enrollments and 6-month cumulative projection
      </p>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="gradPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CHART_COLORS.purple} stopOpacity={0.15} />
                <stop offset="95%" stopColor={CHART_COLORS.purple} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CHART_COLORS.green} stopOpacity={0.15} />
                <stop offset="95%" stopColor={CHART_COLORS.green} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="budget"
              tick={{ fontSize: 12, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Area
              type="monotone"
              dataKey="sixMonth"
              name="6-Month Total"
              stroke={CHART_COLORS.purple}
              strokeWidth={2.5}
              fill="url(#gradPurple)"
              dot={{ r: 5, fill: CHART_COLORS.purple, strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="monthly"
              name="Monthly Enrollments"
              stroke={CHART_COLORS.green}
              strokeWidth={2.5}
              fill="url(#gradGreen)"
              dot={{ r: 5, fill: CHART_COLORS.green, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-5 mt-4 justify-center">
        {[
          { label: "6-Month Total", color: CHART_COLORS.purple },
          { label: "Monthly Enrollments", color: CHART_COLORS.green },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-foreground/50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  6 — Content Split Donut                                             */
/* ------------------------------------------------------------------ */

export function ContentSplitDonut() {
  const data = [
    { name: "Student stories", value: 40, color: CHART_COLORS.purple },
    { name: "Educational", value: 30, color: CHART_COLORS.blue },
    { name: "Promotional", value: 20, color: CHART_COLORS.green },
    { name: "Industry insight", value: 10, color: CHART_COLORS.gold },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="h-[200px] w-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`${value}%`, undefined]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  7 — Lead Scoring Horizontal Bars                                    */
/* ------------------------------------------------------------------ */

export function LeadScoringChart() {
  const data = [
    { action: "Application started", points: 30 },
    { action: "WhatsApp reply", points: 20 },
    { action: "Pricing page visit", points: 15 },
    { action: "Info pack download", points: 10 },
    { action: "LP revisit", points: 8 },
    { action: "Email click", points: 5 },
    { action: "Email open", points: 2 },
  ];

  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          barCategoryGap="18%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `+${v}`}
          />
          <YAxis
            type="category"
            dataKey="action"
            tick={{ fontSize: 11, fill: "rgba(0,0,0,0.5)" }}
            axisLine={false}
            tickLine={false}
            width={120}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [`+${value} pts`, "Score"]}
          />
          <Bar dataKey="points" radius={[0, 6, 6, 0]}>
            {data.map((entry, i) => (
              <Cell
                key={`cell-${i}`}
                fill={
                  entry.points >= 20
                    ? CHART_COLORS.purple
                    : entry.points >= 10
                    ? CHART_COLORS.blue
                    : CHART_COLORS.grey
                }
                fillOpacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  8 — Attribution Model Donut                                         */
/* ------------------------------------------------------------------ */

export function AttributionDonut() {
  const data = [
    { name: "First Touch", value: 30, color: CHART_COLORS.purple },
    { name: "Lead Conversion", value: 40, color: CHART_COLORS.blue },
    { name: "Last Touch", value: 30, color: CHART_COLORS.green },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Multi-Touch Attribution Weighting
      </h4>
      <p className="text-xs text-foreground/35 mb-4">
        How credit is distributed across the student journey
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="h-[200px] w-[200px] flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value) => [`${value}%`, undefined]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-3 w-full">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground/70">{item.name}</span>
                  <span className="text-sm font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
                <div className="h-2 bg-black/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  9 — CPA Scenario Comparison                                         */
/* ------------------------------------------------------------------ */

export function CPAScenarioChart() {
  const data = [
    {
      name: "Conservative",
      "Monthly Enrollments": 5,
      "6-Month Total": 32,
      CPA: 2857,
    },
    {
      name: "Target",
      "Monthly Enrollments": 18,
      "6-Month Total": 110,
      CPA: 816,
    },
    {
      name: "Optimistic",
      "Monthly Enrollments": 43,
      "6-Month Total": 255,
      CPA: 353,
    },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        CPA Scenario Comparison
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        Monthly enrollments and 6-month projection across three scenarios
      </p>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar
              dataKey="Monthly Enrollments"
              fill={CHART_COLORS.green}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="6-Month Total"
              fill={CHART_COLORS.purple}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-5 mt-4 justify-center">
        {[
          { label: "Monthly Enrollments", color: CHART_COLORS.green },
          { label: "6-Month Total", color: CHART_COLORS.purple },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-foreground/50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  10 — ROI Waterfall                                                  */
/* ------------------------------------------------------------------ */

export function ROIComparisonChart() {
  const data = [
    { name: "Media Spend\n(6 months)", value: 90000, color: CHART_COLORS.red },
    { name: "Acquisition Cost\n(6mo scenario)", value: 90000, color: CHART_COLORS.blue },
    { name: "Tuition Revenue\n(70 students)", value: 2170560, color: CHART_COLORS.green },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Investment vs Return
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        R90k investment (6-month scenario) → R2.17M tuition revenue
      </p>
      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) =>
                v >= 1000000
                  ? `R${(v / 1000000).toFixed(1)}M`
                  : `R${(v / 1000).toFixed(0)}k`
              }
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`R${Number(value).toLocaleString()}`, undefined]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  11 — Funnel Visualization                                           */
/* ------------------------------------------------------------------ */

export function FunnelVisualization() {
  const stages = [
    { stage: "Awareness", width: 100, color: CHART_COLORS.blue, desc: "Paid ad / organic content" },
    { stage: "Interest", width: 85, color: CHART_COLORS.purple, desc: "Landing page with dual CTA" },
    { stage: "Consideration", width: 65, color: CHART_COLORS.gold, desc: "Info pack / career quiz" },
    { stage: "Nurture", width: 45, color: "#F59E0B", desc: "Email + WhatsApp (7-14 days)" },
    { stage: "Application", width: 28, color: CHART_COLORS.green, desc: "Simplified 3-step form" },
    { stage: "Enrollment", width: 15, color: "#059669", desc: "Admissions + payment" },
  ];

  return (
    <div className="space-y-2">
      {stages.map((s, i) => (
        <div key={s.stage} className="flex items-center gap-4">
          <div className="w-[100px] sm:w-[120px] text-right flex-shrink-0">
            <span className="text-xs font-semibold text-foreground/60">{s.stage}</span>
          </div>
          <div className="flex-1 relative">
            <div
              className="h-10 rounded-lg flex items-center px-4 transition-all duration-700"
              style={{
                width: `${s.width}%`,
                backgroundColor: s.color,
                opacity: 0.8,
              }}
            >
              <span className="text-[11px] font-medium text-white truncate">
                {s.desc}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  12 — SEO Keyword Opportunity Chart                                  */
/* ------------------------------------------------------------------ */

export function SEOKeywordChart() {
  const data = [
    { keyword: "NQF Level 5", volume: 2000, difficulty: 25 },
    { keyword: "Career in banking", volume: 1000, difficulty: 50 },
    { keyword: "HCIB", volume: 650, difficulty: 50 },
    { keyword: "Banking qual cost", volume: 550, difficulty: 25 },
    { keyword: "Leadership qual SA", volume: 400, difficulty: 50 },
    { keyword: "HCIB vs BCOM", volume: 300, difficulty: 25 },
    { keyword: "CPS Accredited", volume: 150, difficulty: 25 },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        SEO Keyword Opportunities
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        Monthly search volume — larger bars = higher opportunity
      </p>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
            barCategoryGap="16%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => v.toLocaleString()}
            />
            <YAxis
              type="category"
              dataKey="keyword"
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.5)" }}
              axisLine={false}
              tickLine={false}
              width={120}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [Number(value).toLocaleString(), "Monthly searches"]}
            />
            <Bar dataKey="volume" radius={[0, 6, 6, 0]}>
              {data.map((entry, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={entry.difficulty <= 25 ? CHART_COLORS.green : CHART_COLORS.blue}
                  fillOpacity={0.75}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-4 mt-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: CHART_COLORS.green, opacity: 0.75 }} />
          <span className="text-xs text-foreground/50">Low difficulty (quick win)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: CHART_COLORS.blue, opacity: 0.75 }} />
          <span className="text-xs text-foreground/50">Medium difficulty</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  13 — LTV vs CPA Comparison                                          */
/* ------------------------------------------------------------------ */

export function LTVvsCPAChart() {
  const data = [
    { name: "HCIB LTV", value: 29760, color: CHART_COLORS.purple },
    { name: "ACL6 LTV", value: 32256, color: CHART_COLORS.blue },
    { name: "CPA (6mo)", value: 1286, color: CHART_COLORS.green },
    { name: "CPA (3mo)", value: 643, color: CHART_COLORS.gold },
  ];

  return (
    <div className="card-elevated !p-6 sm:!p-8">
      <h4 className="text-sm font-bold text-foreground/70 mb-1">
        Student Lifetime Value vs Acquisition Cost
      </h4>
      <p className="text-xs text-foreground/35 mb-6">
        Tuition revenue per student significantly exceeds acquisition cost under both scenarios
      </p>
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "rgba(0,0,0,0.45)" }}
              axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "rgba(0,0,0,0.35)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) =>
                v >= 1000 ? `R${(v / 1000).toFixed(0)}k` : `R${v}`
              }
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`R${Number(value).toLocaleString()}`, undefined]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
