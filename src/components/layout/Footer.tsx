import React from "react";
import Link from "next/link";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-850 bg-[#050810] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white font-bold text-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                <Shield className="h-4.5 w-4.5" />
              </div>
              <span className="tracking-tight">PhishGuard AI</span>
            </Link>
            <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
              AI-powered phishing detection and security awareness platform. Detect threats, understand explainable risks, and build lasting security resilience.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Security Engines Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-cyan-400 transition focus:outline-none focus:underline"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/analyze"
                  className="hover:text-cyan-400 transition focus:outline-none focus:underline"
                >
                  Analyze Threat
                </Link>
              </li>
              <li>
                <Link
                  href="/awareness"
                  className="hover:text-cyan-400 transition focus:outline-none focus:underline"
                >
                  Security Awareness
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="hover:text-cyan-400 transition focus:outline-none focus:underline"
                >
                  Scan History
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Capabilities
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">URL Deep Scanner</li>
              <li className="text-slate-400">Email & Text Analysis</li>
              <li className="text-slate-400">Explainable Indicators</li>
              <li className="text-slate-400">Adaptive Quizzes</li>
            </ul>
          </div>

          {/* Security & Compliance */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Trust & Safety
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-1.5 text-slate-400">
                <Lock className="h-3.5 w-3.5 text-cyan-400" />
                <span>Zero Retention Scanning</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Client-Side Privacy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PhishGuard AI. All rights reserved.</p>
          <p className="text-slate-500">
            Engineered for proactive cybersecurity & threat awareness.
          </p>
        </div>
      </div>
    </footer>
  );
}
