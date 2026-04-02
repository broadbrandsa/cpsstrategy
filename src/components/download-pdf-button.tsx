"use client";

import { useState } from "react";
import { Download, Check, Loader2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Page name map — maps pathname to a clean filename                  */
/* ------------------------------------------------------------------ */

const PAGE_NAMES: Record<string, string> = {
  "/": "CPS Strategy — Overview",
  "/strategy": "CPS Strategy — Strategy & Market",
  "/audience": "CPS Strategy — Audience",
  "/programmes": "CPS Strategy — Programme & Brand",
  "/paid-media": "CPS Strategy — Paid Media",
  "/content-creative": "CPS Strategy — Content & Creative",
  "/conversion": "CPS Strategy — Conversion & Ops",
  "/b2b": "CPS Strategy — B2B Strategy",
  "/alumni": "CPS Strategy — Alumni & Community",
};

export function DownloadPdfButton({
  pathname,
  variant = "sidebar",
}: {
  pathname: string;
  variant?: "sidebar" | "mobile";
}) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleDownload = () => {
    setState("loading");

    /* Set the document title so the PDF filename is meaningful */
    const originalTitle = document.title;
    document.title = PAGE_NAMES[pathname] || "CPS Strategy";

    /* Small delay to let the browser register the title change */
    requestAnimationFrame(() => {
      window.print();

      /* Restore title after print dialog */
      document.title = originalTitle;
      setState("done");

      setTimeout(() => setState("idle"), 2000);
    });
  };

  const Icon =
    state === "loading" ? Loader2 : state === "done" ? Check : Download;
  const label =
    state === "loading"
      ? "Preparing…"
      : state === "done"
        ? "Ready"
        : "Download PDF";

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={handleDownload}
        disabled={state === "loading"}
        aria-label="Download this page as PDF"
        className="rounded-md p-1.5 text-foreground/60 hover:bg-black/[0.04] transition-colors"
      >
        <Download size={20} strokeWidth={1.8} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={state === "loading"}
      className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-[12px] font-medium transition-colors ${
        state === "done"
          ? "bg-emerald-50 text-emerald-600"
          : "text-foreground/40 hover:bg-cps-purple/[0.04] hover:text-cps-purple"
      }`}
    >
      <Icon
        size={15}
        strokeWidth={1.8}
        className={state === "loading" ? "animate-spin" : ""}
      />
      {label}
    </button>
  );
}
