import Section from "../layout/Section";
import Card from "../ui/Card";
import { about } from "../../data/profile";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A little about how I got here"
      description={about.background}
      descriptionClassName="text-justify"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="font-display text-lg font-semibold">Current focus</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {about.currentFocus}
          </p>
        </Card>

        <Card>
          <h3 className="font-display text-lg font-semibold">Career direction</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {about.careerDirection}
          </p>
        </Card>

        <Card>
          <h3 className="font-display text-lg font-semibold">How I learn</h3>
          <ul className="mt-3 space-y-2">
            {about.learningApproach.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="font-display text-lg font-semibold">Work philosophy</h3>
          <ul className="mt-3 space-y-2">
            {about.workPhilosophy.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
