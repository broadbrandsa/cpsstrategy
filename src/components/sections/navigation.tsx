"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Analysis", href: "#situation" },
  { label: "Audience", href: "#audience" },
  { label: "Conversion", href: "#conversion" },
  { label: "Messaging", href: "#messaging" },
  { label: "Media", href: "#media" },
  { label: "CPA Model", href: "#cpa" },
  { label: "Launch", href: "#launch" },
  { label: "KPIs", href: "#kpis" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-black/[0.04] shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logos/cps-logo.avif"
              alt="CPS"
              width={34}
              height={34}
              className="rounded-md"
            />
            <div className="w-px h-5 bg-black/8 hidden sm:block" />
            <Image
              src="/logos/Broadbrand.png"
              alt="Broadbrand"
              width={100}
              height={26}
              className="hidden sm:block object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[11px] font-medium tracking-wide rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-cps-purple bg-cps-purple/[0.06]"
                      : "text-foreground/40 hover:text-foreground/70 hover:bg-black/[0.02]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cps-purple rounded-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Download PDF + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/CPS B2C Digital Marketing Strategy.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-white text-[11px] font-semibold hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download PDF
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-black/[0.03] transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-foreground/60 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-foreground/60 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-foreground/60 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-black/[0.04]"
          >
            <div className="px-4 py-4 flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm text-foreground/60 hover:text-foreground hover:bg-cps-purple/[0.04] rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/CPS B2C Digital Marketing Strategy.pdf"
                download
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-foreground text-white text-xs font-semibold"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
                Download PDF
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
