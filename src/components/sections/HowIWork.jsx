import Section from "../layout/Section";
import Card from "../ui/Card";
import { howIWork } from "../../data/profile";

export default function HowIWork() {
  return (
    <Section
      id="how-i-work"
      eyebrow="How I Work"
      title="My process"
      description={howIWork.intro}
    >
      <ol className="flex flex-wrap gap-3">
        {howIWork.steps.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm"
          >
            <span className="font-mono text-xs text-primary-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <Card className="mt-8">
        <h3 className="font-display text-lg font-semibold">
          {howIWork.aiUsage.heading}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {howIWork.aiUsage.body}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-faint">
          {howIWork.aiUsage.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-md bg-ink/[0.04] px-2.5 py-1 text-ink-muted">
                {step}
              </span>
              {i < howIWork.aiUsage.flow.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      </Card>
    </Section>
  );
}
