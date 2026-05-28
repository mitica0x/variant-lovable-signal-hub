import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, Search, RotateCcw } from "lucide-react";
import { EXCHANGES, COUNTRIES, MICAR_COUNTRIES } from "@/data/exchanges";
import { ExchangeLogo } from "@/components/ExchangeLogo";

export const Route = createFileRoute("/find-my-exchange")({
  head: () => ({
    meta: [
      { title: "Find My Exchange — 8 Questions, Live Match | CoinSiglieri" },
      { name: "description", content: "Eight questions, one matched exchange. MiCAR-aware, card-aware, trade-style-aware. Live ranking as you answer." },
    ],
  }),
  component: QuizPage,
});

type Answers = {
  country?: string;
  trades?: string[];
  card?: "yes" | "no" | "maybe";
  frequency?: string;
  size?: string;
  risk?: string;
  features?: string[];
  regulation?: string;
};

function scoreForUser(e: (typeof EXCHANGES)[number], a: Answers) {
  let s = e.score;
  if (a.country && MICAR_COUNTRIES.has(a.country) && e.micarLicensed) s += 10;
  if (a.card === "yes" && e.hasCryptoCard) s += 15;
  if (a.card === "yes" && !e.hasCryptoCard) s -= 20;
  if (a.trades?.includes("Futures") && e.hasFutures) s += 5;
  if (a.trades?.includes("Futures") && !e.hasFutures) s -= 15;
  if (a.trades?.includes("Staking") && e.hasStaking) s += 3;
  if (a.regulation === "strict" && e.micarLicensed) s += 8;
  if (a.regulation === "strict" && !e.micarLicensed) s -= 12;
  if (a.features?.includes("Low fees") && e.tradingFeeHigh < 0.15) s += 4;
  if (a.features?.includes("Copy trading") && e.id === "bitget") s += 8;
  if (a.size === "Large (>$100k)" && (e.totalAssets ?? 0) > 20) s += 4;
  return Math.max(0, Math.min(100, s));
}

const STEPS = [
  { key: "country", title: "Where do you trade from?", type: "country" },
  { key: "trades", title: "What do you trade?", type: "multi", options: ["Spot", "Futures", "Options", "Staking", "Margin"] },
  { key: "card", title: "Do you want a crypto card?", type: "single", options: [{ v: "yes", l: "Yes, daily spend" }, { v: "no", l: "No, trading only" }, { v: "maybe", l: "Nice to have" }] },
  { key: "frequency", title: "How often do you trade?", type: "single", options: [{ v: "daily", l: "Daily" }, { v: "weekly", l: "Weekly" }, { v: "monthly", l: "Monthly or less" }] },
  { key: "size", title: "Typical position size?", type: "single", options: [{ v: "Small (<$10k)", l: "Small (<$10k)" }, { v: "Medium ($10k–$100k)", l: "Medium ($10k–$100k)" }, { v: "Large (>$100k)", l: "Large (>$100k)" }] },
  { key: "risk", title: "Risk tolerance?", type: "single", options: [{ v: "low", l: "Conservative" }, { v: "medium", l: "Balanced" }, { v: "high", l: "Aggressive" }] },
  { key: "features", title: "What features matter most?", type: "multi", options: ["Low fees", "Deep liquidity", "Copy trading", "Earn / staking", "Mobile app", "Web3 wallet"] },
  { key: "regulation", title: "Regulation preference?", type: "single", options: [{ v: "strict", l: "MiCAR / fully licensed" }, { v: "flexible", l: "Whatever has best product" }] },
] as const;

