# AGENTS.md — Instructions for AI Agents Working on This Project

## Project Purpose
This is a professional portfolio website for a fresh graduate applying for
software development roles. It exists to make recruiters and hiring managers
want to interview the candidate. Read `PRD.md` before making any structural
or content changes.

## Core Priorities (in order)
1. Recruiter clarity — can someone understand the candidate in 30–60 seconds?
2. Professional credibility — does the content read as honest and specific?
3. Technical quality — is the code itself evidence of skill?
4. Responsive usability — does it work well on every screen size?
5. Accessibility — semantic HTML, keyboard support, contrast, focus states.
6. Maintainability — is content separated from presentation?
7. Performance — minimal, justified dependencies.
8. Honest representation of experience — never invent anything.

## Technology Rules
Use: React (Vite), Tailwind CSS, and accessible UI primitives that follow
shadcn/ui conventions (`src/components/ui/`).

Note on shadcn/ui: the actual shadcn CLI pulls component source from a
registry over the network. This project currently ships hand-built
equivalents (`Button`, `Badge`, `Card`) styled to the same conventions so the
project runs anywhere. If you have network access and the user wants real
shadcn/ui components, you may run `npx shadcn@latest init` and `add`, then
fold the generated components into the existing `ui/` folder — don't
duplicate patterns.

Do not add a new library (state management, animation, CSS-in-JS, etc.)
without stating: why it's needed, what problem it solves, and whether
Tailwind + React alone already solves it.

## Design Rules
The interface must remain modern, clean, bright, energetic, professional,
approachable, and responsive. Design tokens live in `tailwind.config.js`
(colors: `paper`, `ink`, `primary`, `accent`, `growth`) and `src/index.css`.
Reuse these tokens — don't introduce ad hoc colors or fonts.

## Content Rules
Never invent:
- Personal experiences, employers, or job titles
- Certifications, credential IDs, or verification links
- Project results, metrics, or outcomes
- Contact information

All personal content lives in `src/data/*.js`. Unfilled content must stay as
a clearly bracketed placeholder (e.g. `[YOUR NAME]`) — never silently
replaced with fabricated specifics. If a user asks you to "fill in the rest,"
ask for the real information or leave the placeholder in place.

## Coding Rules
- Prefer small, reusable components over large ones.
- Keep content data (`src/data/`) separate from presentation
  (`src/components/`).
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`,
  proper heading levels) — don't reach for generic `<div>` soup.
- Preserve accessibility on every change: alt text, label associations,
  focus-visible states, keyboard operability.
- Avoid premature abstraction — don't build a generic system for something
  used once.

## AI Workflow Rules
Before implementing a significant feature:
1. Understand the requirement.
2. Check `PRD.md` for alignment with product direction.
3. Check this file for constraints.
4. Inspect the existing codebase — reuse existing components/patterns before
   creating new ones.
5. Propose an approach (briefly) if the change is non-trivial.
6. Implement incrementally — one milestone at a time.
7. Verify the result (visually and functionally).
8. Refactor if the result introduced unnecessary complexity.

If a requirement is ambiguous, make the smallest reasonable assumption,
state it clearly, and proceed — never invent personal information to fill
the gap.

## Explicitly Out of Scope (unless requirements change)
- Custom backend, database, or authentication system.
- CMS integration for the blog (static data files are sufficient for now).
- State management libraries (React state is sufficient at this scale).
- Microservices or complex build pipelines.

If a real need for one of these emerges, update `PRD.md` first, then
implement.
