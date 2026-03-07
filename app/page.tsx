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

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.8c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
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
            <SocialLink href="https://github.com/ftuchsch" label="GitHub">
              <GitHubIcon />
            </SocialLink>
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
                <SocialLink href="https://github.com/ftuchsch" label="GitHub">
                  <GitHubIcon />
                </SocialLink>
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

      <main className="flex items-start justify-center px-6 pt-12 pb-6">
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
            <p className="text-base text-purple-900/80">
              Boston University - Double major in CS & Cell/Mol Bio &apos;27
            </p>
          </div>
        </div>
      </main>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <div className="max-w-3xl text-left text-purple-900">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-base leading-7 text-purple-900/80">
            Work in progress!
          </p>
        </div>
      </section>
    </div>
  );
}
