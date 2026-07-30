import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { blogPosts } from "../../data/blog";

export default function BlogPreview() {
  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Notes from building"
      description="Short write-ups on what I'm learning — technical concepts, debugging stories, and project retrospectives."
    >
      {blogPosts.length === 0 ? (
        <Card className="text-sm text-ink-muted">
          No posts yet — the first one is on its way.
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} as="article" className="flex flex-col gap-3">
              <Badge tone="primary" className="w-fit">
                {post.category}
              </Badge>
              <h3 className="font-display text-lg font-semibold">{post.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {post.excerpt}
              </p>
              <p className="mt-auto font-mono text-xs text-ink-faint">
                {post.date} · {post.readingTime}
              </p>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
