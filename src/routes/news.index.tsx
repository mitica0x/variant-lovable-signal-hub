import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News — EU Crypto Market Intelligence | CoinSiglieri" },
      { name: "description", content: "Weekly EU/MiCAR crypto intelligence. Exchange scores, regulation updates, card programs, market signals. Zero noise." },
    ],
  }),
  component: NewsPage,
});

const CATS = ["All", "MiCAR", "Exchanges", "Crypto Cards", "Regulation", "Market Signals"];

function NewsPage() {
  const [cat, setCat] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featured = ARTICLES.find((a) => a.featured)!;
  const rest = ARTICLES.filter((a) => !a.featured).filter((a) => cat === "All" || a.category === cat);

  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
        <div className="eyebrow text-emerald">News</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-txt">
          What we're watching.
        </h1>
        <p className="mt-4 max-w-xl text-muted leading-relaxed">
          Editorial on what changes the EU crypto market this quarter — not what trended yesterday on X.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`hairline rounded-[3px] px-3 py-1.5 text-xs transition-colors ${
                cat === c ? "hairline-emerald bg-emerald/10 text-emerald" : "text-muted hover:text-txt"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        {(cat === "All" || cat === featured.category) && (
          <Link
            to="/news/$slug"
            params={{ slug: featured.slug }}
            className="mt-10 block hairline rounded-[3px] bg-card p-6 md:p-10 hover:hairline-cyan transition-colors group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-emerald">
                  <span>{featured.category}</span><span className="text-dim">·</span><span className="text-muted">Featured</span>
                </div>
                <h2 className="mt-3 text-2xl md:text-4xl font-bold text-txt group-hover:text-cyan transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted">
                  <span>{featured.author}</span><span className="text-dim">·</span><span>{featured.date}</span><span className="text-dim">·</span><span>{featured.readTime}</span>
                </div>
              </div>
              <div className="md:col-span-4 flex md:items-end md:justify-end">
                <span className="inline-flex items-center gap-2 text-sm text-emerald">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => (
            <article key={a.slug} className="hairline rounded-[3px] bg-card p-6 flex flex-col hover:hairline-cyan transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald">{a.category}</span>
              <h3 className="mt-3 text-lg font-semibold text-txt leading-snug">{a.title}</h3>
              <p className="mt-2 text-[13px] text-muted leading-relaxed flex-1">{a.excerpt}</p>
              <div className="mt-5 flex items-center justify-between font-mono text-[10px] text-muted">
                <span>{a.date} · {a.readTime}</span>
                <span className="text-cyan">Read →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <div className="hairline rounded-[3px] bg-card p-10 md:p-16 text-center">
          <div className="eyebrow text-emerald">Newsletter</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-txt">
            Weekly intelligence. <span className="text-cyan">Zero</span> noise.
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto">Friday mornings. One email. No retweets, no recycled headlines.</p>

          {subscribed ? (
            <div className="mt-8 font-mono text-sm text-emerald">✓ Subscribed. Check your inbox.</div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@operator.eu"
                className="flex-1 hairline rounded-[3px] bg-bg px-3 py-3 text-sm text-txt placeholder:text-muted outline-none focus:hairline-cyan"
              />
              <button type="submit" className="rounded-[3px] bg-emerald px-5 py-3 text-sm font-medium text-[#08110d] hover:bg-emerald/90">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