function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [countryQuery, setCountryQuery] = useState("");

  const ranking = useMemo(() => {
    return [...EXCHANGES]
      .map((e) => ({ e, s: scoreForUser(e, answers) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 8);
  }, [answers]);

  const isDone = step >= STEPS.length;
  const current = STEPS[step];

  function setAnswer(k: keyof Answers, v: unknown) {
    setAnswers((a) => ({ ...a, [k]: v }));
  }

  function toggleMulti(k: keyof Answers, v: string) {
    setAnswers((a) => {
      const cur = (a[k] as string[] | undefined) ?? [];
      return { ...a, [k]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
    });
  }

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(countryQuery.toLowerCase()),
  );

  return (
    <main className="bg-bg">
      {/* Progress */}
      <div className="hairline-b sticky top-16 z-40 bg-bg/95 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="eyebrow">Find my exchange</span>
            <span className="font-mono text-xs text-muted">{Math.min(step + 1, STEPS.length)} / {STEPS.length}</span>
          </div>
          <div className="h-[3px] bg-dim/60 rounded-[3px] overflow-hidden">
            <motion.div
              className="h-full bg-emerald"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(step, STEPS.length) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Questions */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="eyebrow text-emerald">Question {step + 1}</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-txt tracking-tight">
                  {current.title}
                </h2>

                <div className="mt-8">
                  {current.type === "country" && (
                    <div className="space-y-3">
                      <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                          autoFocus
                          value={countryQuery}
                          onChange={(e) => setCountryQuery(e.target.value)}
                          placeholder="Search countries…"
                          className="w-full hairline rounded-[3px] bg-card pl-9 pr-3 py-3 text-sm text-txt placeholder:text-muted outline-none focus:hairline-cyan"
                        />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto">
                        {filteredCountries.map((c) => {
                          const selected = answers.country === c.name;
                          return (
                            <button
                              key={c.name}
                              onClick={() => setAnswer("country", c.name)}
                              className={`flex items-center gap-2 hairline rounded-[3px] px-3 py-2 text-left text-sm transition-colors ${
                                selected ? "hairline-emerald bg-emerald/10 text-emerald" : "text-txt hover:bg-white/5"
                              }`}
                            >
                              <span>{c.flag}</span>
                              <span className="truncate">{c.name}</span>
                              {MICAR_COUNTRIES.has(c.name) && (
                                <span className="ml-auto font-mono text-[9px] text-emerald">EU</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {current.type === "multi" && (
                    <div className="flex flex-wrap gap-2">
                      {(current.options as readonly string[]).map((o) => {
                        const selected = ((answers[current.key as keyof Answers] as string[]) ?? []).includes(o);
                        return (
                          <button
                            key={o}
                            onClick={() => toggleMulti(current.key as keyof Answers, o)}
                            className={`hairline rounded-[3px] px-4 py-2 text-sm transition-colors ${
                              selected ? "hairline-emerald bg-emerald/10 text-emerald" : "text-txt hover:bg-white/5"
                            }`}
                          >
                            {o}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {current.type === "single" && (
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {(current.options as readonly { v: string; l: string }[]).map((o) => {
                        const selected = answers[current.key as keyof Answers] === o.v;
                        return (
                          <button
                            key={o.v}
                            onClick={() => setAnswer(current.key as keyof Answers, o.v)}
                            className={`hairline rounded-[3px] px-4 py-3 text-left text-sm transition-colors ${
                              selected ? "hairline-emerald bg-emerald/10 text-emerald" : "text-txt hover:bg-white/5"
                            }`}
                          >
                            {o.l}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="mt-10 flex items-center gap-3">
                  <button
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="inline-flex items-center gap-2 hairline rounded-[3px] px-4 py-2 text-sm text-muted disabled:opacity-30 hover:text-txt"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center gap-2 rounded-[3px] bg-emerald px-5 py-2.5 text-sm font-medium text-[#08110d] hover:bg-emerald/90"
                  >
                    Next <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="eyebrow text-emerald">Match</div>
                <h2 className="mt-3 text-4xl font-semibold text-txt tracking-tight">Here's your match.</h2>
                <p className="mt-3 text-muted">Based on your answers, these three rank highest:</p>

                <div className="mt-8 space-y-4">
                  {ranking.slice(0, 3).map(({ e, s }, i) => (
                    <div key={e.id} className="hairline rounded-[3px] bg-card p-6">
                      <div className="flex items-center gap-4">
                        <div className="font-mono text-3xl text-emerald">#{i + 1}</div>
                        <ExchangeLogo domain={e.domain} name={e.name} size={40} />
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-txt">{e.name}</div>
                          <div className="text-xs text-muted">{e.bestFor}</div>
                        </div>
                        <div className="font-mono text-2xl text-emerald">{s}</div>
                      </div>
                      <ul className="mt-4 space-y-1 text-[13px] text-muted">
                        {answers.card === "yes" && e.hasCryptoCard && <li>· Native crypto card available in your region.</li>}
                        {answers.country && MICAR_COUNTRIES.has(answers.country) && e.micarLicensed && <li>· MiCAR-licensed in {answers.country}.</li>}
                        {answers.trades?.includes("Futures") && e.hasFutures && <li>· Futures product live.</li>}
                        {answers.regulation === "strict" && e.micarLicensed && <li>· Meets your strict regulation preference.</li>}
                      </ul>
                      <a
                        href={e.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-[3px] bg-emerald px-4 py-2 text-sm font-medium text-[#08110d] hover:bg-emerald/90"
                      >
                        Visit {e.name} <ArrowRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <button onClick={() => { setStep(0); setAnswers({}); }} className="inline-flex items-center gap-2 hairline rounded-[3px] px-4 py-2 text-sm text-muted hover:text-txt">
                    <RotateCcw size={14} /> Restart
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live ranking */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan pulse-dot" />
              <span className="eyebrow text-cyan">Live ranking</span>
            </div>
            <div className="space-y-2">
              {ranking.map(({ e, s }, i) => (
                <motion.div
                  key={e.id}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`hairline rounded-[3px] bg-card p-3 flex items-center gap-3 ${
                    i < 3 ? "hairline-emerald" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-dim w-5">#{i + 1}</span>
                  <ExchangeLogo domain={e.domain} name={e.name} size={24} />
                  <span className="flex-1 text-sm text-txt truncate">{e.name}</span>
                  <div className="w-16 h-[3px] bg-dim/60 rounded-[3px] overflow-hidden">
                    <motion.div className="h-full bg-emerald" animate={{ width: `${s}%` }} />
                  </div>
                  <span className="font-mono text-xs text-emerald w-8 text-right">{s}</span>
                  <a href={e.affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-emerald">
                    <ArrowRight size={12} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
