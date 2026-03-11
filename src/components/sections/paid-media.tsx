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
    <section id="media" className="relative py-24 sm:py-32">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cps-purple" />
          <span className="text-xs font-medium tracking-[0.3em] text-cps-purple uppercase">
            07 — Paid Media Strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-16"
        >
          R15,000/month —{" "}
          <span className="text-gradient-purple">50/50 split</span> to start
        </motion.h2>

        {/* Budget allocation chart */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <h3 className="text-sm font-semibold text-white mb-6">Budget Allocation</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
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
                      backgroundColor: "#1E293B",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#F1F5F9",
                      fontSize: "12px",
                    }}
                    formatter={(value) => [`R${Number(value).toLocaleString()}`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              {BUDGET_ALLOCATION.channels.map((ch) => (
                <div key={ch.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: ch.color }}
                  />
                  <span className="text-xs text-white/60">
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
            <div className="p-5 rounded-xl bg-cps-blue/[0.05] border border-cps-blue/15">
              <h4 className="text-sm font-semibold text-cps-blue mb-2">Google Search — R7,500</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Capture high-intent searchers actively looking for banking/leadership qualifications. CPC range: R12–R20. Three campaign types: Brand Search, High-Intent Non-Brand, and Competitor Conquesting.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-cps-purple/[0.05] border border-cps-purple/15">
              <h4 className="text-sm font-semibold text-cps-purple-light mb-2">Meta (FB + IG) — R7,500</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Build awareness among target personas, drive info pack downloads, and retarget website visitors. CPC range: R5–R8. Lower cost per click drives volume, balancing Google&apos;s higher intent.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-sm text-white/50 leading-relaxed">
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
          className="mb-16"
        >
          <h3 className="font-display text-xl font-bold text-white mb-6">
            Google Ads Campaigns
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {GOOGLE_CAMPAIGNS.map((campaign, i) => (
              <motion.div
                key={campaign.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cps-blue/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-white">{campaign.name}</h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-cps-blue/10 text-cps-blue border border-cps-blue/20">
                    {campaign.status}
                  </span>
                </div>
                <p className="text-xs text-white/40 mb-3">{campaign.purpose}</p>
                <p className="text-xs text-cps-blue/70 font-medium">{campaign.budget}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {campaign.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] text-white/40 border border-white/[0.06]"
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
          <h3 className="font-display text-xl font-bold text-white mb-6">
            Meta Audience Targeting
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-[150px_1fr_100px] gap-4 px-5 py-3 rounded-t-xl bg-cps-purple/10 border border-cps-purple/20">
                <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                  Audience
                </span>
                <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                  Targeting Approach
                </span>
                <span className="text-xs font-semibold tracking-wider text-cps-purple-light uppercase">
                  Programme
                </span>
              </div>
              {META_AUDIENCES.map((row, i) => (
                <div
                  key={row.audience}
                  className={`grid grid-cols-[150px_1fr_100px] gap-4 px-5 py-3.5 border-x border-b border-white/[0.06] ${
                    i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                  } ${i === META_AUDIENCES.length - 1 ? "rounded-b-xl" : ""}`}
                >
                  <span className="text-sm text-white/70 font-medium">{row.audience}</span>
                  <span className="text-sm text-white/50">{row.targeting}</span>
                  <span className="text-sm text-cps-purple-light font-medium">{row.programme}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
