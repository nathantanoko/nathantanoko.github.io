# PRD — Fresh Graduate Developer Portfolio

## 1. Product Vision
A personal portfolio website that positions Nathan Tanoko as a credible, capable,
continuously-learning junior developer, and gives recruiters everything they
need to decide "this person is worth an interview" — quickly, and in depth if
they choose to dig further.

The site is not a technology showcase. It is a recruiting tool.

## 2. Product Goals
- Communicate identity, target role, skills, and projects within 30–60 seconds.
- Provide credible evidence of ability through real project case studies.
- Show how the candidate thinks and works, not just what they used.
- Support a deeper dive for interested readers (case studies, blog, journey).
- Remain honest — no invented experience, metrics, or credentials.

## 3. Target Audience
Recruiters, HR professionals, hiring managers, engineering managers, and
technical interviewers. Assume limited time and a scanning-first reading
pattern, with an option to go deeper.

## 4. User Problems / Needs
- Recruiters need to quickly assess role fit and technical credibility.
- Hiring managers need to understand potential value and growth trajectory.
- Technical interviewers need evidence of real technical understanding
  (architecture, decisions, challenges, debugging).
- The candidate needs a single, always-current, shareable representation of
  their skills and work that a static resume cannot fully capture.

## 5. Success Criteria
- A recruiter can state the candidate's name, target role, primary stack, and
  one project within one minute of landing on the page.
- Every project includes problem, contribution, challenge, solution, and
  lessons learned — not just a tech list.
- Site is fully usable and readable on mobile, tablet, and desktop.
- Passes basic accessibility checks: semantic HTML, keyboard navigation,
  visible focus states, sufficient contrast, meaningful alt text.
- No fabricated companies, metrics, certifications, or experience anywhere
  in the content.

## 6. Information Architecture
Navbar → Hero → Quick Profile → About → Skills → Featured Projects →
Journey/Experience → Education & Certifications → How I Work → Blog →
Contact → Footer.

Deep-dive content (project case studies, full blog articles) extends this via
additional routes while preserving the single-page feel for the core
narrative.

## 7. Feature Requirements (MVP)
- Responsive navbar with mobile menu and resume CTA.
- Hero with name, title, value proposition, primary/secondary CTAs, socials.
- Quick Profile strip: target role, status, stack, availability.
- About: background, current focus, career direction, learning approach,
  work philosophy.
- Skills: categorized badges + "Currently Learning" — no percentage bars.
- Featured Projects: 3–5 projects with full narrative fields, data-driven.
- Journey: timeline of experience, internships, and relevant milestones.
- Education & Certifications.
- How I Work: process steps + explicit, honest AI-usage explanation.
- Blog: static, data-driven list for the MVP.
- Contact: clear CTA with email, GitHub, LinkedIn, resume download.
- Footer with identity, socials, copyright.

## 8. Non-Functional Requirements
- Accessible (WCAG-conscious): semantic HTML, focus-visible states, alt
  text, label associations, logical heading hierarchy.
- Performance-conscious: no heavy dependencies, no unnecessary re-renders,
  optimized/deferred images once real assets are added.
- Mobile-first responsive design across all breakpoints.
- Respect `prefers-reduced-motion`.
- Maintainable: content lives in `src/data/`, separated from presentation.

## 9. Design Direction
Bright, clean, professional, energetic, approachable. Light paper background,
indigo primary accent, warm amber secondary accent, emerald used sparingly
for growth/status signaling. Space Grotesk for display type, Inter for body,
JetBrains Mono for the recurring "developer status" motif (eyebrows, tags,
timestamps) that ties the visual language back to the subject: a developer.

## 10. Technology Stack
React (Vite), Tailwind CSS, hand-built accessible UI primitives following
shadcn/ui conventions (Button, Badge, Card) — see AGENTS.md for why the
shadcn CLI itself isn't wired in yet. React Router included for future
project/blog detail routes. No backend, no CMS, no state management library.

## 11. Content Requirements
All personal content — name, contact info, projects, experience, education,
certifications, blog posts — must be supplied by the candidate. Placeholders
use `[BRACKETED CAPS]` and must not be silently replaced with invented
information.

## 12. Future Improvements (post-MVP)
- Project detail / case-study routes (`/projects/:slug`) with full technical
  breakdown (architecture, state management, API integration, challenges).
- Full blog article routes with MDX or markdown-driven content.
- Dark mode (optional, only if it doesn't dilute the brand's brightness).
- Light analytics (privacy-respecting) to see which sections get attention.
- Contact form (only if a no-backend solution like a form service is used —
  avoid standing up custom backend infrastructure for this).

## 13. Constraints
- No invented experience, companies, metrics, or credentials — ever.
- No premature backend, database, auth, or microservice architecture.
- Avoid new dependencies without a clear, stated reason.
- Keep the single-page core experience intact even as deep-dive routes are
  added.
