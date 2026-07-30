import { cn } from "../../lib/cn";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
