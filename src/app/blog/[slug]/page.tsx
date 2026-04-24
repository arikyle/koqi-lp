import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { blogPostSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://koqi.ai/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://koqi.ai/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: ["Koqi"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mb-4 mt-12 font-display text-2xl text-ink first:mt-0"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mb-3 mt-8 font-display text-xl text-ink"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={i} className="mb-2 text-base leading-relaxed text-muted">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
                .replace(/\*(.*?)\*/g, "<em>$1</em>"),
            }}
          />
        </li>
      );
    } else if (line.startsWith("| ") && lines[i + 1]?.startsWith("|---")) {
      const headerCells = line.split("|").filter(Boolean).map((c) => c.trim());
      const rows: string[][] = [];
      let j = i + 2;
      while (j < lines.length && lines[j].startsWith("| ")) {
        rows.push(lines[j].split("|").filter(Boolean).map((c) => c.trim()));
        j++;
      }
      elements.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {headerCells.map((cell, ci) => (
                  <th
                    key={ci}
                    className="py-2 pr-4 text-left font-medium text-ink"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-stone-100">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 pr-4 text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      i = j;
      continue;
    } else if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ")) {
      elements.push(
        <li
          key={i}
          className="mb-2 text-base leading-relaxed text-muted"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/^\d+\.\s+/, "")
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
          }}
        />
      );
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(
        <p
          key={i}
          className="mb-4 text-base leading-relaxed text-muted"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
          }}
        />
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-stone-bg">
      <header className="border-b border-stone-200 px-6 py-6">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl text-accent transition-opacity hover:opacity-80"
          >
            Koqi
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            &larr; All posts
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
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

        <h1 className="mt-6 font-display text-3xl leading-snug text-ink md:text-4xl md:leading-snug">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-muted">{post.description}</p>

        <div className="mt-12">{renderMarkdown(post.content)}</div>

        <div className="mt-16 rounded-2xl bg-accent/5 border border-accent/10 p-8 text-center">
          <p className="font-display text-xl text-ink">
            Ready to build your ACCS score?
          </p>
          <p className="mt-2 text-sm text-muted">
            Join the private beta and start quantifying your real estate skills.
          </p>
          <a
            href="https://koqi.ai/#"
            className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Early Access
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted/70">
              #{tag.replace(/\s+/g, "-")}
            </span>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-stone-200 px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl text-ink">
              More from Koqi
            </h2>
            <div className="mt-8 space-y-8">
              {relatedPosts.map((related) => (
                <article key={related.slug}>
                  <h3 className="font-display text-lg text-ink transition-colors hover:text-accent">
                    <Link href={`/blog/${related.slug}`}>
                      {related.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {related.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostSchema({
              title: post.title,
              description: post.description,
              slug: post.slug,
              datePublished: post.datePublished,
              dateModified: post.dateModified,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://koqi.ai" },
              { name: "Blog", url: "https://koqi.ai/blog" },
              { name: post.title, url: `https://koqi.ai/blog/${post.slug}` },
            ])
          ),
        }}
      />
    </div>
  );
}
