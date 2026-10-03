import React from "react";
import { BrainCircuit, SearchCode, GraduationCap, CheckCircle } from "lucide-react";

export function ValuePropsSection() {
  const valueProps = [
    {
      icon: SearchCode,
      title: "AI Threat Analysis",
      description:
        "Analyze suspicious messages and identify phishing indicators with multi-vector heuristic and contextual inspection.",
      accent: "cyan",
      badge: "Deep Detection",
      highlights: [
        "Header & sender mismatch inspection",
        "Deceptive urgency & credential lure markers",
        "Obfuscated link & typo-squatting evaluation",
      ],
    },
    {
      icon: BrainCircuit,
      title: "Explainable Risk",
      description:
        "Understand why a message is dangerous instead of receiving only a yes/no result. See transparent reasoning and confidence scores.",
      accent: "blue",
      badge: "Transparent AI",
      highlights: [
        "Granular risk scoring (0-100)",
        "Highlighted manipulative phrasing",
        "Plain-language threat justification",
      ],
    },
    {
      icon: GraduationCap,
      title: "Security Awareness",
      description:
        "Turn detected weaknesses into personalized learning and quizzes to build permanent human defense against evolving social engineering.",
      accent: "emerald",
      badge: "Adaptive Learning",
      highlights: [
        "Contextual phishing breakdown quizzes",
        "Personalized weakness remediation",
        "Security awareness metric tracking",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-[#070b14] border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Core Protection Architecture
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineered for precision defense & explainable intelligence.
          </p>
          <p className="mt-4 text-base text-slate-400">
            PhishGuard AI bridges the gap between automated detection and human
            security instincts.
          </p>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0c1222]/80 p-8 shadow-xl transition-all duration-300 hover:border-slate-700 hover:bg-[#10172c] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
              >
                <div>
                  {/* Top Row: Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400/50 group-hover:scale-105 transition">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Micro list highlights */}
                <div className="border-t border-slate-800/80 pt-5 space-y-2.5">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
