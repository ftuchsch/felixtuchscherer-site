import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.felixtuchscherer.com"),
  title: {
    default: "Felix Tuchscherer — Computational Biology",
    template: "%s — Felix Tuchscherer",
  },
  description:
    "Felix Tuchscherer writes and works at the intersection of computational biology, protein modeling, and machine learning.",
  openGraph: {
    title: "Felix Tuchscherer — Computational Biology",
    description:
      "Writing and research at the intersection of computational biology, protein modeling, and machine learning.",
    url: "https://www.felixtuchscherer.com",
    siteName: "Felix Tuchscherer",
    images: [
      {
        url: "/site-preview.png",
        width: 1200,
        height: 630,
        alt: "Felix Tuchscherer’s homepage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Tuchscherer — Computational Biology",
    description:
      "Writing and research at the intersection of computational biology, protein modeling, and machine learning.",
    images: ["/site-preview.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
