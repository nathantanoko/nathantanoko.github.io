import { Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-ink-faint">{profile.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} aria-label="GitHub" className="text-ink-muted hover:text-ink">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="text-ink-muted hover:text-ink">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-ink" target="_blank" rel="noopener noreferrer">
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
