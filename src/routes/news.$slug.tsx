import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { EXCHANGES } from "@/data/exchanges";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const a = ARTICLES.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: a ? `${a.title} | CoinSiglieri` : "Article | CoinSiglieri" },
        { name: "description", content: a?.excerpt ?? "" },
        { property: "og:title", content: a?.title ?? "Article" },
        { property: "og:description", content: a?.excerpt ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: () => (
    <main className="bg-bg min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="eyebrow text-muted">404</div>
        <h1 className="mt-3 text-3xl font-bold text-txt">Article not found</h1>
        <Link to="/news" className="mt-6 inline-flex items-center gap-2 text-emerald hover:text-cyan"><ArrowLeft size={14} /> Back to News</Link>
      </div>
    </main>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: typeof ARTICLES[number] };
  // Single full article for the lead piece; others render an abbreviated layout.
  if (article.slug === "best-micar-licensed-exchanges-eu-2026") return <MicarArticle article={article} />;
  return <GenericArticle article={article} />;
}

function MicarArticle({ article }: { article: typeof ARTICLES[number] }) {
  const top5 = EXCHANGES.filter((e) => e.micarLicensed).slice(0, 5);
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <main className="bg-bg">
      <article className="mx-auto max-w-3xl px-6 md:px-8 py-16">
        <Link to="/news" className="inline-flex items-center gap-2 text-xs text-muted hover:text-txt mb-8">
          <ArrowLeft size={12} /> All articles
        </Link>

        <div className="eyebrow text-emerald">{article.category}</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-txt tracking-tight leading-tight">{article.title}</h1>
        <p className="mt-4 text-xl text-muted leading-relaxed">Bybit leads at 94/100. Here's the full ranking with methodology.</p>

        <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted hairline-b pb-6">
          <span>{article.author}</span><span className="text-dim">·</span><span>{article.date}</span><span className="text-dim">·</span><span>{article.readTime}</span>
        </div>

        <div className="prose prose-invert max-w-none mt-10 space-y-6 text-[15px] text-txt/90 leading-[1.75]">
          <h2 className="text-2xl font-bold text-txt mt-10">What MiCAR actually means in 2026</h2>
          <p>
            The EU's Markets in Crypto-Assets Regulation went into full effect across all 27 member states. For exchanges, that means a single passport license replaces the patchwork of national VASP registrations that used to govern operations from Bucharest to Berlin. For users, it means a clearer line between operators who play inside the framework and those who don't.
          </p>
          <p>
            The licensing barrier is real. It requires segregated custody, regular proof of reserves, defined complaint-handling, capital reserves scaled to assets under custody, and ongoing reporting to ESMA and national competent authorities. Cheap to claim, expensive to maintain. That's what makes it useful as a ranking signal.
          </p>

          <h2 className="text-2xl font-bold text-txt mt-10">Why MiCAR matters for your exchange choice</h2>
          <p>
            Three reasons. First, recourse: if something breaks, you have a regulated entity to file against in your jurisdiction. Second, custody assurance: MiCAR-licensed venues must segregate user assets from operational treasury. Third, longevity: an operator willing to absorb the license cost is signaling multi-year commitment to the European market.
          </p>

          <h2 className="text-2xl font-bold text-txt mt-10">The 2026 top 5</h2>
          <p>Every venue below is MiCAR-licensed and scored against the same five pillars. Affiliate links are disclosed; scoring is not.</p>

          <div className="mt-6 space-y-4 not-prose">
            {top5.map((e, i) => (
              <div key={e.id} className="hairline rounded-[3px] bg-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-dim">#{i + 1}</span>
                    <span className="text-lg font-semibold text-txt">{e.name}</span>
                    <span className="font-mono text-xs text-emerald">{e.score}/100</span>
                  </div>
                  <a href={e.affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-cyan hover:text-emerald">
                    Visit <ArrowRight size={11} />
                  </a>
                </div>
                <p className="mt-3 text-[14px] text-txt/85 leading-relaxed">{e.proSummary}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-txt mt-10">The five-pillar methodology</h2>
          <p>
            Security &amp; Custody carries 30% — the highest weight because lost custody is the single failure mode no other strength compensates for. Proof of Reserves gets 25%, because a security model nobody can verify is a marketing model. Compliance &amp; Licensing weighs 20% in 2026 because MiCAR finally made compliance a measurable input rather than vibes. Liquidity &amp; Execution carries 15%, which matters less than fee tables suggest once spreads are measured properly. Track Record rounds out at 10% — old enough to matter, recent enough not to dominate.
          </p>

          <h2 className="text-2xl font-bold text-txt mt-10">Future outlook</h2>
          <p>
            Expect MiCAR to compress the field. The licensed operators will keep separating from the unlicensed by 2027, and we'll likely see two or three current top-15 names lose EU market access entirely. Card programs are where the next round of differentiation happens — see <Link to="/cards" className="text-cyan hover:text-emerald">our cards leaderboard</Link>.
          </p>

          <p className="text-muted text-sm italic mt-10">
            Want this analysis applied to your specific country and trading profile? <Link to="/find-my-exchange" className="text-emerald hover:text-cyan">Run the 8-question match</Link>.
          </p>
        </div>
      </article>

      {/* Related */}
      <section className="mx-auto max-w-3xl px-6 md:px-8 py-16 hairline-t">
        <div className="eyebrow text-emerald mb-6">Related</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map((a) => (
            <Link key={a.slug} to="/news/$slug" params={{ slug: a.slug }} className="hairline rounded-[3px] bg-card p-5 hover:hairline-cyan transition-colors">
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">{a.category}</div>
              <h3 className="mt-2 text-sm font-semibold text-txt leading-snug">{a.title}</h3>
              <div className="mt-3 font-mono text-[10px] text-muted">{a.readTime}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function GenericArticle({ article }: { article: typeof ARTICLES[number] }) {
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <main className="bg-bg">
      <article className="mx-auto max-w-3xl px-6 md:px-8 py-16">
        <Link to="/news" className="inline-flex items-center gap-2 text-xs text-muted hover:text-txt mb-8">
          <ArrowLeft size={12} /> All articles
        </Link>
        <div className="eyebrow text-emerald">{article.category}</div>
        <h1 className="mt-3 text-4xl font-bold text-txt tracking-tight leading-tight">{article.title}</h1>
        <p className="mt-4 text-xl text-muted leading-relaxed">{article.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted hairline-b pb-6">
          <span>{article.author}</span><span className="text-dim">·</span><span>{article.date}</span><span className="text-dim">·</span><span>{article.readTime}</span>
        </div>
        <div className="mt-10 space-y-5 text-[15px] text-txt/90 leading-[1.75]">
          <p>This piece is being prepared for publication. Subscribe to the newsletter to get it on Friday morning before it hits the public index.</p>
          <p>In the meantime, the <Link to="/compare" className="text-cyan hover:text-emerald">exchange leaderboard</Link> and <Link to="/cards" className="text-cyan hover:text-emerald">card comparison</Link> already reflect the underlying data this article uses.</p>
        </div>
      </article>
      <section className="mx-auto max-w-3xl px-6 md:px-8 py-16 hairline-t">
        <div className="eyebrow text-emerald mb-6">Related</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map((a) => (
            <Link key={a.slug} to="/news/$slug" params={{ slug: a.slug }} className="hairline rounded-[3px] bg-card p-5 hover:hairline-cyan transition-colors">
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">{a.category}</div>
              <h3 className="mt-2 text-sm font-semibold text-txt leading-snug">{a.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
