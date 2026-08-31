import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedric Nathan Legarda — FullStack Developer",
  description:
    "FullStack developer with 8+ years of experience building web platforms, portals, and casino sites. TypeScript, Next.js, React, Node, AWS.",
  openGraph: {
    title: "Cedric Nathan Legarda — FullStack Developer",
    description:
      "FullStack developer with 8+ years of experience building web platforms, portals, and casino sites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
