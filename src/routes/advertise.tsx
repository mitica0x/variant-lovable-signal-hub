import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Target, Cpu, Users, Megaphone, FileText, Mail, CreditCard, Sparkles, Wrench } from "lucide-react";

export const Route = createFileRoute("/advertise")({
  head: () => ({
    meta: [
      { title: "Advertise on CoinSiglieri — Media Kit" },
      { name: "description", content: "The leaderboard nobody paid to be on. The real estate around it is. Sponsored placements, sponsored articles, and custom campaigns for EU-focused crypto brands." },
    ],
  }),
  component: AdvertisePage,
});

const PLACEMENTS = [
  { Icon: Target, title: "Featured Placement", desc: "Top-of-leaderboard slot on /compare. Rust-accent card with logo, ring score, and CTA.", page: "/compare" },
  { Icon: FileText, title: "Sponsored Article", desc: "Editorially produced longform on /news. Disclosure tag, full attribution, no template content.", page: "/news" },
  { Icon: Mail, title: "Newsletter Mention", desc: "Single dedicated slot in our weekly EU intelligence dispatch. ~12k high-intent operators.", page: "Newsletter" },
  { Icon: CreditCard, title: "Crypto Card Spotlight", desc: "Featured slot on /cards. Same treatment as the exchange leaderboard.", page: "/cards" },
  { Icon: Sparkles, title: "Find My Exchange — Recommended", desc: "Promoted slot in the quiz-result panel. Triggered on user-qualified matches only.", page: "/find-my-exchange" },
  { Icon: Wrench, title: "Custom Campaign", desc: "Multi-surface integration. Microsite, embedded data, market briefing, or strategic engagement.", page: "Custom" },
];

function AdvertisePage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", interests: [] as string[], message: "" });
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function toggleInterest(t: string) {
    setForm((f) => ({ ...f, interests: f.interests.includes(t) ? f.interests.filter((x) => x !== t) : [...f.interests, t] }));
  }

  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20">
        <div className="eyebrow text-emerald">Advertise</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-txt max-w-4xl">
          The leaderboard nobody paid to be on.<br />
          <span className="text-muted">The real estate around it is.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted leading-relaxed">
          Independent intelligence. Editorial scoring. Commercial placement available — clearly disclosed, never traded for ranking.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px hairline bg-white/[0.04] md:grid-cols-4">
          {["EU-native audience", "MiCAR-specialist", "High-intent traffic", "Editorial trust"].map((s) => (
            <div key={s} className="bg-card p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-emerald">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <h2 className="text-3xl font-bold text-txt">Why CoinSiglieri</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Icon: Target, t: "EU / MiCAR Specialist", d: "We cover the regulatory surface no US-centric publication touches. Your campaign reaches operators, not retail tourists." },
            { Icon: Cpu, t: "Algorithmic Scoring", d: "Every ranking is reproducible. That credibility transfers to anything that ranks well — and anything featured alongside it." },
            { Icon: Users, t: "High-Intent Audience", d: "Traders, founders, compliance leads, treasury operators. Not page-view farming — actual buying signals." },
          ].map((c) => (
            <div key={c.t} className="hairline rounded-[3px] bg-card p-6">
              <c.Icon size={18} className="text-emerald" />
              <h3 className="mt-4 text-lg font-semibold text-txt">{c.t}</h3>
              <p className="mt-2 text-[13px] text-muted leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placements */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <h2 className="text-3xl font-bold text-txt">Campaign solutions</h2>
        <p className="mt-3 text-muted">Six placement types. Custom on request. Pricing is conversation-based.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEMENTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="hairline rounded-[3px] bg-card p-6 flex flex-col"
            >
              <p.Icon size={18} className="text-cyan" />
              <h3 className="mt-4 text-lg font-semibold text-txt">{p.title}</h3>
              <p className="mt-2 text-[13px] text-muted leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted">Surface: {p.page}</div>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-emerald hover:text-cyan">
                Reserve placement <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial standards */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="eyebrow text-emerald">Standards</div>
            <h3 className="mt-3 text-2xl font-semibold text-txt">Editorial independence is the product.</h3>
          </div>
          <div className="md:col-span-2 text-sm text-txt/85 leading-relaxed space-y-4">
            <p>
              Placement buys real estate. It does not buy ranking, score adjustments, or removal of unfavorable findings. The scoring formula is published on the methodology page and applied identically to partners and non-partners.
            </p>
            <p>
              Every sponsored unit is labeled. Every commercial article carries a sponsor tag in the byline. Anything that doesn't follow those rules doesn't ship. That boundary is the entire reason a placement here is worth more than a placement on a content farm.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 hairline-t">
        <div className="eyebrow text-muted text-center">Trusted by</div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10 opacity-50">
          <span className="font-mono text-lg text-muted">Bybit</span>
          <span className="font-mono text-lg text-dim">+ partner</span>
          <span className="font-mono text-lg text-dim">+ partner</span>
          <span className="font-mono text-lg text-dim">+ partner</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 md:px-8 py-24">
        <div className="eyebrow text-emerald">Contact</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-txt">Reserve placement.</h2>
        <p className="mt-3 text-muted">We respond within 24 hours.</p>

        {submitted ? (
          <div className="mt-10 hairline-emerald rounded-[3px] bg-emerald/10 p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald">Received</div>
            <p className="mt-2 text-sm text-txt">Thanks. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="hairline rounded-[3px] bg-card px-3 py-3 text-sm text-txt placeholder:text-muted outline-none focus:hairline-cyan" />
              <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="hairline rounded-[3px] bg-card px-3 py-3 text-sm text-txt placeholder:text-muted outline-none focus:hairline-cyan" />
            </div>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full hairline rounded-[3px] bg-card px-3 py-3 text-sm text-txt placeholder:text-muted outline-none focus:hairline-cyan" />

            <div>
              <div className="eyebrow mb-2">Interested in</div>
              <div className="flex flex-wrap gap-2">
                {PLACEMENTS.map((p) => {
                  const selected = form.interests.includes(p.title);
                  return (
                    <button type="button" key={p.title} onClick={() => toggleInterest(p.title)} className={`hairline rounded-[3px] px-3 py-1.5 text-xs ${selected ? "hairline-emerald bg-emerald/10 text-emerald" : "text-muted hover:text-txt"}`}>
                      {p.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you trying to launch?" className="w-full hairline rounded-[3px] bg-card px-3 py-3 text-sm text-txt placeholder:text-muted outline-none focus:hairline-cyan resize-none" />

            <button type="submit" className="inline-flex items-center gap-2 rounded-[3px] bg-emerald px-5 py-3 text-sm font-medium text-[#08110d] hover:bg-emerald/90">
              <Megaphone size={14} /> Reserve placement
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
