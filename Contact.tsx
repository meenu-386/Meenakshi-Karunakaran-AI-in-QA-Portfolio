export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:pl-40 lg:pr-16 py-24 sm:py-32"
    >
      <div className="font-mono text-xs text-[var(--accent)] mb-4">
        05 — contact
      </div>
      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-8 max-w-2xl leading-tight">
        Let&apos;s talk about
        <br />
        what your AI product ships broken.
      </h2>
      <p className="text-[var(--text-dim)] max-w-lg mb-12 leading-relaxed">
        Open to senior SDET and AI QA / data quality roles. Based in
        Chennai, India — happy to work across time zones for the right
        team.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mb-16">
        <a
          href="mailto:meenukaruna56.work@gmail.com"
          className="flex-1 panel panel-hover rounded-md p-5 group"
        >
          <div className="font-mono text-[11px] text-[var(--text-faint)] mb-1">
            email
          </div>
          <div className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors break-all">
            meenukaruna56.work@gmail.com
          </div>
        </a>
        <a
          href="https://linkedin.com/in/meenakshikarunakaran"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 panel panel-hover rounded-md p-5 group"
        >
          <div className="font-mono text-[11px] text-[var(--text-faint)] mb-1">
            linkedin
          </div>
          <div className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
            /in/meenakshikarunakaran
          </div>
        </a>
        <a
          href="tel:+918531029856"
          className="flex-1 panel panel-hover rounded-md p-5 group"
        >
          <div className="font-mono text-[11px] text-[var(--text-faint)] mb-1">
            phone
          </div>
          <div className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
            +91 853-102-9856
          </div>
        </a>
      </div>

      <footer className="pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-[var(--text-faint)]">
          Meenakshi Karunakaran — Chennai, India
        </p>
        <p className="font-mono text-[11px] text-[var(--text-faint)]">
          B.E. Biomedical Engineering, Anna University — Gold Medalist
        </p>
      </footer>
    </section>
  );
}
