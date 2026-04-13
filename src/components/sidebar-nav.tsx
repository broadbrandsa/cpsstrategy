"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  Target,
  Users,
  BookOpen,
  BarChart3,
  Pen,
  GitBranch,
  RefreshCw,
  Briefcase,
  LineChart,
  Package,
  FileText,
  Megaphone,
  TrendingUp,
  Menu,
  X,
  EyeOff,
  FileDown,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation structure                                               */
/* ------------------------------------------------------------------ */

const groups = [
  {
    label: "HOME",
    accent: null,
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    label: "B2C · STUDENT ACQUISITION",
    accent: "#6B2D8B",
    items: [
      { name: "Overview", href: "/b2c", icon: LayoutDashboard },
      { name: "Strategy & Market", href: "/b2c/strategy", icon: Target },
      { name: "Audience", href: "/b2c/audience", icon: Users },
      { name: "Programme & Brand", href: "/b2c/programmes", icon: BookOpen },
      { name: "Paid Media", href: "/b2c/paid-media", icon: BarChart3 },
      { name: "Content & Messaging", href: "/b2c/content", icon: Pen },
      { name: "Conversion & Nurture", href: "/b2c/conversion", icon: GitBranch },
      { name: "Alumni / Community", href: "/b2c/alumni", icon: RefreshCw },
    ],
  },
  {
    label: "B2B · CORPORATE PARTNERSHIPS",
    accent: "#00A8E1",
    items: [
      { name: "Overview", href: "/b2b", icon: Briefcase },
      { name: "Strategy & Market", href: "/b2b/strategy", icon: LineChart },
      { name: "Product Portfolio", href: "/b2b/products", icon: Package },
      { name: "Sales Enablement", href: "/b2b/sales", icon: FileText },
      { name: "Content & Thought Leadership", href: "/b2b/content", icon: Megaphone },
      { name: "Account Growth & Ops", href: "/b2b/growth", icon: TrendingUp },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helper: check active state                                         */
/* ------------------------------------------------------------------ */

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  /* Exact match for overview pages, prefix for sub-pages */
  if (href === "/b2c" || href === "/b2b") return pathname === href;
  return pathname.startsWith(href);
}

/* ------------------------------------------------------------------ */
/*  Get accent color based on current route                            */
/* ------------------------------------------------------------------ */

function getRouteAccent(pathname: string): string {
  if (pathname.startsWith("/b2b")) return "#00A8E1";
  if (pathname.startsWith("/b2c")) return "#6B2D8B";
  return "#6B2D8B";
}

/* ------------------------------------------------------------------ */
/*  Shared sidebar content (reused in desktop & mobile)                */
/* ------------------------------------------------------------------ */

function SidebarContent({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  const accent = getRouteAccent(pathname);

  /* Auto-expand groups that contain the active route */
  const getDefaultExpanded = () => {
    const expanded: Record<string, boolean> = {};
    groups.forEach((group) => {
      if (!group.accent) return; // HOME group is always shown
      const hasActiveChild = group.items.some((item) => isActive(pathname, item.href));
      expanded[group.label] = hasActiveChild;
    });
    return expanded;
  };

  const [expanded, setExpanded] = useState<Record<string, boolean>>(getDefaultExpanded);

  const toggleGroup = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className="flex h-full flex-col">
      {/* ---- Logo section ---- */}
      <div className="flex items-center gap-3 px-5 pb-4 pt-6">
        <Image
          src="/logos/cps-logo.avif"
          alt="CPS Logo"
          width={36}
          height={36}
          className="rounded-md"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold text-foreground/80">CPS Strategy</span>
          <span className="text-[10px] font-medium text-foreground/40">by Broadbrand</span>
        </div>
      </div>

      <div className="mx-5 mb-4 border-b border-black/[0.06]" />

      {/* ---- Nav groups ---- */}
      <nav className="flex-1 space-y-5 overflow-y-auto px-3 pb-4">
        {groups.map((group) => {
          const groupAccent = group.accent;
          const isCollapsible = !!group.accent; // B2C and B2B groups are collapsible
          const isExpanded = isCollapsible ? expanded[group.label] ?? false : true;

          return (
            <div key={group.label}>
              {isCollapsible ? (
                <button
                  type="button"
                  onClick={() => toggleGroup(group.label)}
                  className="mb-1.5 flex w-full items-center justify-between px-2 text-left"
                >
                  <span
                    className="text-[9px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: groupAccent || "rgba(0,0,0,0.25)" }}
                  >
                    {group.label}
                  </span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 0 : -90 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={12}
                      style={{ color: groupAccent || "rgba(0,0,0,0.25)" }}
                    />
                  </motion.span>
                </button>
              ) : (
                <p
                  className="mb-1.5 px-2 text-[9px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: groupAccent || "rgba(0,0,0,0.25)" }}
                >
                  {group.label}
                </p>
              )}

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="space-y-0.5 overflow-hidden"
                  >
                    {group.items.map((item) => {
                      const active = isActive(pathname, item.href);
                      const Icon = item.icon;
                      const itemAccent = groupAccent || accent;

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onNavigate}
                            className={`relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                              active
                                ? "text-foreground/90"
                                : "text-foreground/50 hover:bg-black/[0.02] hover:text-foreground/70"
                            }`}
                            style={active ? { backgroundColor: `${itemAccent}0A` } : undefined}
                          >
                            {/* Active accent bar */}
                            {active && (
                              <span
                                className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full"
                                style={{ backgroundColor: itemAccent }}
                              />
                            )}

                            <Icon
                              size={17}
                              strokeWidth={active ? 2.2 : 1.8}
                              style={active ? { color: itemAccent } : undefined}
                            />
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* ---- Footer ---- */}
      <div className="px-5 pb-5 pt-4" data-print-hide>
        <div className="mb-3 border-t border-black/[0.06]" />

        <a
          href="/CPS-Digital-Marketing-Strategy.pdf"
          download="CPS-Digital-Marketing-Strategy.pdf"
          className="mb-1 flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-[12px] font-medium text-foreground/40 transition-colors hover:bg-cps-purple/[0.04] hover:text-cps-purple"
        >
          <FileDown size={15} strokeWidth={1.8} />
          Download Strategy PDF
        </a>

        <button
          type="button"
          onClick={() => {
            try { localStorage.removeItem("cps_strategy_v1_unlocked"); } catch {}
            window.location.reload();
          }}
          className="mb-3 flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-[12px] font-medium text-foreground/40 transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <EyeOff size={15} strokeWidth={1.8} />
          Hide Proposal
        </button>

        <div className="flex items-center gap-2">
          <Image
            src="/logos/Broadbrand.png"
            alt="Broadbrand"
            width={18}
            height={18}
            className="opacity-40"
          />
          <p className="text-[9px] leading-tight text-foreground/25">
            Prepared by Broadbrand&nbsp;&middot;&nbsp;Confidential&nbsp;&middot;&nbsp;March 2026
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function SidebarNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ============================================================ */}
      {/*  Desktop sidebar (hidden below md)                            */}
      {/* ============================================================ */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-black/[0.06] bg-white md:block">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ============================================================ */}
      {/*  Mobile top bar + slide-over (visible below md)               */}
      {/* ============================================================ */}
      <div className="fixed inset-x-0 top-0 z-50 flex h-14 items-center border-b border-black/[0.06] bg-white px-4 md:hidden">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
          className="rounded-md p-1.5 text-foreground/60 hover:bg-black/[0.04]"
        >
          <Menu size={22} />
        </button>

        <div className="ml-3 flex flex-1 items-center gap-2">
          <Image src="/logos/cps-logo.avif" alt="CPS Logo" width={28} height={28} className="rounded-md" />
          <span className="text-[13px] font-semibold text-foreground/80">CPS Strategy</span>
        </div>

        <a
          href="/CPS-Digital-Marketing-Strategy.pdf"
          download="CPS-Digital-Marketing-Strategy.pdf"
          aria-label="Download strategy PDF"
          className="rounded-md p-1.5 text-foreground/60 hover:bg-black/[0.04] transition-colors"
        >
          <FileDown size={20} strokeWidth={1.8} />
        </a>
      </div>

      {/* ---- Mobile slide-over ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/30 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-xl md:hidden"
            >
              {/* Close button */}
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-4 rounded-md p-1.5 text-foreground/50 hover:bg-black/[0.04]"
              >
                <X size={20} />
              </button>

              <SidebarContent pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
