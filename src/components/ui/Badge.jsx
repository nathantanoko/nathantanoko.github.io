import { cn } from "../../lib/cn";

const tones = {
  neutral: "bg-ink/5 text-ink-muted",
  primary: "bg-primary-50 text-primary-700",
  accent: "bg-accent-50 text-accent-600",
  growth: "bg-growth-50 text-growth-600",
};

export default function Badge({ tone = "neutral", className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
