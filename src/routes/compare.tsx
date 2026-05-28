import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, ArrowRight, Shield, Activity, Award, Eye } from "lucide-react";
import { EXCHANGES, SCORE_PILLARS, scoreBgColor } from "@/data/exchanges";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { ScoreBar, ScoreRing } from "@/components/Score";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Crypto Exchanges — Leaderboard | CoinSiglieri" },
      { name: "description", content: "The leaderboard nobody paid to be on. 60+ exchanges scored across five pillars. MiCAR-first, EU-native, editorially independent." },
      { property: "og:title", content: "Compare Crypto Exchanges — CoinSiglieri" },
      { property: "og:description", content: "Scored by algorithm. Not by who pays us." },
    ],
  }),
  component: ComparePage,
});

const SECTIONS = [
  { id: "overview", label: "Overview", icon: <Eye size={12} /> },
  { id: "top-exchanges", label: "Top Exchanges", icon: <Award size={12} /> },
  { id: "comparison-table", label: "Comparison Table", icon: <Activity size={12} /> },
  { id: "reviews", label: "Exchange Reviews", icon: <Shield size={12} /> },
  { id: "methodology", label: "Methodology", icon: <Eye size={12} /> },
];

function Sidebar() {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block sticky top-24 h-fit w-[220px] shrink-0">
      <div className="eyebrow mb-4">On this page</div>
      <ul className="space-y-1">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`flex items-center gap-2 rounded-[3px] px-2 py-1.5 text-xs transition-colors ${
                  isActive ? "bg-cyan/10 text-cyan" : "text-muted hover:text-txt"
                }`}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function FeaturedBybit() {
  const e = EXCHANGES[0];
  return (
    <div className="hairline bg-card border-l-[3px] border-l-rust rounded-[3px] p-6 md:p-8 grid grid-cols-1 gap-6 md:grid-cols-12">
      <div className="md:col-span-4 flex items-start gap-4">
        <div className="font-mono text-5xl text-dim">#{e.rank}</div>
        <div>
          <ExchangeLogo domain={e.domain} name={e.name} size={48} />
          <div className="mt-3 text-xl font-semibold text-txt">{e.name}</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="hairline-rust rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-rust">Featured</span>
            <span className="hairline-emerald rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald">MiCAR</span>
          </div>
          <div className="mt-3 text-[12px] text-muted">{e.bestFor}</div>
        </div>
      </div>

      <div className="md:col-span-4 flex items-start gap-5">
        <ScoreRing value={e.score} />
        <div className="flex-1 space-y-1.5">
          {Object.entries(e.scoreBreakdown).map(([k, v]) => (
            <ScoreBar key={k} value={v} label={k} />
          ))}
        </div>
      </div>

      <div className="md:col-span-4 flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "24H Vol", v: e.vol24h },
            { l: "Spread", v: `${e.spreadBTC}bps` },
            { l: "Uptime", v: `${e.uptime90d}%` },
          ].map((m) => (
            <div key={m.l} className="hairline rounded-[3px] p-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">{m.l}</div>
              <div className="mt-1 font-mono text-sm text-txt">{m.v}</div>
            </div>
          ))}
        </div>
        <a
          href={e.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 hairline-cyan rounded-[3px] px-4 py-3 text-sm text-cyan hover:bg-cyan/10"
        >
          Visit Bybit <ArrowRight size={14} />
        </a>
        <div className="font-mono text-[10px] text-dim">Sponsored placement · Editorial score independent</div>
      </div>
    </div>
  );
}

