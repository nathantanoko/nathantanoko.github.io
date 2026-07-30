# Dev Portfolio (MVP)

A recruiter-focused personal portfolio for a fresh graduate software
developer. Built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Before you ship this

1. **Fill in your real content.** Every placeholder lives in `src/data/`:
   - `profile.js` — name, title, contact links, resume URL, about content
   - `skills.js` — your actual skills and what you're currently learning
   - `projects.js` — your real projects (this is the most important file)
   - `experience.js` — internships, clubs, relevant milestones
   - `education.js` — degree, coursework, certifications
   - `blog.js` — optional, add posts as you write them

   Search the codebase for `[` to find every remaining placeholder.

2. **Add real project screenshots** to `src/assets/` and reference them from
   `projects.js` (`image` field).

3. **Read `PRD.md`** for the product vision and what's intentionally out of
   scope for now (project case-study pages, full blog articles — see
   "Future Improvements").

4. **Read `AGENTS.md`** before using an AI coding assistant to extend this
   project — it documents the rules this project was built under, including
   the honesty rule: never let an AI invent experience, metrics, or
   credentials on your behalf.

## Project structure

```
src/
├── components/
│   ├── layout/       Container, Section, Footer
│   ├── navigation/    Navbar
│   ├── sections/       Hero, About, Skills, Projects, Journey, etc.
│   └── ui/                Button, Badge, Card (shadcn-style primitives)
├── data/                     Content — edit these files, not the components
├── lib/                        Small shared utilities
├── App.jsx                 Composes all sections into the page
└── main.jsx                Entry point
```

## A note on shadcn/ui

This project follows shadcn/ui's conventions (copy-in, accessible,
Tailwind-based primitives) but ships hand-built `Button`, `Badge`, and `Card`
components instead of running the shadcn CLI, since that requires network
access to a component registry. If you want the real shadcn/ui components,
run:

```bash
npx shadcn@latest init
npx shadcn@latest add button badge card
```

and merge them into `src/components/ui/`.

## Roadmap (see PRD.md §12)

- Project detail / case-study routes
- Full blog article pages
- Optional dark mode
- Optional contact form
