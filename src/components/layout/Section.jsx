import Container from "./Container";
import { cn } from "../../lib/cn";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  descriptionClassName,
  className,
  containerClassName,
  children,
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 sm:py-24", className)}>
      <Container className={containerClassName}>
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="section-heading">{title}</h2>}
            {description && (
              <p className={cn("mt-3 leading-relaxed text-ink-muted", descriptionClassName)}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
