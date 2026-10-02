import Link from "next/link";

type SiteHeaderProps = {
  current?: "home" | "writing";
};

export default function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-wordmark" href="/" aria-label="Felix Tuchscherer, home">
          <span>Felix Tuchscherer</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link
            href="/blog"
            aria-current={current === "writing" ? "page" : undefined}
          >
            Writing
          </Link>
          <Link href="/#experience-map">Experience</Link>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <a href="mailto:felix.tuchscherer@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
