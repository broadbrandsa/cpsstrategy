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

/* ------------------------------------------------------------------ */
/*  Generate PDF from the current page using html2canvas + jsPDF       */
/* ------------------------------------------------------------------ */

async function generatePdf(filename: string) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  /* Target the <main> element which holds all page content */
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

  /* Temporarily hide the sidebar and any print-hide elements */
  const sidebar = document.querySelector("aside");
  const mobileBar = document.querySelector("[class*='fixed inset-x-0 top-0']");
  const printHides = document.querySelectorAll("[data-print-hide]");

  if (sidebar) (sidebar as HTMLElement).style.display = "none";
  if (mobileBar) (mobileBar as HTMLElement).style.display = "none";
  printHides.forEach((el) => ((el as HTMLElement).style.display = "none"));

  /* Remove sidebar margin and top padding temporarily */
  const origMargin = (mainEl as HTMLElement).style.marginLeft;
  const origPadding = (mainEl as HTMLElement).style.paddingTop;
  (mainEl as HTMLElement).style.marginLeft = "0";
  (mainEl as HTMLElement).style.paddingTop = "0";

  /* Force all animations to their final state */
  const allMotion = mainEl.querySelectorAll("[style*='opacity']");
  const origStyles: { el: HTMLElement; style: string }[] = [];
  allMotion.forEach((el) => {
    const htmlEl = el as HTMLElement;
    origStyles.push({ el: htmlEl, style: htmlEl.style.cssText });
    htmlEl.style.opacity = "1";
    htmlEl.style.transform = "none";
  });

  try {
    const canvas = await html2canvas(mainEl as HTMLElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: mainEl.scrollWidth,
      height: mainEl.scrollHeight,
      windowWidth: 1200,
    });

    /* A4 dimensions in mm */
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 8;
    const contentWidth = pageWidth - margin * 2;
    const contentHeight = pageHeight - margin * 2;

    /* Calculate how the canvas maps onto pages */
    const imgWidth = contentWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const totalPages = Math.ceil(imgHeight / contentHeight);

    const pdf = new jsPDF("p", "mm", "a4");

    for (let page = 0; page < totalPages; page++) {
      if (page > 0) pdf.addPage();

      /* Calculate the slice of the canvas for this page */
      const sourceY = (page * contentHeight * canvas.width) / imgWidth;
      const sourceHeight = (contentHeight * canvas.width) / imgWidth;

      /* Create a temporary canvas for this page slice */
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = Math.min(sourceHeight, canvas.height - sourceY);

      const ctx = pageCanvas.getContext("2d");
      if (!ctx) continue;

      ctx.drawImage(
        canvas,
        0,
        sourceY,
        canvas.width,
        pageCanvas.height,
        0,
        0,
        canvas.width,
        pageCanvas.height
      );

      const pageImgHeight = (pageCanvas.height * imgWidth) / canvas.width;
      const pageData = pageCanvas.toDataURL("image/jpeg", 0.92);

      pdf.addImage(pageData, "JPEG", margin, margin, imgWidth, pageImgHeight);
    }

    pdf.save(`${filename}.pdf`);
  } finally {
    /* Restore everything */
    if (sidebar) (sidebar as HTMLElement).style.display = "";
    if (mobileBar) (mobileBar as HTMLElement).style.display = "";
    printHides.forEach((el) => ((el as HTMLElement).style.display = ""));
    (mainEl as HTMLElement).style.marginLeft = origMargin;
    (mainEl as HTMLElement).style.paddingTop = origPadding;
    origStyles.forEach(({ el, style }) => (el.style.cssText = style));
  }
}

/* ------------------------------------------------------------------ */
/*  Button component                                                   */
/* ------------------------------------------------------------------ */

export function DownloadPdfButton({
  pathname,
  variant = "sidebar",
}: {
  pathname: string;
  variant?: "sidebar" | "mobile";
}) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleDownload = async () => {
    setState("loading");

    try {
      const filename = PAGE_NAMES[pathname] || "CPS Strategy";
      await generatePdf(filename);
      setState("done");
    } catch (err) {
      console.error("PDF generation failed:", err);
      setState("idle");
    }

    setTimeout(() => setState("idle"), 2500);
  };

  const Icon =
    state === "loading" ? Loader2 : state === "done" ? Check : Download;
  const label =
    state === "loading"
      ? "Generating…"
      : state === "done"
        ? "Downloaded"
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
        {state === "loading" ? (
          <Loader2 size={20} strokeWidth={1.8} className="animate-spin" />
        ) : (
          <Download size={20} strokeWidth={1.8} />
        )}
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
          : state === "loading"
            ? "text-cps-purple bg-cps-purple/[0.04]"
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
