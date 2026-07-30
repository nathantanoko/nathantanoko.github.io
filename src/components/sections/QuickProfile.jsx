import Container from "../layout/Container";
import { quickProfile } from "../../data/profile";

export default function QuickProfile() {
  return (
    <section aria-label="Quick profile" className="border-y border-line bg-surface">
      <Container className="py-8">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {quickProfile.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-ink sm:text-base">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
