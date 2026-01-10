import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LitBench: A Benchmark for Creative Writing Evaluation | EACL 2025",
  description: "LitBench provides a standardized benchmark with 2,480 test comparisons and 43,827 training pairs of human-labeled story preferences for evaluating creative writing by LLMs.",
  keywords: ["LitBench", "creative writing", "LLM evaluation", "benchmark", "NLP", "EACL"],
  authors: [
    { name: "Daniel Fein" },
    { name: "Sebastian Russo" },
    { name: "Violet Xiang" },
    { name: "Kabir Jolly" },
    { name: "Rafael Rafailov" },
    { name: "Nick Haber" },
  ],
  openGraph: {
    title: "LitBench: A Benchmark for Creative Writing Evaluation",
    description: "First standardized benchmark for creative writing verification with debiased human labels",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
