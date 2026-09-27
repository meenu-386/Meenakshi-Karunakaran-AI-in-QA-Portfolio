# Meenakshi Karunakaran — Portfolio

A personal portfolio site for an AI QA & Data Quality Engineer (SDET),
built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Design direction

The candidate's work lives in test logs, CI pipelines and assertion
syntax — so the site borrows that vernacular instead of a generic
dark-mode-dev-portfolio look:

- A terminal-style hero that types out `expect(production).not.toBreak()`
- A left-hand nav rendered as a spec-file suite list with pass/fail-style status dots
- Experience shown as a CI pipeline timeline (status dot per stage)
- Metrics displayed as assertions/output rather than marketing stat blocks
- Monospace (JetBrains Mono) for labels and data, Inter for headlines and body copy
- Dark base (`#0A0E0F`) with a single signal-teal accent (`#00C2A8`)

## Structure

```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx        — assembles all sections
  globals.css     — design tokens, animations, utility classes
components/
  NavRail.tsx     — sticky left nav with scroll-spy
  Hero.tsx        — hero with terminal type-in animation
  About.tsx       — positioning + stat grid
  Experience.tsx  — work history as a pipeline timeline
  Projects.tsx    — top 3 projects with metrics
  Skills.tsx      — skills grouped by category
  Contact.tsx     — contact links + footer
```

## Local setup

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

No environment variables are required.

## Content notes

All content is rewritten from the source resume into achievement-driven,
non-templated copy — nothing is copied verbatim. Metrics reflect the
figures stated in the resume (95% UI regression automation, 85%+ mobile
coverage, 70% faster regression cycles, 45% earlier defect detection,
etc.), organized by the project or role they came from.
