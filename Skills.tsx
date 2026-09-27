const groups = [
  {
    title: "AI & ML Quality",
    items: [
      "LLM & chatbot testing",
      "Agentic AI evaluation",
      "Prompt & response evaluation",
      "Hallucination & bias detection",
      "Golden datasets & AI regression",
      "Accuracy / precision / recall / F1",
      "Data & model drift monitoring",
    ],
  },
  {
    title: "Data Quality & Pipelines",
    items: [
      "ETL / ELT pipeline testing",
      "Source-to-target reconciliation",
      "Schema & anomaly detection",
      "Automated data quality gates",
      "Feature pipeline validation",
    ],
  },
  {
    title: "Languages & Automation",
    items: [
      "Python (PyTest, Pandas)",
      "SQL",
      "Java",
      "TypeScript / JavaScript",
      "Selenium · Playwright · Appium",
      "Cucumber (BDD) · TestNG · JUnit",
      "REST Assured",
    ],
  },
  {
    title: "Data, Cloud & CI/CD",
    items: [
      "PostgreSQL · MongoDB · MySQL",
      "Spark · Databricks · Snowflake",
      "Kafka · Airflow",
      "AWS (S3, Lambda, Glue, Athena)",
      "Azure DevOps · Jenkins · GitHub Actions",
      "Docker · Kubernetes",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 sm:px-10 lg:pl-40 lg:pr-16 py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="font-mono text-xs text-[var(--accent)] mb-4">
        04 — skills
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16 max-w-2xl">
        The toolkit, by what it protects.
      </h2>

      <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] max-w-4xl border border-[var(--border)] rounded-md overflow-hidden">
        {groups.map((g) => (
          <div key={g.title} className="bg-[var(--bg)] p-6 sm:p-7">
            <h3 className="font-mono text-xs text-[var(--text-dim)] mb-4">
              {g.title}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--text)] flex items-center gap-2.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
