import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/30 hover:bg-ink/5",
  accent:
    "bg-accent-500 text-ink hover:bg-accent-600 focus-visible:ring-accent-500",
};

export default function Button({
  as = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
