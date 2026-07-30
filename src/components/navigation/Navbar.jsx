import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { profile } from "../../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize back to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href={profile.resumeUrl} variant="secondary" className="text-sm">
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-line bg-paper md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href={profile.resumeUrl}
              variant="secondary"
              className="mt-2 w-full text-sm"
            >
              Download Resume
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
