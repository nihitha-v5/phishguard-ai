import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export function ProductPreviewSection() {
  // UI Mock Data cleanly structured for future backend/AI response mapping
  const previewData = {
    riskScore: 87,
    maxScore: 100,
    severity: "HIGH RISK",
    threatType: "Credential Harvesting",
    targetSubject: "Urgent: Verify Your Microsoft 365 Account Within 24h",
    sender: "security-alert@micros0ft-support-portal.net",
    analyzedAt: "Just now",
    indicators: [
      {
        name: "Urgency",
        description: "Coercive 24-hour deadline designed to panic victim.",
        severity: "Critical",
      },
      {
        name: "Credential request",
        description: "Prompts victim to enter password and 2FA auth token.",
        severity: "Critical",
      },
      {
        name: "Suspicious URL",
        description: "Domain 'micros0ft-support-portal.net' contains typo-squatting.",
        severity: "High",
      },
      {
        name: "Sender mismatch",
        description: "Display name says Microsoft Support but domain is unverified.",
        severity: "High",
      },
    ],
    recommendedActions: [
      { action: "Do not click", detail: "Avoid interacting with any embedded links or buttons." },
      { action: "Do not enter credentials", detail: "Never submit passwords or MFA codes on third-party domains." },
      { action: "Verify sender", detail: "Check the authentic Microsoft security portal independently." },
      { action: "Report message", detail: "Flag this message to your organization's IT / SOC department." },
    ],
  };

  return (
    <section className="relative py-20 bg-[#070a13] border-t border-slate-800/80">
      {/* Background illumination */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-rose-950/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/30 px-3.5 py-1 text-xs font-semibold text-rose-300 mb-3">
            <AlertOctagon className="h-3.5 w-3.5 text-rose-400" />
            <span>Interactive Threat Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Inspect Threats with Complete Clarity
          </h2>
          <p className="mt-3 text-base text-slate-400">
            PhishGuard AI decomposes deceptive payloads into concrete risk
            factors and provides immediate defensive countermeasures.
          </p>
        </div>

        {/* Big Dashboard Preview Window */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-700/80 bg-[#0c1222] shadow-[0_0_50px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#090e1a] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline">
                dossier://scan-849204-analysis.phishguard
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded bg-rose-500/10 border border-rose-500/30 px-2.5 py-0.5 font-mono text-xs font-semibold text-rose-400">
                ACTIVE THREAT DETECTED
              </span>
            </div>
          </div>

          {/* Main Dossier Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Top Stat Banner: Risk Score + Threat Type */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-xl border border-rose-500/30 bg-gradient-to-r from-rose-950/30 via-slate-900/60 to-slate-900/60 p-6">
              {/* Risk Score Circle / Stat */}
              <div className="md:col-span-4 flex items-center gap-5 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0">
                <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-[#090d18] border-2 border-rose-500/60 shadow-[0_0_25px_rgba(244,63,94,0.25)]">
                  <div className="text-center">
                    <span className="text-3xl font-black text-rose-400">
                      {previewData.riskScore}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      / {previewData.maxScore}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Risk Score
                  </div>
                  <div className="text-xl font-extrabold text-rose-400 tracking-wide mt-0.5">
                    {previewData.severity}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Severe probability of credential theft
                  </div>
                </div>
              </div>

              {/* Threat Classification */}
              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Classified Threat:
                  </span>
                  <span className="text-lg font-bold text-white">
                    {previewData.threatType}
                  </span>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 px-3.5 py-2 text-xs font-mono text-slate-300">
                  <span className="text-slate-500">Subject: </span>
                  <span className="text-slate-200">{previewData.targetSubject}</span>
                  <br />
                  <span className="text-slate-500">Sender: </span>
                  <span className="text-rose-400">{previewData.sender}</span>
                </div>
              </div>
            </div>

            {/* Split Columns: Indicators (Left) & Recommended Actions (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Identified Indicators */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <span>Detected Indicators</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    4 High-Confidence Matches
                  </span>
                </div>

                <div className="space-y-3">
                  {previewData.indicators.map((indicator, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-800/90 bg-slate-900/50 p-4 transition hover:border-slate-700"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-rose-500" />
                          {indicator.name}
                        </span>
                        <span className="text-[11px] font-semibold text-rose-400 bg-rose-950/50 border border-rose-500/30 px-2 py-0.5 rounded">
                          {indicator.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-4">
                        {indicator.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Recommended Defensive Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Recommended Actions</span>
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono">
                    Defensive Protocol
                  </span>
                </div>

                <div className="space-y-3">
                  {previewData.recommendedActions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-slate-800/90 bg-slate-900/50 p-4 transition hover:border-slate-700"
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-100">
                          {item.action}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
