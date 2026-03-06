import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto w-full max-w-3xl text-purple-900">
        <Link
          href="/"
          className="text-sm font-medium transition-opacity hover:opacity-70"
        >
          Home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-base text-purple-900/80">
          Blog posts coming soon.
        </p>
      </div>
    </main>
  );
}
