const projects = [
  {
    tag: "logistics · genai qa",
    name: "DHL eCommerce — LOOP Logistics Platform",
    desc: "End-to-end automation and data validation framework covering shipment creation, encoding, manifest generation and compliance screening — extended with prompt evaluation and AI output regression for GenAI-assisted features.",
    metrics: [
      ["+75%", "test coverage"],
      ["-70%", "regression time"],
      ["+45%", "earlier defects"],
    ],
    stack: ["Selenium", "Java", "Cucumber", "REST Assured", "SQL", "MongoDB", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    tag: "healthcare · iot · mobile",
    name: "HID Wayfinding — Mobile App & CMS Portal",
    desc: "Dataset validation and cross-platform automation for a beacon-assisted indoor hospital navigation solution, covering AI feature datasets, IoT device integration and admin workflows across Android, iOS and web.",
    metrics: [
      ["85%+", "mobile coverage"],
      ["50+", "e2e scenarios"],
      ["3", "platforms"],
    ],
    stack: ["Appium", "Selenium", "Java", "Cucumber", "TestNG", "JUnit", "Jenkins"],
  },
  {
    tag: "fintech · reconciliation",
    name: "UPS Billing Portal Automation",
    desc: "Automation for the UPS billing web application with a keyword-driven framework, validating shipment processing, invoice generation, tracking and payment workflows via API and database reconciliation.",
    metrics: [
      ["100+", "scenarios / project"],
      ["12+", "projects covered"],
    ],
    stack: ["Selenium", "Java", "TestNG", "Postman", "SQL", "Jenkins"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 sm:px-10 lg:pl-40 lg:pr-16 py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="font-mono text-xs text-[var(--accent)] mb-4">
        03 — projects
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16 max-w-2xl">
        Three systems, three domains, one standard of proof.
      </h2>

      <div className="grid gap-6 max-w-4xl">
        {projects.map((p) => (
          <div
            key={p.name}
            className="panel panel-hover rounded-lg p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="font-mono text-[11px] text-[var(--text-faint)] mb-2">
                  {p.tag}
                </div>
                <h3 className="text-xl font-medium text-[var(--text)]">
                  {p.name}
                </h3>
              </div>
              <div className="flex gap-5 shrink-0">
                {p.metrics.map(([val, label]) => (
                  <div key={label} className="text-right">
                    <div className="font-mono text-lg text-[var(--accent)]">
                      {val}
                    </div>
                    <div className="text-[11px] text-[var(--text-faint)] whitespace-nowrap">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-5 max-w-2xl">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
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
