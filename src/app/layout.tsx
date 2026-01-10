import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
