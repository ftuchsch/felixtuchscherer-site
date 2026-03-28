import Link from "next/link";

const posts = [
  {
    title: "Begginers guide to Openclaw",
    href: "/blog/begginers-guide-to-openclaw",
  },
];

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
        <p className="mt-3 text-base text-purple-900/80">My posts.</p>
        <ul className="mt-8 space-y-3">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="text-lg font-medium text-purple-900 underline decoration-purple-300 underline-offset-4 transition-opacity hover:opacity-70"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
