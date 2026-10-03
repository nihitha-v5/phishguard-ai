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
  title: "PhishGuard AI — AI-Powered Phishing Detection & Security Awareness",
  description:
    "Detect threats. Understand the risk. Build stronger security awareness. PhishGuard AI analyzes suspicious messages and URLs with explainable AI intelligence.",
  keywords: [
    "phishing detection",
    "cybersecurity",
    "AI threat analysis",
    "security awareness",
    "phishguard",
    "URL scanner",
  ],
  authors: [{ name: "PhishGuard AI Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#070a13] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
