import Section from "../layout/Section";
import Card from "../ui/Card";
import { experience } from "../../data/experience";

export default function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Journey"
      title="Experience & milestones"
      description="Internships, coursework, and self-driven work that shaped how I build today."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={`${item.title}-${item.organization}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary-500 sm:-left-[calc(2rem+5px)]"
            />
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="font-mono text-xs text-ink-faint">
                  {item.startDate} – {item.endDate}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-ink-muted">
                {item.organization}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>

              {item.responsibilities?.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    Responsibilities
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.achievements?.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    Achievements
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {item.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-growth-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.evidenceImages?.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    Evidence
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {item.evidenceImages.map((image) => (
                      <Card key={image.src} as="figure" className="overflow-hidden p-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-64 w-full object-cover object-center"
                        />
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
