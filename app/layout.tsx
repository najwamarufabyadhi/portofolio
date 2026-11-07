import type { Metadata } from "next";
import { Inter, Syne, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://najwamaruf.vercel.app"),
  title: "Muhammad Najwa Maruf Abyadhi — Developer Portfolio Hub 2025",
  description: "Full-Stack Software Engineer Portfolio Hub. Live interactive Vercel demos, high-performance web systems, and clean code repositories.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Vercel", "Muhammad Najwa Maruf Abyadhi"],
  authors: [{ name: "Muhammad Najwa Maruf Abyadhi" }],
  openGraph: {
    title: "Muhammad Najwa Maruf Abyadhi — Developer Portfolio Hub",
    description: "Federated Developer Hub with live interactive Vercel demos and production-ready source code.",
    url: "https://najwamaruf.vercel.app",
    siteName: "Najwa Maruf Portfolio",
    images: [
      {
        url: "/assets/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Najwa Maruf Abyadhi Portfolio Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Najwa Maruf Abyadhi — Developer Portfolio Hub",
    description: "Full-Stack Software Engineer Portfolio Hub. Live interactive Vercel demos & clean code repos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${orbitron.variable} ${jetbrainsMono.variable} font-sans bg-obsidian text-text-main antialiased selection:bg-crimson selection:text-white min-h-screen relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