function ExchangeRow({ e }: { e: (typeof EXCHANGES)[number] }) {
  return (
    <div className="grid grid-cols-12 items-center gap-3 px-4 py-3 hairline rounded-[3px] bg-card hover:bg-card/70 transition-colors">
      <div className="col-span-1 font-mono text-sm text-dim">#{e.rank}</div>
      <div className="col-span-3 flex items-center gap-3">
        <ExchangeLogo domain={e.domain} name={e.name} size={28} />
        <span className="text-sm text-txt">{e.name}</span>
      </div>
      <div className="col-span-3 hidden md:flex items-center">
        <div className="w-full max-w-[180px]"><ScoreBar value={e.score} /></div>
      </div>
      <div className="col-span-2 hidden md:flex">
        {e.micarLicensed && (
          <span className="hairline-emerald rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald">MiCAR</span>
        )}
      </div>
      <div className="col-span-2 md:col-span-1 text-right">
        <span className={`rounded-[3px] px-2 py-0.5 font-mono text-xs ${scoreBgColor(e.score)}`}>{e.score}</span>
      </div>
      <div className="col-span-6 md:col-span-2 text-right">
        <a
          href={e.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-cyan hover:text-emerald"
        >
          Visit <ArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

function Review({ e }: { e: (typeof EXCHANGES)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="hairline rounded-[3px] bg-card p-6 md:p-8 grid grid-cols-1 gap-8 md:grid-cols-5"
    >
      <div className="md:col-span-3 space-y-5">
        <div className="flex items-center gap-4">
          <ExchangeLogo domain={e.domain} name={e.name} size={56} />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-txt">{e.name}</h3>
              <span className="font-mono text-xs text-muted">#{e.rank}</span>
            </div>
            <div className="mt-1 text-[13px] text-muted">{e.bestFor}</div>
          </div>
          <div className="ml-auto"><ScoreRing value={e.score} size={64} /></div>
        </div>

        <p className="text-sm text-txt/90 leading-relaxed">{e.proSummary}</p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="eyebrow text-emerald mb-2">Pros</div>
            <ul className="space-y-1.5">
              {e.pros.map((p) => (
                <li key={p} className="flex gap-2 text-[13px] text-txt/80">
                  <Check size={14} className="text-emerald mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow text-rust mb-2">Cons</div>
            <ul className="space-y-1.5">
              {e.cons.map((c) => (
                <li key={c} className="flex gap-2 text-[13px] text-txt/80">
                  <span className="text-rust mt-0.5 shrink-0">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={e.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[3px] bg-emerald px-4 py-2 text-sm font-medium text-[#08110d] hover:bg-emerald/90"
          >
            Visit {e.name} <ArrowRight size={14} />
          </a>
          <span className="font-mono text-[10px] text-dim">May earn commission. Score independent.</span>
        </div>
      </div>

      <div className="md:col-span-2 flex items-center justify-center">
        {/* Phone mockup */}
        <div className="relative">
          <div className="hairline rounded-[18px] bg-bg p-2 w-[180px] h-[340px] flex flex-col">
            <div className="hairline-b py-1 text-center font-mono text-[8px] text-muted">{e.domain}</div>
            <div className="flex-1 flex items-center justify-center">
              <ExchangeLogo domain={e.domain} name={e.name} size={64} />
            </div>
            <div className="hairline-t p-2 text-center">
              <div className={`font-mono text-2xl ${scoreBgColor(e.score).split(" ")[1]}`}>{e.score}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">CoinSiglieri Score</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ComparePage() {
  const top8 = EXCHANGES.slice(0, 8);
  const rest = EXCHANGES.slice(1);
  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 flex gap-10">
        <Sidebar />
        <div className="flex-1 min-w-0 space-y-24">
          {/* Hero */}
          <section id="overview">
            <div className="eyebrow text-emerald">Compare</div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-txt md:text-5xl">
              The leaderboard nobody paid to be on.
            </h1>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              Scored by algorithm. Not by who pays us. The featured slot is editorial, not commercial — Bybit earned #1 on the same five pillars every other exchange is measured against.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px hairline bg-white/[0.04] md:grid-cols-4">
              {[
                { k: "Hands-on", v: "Testing" },
                { k: "30-day", v: "Review cycle" },
                { k: "5 pillars", v: "Weighted" },
                { k: "Editorial", v: "Independence" },
              ].map((s) => (
                <div key={s.v} className="bg-card p-5">
                  <div className="font-mono text-sm text-emerald">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{s.v}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Exchanges */}
          <section id="top-exchanges">
            <div className="eyebrow text-emerald">Top Exchanges</div>
            <h2 className="mt-3 text-3xl font-bold text-txt">Ranked by score, not by spend.</h2>
            <div className="mt-8 space-y-3">
              <FeaturedBybit />
              {rest.map((e) => (
                <ExchangeRow key={e.id} e={e} />
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section id="comparison-table">
            <div className="eyebrow text-emerald">Comparison Table</div>
            <h2 className="mt-3 text-3xl font-bold text-txt">Side by side.</h2>
            <div className="mt-8 hairline rounded-[3px] overflow-x-auto bg-card">
              <table className="w-full text-sm">
                <thead className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  <tr className="hairline-b">
                    {["Exchange", "Score", "MiCAR", "Card", "Futures", "PoR", "Fees", "Visit"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {EXCHANGES.map((e) => (
                    <tr key={e.id} className="hairline-b last:border-b-0 hover:bg-white/[0.02]">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <ExchangeLogo domain={e.domain} name={e.name} size={22} />
                          <span className="text-txt">{e.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3"><span className={`rounded-[3px] px-2 py-0.5 font-mono text-xs ${scoreBgColor(e.score)}`}>{e.score}</span></td>
                      <td className="px-4 py-3">{e.micarLicensed ? <Check size={14} className="text-emerald" /> : <span className="text-dim">—</span>}</td>
                      <td className="px-4 py-3">{e.hasCryptoCard ? <Check size={14} className="text-emerald" /> : <span className="text-dim">—</span>}</td>
                      <td className="px-4 py-3">{e.hasFutures ? <Check size={14} className="text-emerald" /> : <span className="text-dim">—</span>}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted">{e.porCadence}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted">{e.tradingFeeLow}%–{e.tradingFeeHigh}%</td>
                      <td className="px-4 py-3">
                        <a href={e.affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-cyan hover:text-emerald">
                          Visit <ArrowRight size={11} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="space-y-6">
            <div>
              <div className="eyebrow text-emerald">Exchange Reviews</div>
              <h2 className="mt-3 text-3xl font-bold text-txt">Editorial deep-dives.</h2>
            </div>
            {top8.map((e) => <Review key={e.id} e={e} />)}
          </section>

          {/* Methodology */}
          <section id="methodology">
            <div className="eyebrow text-emerald">Methodology</div>
            <h2 className="mt-3 text-3xl font-bold text-txt">Five pillars. One transparent formula.</h2>
            <p className="mt-3 max-w-2xl text-muted leading-relaxed">
              Every exchange is scored against the same five weighted dimensions. Nothing about the formula changes when an exchange becomes a commercial partner — the only thing a partnership unlocks is the editorial right to feature them in promoted real estate.
            </p>
            <div className="mt-8 hairline rounded-[3px] bg-card divide-y divide-white/[0.05]">
              {SCORE_PILLARS.map((p) => (
                <div key={p.name} className="p-5 grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-sm text-txt">{p.name}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-emerald">{p.weight}% weight</div>
                  </div>
                  <div className="col-span-12 md:col-span-9 text-sm text-muted leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
            <button className="mt-8 inline-flex items-center gap-2 hairline-emerald rounded-[3px] px-4 py-2 text-sm text-emerald hover:bg-emerald/5">
              Read full methodology <ArrowRight size={14} />
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
