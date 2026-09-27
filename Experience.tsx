const jobs = [
  {
    status: "current",
    role: "Senior Automation Test Engineer — AI & Data Quality",
    org: "DHL Supply Chain (via Coforge)",
    period: "Nov 2025 — Present",
    points: [
      "Automated 95% of UI regression for the LOOP Logistics Portal (Java, Selenium, TestNG), using GenAI to generate test scenarios and surface edge cases.",
      "Built Python-based AI output regression checks that score LLM responses against golden datasets, catching quality drift before it ships.",
      "Validated GenAI-assisted features against accuracy, consistency, latency and token-cost benchmarks through targeted prompt and edge-case testing.",
      "Automated REST API validation for shipment flows and compliance screening, reconciling data integrity across PostgreSQL and MongoDB.",
      "Wired SQL-based source-to-target reconciliation and schema-change detection into CI/CD as automated data quality gates.",
    ],
    stack: ["Java", "Selenium", "Python", "SQL", "PostgreSQL", "MongoDB", "Azure DevOps"],
  },
  {
    status: "done",
    role: "Automation Test Engineer — AI & Data Quality",
    org: "HID Global",
    period: "Jun 2024 — Nov 2025",
    points: [
      "Defined dataset quality standards and acceptance criteria for AI-powered Wayfinding features from scratch, alongside Product, AI and data analyst teams.",
      "Tracked accuracy, precision and recall with the AI team, turning failure-pattern analysis into prioritized model and data fixes.",
      "Monitored IoT beacon telemetry ingestion for drift, schema changes and missing data before it hit feature behavior.",
      "Automated 50+ end-to-end mobile scenarios in Appium, reaching 85%+ regression coverage across Android and iOS.",
      "Built a reusable Cucumber + Selenium BDD framework that cut release validation time.",
    ],
    stack: ["Appium", "Selenium", "Cucumber", "TestNG", "JIRA"],
  },
  {
    status: "done",
    role: "Programmer Analyst",
    org: "Cognizant Technology Solutions",
    period: "May 2022 — Jun 2024",
    points: [
      "Automated 100+ end-to-end scenarios per project across 12+ UPS logistics projects (Java, Selenium), cutting manual test effort.",
      "Reconciled billing, invoice and shipment data between source systems and reporting databases via SQL to guarantee data integrity.",
      "Ran UI, API, integration and end-to-end testing that caught critical defects before they reached production.",
      "Won the STELLAR AWARD, Q3 2023, for automation quality and project performance.",
    ],
    stack: ["Java", "Selenium", "SQL", "Postman"],
  },
  {
    status: "done",
    role: "Programmer Analyst Trainee",
    org: "Cognizant Technology Solutions",
    period: "Feb 2022 — May 2022",
    points: [
      "Shipped a capstone automation project on an internal web app using Selenium WebDriver and Core Java, with reusable scripts and SQL-based backend validation.",
    ],
    stack: ["Java", "Selenium", "SQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 sm:px-10 lg:pl-40 lg:pr-16 py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="font-mono text-xs text-[var(--accent)] mb-4">
        02 — experience
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16 max-w-2xl">
        Four pipeline stages, four systems learned fast.
      </h2>

      <div className="max-w-3xl">
        {jobs.map((job, idx) => (
          <div key={job.org + job.period} className="relative pl-8 pb-14 last:pb-0">
            {idx !== jobs.length - 1 && (
              <div className="absolute left-[5px] top-3 bottom-0 w-px bg-[var(--border)]" />
            )}
            <div
              className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                job.status === "current"
                  ? "bg-[var(--accent)] border-[var(--accent)] status-live"
                  : "bg-[var(--bg)] border-[var(--border-strong)]"
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-lg font-medium text-[var(--text)]">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-[var(--text-faint)] whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <div className="text-sm text-[var(--accent)] mb-4">{job.org}</div>

            <ul className="space-y-2.5 mb-5">
              {job.points.map((p) => (
                <li
                  key={p}
                  className="text-sm text-[var(--text-dim)] leading-relaxed flex gap-2.5"
                >
                  <span className="text-[var(--text-faint)] mt-0.5 shrink-0 font-mono text-xs">
                    ▸
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2 py-1 rounded border border-[var(--border)] text-[var(--text-faint)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
