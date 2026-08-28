import { Github, Linkedin, Mail, ArrowRight, Instagram } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import ResumePreviewDialog from "../ui/ResumePreviewDialog";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-primary-50 via-paper to-paper"
      />

      <Container className="pb-16 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-growth-500" />
              status: {profile.availability.toLowerCase()}
            </div>

            <h1 className="animate-fade-up mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              {profile.name}
            </h1>

            <p className="animate-fade-up mt-4 max-w-2xl text-xl text-ink-muted sm:text-2xl">
              {profile.title} <br /> {profile.tagline}
            </p>

            <p className="animate-fade-up mt-2 font-mono text-sm text-ink-faint">
              {profile.location}
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3">
              <Button as="a" href="#projects" variant="primary">
                View Projects
                <ArrowRight size={16} />
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Contact Me
              </Button>
              <ResumePreviewDialog
                preview={profile.resumeUrl}
                triggerLabel="Download Resume"
                triggerVariant="secondary"
              />
            </div>

            <div className="animate-fade-up mt-8 flex items-center gap-4">
              <a
                href={profile.github}
                aria-label={`${profile.name}'s GitHub profile`}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                aria-label={`${profile.name}'s LinkedIn profile`}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.name}`}
                className="text-ink-muted transition-colors hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
              <a
                href={profile.instagram}
                aria-label={`${profile.name}'s Instagram profile`}
                className="text-ink-muted transition-colors hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-up lg:justify-self-end">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 via-transparent to-accent-100" />
              <img
                src={profile.heroImage}
                alt={`${profile.name} portrait`}
                className="relative h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
