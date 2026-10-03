import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Activity,
  Award,
  Zap,
} from "lucide-react";

export function HeroSection() {
  // Structured visual mock telemetry data ready for future state binding
  const securityStats = {
    status: "Protected",
    threatsAnalyzed: 128,
    highRiskDetected: 17,
    awarenessScore: 84,
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 cyber-grid">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Cybersecurity Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Next-Gen Phishing Detection & Awareness</span>
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Detect phishing{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                before it becomes
              </span>{" "}
              an incident.
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mx-auto lg:mx-0">
              PhishGuard AI analyzes suspicious messages and URLs, explains the
              risk behind them, recommends safe actions, and helps users build
              stronger security awareness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/analyze"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Analyze a Threat</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/awareness"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-slate-800/80 hover:text-white hover:border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore Awareness</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Explainable AI Risk Breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Instant Indicators & Action Guides</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Security / Risk Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-blue-600/20 blur-xl opacity-75" />

              <div className="relative rounded-2xl border border-slate-700/70 bg-[#0c1220]/90 p-6 shadow-2xl backdrop-blur-xl">
                {/* Header of the Security Status Card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Security Status
                      </div>
                      <div className="flex items-center gap-2 font-bold text-white text-base">
                        <span>{securityStats.status}</span>
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                    Live Telemetry
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {/* Metric 1 */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                      <span>Threats Analyzed</span>
                      <Activity className="h-3.5 w-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {securityStats.threatsAnalyzed}
                    </div>
                    <div className="mt-1 text-[11px] text-cyan-400/90 font-medium">
                      +14 in last 24h
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                      <span>High-Risk Detected</span>
                      <AlertTriangle className="h-3.5 w-3.5 text-rose-400" />
                    </div>
                    <div className="text-2xl font-bold text-rose-400">
                      {securityStats.highRiskDetected}
                    </div>
                    <div className="mt-1 text-[11px] text-rose-400/80 font-medium">
                      Intercepted & isolated
                    </div>
                  </div>
                </div>

                {/* Awareness Score Bar */}
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-300">
                        Awareness Score
                      </span>
                    </div>
                    <span className="text-sm font-bold text-emerald-400">
                      {securityStats.awarenessScore}%
                    </span>
                  </div>

                  {/* Progress track */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500"
                      style={{ width: `${securityStats.awarenessScore}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Rank: Cyber Aware Tier I</span>
                    <span className="text-emerald-400">Top 15% User Baseline</span>
                  </div>
                </div>

                {/* Recent scan snippet preview */}
                <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <ShieldAlert className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300 truncate max-w-[200px]">
                      Latest scan: Suspicious invoice lure
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-cyan-300 bg-cyan-900/40 px-2 py-0.5 rounded border border-cyan-500/30">
                    Analyzed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
