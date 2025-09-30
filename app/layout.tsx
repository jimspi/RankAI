import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Search Optimizer - Get Recommended by ChatGPT & AI Engines",
  description: "Optimize your business for AI search engines like ChatGPT, Perplexity, and Google AI Overviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
