"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CORRECT_CODE = "0222";
const STORAGE_KEY = "cps_strategy_v1_unlocked";

export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setUnlocked(saved === "true");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const handleDelete = useCallback(() => {
    setDigits((prev) => {
      const next = [...prev];
      for (let i = 3; i >= 0; i--) {
        if (next[i] !== "") {
          next[i] = "";
          break;
        }
      }
      return next;
    });
  }, []);

  const handleDigit = useCallback(
    (d: string) => {
      if (error) return;
      setDigits((prev) => {
        const next = [...prev];
        const idx = next.findIndex((v) => v === "");
        if (idx === -1) return prev;
        next[idx] = d;

        if (idx === 3) {
          const code = next.join("");
          if (code === CORRECT_CODE) {
            setTimeout(() => {
              setExiting(true);
              setTimeout(() => {
                try {
                  localStorage.setItem(STORAGE_KEY, "true");
                } catch {}
                setUnlocked(true);
              }, 900);
            }, 200);
          } else {
            setTimeout(() => {
              setError(true);
              setTimeout(() => {
                setError(false);
                setDigits(["", "", "", ""]);
              }, 700);
            }, 100);
          }
        }
        return next;
      });
    },
    [error]
  );

  useEffect(() => {
    if (unlocked) return;
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement === hiddenInputRef.current) return;
      if (e.key >= "0" && e.key <= "9") handleDigit(e.key);
      if (e.key === "Backspace") handleDelete();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [unlocked, handleDigit, handleDelete]);

  const handleHiddenInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!val) return;
      const char = val[val.length - 1];
      if (char >= "0" && char <= "9") handleDigit(char);
      e.target.value = "";
    },
    [handleDigit]
  );

  if (unlocked === null) return null;
  if (unlocked) return <>{children}</>;

  return (
    <>
      <div
        className={`lock-overlay ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A0A2E",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
          <Image
            src="/images/md-duran-1VqHRwxcCCw-unsplash.jpg"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.3 }}
            priority
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 15%, #1A0A2E 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "50%",
              background: "linear-gradient(to top, #1A0A2E 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Purple glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "40vh",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(107,45,139,0.15) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* Top: badge + logos */}
        <div
          className="relative flex flex-col items-center gap-4 mb-8"
          style={{ zIndex: 1 }}
        >
          {/* Confidential badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(107,45,139,0.15)",
              border: "1px solid rgba(107,45,139,0.35)",
              color: "#B87FD6",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#B87FD6" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "#B87FD6" }}
              />
            </span>
            Confidential · March 2026
          </span>

          {/* Logos row */}
          <div className="flex items-center gap-5">
            <div className="relative w-[108px] h-[108px]">
              <Image
                src="/logos/cps-logo.avif"
                alt="CPS"
                fill
                className="object-contain object-center rounded"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div
              className="h-6 w-px"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
            <div className="relative w-32 h-7">
              <Image
                src="/logos/Broadbrand.png"
                alt="Broadbrand"
                fill
                className="object-contain object-center"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
          </div>
        </div>

        {/* Centre: headline */}
        <div className="relative px-6 text-center mb-10" style={{ zIndex: 1 }}>
          <h1
            className="font-bold leading-none tracking-tight"
            style={{
              fontSize: "clamp(1.6rem, 5vw, 4.5rem)",
              color: "#FFFFFF",
              lineHeight: 0.95,
              maxWidth: "18ch",
            }}
          >
            ENTER CODE
            <br />
            TO VIEW
            <br />
            <span className="text-gradient-purple" style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #6B2D8B 0%, #B87FD6 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              STRATEGY
            </span>
          </h1>
        </div>

        {/* Digit boxes */}
        <div
          className="relative w-full flex flex-col items-center px-6 gap-5"
          style={{ zIndex: 1 }}
        >
          {/* Hidden input for mobile */}
          <input
            ref={hiddenInputRef}
            type="tel"
            inputMode="numeric"
            onChange={handleHiddenInput}
            style={{
              position: "absolute",
              opacity: 0,
              width: "1px",
              height: "1px",
              pointerEvents: "none",
            }}
            autoComplete="off"
          />

          {/* 4 digit display boxes */}
          <div
            className="flex items-center gap-3 md:gap-5 cursor-pointer"
            onClick={() => hiddenInputRef.current?.focus()}
          >
            {digits.map((d, i) => {
              const isCurrent = d === "" && digits.slice(0, i).every((v) => v !== "");
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: "clamp(4rem, 14vw, 7rem)",
                    height: "clamp(5rem, 18vw, 9rem)",
                    background: error
                      ? "rgba(239,68,68,0.15)"
                      : d
                      ? "rgba(107,45,139,0.2)"
                      : isCurrent
                      ? "rgba(107,45,139,0.08)"
                      : "rgba(255,255,255,0.04)",
                    border: error
                      ? "2px solid rgba(239,68,68,0.5)"
                      : d
                      ? "2px solid rgba(107,45,139,0.5)"
                      : isCurrent
                      ? "2px solid rgba(107,45,139,0.3)"
                      : "2px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      d && !error
                        ? "0 0 30px rgba(107,45,139,0.2)"
                        : "none",
                  }}
                >
                  <span
                    className="font-bold leading-none"
                    style={{
                      fontSize: "clamp(2rem, 8vw, 4rem)",
                      color: error
                        ? "rgba(239,68,68,0.9)"
                        : d
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {d || (isCurrent ? "_" : "·")}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Error hint */}
          {error && (
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(239,68,68,0.8)" }}
            >
              Incorrect code — try again
            </p>
          )}

          {/* Subtle hint */}
          {!error && (
            <p
              className="text-xs tracking-wide"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Type or tap to enter 4-digit access code
            </p>
          )}
        </div>
      </div>

      {/* Actual site — rendered but hidden behind lock */}
      <div style={{ visibility: "hidden", pointerEvents: "none" }}>
        {children}
      </div>
    </>
  );
}
