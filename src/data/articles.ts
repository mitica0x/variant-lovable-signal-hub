export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  { slug: "best-micar-licensed-exchanges-eu-2026", title: "Best MiCAR Licensed Crypto Exchanges in EU 2026", excerpt: "Bybit leads at 94/100. We break down the full ranking, the five-pillar methodology, and why MiCAR licensing now sorts winners from speculators.", category: "MiCAR", author: "Madalin Muraretiu", date: "Mar 2026", readTime: "12 min", featured: true },
  { slug: "crypto-card-cashback-tiers-explained", title: "Crypto Card Cashback Tiers: What's Real, What's Marketing", excerpt: "Most '8% cashback' headlines come with staking requirements that make the real yield closer to 1.5%. Here's the breakdown.", category: "Crypto Cards", author: "CoinSiglieri Desk", date: "Mar 2026", readTime: "7 min" },
  { slug: "proof-of-reserves-2026-state", title: "Proof of Reserves in 2026: Which Exchanges Actually Verify", excerpt: "Monthly PoR sounds great until you check whether you can independently verify your own balance. Most can't.", category: "Regulation", author: "CoinSiglieri Desk", date: "Feb 2026", readTime: "9 min" },
  { slug: "eu-derivatives-access-fragmented", title: "Why EU Derivatives Access Looks Fragmented in 2026", excerpt: "Same exchange, different country, different features. MiCAR didn't unify what national regulators kept fragmenting.", category: "Regulation", author: "Madalin Muraretiu", date: "Feb 2026", readTime: "8 min" },
  { slug: "spread-vs-fee-real-cost", title: "Spread vs Fee: The Real Cost of a Trade in 2026", excerpt: "A 0% fee venue with 4bps spread costs more than a 10bps fee venue with 0.5bps spread. Run the math.", category: "Market Signals", author: "CoinSiglieri Desk", date: "Jan 2026", readTime: "6 min" },
  { slug: "exchange-uptime-leaderboard", title: "Exchange Uptime Leaderboard: 90-Day Rolling", excerpt: "Three exchanges held above 99.95%. Six dipped below 99.5% during the February volatility window.", category: "Exchanges", author: "CoinSiglieri Desk", date: "Jan 2026", readTime: "5 min" },
  { slug: "stablecoin-issuer-risk-2026", title: "Stablecoin Issuer Risk: A Practical Framework", excerpt: "Not all stablecoins carry the same custody, redemption, or banking-rail risk. Here's how we rank them.", category: "Market Signals", author: "CoinSiglieri Desk", date: "Jan 2026", readTime: "10 min" },
];
