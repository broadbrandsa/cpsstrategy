"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import {
  BUDGET_ALLOCATION,
  GOOGLE_CAMPAIGNS,
  META_AUDIENCES,
} from "@/content/strategy-data";

const pieData = BUDGET_ALLOCATION.channels.map((c) => ({
  name: c.name,
  value: c.amount,
  color: c.color,
}));

export default function PaidMedia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="media" className="relative py-28 sm:py-36 section-tinted">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-cps-purple rounded-full" />
          <span className="section-label text-cps-purple">
            07 — Paid Media Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-16 tracking-tight"
        >
          R15,000/month —{" "}
          <span className="text-gradient-purple">50/50 split</span> to start
        </motion.h2>

        {/* Budget allocation chart */}
        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated !p-8"
          >
            <h3 className="text-sm font-bold text-foreground mb-6">Budget Allocation</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: "12px",
                      color: "#1a1a2e",
                      fontSize: "12px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    }}
                    formatter={(value) => [`R${Number(value).toLocaleString()}`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-6">
              {BUDGET_ALLOCATION.channels.map((ch) => (
                <div key={ch.name} className="flex items-center gap-2.5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: ch.color }}
                  />
                  <span className="text-xs text-foreground/50">
                    {ch.name} — R{ch.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Strategy rationale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="p-6 rounded-2xl bg-cps-blue/[0.04] border border-cps-blue/10">
              <h4 className="text-sm font-bold text-cps-blue mb-2">Google Search — R7,500</h4>
              <p className="text-sm text-foreground/45 leading-[1.7]">
                Capture high-intent searchers actively looking for banking/leadership qualifications. CPC range: R12–R20. Three campaign types: Brand Search, High-Intent Non-Brand, and Competitor Conquesting.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-cps-purple/[0.04] border border-cps-purple/10">
              <h4 className="text-sm font-bold text-cps-purple mb-2">Meta (FB + IG) — R7,500</h4>
              <p className="text-sm text-foreground/45 leading-[1.7]">
                Build awareness among target personas, drive info pack downloads, and retarget website visitors. CPC range: R5–R8. Lower cost per click drives volume, balancing Google&apos;s higher intent.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/[0.05] shadow-sm">
              <p className="text-sm text-foreground/45 leading-[1.7]">
                This balanced approach lets us capture high-intent search demand while simultaneously building awareness and pipeline through social. Allocation will shift based on early performance data.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Google Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Google Ads Campaigns
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {GOOGLE_CAMPAIGNS.map((campaign, i) => (
              <motion.div
                key={campaign.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="card-elevated !p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-foreground">{campaign.name}</h4>
                  <span className="tag bg-cps-blue/8 text-cps-blue border border-cps-blue/15 text-[10px]">
                    {campaign.status}
                  </span>
                </div>
                <p className="text-xs text-foreground/35 mb-3 leading-relaxed">{campaign.purpose}</p>
                <p className="text-xs text-cps-blue font-semibold">{campaign.budget}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {campaign.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-md text-[10px] bg-cps-grey text-foreground/35 border border-black/[0.04]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meta Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
            Meta Audience Targeting
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] card-elevated !rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[150px_1fr_100px] gap-4 px-6 py-4 bg-cps-purple/[0.04] border-b border-cps-purple/10">
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Audience
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Targeting Approach
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-cps-purple uppercase">
                  Programme
                </span>
              </div>
              {META_AUDIENCES.map((row, i) => (
                <div
                  key={row.audience}
                  className={`grid grid-cols-[150px_1fr_100px] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
                    i % 2 === 1 ? "bg-black/[0.01]" : ""
                  }`}
                >
                  <span className="text-sm text-foreground/60 font-medium">{row.audience}</span>
                  <span className="text-sm text-foreground/45 leading-relaxed">{row.targeting}</span>
                  <span className="text-sm text-cps-purple font-semibold">{row.programme}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
