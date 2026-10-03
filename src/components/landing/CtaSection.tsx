import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#070a13] to-[#050810] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-[600px] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-slate-800 bg-[#0c1222]/90 p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>Proactive Human & AI Security</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Think before you click.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Analyze suspicious content and turn every detection into an
            opportunity to improve security awareness.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/analyze"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Analyze a Threat</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/awareness"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-4 text-base font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span>Explore Awareness</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
