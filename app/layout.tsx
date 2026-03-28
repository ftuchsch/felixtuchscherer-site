import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Felix Tuchscherer",
  description:
    "Boston University student focused on computer science, biology, and machine learning.",
  openGraph: {
    title: "Felix Tuchscherer",
    description:
      "Boston University student focused on computer science, biology, and machine learning.",
    url: "https://www.felixtuchscherer.com",
    siteName: "Felix Tuchscherer",
    images: [
      {
        url: "/headshot.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Tuchscherer",
    description:
      "Boston University student focused on computer science, biology, and machine learning.",
    images: ["/headshot.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
