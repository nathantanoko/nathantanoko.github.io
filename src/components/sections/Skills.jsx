import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { skillCategories, currentlyLearning } from "../../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Only technologies I have genuinely used in real projects that are organized by how I use them, not by arbitrary percentages."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((group) => (
          <Card key={group.category}>
            <h3 className="font-display text-base font-semibold">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} tone="primary">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 border-growth-500/20 bg-growth-50/40">
        <h3 className="font-display text-base font-semibold">
          Currently learning
        </h3>
        <p className="mt-1 text-sm text-ink-muted">
          Focused growth, not a scattered list. This is what I'm deliberately building depth in right now.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {currentlyLearning.map((item) => (
            <Badge key={item} tone="growth">
              {item}
            </Badge>
          ))}
        </div>
      </Card>
    </Section>
  );
}
