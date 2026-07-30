import { cn } from "../../lib/cn";

export default function Card({ className, children, as = "div", ...props }) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/[0.03]",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
