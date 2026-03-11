"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Globe,
  BookOpen,
  Megaphone,
  Palette,
  ArrowRightLeft,
} from "lucide-react";

const PAGES = [
  {
    title: "Strategy & Market",
    href: "/strategy",
    color: "#6B2D8B",
    icon: Globe,
    description:
      "Audience personas, competitive landscape, benchmarks, B2B-B2C flywheel",
  },
  {
    title: "Programme & Brand",
    href: "/programmes",
    color: "#00A8E1",
    icon: BookOpen,
    description:
      "Course portfolio, CPSLearn platform, brand voice, compliance",
  },
  {
    title: "Paid Media",
    href: "/paid-media",
    color: "#10B981",
    icon: Megaphone,
    description:
      "CPA calculator, Google & Meta campaigns, budget scaling, A/B testing",
  },
  {
    title: "Content & Creative",
    href: "/content-creative",
    color: "#F59E0B",
    icon: Palette,
    description:
      "Positioning, copy frameworks, ad copy, SEO plan, editorial calendar",
  },
  {
    title: "Conversion & Ops",
    href: "/conversion",
    color: "#EF4444",
    icon: ArrowRightLeft,
    description:
      "Funnel, email nurture, WhatsApp, lead scoring, launch plan, KPIs",
  },
];

export default function QuickLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-[2px] bg-cps-blue rounded-full" />
          <span className="section-label text-cps-blue">Quick Links</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAGES.map((page, i) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            >
              <Link href={page.href} className="block h-full">
                <div className="card-elevated !p-0 overflow-hidden h-full group hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
                  {/* Accent bar */}
                  <div
                    className="h-[3px] w-full"
                    style={{ backgroundColor: page.color }}
                  />
                  <div className="p-6">
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${page.color}0A`,
                        border: `1px solid ${page.color}15`,
                      }}
                    >
                      <page.icon
                        size={18}
                        style={{ color: page.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {page.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-foreground/40 leading-[1.6] mb-4">
                      {page.description}
                    </p>

                    {/* Link text */}
                    <span
                      className="text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-block"
                      style={{ color: page.color }}
                    >
                      Open &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
