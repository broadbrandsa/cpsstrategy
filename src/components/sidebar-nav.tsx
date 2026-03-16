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
  Menu,
  X,
  EyeOff,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation structure                                               */
/* ------------------------------------------------------------------ */

const groups = [
  {
    label: "DASHBOARD",
    items: [
      { name: "Overview", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    label: "STRATEGY",
    items: [
      { name: "Strategy & Market", href: "/strategy", icon: Target },
      { name: "Audience", href: "/audience", icon: Users },
      { name: "Programme & Brand", href: "/programmes", icon: BookOpen },
    ],
  },
  {
    label: "EXECUTION",
    items: [
      { name: "Paid Media", href: "/paid-media", icon: BarChart3 },
      { name: "Content & Creative", href: "/content-creative", icon: Pen },
      { name: "Conversion & Ops", href: "/conversion", icon: GitBranch },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helper: check active state                                         */
/* ------------------------------------------------------------------ */

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ------------------------------------------------------------------ */
/*  Shared sidebar content (reused in desktop & mobile)                */
/* ------------------------------------------------------------------ */

function SidebarContent({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
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
      <nav className="flex-1 space-y-5 overflow-y-auto px-3">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
              {group.label}
            </p>

            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(pathname, item.href);
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={`relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                        active
                          ? "bg-cps-purple/[0.06] text-cps-purple"
                          : "text-foreground/50 hover:bg-black/[0.02] hover:text-foreground/70"
                      }`}
                    >
                      {/* Active accent bar */}
                      {active && (
                        <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-cps-purple" />
                      )}

                      <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* ---- Footer ---- */}
      <div className="px-5 pb-5 pt-4">
        <div className="mb-3 border-t border-black/[0.06]" />

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
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] border-r border-black/[0.06] bg-white md:block">
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

        <div className="ml-3 flex items-center gap-2">
          <Image src="/logos/cps-logo.avif" alt="CPS Logo" width={28} height={28} className="rounded-md" />
          <span className="text-[13px] font-semibold text-foreground/80">CPS Strategy</span>
        </div>
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
