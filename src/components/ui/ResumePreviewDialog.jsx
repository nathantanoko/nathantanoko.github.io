import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, X } from "lucide-react";
import Button from "./Button";
import Card from "./Card";
import { cn } from "../../lib/cn";

export default function ResumePreviewDialog({
  preview,
  triggerLabel = "Resume",
  triggerVariant = "secondary",
  triggerClassName,
  triggerTextClassName,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <Button
        type="button"
        variant={triggerVariant}
        className={triggerClassName}
        onClick={() => setOpen(true)}
      >
        <span className={triggerTextClassName}>{triggerLabel}</span>
      </Button>

      {open && typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            aria-hidden="false"
          >
            <button
              type="button"
              aria-label="Close resume preview"
              className="absolute inset-0 cursor-default bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <Card
              as="section"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-preview-title"
              aria-describedby="resume-preview-description"
              className={cn(
                "relative z-10 w-full max-w-xl overflow-hidden p-0 shadow-[0_24px_90px_rgba(15,23,42,0.25)]",
              )}
            >
              <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
                <div>
                  <p className="eyebrow mb-2">Resume preview</p>
                  <h3 id="resume-preview-title" className="text-xl font-semibold text-ink">
                    {preview.title}
                  </h3>
                  <p id="resume-preview-description" className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {preview.description}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close dialog"
                  className="rounded-full border border-line p-2 text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 px-6 py-6">
                {preview.links.map((link) => (
                  <Button
                    key={link.href}
                    as="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={link.variant || "primary"}
                    className="w-full justify-between"
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={16} />
                  </Button>
                ))}
              </div>
            </Card>
          </div>,
          document.body
        )}
    </>
  );
}