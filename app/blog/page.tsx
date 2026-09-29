import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const posts = [
  {
    number: "002",
    title: "Getting Started on PhD Applications: 3 Things That Helped Me",
    href: "/blog/getting-started-on-phd-applications",
    date: "September 29, 2026",
    dateTime: "2026-09-29",
    description:
      "Three practical ways to make PhD applications feel less intimidating: build a focused program list, reflect on what excites you, and consider the NSF GRFP.",
    category: "Guide · Grad school",
  },
  {
    number: "001",
    title: "Beginner’s guide to OpenClaw",
    href: "/blog/begginers-guide-to-openclaw",
    date: "March 28, 2026",
    dateTime: "2026-03-28",
    description:
      "OpenClaw can save time, effort, and money by acting as an AI assistant that takes actions for you. Here is a beginner-friendly walkthrough for getting it running with Telegram and Gmail.",
    category: "Guide · AI tools",
  },
];

export default function BlogPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="writing" />
      <main className="writing-index">
        <header className="writing-index__header">
          <div>
            <p className="eyebrow">Field notes / 2026</p>
            <h1>Writing</h1>
            <p className="writing-index__intro">My posts.</p>
          </div>
          <div className="writing-index__protein" aria-hidden="true">
            <Image
              src="/protein.png"
              alt=""
              width={2554}
              height={2344}
              sizes="300px"
            />
          </div>
        </header>

        <section className="writing-index__list" aria-label="All posts">
          <p className="section-label">All entries · {String(posts.length).padStart(2, "0")}</p>
          {posts.map((post) => (
            <article className="post-row" key={post.href}>
              <div className="post-row__index">{post.number}</div>
              <div className="post-row__main">
                <h2>
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
              </div>
              <div className="post-row__meta">
                <time dateTime={post.dateTime}>{post.date}</time>
                <span>{post.category}</span>
              </div>
              <Link className="post-row__arrow" href={post.href} aria-label={`Read ${post.title}`}>
                ↗
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
