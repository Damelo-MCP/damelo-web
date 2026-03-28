import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "damelo.sh — Share your AI sessions with your team",
  description:
    "Export, import, and browse Claude Code sessions across your organization. Nothing gets lost.",
  openGraph: {
    title: "damelo.sh — Share your AI sessions with your team",
    description:
      "Export, import, and browse Claude Code sessions across your organization. Nothing gets lost.",
    url: "https://damelo.sh",
    siteName: "damelo.sh",
    images: [
      {
        url: "https://damelo.sh/banner.png",
        width: 1200,
        height: 630,
        alt: "damelo.sh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "damelo.sh — Share your AI sessions with your team",
    description:
      "Export, import, and browse Claude Code sessions across your organization. Nothing gets lost.",
    images: ["https://damelo.sh/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
