import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Section from "../layout/Section";
import Button from "../ui/Button";
import ResumePreviewDialog from "../ui/ResumePreviewDialog";
import { profile, contact } from "../../data/profile";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mykrrdeg";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [validationError, setValidationError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    if (!FORMSPREE_ENDPOINT) {
      console.error("Formspree endpoint not configured. Set VITE_FORMSPREE_ENDPOINT in .env");
      setStatus("error");
      return;
    }
    // basic client-side validation: trim values and check email format
    const form = e.target;
    const formData = new FormData(form);
    const emailRaw = (formData.get("email") || "").toString().trim();
    const nameRaw = (formData.get("name") || "").toString().trim();
    const messageRaw = (formData.get("message") || "").toString().trim();

    // replace trimmed values back into FormData
    formData.set("email", emailRaw);
    formData.set("name", nameRaw);
    formData.set("message", messageRaw);

    // simple RFC-5322-ish email regex (sufficient for client-side check)
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(emailRaw)) {
      setValidationError("Please enter a valid email address.");
      setStatus("idle");
      return;
    }
    setValidationError("");
    console.log("Submitting contact form to:", FORMSPREE_ENDPOINT);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        redirect: 'follow',
      });

      const contentType = res.headers.get('content-type') || '';
      let bodyText = '';
      try {
        if (contentType.includes('application/json')) {
          bodyText = JSON.stringify(await res.json());
        } else {
          bodyText = await res.text();
        }
      } catch (parseErr) {
        bodyText = '<unable to parse response body>';
      }

      console.log('Formspree response', { status: res.status, ok: res.ok, body: bodyText });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error('Fetch error when submitting form:', err);
      setStatus("error");
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading}>
      <p className="max-w-xl text-ink-muted leading-relaxed">{contact.body}</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-3 rounded-md border border-line bg-surface p-4">
          <input name="name" placeholder="Your name" required className="w-full rounded-md border px-3 py-2" />
          <input name="email" type="email" placeholder="you@email.com" required className="w-full rounded-md border px-3 py-2" />
          <textarea name="message" rows={4} placeholder="Message" required className="w-full rounded-md border px-3 py-2" />
          <div className="flex items-center gap-3">
            <Button type="submit" variant="primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
            {status === "success" && <p className="text-green-600">Message sent — thank you!</p>}
            {status === "error" && <p className="text-red-600">Failed to send. Try again later.</p>}
          </div>
          {validationError && <p className="text-red-600">{validationError}</p>}
        </form>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            <Button as="a" href={`mailto:${profile.email}`} variant="primary" target="_blank" rel="noopener noreferrer">
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
            <Button as="a" href={profile.instagram} variant="secondary">
              <Instagram size={16} />
              Instagram
            </Button>
            <ResumePreviewDialog
              preview={profile.resumeUrl}
              triggerLabel="Resume"
              triggerVariant="secondary"
            />
          </div>

          <p className="text-ink-muted leading-relaxed">Or use the form to send me a direct message — it will arrive into my inbox via Formspree.</p>
        </div>
      </div>
    </Section>
  );
}

