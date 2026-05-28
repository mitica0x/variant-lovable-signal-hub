import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 hairline-t bg-bg">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="text-lg font-semibold text-txt">
            C<span className="text-cyan">o</span>in<span className="text-cyan">S</span>iglieri
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
            All Signal. <span className="text-cyan">0</span> Guess.
          </p>
          <p className="mt-6 text-xs text-muted max-w-[18ch]">
            EU-native crypto exchange intelligence. Scored by algorithm.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Platform</div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/compare" className="hover:text-txt">Compare</Link></li>
            <li><Link to="/find-my-exchange" className="hover:text-txt">Find My Exchange</Link></li>
            <li><Link to="/cards" className="hover:text-txt">Crypto Cards</Link></li>
            <li><Link to="/news" className="hover:text-txt">News</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Products</div>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="https://app.coinsiglieri.com" target="_blank" rel="noopener noreferrer" className="hover:text-txt">
                C<span className="text-cyan">0</span>insiglieri ↗
              </a>
            </li>
            <li>
              <span className="text-muted">
                Ax<span className="text-amber">0</span>n <span className="ml-1 text-[10px] uppercase tracking-widest text-amber/80">in dev</span>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/about" className="hover:text-txt">About</Link></li>
            <li><Link to="/advertise" className="hover:text-txt">Advertise</Link></li>
            <li><a href="mailto:hello@coinsiglieri.com" className="hover:text-txt">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <span>© 2026 CoinSiglieri · Bucharest, RO · ALL SIGNAL. 0 GUESS.</span>
          <span className="text-dim max-w-xl md:text-right">
            Affiliate disclosure: some outbound exchange links pay commission. Scoring is editorial and independent of any commercial arrangement.
          </span>
        </div>
      </div>
    </footer>
  );
}
