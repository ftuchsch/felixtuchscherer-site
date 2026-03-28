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

      <section className="mx-auto w-full max-w-5xl px-6 pb-14">
        <div className="w-full text-left text-purple-900">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-base leading-7 text-purple-900/80">
            Hey! I'm Felix. Born in France, grew up in California, and now I study in Boston.
            I'm interested in the intersection between ML and biology. With all of our
            advancements in AI, I believe a lot of it can be used to unravel the arcana of
            biology. Cancer, aging, genetic disorders, and many more diseases will likely
            see treatments or cures within the next few decades. 
            <strong> I yearn to be at that forefront.</strong> 
          </p>
          <p className="mt-4 text-base leading-7 text-purple-900/80">
            In my free time, I train Brazilian Jiu-Jitsu (4 stripe white belt; hopefully
            blue soon!!), read fiction (Brandon Sanderson is my favorite author), and
            explore the world. <strong> Life is ephemeral, and I hope to relish it. </strong>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <div className="max-w-3xl text-left text-purple-900">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 space-y-10">
            <article>
              <h3 className="text-xl font-semibold">
                <a
                  href="https://sites.google.com/bu.edu/joseph-mccarthy-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
                >
                  Joseph-McCarthy Group - BU College of Engineering
                </a>
              </h3>
              <p className="mt-1 text-base font-semibold text-purple-900/85">
                Research Assistant
                <span className="mx-3 font-semibold">&bull;</span>
                Boston, MA
                <span className="mx-3 font-semibold">&bull;</span>
                Nov 2024 - Present
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-8 text-base leading-8 text-purple-900/90">
                <li>
                  Ran AlphaFold3 multiseed structure prediction for a set of 16
                  proteins, identifying patterns in cryptic site formation
                </li>
                <li>
                  Built python workflows with Biopython and NumPy to analyze AF3
                  predictions for over 24,000 structures, enabling large-scale
                  benchmarking of AF3 prediction accuracy
                </li>
                <li>
                  Designed ligand RMSD script leveraging RDKit SMARTS mappings
                  to resolve symmetry-related ambiguities, reducing mismapped
                  cases by 12.5%
                </li>
              </ul>
            </article>

            <article>
              <h3 className="text-xl font-semibold">
                <a
                  href="https://basilmenu.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
                >
                  Basil
                </a>
              </h3>
              <p className="mt-1 text-base font-semibold text-purple-900/85">
                Chief Technology Officer
                <span className="mx-3 font-semibold">&bull;</span>
                Boston, MA
                <span className="mx-3 font-semibold">&bull;</span>
                Feb 2025 - Present
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-8 text-base leading-8 text-purple-900/90">
                <li>
                  Lead 100% of development, building a full-stack restaurant
                  dish recommendation engine with Next.js and TypeScript,
                  piloting with Xenia Greek Hospitality as our initial launch
                  partner
                </li>
                <li>
                  Developed an NLP pipeline using OpenAI API and serverless
                  functions, transforming user entered dietary restriction text
                  into filtered restaurant menu in under 400ms
                </li>
                <li>
                  Architected Supabase/PostgreSQL schema for dishes,
                  ingredients, and cross-contamination links, enabling precise
                  allergy-aware filtering across 100+ menu items per restaurant
                </li>
              </ul>
            </article>

            <article>
              <h3 className="text-xl font-semibold">
                <a
                  href="https://leshlab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
                >
                  Leshchiner Lab - BU Department of Computational Biomedicine
                </a>
              </h3>
              <p className="mt-1 text-base font-semibold text-purple-900/85">
                Research Assistant
                <span className="mx-3 font-semibold">&bull;</span>
                Boston, MA
                <span className="mx-3 font-semibold">&bull;</span>
                Sep 2023 - Nov 2024
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-8 text-base leading-8 text-purple-900/90">
                <li>
                  Conducted high-accuracy basecalling, sequencing, and multi-step
                  DNA library integration using Dorado
                </li>
                <li>
                  Developed Python bioinformatics pipeline for Nanopore FASTQ
                  files, extracting read metrics (length, barcode
                  classification, AT/CG content) for statistical analysis (mean,
                  median, std, etc)
                </li>
                <li>
                  Utilized Seaborn and Matplotlib to build visualization suite
                  for evaluating sequencing quality and filtering reads
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <div className="max-w-3xl text-left text-purple-900">
          <h2 className="text-2xl font-semibold tracking-tight">Blogs</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="/blog/begginers-guide-to-openclaw"
                className="text-lg font-medium text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
              >
                Begginers guide to Openclaw
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
