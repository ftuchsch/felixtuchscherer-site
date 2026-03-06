import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.35 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.57V9h3.55v11.45Z" />
    </svg>
  );
}

function ScholarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path d="M12 3 1.5 8.25 12 13.5l8.5-4.25V16h2V8.25L12 3Zm-5.5 11.2V18c0 2.2 2.46 3.99 5.5 3.99S17.5 20.2 17.5 18v-3.8L12 17l-5.5-2.8Z" />
    </svg>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-purple-900 transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="w-full px-6 py-5">
        <div className="relative mx-auto flex w-full max-w-5xl items-center">
          <div className="hidden sm:block">
            <Link
              href="/blog"
              className="text-base font-[550] text-purple-900 transition-opacity hover:opacity-70"
            >
              Blog
            </Link>
          </div>

          <Link
            href="/"
            className="absolute left-1/2 hidden -translate-x-1/2 text-lg font-semibold tracking-tight text-purple-900 sm:block"
          >
            Felix Tuchscherer
          </Link>

          <nav className="ml-auto hidden items-center gap-4 sm:flex">
            <SocialLink
              href="https://www.linkedin.com/in/felix-tuchscherer/"
              label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink
              href="https://scholar.google.com/citations?user=8kM3hCUAAAAJ&hl=en&authuser=1&oi=ao"
              label="Google Scholar"
            >
              <ScholarIcon />
            </SocialLink>
          </nav>

          <details className="ml-auto sm:hidden">
            <summary className="cursor-pointer list-none rounded-md p-2 text-purple-900">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
              >
                <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-lg border border-purple-200 bg-white p-4 shadow-sm">
              <Link
                href="/"
                className="block text-center text-lg font-semibold text-purple-900"
              >
                Felix Tuchscherer
              </Link>
              <div className="mt-3 text-center">
                <Link
                  href="/blog"
                  className="text-base font-[550] text-purple-900 transition-opacity hover:opacity-70"
                >
                  Blog
                </Link>
              </div>
              <div className="mt-4 flex items-center justify-center gap-5">
                <SocialLink
                  href="https://www.linkedin.com/in/felix-tuchscherer/"
                  label="LinkedIn"
                >
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink
                  href="https://scholar.google.com/citations?user=8kM3hCUAAAAJ&hl=en&authuser=1&oi=ao"
                  label="Google Scholar"
                >
                  <ScholarIcon />
                </SocialLink>
              </div>
            </div>
          </details>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-84px)] items-start justify-center px-6 pt-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/headshot.png"
            alt="Headshot of Felix Tuchscherer"
            width={220}
            height={220}
            priority
            className="rounded-full object-cover"
          />
          <div className="flex flex-col items-center gap-0.5">
            <h1 className="text-3xl font-semibold tracking-tight text-purple-900">
              Felix Tuchscherer
            </h1>
            <p className="text-base text-purple-900/80">Boston University</p>
          </div>
        </div>
      </main>
    </div>
  );
}
