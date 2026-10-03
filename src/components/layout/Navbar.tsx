"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Analyze", href: "/analyze" },
    { label: "Awareness", href: "/awareness" },
    { label: "History", href: "/history" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#070a13]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Left: Logo / Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-slate-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition">
            <Shield className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-lg">
              <span>PhishGuard</span>
              <span className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 px-1.5 py-0.2 text-[10px] font-semibold text-white tracking-wider uppercase">
                AI
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/analyze"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a13]"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070a13]/95 px-4 pt-2 pb-6 backdrop-blur-xl">
          <div className="space-y-1.5 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-800 pt-4">
            <Link
              href="/analyze"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-500/20"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
