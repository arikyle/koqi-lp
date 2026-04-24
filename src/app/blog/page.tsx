import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Real Estate Performance Intelligence Insights",
  description:
    "Expert insights on real estate agent performance metrics, pricing accuracy, ACCS scores, brokerage analytics, and the future of performance intelligence in real estate.",
  alternates: {
    canonical: "https://koqi.ai/blog",
  },
  openGraph: {
    title: "Koqi Blog — Real Estate Performance Intelligence",
    description:
      "Expert insights on agent performance metrics, pricing accuracy, and brokerage analytics.",
    url: "https://koqi.ai/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-stone-bg">
      <header className="border-b border-stone-200 px-6 py-6">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl text-accent transition-opacity hover:opacity-80"
          >
            Koqi
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            &larr; Back to home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Performance Intelligence Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Insights on real estate agent performance, pricing accuracy, and the
          metrics that actually predict success.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-stone-200/60 px-3 py-1 text-xs font-medium text-muted"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-16 divide-y divide-stone-200">
          {posts.map((post) => (
            <article key={post.slug} className="py-10 first:pt-0">
              <div className="flex items-center gap-3 text-sm text-muted">
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.category}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl text-ink transition-colors hover:text-accent">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted/70"
                  >
                    #{tag.replace(/\s+/g, "-")}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 px-6 py-8">
        <p className="text-center text-sm text-muted">
          <Link href="/" className="hover:text-accent transition-colors">
            koqi.ai
          </Link>
          {" "}&middot;{" "}
          <a href="mailto:hello@koqi.ai" className="hover:text-accent transition-colors">
            hello@koqi.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
