"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MESSAGING_HCIB, MESSAGING_ACL6 } from "@/content/strategy-data";

const AD_ANGLES = [
  {
    angle: "Career Transformation",
    psychology: "Loss Aversion + Contrast",
    color: "#7C3AED",
  },
  {
    angle: "Social Proof + Authority",
    psychology: "Bandwagon + Authority Bias",
    color: "#2EA3F2",
  },
  {
    angle: "Present Bias + Simplicity",
    psychology: "Present Bias + Goal-Gradient",
    color: "#10B981",
  },
  {
    angle: "Aspiration + Specificity",
    psychology: "Identity + Contrast",
    color: "#F59E0B",
  },
];

function MessagingTable({
  data,
  color,
}: {
  data: typeof MESSAGING_HCIB;
  color: string;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[500px]">
        <div
          className="grid grid-cols-[160px_1fr] gap-4 px-5 py-3 rounded-t-xl"
          style={{
            backgroundColor: `${color}15`,
            border: `1px solid ${color}30`,
          }}
        >
          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color }}>
            Layer
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color }}>
            Message
          </span>
        </div>
        {data.map((row, i) => (
          <div
            key={row.layer}
            className={`grid grid-cols-[160px_1fr] gap-4 px-5 py-3.5 border-x border-b border-white/[0.06] ${
              i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
            } ${i === data.length - 1 ? "rounded-b-xl" : ""}`}
          >
            <span className="text-sm text-white/60 font-medium">{row.layer}</span>
            <span className="text-sm text-white/80">{row.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MessagingFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeAngle, setActiveAngle] = useState(0);

  return (
    <section id="messaging" className="relative py-24 sm:py-32">
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
            05 — Messaging & Copy Framework
          </span>
        </motion.div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-cps-purple/5 to-cps-blue/5 border border-white/[0.06]"
        >
          <p className="text-[10px] tracking-[0.3em] text-cps-purple/60 uppercase mb-4">
            Core Positioning Statement
          </p>
          <p className="font-display text-xl sm:text-2xl text-white/90 italic leading-relaxed">
            &ldquo;CPS gives you a university-level banking or leadership qualification — accredited, flexible, and trusted by South Africa&apos;s biggest banks — so you can build a career that matters.&rdquo;
          </p>
        </motion.div>

        {/* Messaging hierarchy tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Messaging Hierarchy
          </h3>
          <p className="text-sm text-white/40 mb-8">
            Lead with benefits, not features
          </p>

          <Tabs defaultValue="hcib" className="w-full">
            <TabsList className="bg-white/[0.04] border border-white/[0.08] p-1 rounded-lg mb-6">
              <TabsTrigger
                value="hcib"
                className="text-xs font-medium tracking-wider data-[state=active]:bg-cps-purple/20 data-[state=active]:text-cps-purple-light rounded-md px-6"
              >
                HCIB — Banking Starter
              </TabsTrigger>
              <TabsTrigger
                value="acl6"
                className="text-xs font-medium tracking-wider data-[state=active]:bg-cps-blue/20 data-[state=active]:text-cps-blue-light rounded-md px-6"
              >
                ACL6 — Aspiring Leader
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hcib">
              <MessagingTable data={MESSAGING_HCIB} color="#7C3AED" />
            </TabsContent>
            <TabsContent value="acl6">
              <MessagingTable data={MESSAGING_ACL6} color="#2EA3F2" />
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Ad Copy Angles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Ad Copy Angles
          </h3>
          <p className="text-sm text-white/40 mb-8">
            Four angles to test across Google and Meta
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AD_ANGLES.map((angle, i) => (
              <motion.button
                key={angle.angle}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                onClick={() => setActiveAngle(i)}
                className={`relative p-5 rounded-xl text-left transition-all duration-400 ${
                  activeAngle === i
                    ? "bg-white/[0.06] border-2"
                    : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]"
                }`}
                style={{
                  borderColor: activeAngle === i ? `${angle.color}40` : undefined,
                }}
              >
                <div
                  className="text-xs font-bold tracking-wider uppercase mb-2"
                  style={{ color: angle.color }}
                >
                  Angle {i + 1}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {angle.angle}
                </h4>
                <p className="text-xs text-white/40">{angle.psychology}</p>
                {activeAngle === i && (
                  <motion.div
                    layoutId="active-angle"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                    style={{ backgroundColor: angle.color }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
