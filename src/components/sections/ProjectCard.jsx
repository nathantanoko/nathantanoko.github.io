import { ArrowUpRight, Github } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const statusTone = {
  Completed: "growth",
  "In Progress": "accent",
  Maintained: "primary",
};

export default function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col gap-4">
      <div
        className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-line bg-ink/[0.03] font-mono text-xs text-ink-faint"
        role="img"
        aria-label={`Screenshot placeholder for ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          "screenshot placeholder"
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <Badge tone={statusTone[project.status] || "neutral"}>
          {project.status}
        </Badge>
      </div>

      <p className="font-mono text-xs text-ink-faint">
        {project.period} · {project.type}
      </p>

      <p className="text-sm leading-relaxed text-ink-muted">{project.overview}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} tone="neutral">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-2 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
          >
            Live demo <ArrowUpRight size={15} />
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"
          >
            <Github size={15} /> Source
          </a>
        )}
      </div>
    </Card>
  );
}
