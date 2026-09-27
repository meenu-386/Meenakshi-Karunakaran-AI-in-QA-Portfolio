"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export default function NavRail() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex flex-col gap-1 fixed left-8 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="font-mono text-[10px] text-[var(--text-faint)] mb-2 pl-3">
        suite.spec.ts
      </div>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-2.5 py-1.5 pl-3 pr-4"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              active === s.id
                ? "bg-[var(--accent)] scale-125"
                : "bg-[var(--border-strong)] group-hover:bg-[var(--text-dim)]"
            }`}
          />
          <span
            className={`font-mono text-xs transition-colors duration-200 ${
              active === s.id
                ? "text-[var(--text)]"
                : "text-[var(--text-faint)] group-hover:text-[var(--text-dim)]"
            }`}
          >
            {s.label}()
          </span>
        </a>
      ))}
    </nav>
  );
}
