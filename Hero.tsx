"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "expect(production).not.toBreak()";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 sm:px-10 lg:pl-40 lg:pr-16 overflow-hidden border-b border-[var(--border)]"
    >
      <div className="absolute inset-0 grid-backdrop pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden pointer-events-none opacity-60">
        <div className="scanline h-24 w-full bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl">
        <div className="reveal flex items-center gap-2 mb-8 font-mono text-xs text-[var(--text-dim)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] status-live" />
          <span>chennai, india — open to senior sdet / ai qa roles</span>
        </div>

        <p
          className="reveal font-mono text-sm sm:text-base text-[var(--accent)] mb-4"
          style={{ animationDelay: "0.08s" }}
        >
          Meenakshi Karunakaran
        </p>

        <h1
          className="reveal text-[2.4rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-semibold tracking-tight mb-6"
          style={{ animationDelay: "0.16s" }}
        >
          I catch what breaks
          <br />
          before your users do.
        </h1>

        <p
          className="reveal text-[var(--text-dim)] text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          style={{ animationDelay: "0.24s" }}
        >
          SDET focused on AI/ML quality engineering — evaluating LLM
          outputs for accuracy and drift, validating data pipelines
          end-to-end, and building automation frameworks that hold the
          line across web, mobile, API and database layers.
        </p>

        <div
          className="reveal panel rounded-md px-5 py-4 max-w-xl mb-10 font-mono text-sm"
          style={{ animationDelay: "0.32s" }}
        >
          <span className="text-[var(--text-faint)]">$ </span>
          <span>{typed}</span>
          {!done && <span className="cursor-blink text-[var(--accent)]">▍</span>}
          {done && (
            <div className="mt-2 text-[var(--accent)] flex items-center gap-2">
              <span>✓</span>
              <span className="text-[var(--text-dim)]">
                4+ yrs · 95% regression automated · 45% earlier defect
                detection
              </span>
            </div>
          )}
        </div>

        <div
          className="reveal flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-[#06110f] font-medium text-sm px-5 py-3 rounded-md hover:bg-[var(--accent-dim)] transition-colors"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[var(--border-strong)] text-[var(--text)] font-medium text-sm px-5 py-3 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
