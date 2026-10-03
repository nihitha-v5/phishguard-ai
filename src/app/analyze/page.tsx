import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, ArrowLeft, Search } from "lucide-react";

export default function AnalyzePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-slate-100">
      <Navbar />
      <main className="flex-1 cyber-grid py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Landing Page</span>
          </Link>

          <div className="rounded-2xl border border-slate-800 bg-[#0c1222] p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Threat Analysis Engine</h1>
                <p className="text-sm text-slate-400">Paste suspicious URLs, emails, or messages.</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
              <Shield className="mx-auto h-12 w-12 text-slate-600 mb-3" />
              <h2 className="text-lg font-semibold text-slate-200">Analysis Module Initialized</h2>
              <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
                The analysis shell is prepared. AI and Bedrock integrations will connect in the next phase.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
