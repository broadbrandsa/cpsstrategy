"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MESSAGING_HCIB, MESSAGING_ACL6, AD_COPY_ANGLES } from "@/content/strategy-data";


function MessagingTable({
  data,
  color,
}: {
  data: typeof MESSAGING_HCIB;
  color: string;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[500px] card-elevated !rounded-2xl overflow-hidden">
        <div
          className="grid grid-cols-[160px_1fr] gap-4 px-6 py-4"
          style={{
            backgroundColor: `${color}08`,
            borderBottom: `1px solid ${color}15`,
          }}
        >
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color }}>
            Layer
          </span>
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color }}>
            Message
          </span>
        </div>
        {data.map((row, i) => (
          <div
            key={row.layer}
            className={`grid grid-cols-[160px_1fr] gap-4 px-6 py-4 border-b border-black/[0.03] hover:bg-cps-grey/50 transition-colors ${
              i % 2 === 1 ? "bg-black/[0.01]" : ""
            }`}
          >
            <span className="text-sm text-foreground/50 font-medium">{row.layer}</span>
            <span className="text-sm text-foreground/70 leading-[1.6]">{row.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MessagingFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="messaging" className="relative py-28 sm:py-36 section-tinted">
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
            05 — Messaging & Copy Framework
          </span>
        </motion.div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 mb-20 p-8 sm:p-10 rounded-2xl bg-white border border-cps-purple/8 accent-bar-left pl-10"
        >
          <p className="text-[10px] font-semibold tracking-[0.2em] text-cps-purple/40 uppercase mb-4">
            Core Positioning Statement
          </p>
          <p className="text-xl sm:text-2xl text-foreground/80 italic leading-[1.6]">
            &ldquo;CPS gives you a university-level banking or leadership qualification — accredited, flexible, and trusted by South Africa&apos;s biggest banks — so you can build a career that matters.&rdquo;
          </p>
        </motion.div>

        {/* Messaging hierarchy tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-28"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
            Messaging Hierarchy
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            Lead with benefits, not features
          </p>

          <Tabs defaultValue="hcib" className="w-full">
            <TabsList className="bg-white border border-black/[0.06] p-1.5 rounded-xl mb-8 shadow-sm">
              <TabsTrigger
                value="hcib"
                className="text-xs font-semibold tracking-wider data-[state=active]:bg-cps-purple/10 data-[state=active]:text-cps-purple data-[state=active]:shadow-sm rounded-lg px-6 py-2"
              >
                HCIB — Banking Starter
              </TabsTrigger>
              <TabsTrigger
                value="acl6"
                className="text-xs font-semibold tracking-wider data-[state=active]:bg-cps-blue/10 data-[state=active]:text-cps-blue data-[state=active]:shadow-sm rounded-lg px-6 py-2"
              >
                ACL6 — Aspiring Leader
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hcib">
              <MessagingTable data={MESSAGING_HCIB} color="#6B2D8B" />
            </TabsContent>
            <TabsContent value="acl6">
              <MessagingTable data={MESSAGING_ACL6} color="#00A8E1" />
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Ad Copy Angles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
            Ad Copy Angles
          </h3>
          <p className="text-sm text-foreground/35 mb-8">
            Four angles to test across Google and Meta
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {AD_COPY_ANGLES.map((angle, i) => (
              <motion.div
                key={angle.angle}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                className="card-elevated !p-0 overflow-hidden"
              >
                <div className="h-1 w-full" style={{ backgroundColor: `${angle.color}40` }} />
                <div className="p-6">
                  <div
                    className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ color: angle.color }}
                  >
                    Angle {i + 1}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {angle.angle}
                  </h4>
                  <p className="text-[10px] text-foreground/30 mb-4">{angle.psychology}</p>
                  <p className="text-sm text-foreground/55 italic leading-[1.7]">
                    &ldquo;{angle.copy}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
