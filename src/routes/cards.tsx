import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { CARDS } from "@/data/cards";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { ScoreRing } from "@/components/Score";

export const Route = createFileRoute("/cards")({
  head: () => ({
    meta: [
      { title: "Crypto Cards Compared — EU 2026 | CoinSiglieri" },
      { name: "description", content: "Bybit, Crypto.com, Coinbase, Wirex and more. Cashback, fees, region coverage, and Apple/Google Pay — independently scored." },
    ],
  }),
  component: CardsPage,
});

function CardsPage() {
  const featured = CARDS.find((c) => c.featured)!;
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
        <div className="eyebrow text-emerald">Crypto Cards</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-txt">
          The cards that actually work in Europe.
        </h1>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Ranked on real EU availability, cashback math after staking requirements, and mobile-wallet support — not on marketing pages.
        </p>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 hairline border-l-[3px] border-l-rust bg-card rounded-[3px] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-4 flex items-start gap-4">
            <div className="font-mono text-5xl text-dim">#1</div>
            <div>
              <ExchangeLogo domain={featured.domain} name={featured.name} size={48} />
              <div className="mt-3 text-xl font-semibold text-txt">{featured.name}</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="hairline-rust rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-rust">Featured</span>
                <span className="hairline-emerald rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald">MiCAR</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex items-center gap-6">
            <ScoreRing value={featured.score} />
            <div className="space-y-2 text-sm">
              <div><span className="text-muted">Cashback: </span><span className="text-emerald font-mono">{featured.cashback}</span></div>
              <div><span className="text-muted">Region: </span><span className="text-txt">{featured.region}</span></div>
              <div><span className="text-muted">Currencies: </span><span className="text-txt font-mono">{featured.currencies}+</span></div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="text-sm text-txt/90 leading-relaxed">{featured.summary}</p>
            <a
              href={featured.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-emerald px-4 py-3 text-sm font-medium text-[#08110d] hover:bg-emerald/90"
            >
              Get Bybit Card <ArrowRight size={14} />
            </a>
            <div className="font-mono text-[10px] text-dim">Sponsored · Editorial score independent</div>
          </div>
        </motion.div>

        {/* Table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-txt">Comparison table</h2>
          <div className="mt-6 hairline rounded-[3px] overflow-x-auto bg-card">
            <table className="w-full text-sm">
              <thead className="font-mono text-[10px] uppercase tracking-widest text-muted">
                <tr className="hairline-b">
                  {["Card", "Issuer", "Region", "Cashback", "Currencies", "Issuance", "Monthly", "ATM", "Apple Pay", "Google Pay", "Visit"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CARDS.map((c) => (
                  <tr key={c.id} className="hairline-b last:border-b-0 hover:bg-white/[0.02]">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <ExchangeLogo domain={c.domain} name={c.name} size={22} />
                        <span className="text-txt">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted">{c.issuer}</td>
                    <td className="px-4 py-3 text-muted whitespace-nowrap">{c.region}</td>
                    <td className="px-4 py-3 text-emerald font-mono">{c.cashback}</td>
                    <td className="px-4 py-3 font-mono text-muted">{c.currencies}</td>
                    <td className="px-4 py-3 font-mono text-muted">{c.issuanceFee}</td>
                    <td className="px-4 py-3 font-mono text-muted">{c.monthlyFee}</td>
                    <td className="px-4 py-3 font-mono text-muted">{c.atmFee}</td>
                    <td className="px-4 py-3">{c.applePay ? <Check size={14} className="text-emerald" /> : <span className="text-dim">—</span>}</td>
                    <td className="px-4 py-3">{c.googlePay ? <Check size={14} className="text-emerald" /> : <span className="text-dim">—</span>}</td>
                    <td className="px-4 py-3">
                      <a href={c.affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-cyan hover:text-emerald">
                        Visit <ArrowRight size={11} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-20 space-y-6">
          <h2 className="text-2xl font-bold text-txt">Card reviews</h2>
          {CARDS.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="hairline rounded-[3px] bg-card p-6 md:p-7 grid grid-cols-1 md:grid-cols-5 gap-6"
            >
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-center gap-3">
                  <ExchangeLogo domain={c.domain} name={c.name} size={44} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-txt">{c.name}</h3>
                      <span className="font-mono text-xs text-muted">#{c.rank}</span>
                    </div>
                    <div className="text-xs text-muted">{c.issuer} · {c.region}</div>
                  </div>
                  <div className="ml-auto"><ScoreRing value={c.score} size={56} /></div>
                </div>
                <p className="text-sm text-txt/90 leading-relaxed">{c.summary}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="eyebrow text-emerald mb-1.5">Pros</div>
                    <ul className="space-y-1">
                      {c.pros.map((p) => <li key={p} className="flex gap-2 text-[13px] text-txt/80"><Check size={13} className="text-emerald mt-0.5 shrink-0" />{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="eyebrow text-rust mb-1.5">Cons</div>
                    <ul className="space-y-1">
                      {c.cons.map((x) => <li key={x} className="flex gap-2 text-[13px] text-txt/80"><span className="text-rust mt-0.5">—</span>{x}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col gap-3 justify-center">
                <div className="hairline rounded-[3px] p-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted">Cashback</span><span className="text-emerald font-mono">{c.cashback}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Currencies</span><span className="text-txt font-mono">{c.currencies}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Issuance</span><span className="text-txt font-mono">{c.issuanceFee}</span></div>
                  <div className="flex justify-between"><span className="text-muted">ATM</span><span className="text-txt font-mono">{c.atmFee}</span></div>
                </div>
                <a href={c.affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-emerald px-4 py-2 text-sm font-medium text-[#08110d] hover:bg-emerald/90">
                  Get {c.name} <ArrowRight size={14} />
                </a>
                <div className="font-mono text-[10px] text-dim text-center">May earn commission. Score independent.</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
