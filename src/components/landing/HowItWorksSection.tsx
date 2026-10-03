import React from "react";
import { ClipboardPaste, Cpu, FileSearch, ShieldCheck } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Submit",
      description: "Paste suspicious content.",
      detail: "Input email body, SMS text, or raw suspicious URL into the analysis scanner.",
      icon: ClipboardPaste,
    },
    {
      step: "02",
      title: "Analyze",
      description: "AI and security indicators examine the threat.",
      detail: "Deep heuristic models cross-reference urgency cues, domains, and payload patterns.",
      icon: Cpu,
    },
    {
      step: "03",
      title: "Understand",
      description: "See risk score, indicators and explanation.",
      detail: "Review an explainable risk dossier detailing exact threat vectors and severity.",
      icon: FileSearch,
    },
    {
      step: "04",
      title: "Improve",
      description: "Receive recommendations and security-awareness training.",
      detail: "Get actionable mitigation steps and tailored micro-quizzes to stay protected.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-20 bg-[#090e1a] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Operational Workflow
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How PhishGuard AI Works
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A seamless four-step pipeline from threat intake to lasting awareness.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0d1424] p-6 transition duration-200 hover:border-cyan-500/40 hover:bg-[#111a2f]"
              >
                <div>
                  {/* Top Bar with Step Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-cyan-400/80">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-300/90 mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>PHASE {item.step}</span>
                  <span className="text-cyan-400">Active Pipeline</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
