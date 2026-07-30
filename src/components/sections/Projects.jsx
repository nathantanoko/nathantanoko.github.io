import Section from "../layout/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Things I've built"
      description="A few projects that show how I think, not just what I used. Each one includes what I built, what was hard, and what I learned."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
