import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, CreditCard, Coins, Scale, Lock, Zap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoinSiglieri — All Signal. 0 Guess." },
      { name: "description", content: "EU/MiCAR-focused crypto exchange intelligence. Scored by algorithm. Not by who pays us. 60+ exchanges tracked." },
      { property: "og:title", content: "CoinSiglieri — All Signal. 0 Guess." },
      { property: "og:description", content: "EU/MiCAR-focused crypto exchange intelligence." },
    ],
  }),
  component: Home,
});

const SURFACES = [
  { eyebrow: "01", title: "Exchanges", desc: "60+ venues scored across five weighted pillars." , Icon: Coins},
  { eyebrow: "02", title: "Crypto Cards", desc: "EU card programs ranked on cashback, region, and fees.", Icon: CreditCard },
  { eyebrow: "03", title: "Staking", desc: "Yields tracked across CeFi and institutional offerings.", Icon: Coins },
  { eyebrow: "04", title: "Regulation", desc: "MiCAR status, licensing, and jurisdictional friction.", Icon: Scale },
  { eyebrow: "05", title: "Custody", desc: "Cold-storage ratios, insurance, and incident history.", Icon: Lock },
  { eyebrow: "06", title: "Execution", desc: "Spread, depth, and slippage on real $1M orders.", Icon: Zap },
];

function Particles() {
  const dots = Array.from({ length: 40 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    d: 2 + Math.random() * 4,
    delay: Math.random() * 4,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-px bg-cyan"
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: d.d, delay: d.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function Home() {
  return (
    <main className="bg-bg">
      {/* HERO */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(24,180,212,0.08) 0%, transparent 60%)",
          }}
        />
        <Particles />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 hairline-cyan rounded-[3px] bg-cyan/5 px-3 py-1.5"
          >
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald pulse-dot" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">
              Live · EU Market Intelligence · 60+ Exchanges Tracked
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-5xl font-bold tracking-tight text-txt md:text-7xl lg:text-8xl"
          >
            All Signal.
            <br />
            <span className="text-cyan">0</span> Guess.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-[17px] text-muted leading-relaxed"
          >
            Scored by algorithm. Not by who pays us. EU-native intelligence on every exchange, card, and custody venue that matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/compare"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-emerald px-5 py-3 text-sm font-medium text-[#08110d] transition-colors hover:bg-emerald/90"
            >
              Open the leaderboard <ArrowRight size={16} />
            </Link>
            <Link
              to="/compare"
              hash="methodology"
              className="inline-flex items-center justify-center gap-2 hairline-emerald rounded-[3px] px-5 py-3 text-sm font-medium text-emerald hover:bg-emerald/5"
            >
              How we score <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-mono text-[10px] uppercase tracking-widest text-dim"
          >
            Scroll ↓
          </motion.div>
        </motion.div>
      </section>

      {/* SIX SURFACES */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow text-emerald">What we cover</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-txt md:text-4xl">
            Six surfaces. One source of truth.
          </h2>
          <p className="mt-3 text-muted">Every exchange touch-point, scored independently.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-white/[0.04] hairline md:grid-cols-3">
          {SURFACES.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2 }}
                className="group relative bg-card p-7 transition-colors hover:bg-card/70"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-cyan">{s.eyebrow}</span>
                  <Icon size={16} className="text-muted group-hover:text-cyan transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-txt">{s.title}</h3>
                <p className="mt-2 text-[13px] text-muted leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-8 hairline-t">
        <div className="max-w-2xl">
          <div className="eyebrow text-emerald">Provenance</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-txt md:text-4xl">
            Built by operators. Not by reporters.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px bg-white/[0.04] hairline md:grid-cols-3">
          {[
            { k: "2016", v: "In crypto" },
            { k: "15+ yrs", v: "Derivatives" },
            { k: "EU-native", v: "Bucharest-based" },
          ].map((s) => (
            <div key={s.k} className="bg-card p-10">
              <div className="font-mono text-4xl text-emerald">{s.k}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow text-emerald">Products</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-txt md:text-4xl">
            Two products. Both live.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* C0insiglieri */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative hairline rounded-[3px] bg-card p-8 overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #18b4d4, transparent)" }}
            />
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 hairline-cyan rounded-[3px] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan pulse-dot" /> Live
              </span>
              <span className="eyebrow">EU Market Intelligence</span>
            </div>
            <div className="mt-6 text-2xl font-semibold text-txt">
              C<span className="text-cyan">0</span>insiglieri
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              The internal intelligence dashboard we use to score exchanges in real time. Order-book depth, on-chain reserve flows, MiCAR posture, executive risk — refreshed continuously.
            </p>
            <div className="mt-6 font-mono text-sm text-txt">$699/month · B2B</div>
            <a
              href="https://app.coinsiglieri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 hairline-cyan rounded-[3px] px-4 py-2 text-sm text-cyan hover:bg-cyan/10"
            >
              Open Dashboard <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Ax0n */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative hairline rounded-[3px] bg-card p-8 overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #d4a853, transparent)" }}
            />
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 hairline-amber rounded-[3px] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-amber">
                In Dev
              </span>
              <span className="eyebrow">AI Agent Execution</span>
            </div>
            <div className="mt-6 text-2xl font-semibold text-txt">
              Ax<span className="text-amber">0</span>n
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              The execution protocol for AI agents operating across exchanges. Routes orders, enforces venue-level constraints, and reports back through the same scoring lens.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-muted">
              <span className="text-txt">Node free</span>
              <span>·</span>
              <span>Link $99/mo</span>
              <span>·</span>
              <span>Flux $499/mo</span>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 hairline-amber rounded-[3px] px-4 py-2 text-sm text-amber hover:bg-amber/10">
              Join Waitlist <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-8 hairline-t">
        <div className="max-w-2xl">
          <div className="eyebrow text-emerald">Services</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-txt md:text-4xl">
            We also operate.
          </h2>
          <p className="mt-3 text-muted">When the dashboard isn't enough, we run the engagement.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-white/[0.04] hairline md:grid-cols-3">
          {[
            { t: "Strategy & Positioning", d: "Market entry, competitive positioning, EU go-to-market for exchanges and card programs." },
            { t: "MiCAR Readiness", d: "Licensing pathway, operational gap analysis, jurisdictional sequencing." },
            { t: "Operator Network", d: "Introductions to issuers, custodians, market makers, and regulated banking rails." },
          ].map((s) => (
            <div key={s.t} className="bg-card p-7">
              <Shield size={16} className="text-emerald" />
              <h3 className="mt-4 text-lg font-semibold text-txt">{s.t}</h3>
              <p className="mt-2 text-[13px] text-muted leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-[3px] bg-emerald px-5 py-3 text-sm font-medium text-[#08110d] hover:bg-emerald/90"
          >
            Talk to an operator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
