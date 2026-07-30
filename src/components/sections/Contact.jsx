import { Mail, Github, Linkedin, Download } from "lucide-react";
import Section from "../layout/Section";
import Button from "../ui/Button";
import { profile, contact } from "../../data/profile";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading}>
      <p className="max-w-xl text-ink-muted leading-relaxed">{contact.body}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button as="a" href={`mailto:${profile.email}`} variant="primary">
          <Mail size={16} />
          Email me
        </Button>
        <Button as="a" href={profile.github} variant="secondary">
          <Github size={16} />
          GitHub
        </Button>
        <Button as="a" href={profile.linkedin} variant="secondary">
          <Linkedin size={16} />
          LinkedIn
        </Button>
        <Button as="a" href={profile.resumeUrl} variant="secondary">
          <Download size={16} />
          Resume
        </Button>
      </div>
    </Section>
  );
}
