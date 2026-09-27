const stats = [
  { value: "95%", label: "UI regression automated", ctx: "LOOP Logistics Portal" },
  { value: "85%+", label: "mobile regression coverage", ctx: "HID Wayfinding" },
  { value: "70%", label: "faster regression cycles", ctx: "DHL eCommerce" },
  { value: "45%", label: "earlier defect detection", ctx: "pre-production" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 lg:pl-40 lg:pr-16 py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="max-w-3xl">
        <div className="font-mono text-xs text-[var(--accent)] mb-4">
          01 — about
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          Quality isn&apos;t a phase. It&apos;s the pipeline.
        </h2>
        <div className="space-y-4 text-[var(--text-dim)] leading-relaxed text-base">
          <p>
            Most QA engineers test what a feature does. Meenakshi tests
            what an AI feature{" "}
            <em className="not-italic text-[var(--text)]">
              actually decides
            </em>{" "}
            — scoring LLM responses against golden datasets, hunting for
            hallucinations and reasoning drift, and tracking whether a
            model&apos;s answers this release still match last
            release&apos;s benchmark.
          </p>
          <p>
            That same rigor runs underneath, in the data itself: source-to-
            target reconciliation, schema-change detection, and
            ingestion-to-reporting validation across PostgreSQL, MongoDB
            and IoT telemetry streams — so a bad dataset never gets the
            chance to become a bad model.
          </p>
          <p>
            The throughline across DHL, HID Global and Cognizant is the
            same: take a system nobody fully trusts yet, and build the
            automated proof that it works — in Java, Python, SQL, and
            whatever CI pipeline it needs to live in.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] mt-16 max-w-4xl border border-[var(--border)] rounded-md overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--bg)] p-5 sm:p-6">
            <div className="font-mono text-2xl sm:text-3xl text-[var(--accent)] mb-2">
              {s.value}
            </div>
            <div className="text-sm text-[var(--text)] mb-1 leading-snug">
              {s.label}
            </div>
            <div className="font-mono text-[11px] text-[var(--text-faint)]">
              {s.ctx}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
