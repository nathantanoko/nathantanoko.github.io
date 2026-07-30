import { ExternalLink } from "lucide-react";
import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { education, certifications } from "../../data/education";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education & certifications"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((item) => (
            <Card key={item.degree}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold">
                  {item.degree}
                </h3>
                <p className="font-mono text-xs text-ink-faint">
                  {item.startDate} – {item.endDate}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-ink-muted">
                {item.institution}
              </p>
              {item.achievements?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.achievements.map((a) => (
                    <Badge key={a} tone="neutral">
                      {a}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <Card key={cert.name} className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-base font-semibold">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                  aria-label={`Verify ${cert.name}`}
                >
                  Verify <ExternalLink size={14} />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
