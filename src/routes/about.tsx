import { createFileRoute } from "@tanstack/react-router";
import { Mail, Send, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CoinSiglieri — Built by Operators" },
      { name: "description", content: "Founded by Madalin Muraretiu. Crypto trader since 2016, 15 years in derivatives, Bybit Pioneer Romania. Operator, not consultant." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20">
        <div className="eyebrow text-emerald">About</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-txt">Built by operators.</h1>
        <p className="mt-6 max-w-2xl text-muted leading-relaxed">
          CoinSiglieri is what happens when someone who has actually traded the EU crypto market for a decade decides the existing comparison sites aren't good enough.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <h2 className="text-3xl font-bold text-txt">Track record</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px hairline bg-white/[0.04]">
          {[
            { k: "2016", v: "In crypto" },
            { k: "15+ yrs", v: "Derivatives" },
            { k: "EU-native", v: "Bucharest-based" },
          ].map((s) => (
            <div key={s.v} className="bg-card p-10">
              <div className="font-mono text-4xl text-emerald">{s.k}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow mb-3">Past projects</div>
            <ul className="space-y-2 text-sm text-txt/85">
              <li>· Trading desk operator (derivatives, market making)</li>
              <li>· Bybit Pioneer — Romania</li>
              <li>· Multiple EU exchange advisory engagements (MiCAR readiness)</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Speaking</div>
            <ul className="space-y-2 text-sm text-txt/85">
              <li>· CryptoExpoEurope</li>
              <li>· Next Block Expo Warsaw</li>
              <li>· ETH Bucharest</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <h2 className="text-3xl font-bold text-txt">Team</h2>
        <div className="mt-10 hairline rounded-[3px] bg-card p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="aspect-square hairline rounded-[3px] bg-bg flex items-center justify-center">
              <span className="font-mono text-5xl text-emerald">MM</span>
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-txt">Madalin Muraretiu</h3>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">Co-Founder · CoinSiglieri</div>
            </div>
            <p className="text-sm text-txt/85 leading-relaxed">
              Crypto trader since 2016. 15 years in derivatives across traditional and digital asset markets. Bybit Pioneer Romania. International speaker at CryptoExpoEurope, Next Block Expo Warsaw, and ETH Bucharest. Operator, not consultant.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 hairline-t">
        <h2 className="text-3xl font-bold text-txt">Contact</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:hello@coinsiglieri.com" className="hairline rounded-[3px] bg-card p-6 hover:hairline-cyan transition-colors flex items-center gap-4">
            <Mail size={18} className="text-emerald" />
            <div>
              <div className="eyebrow">Email</div>
              <div className="mt-1 text-sm text-txt">hello@coinsiglieri.com</div>
            </div>
          </a>
          <a href="https://t.me/coinsiglieri" target="_blank" rel="noopener noreferrer" className="hairline rounded-[3px] bg-card p-6 hover:hairline-cyan transition-colors flex items-center gap-4">
            <Send size={18} className="text-cyan" />
            <div>
              <div className="eyebrow">Telegram</div>
              <div className="mt-1 text-sm text-txt">@coinsiglieri</div>
            </div>
          </a>
          <a href="https://linkedin.com/company/coinsiglieri" target="_blank" rel="noopener noreferrer" className="hairline rounded-[3px] bg-card p-6 hover:hairline-cyan transition-colors flex items-center gap-4">
            <Linkedin size={18} className="text-cyan" />
            <div>
              <div className="eyebrow">LinkedIn</div>
              <div className="mt-1 text-sm text-txt">/company/coinsiglieri</div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
