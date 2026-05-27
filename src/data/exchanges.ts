export type Exchange = {
  id: string;
  name: string;
  slug: string;
  domain: string;
  score: number;
  rank: number;
  bestFor: string;
  micarLicensed: boolean;
  hasCryptoCard: boolean;
  hasFutures: boolean;
  hasStaking: boolean;
  totalAssets?: number;
  tradingFeeLow: number;
  tradingFeeHigh: number;
  porCadence: "Monthly" | "Quarterly" | "Annual" | "None";
  uptime90d: number;
  spreadBTC: number;
  vol24h: string;
  vol24hDelta: number;
  affiliateUrl: string;
  scoreBreakdown: {
    security: number;
    compliance: number;
    liquidity: number;
    por: number;
    trackRecord: number;
    productDepth: number;
  };
  proSummary: string;
  pros: string[];
  cons: string[];
};

export const EXCHANGES: Exchange[] = [
  {
    id: "bybit", name: "Bybit", slug: "bybit", domain: "bybit.com",
    score: 94, rank: 1, bestFor: "EU traders + crypto card",
    micarLicensed: true, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 350, tradingFeeLow: 0.0, tradingFeeHigh: 0.1,
    porCadence: "Monthly", uptime90d: 99.98, spreadBTC: 0.6,
    vol24h: "$12.4B", vol24hDelta: 8.2,
    affiliateUrl: "https://partner.bybit.com/b/mitica0x",
    scoreBreakdown: { security: 92, compliance: 88, liquidity: 96, por: 90, trackRecord: 94, productDepth: 91 },
    proSummary: "Bybit is the only major exchange that combines a MiCAR license with a fully active 3M+ EU crypto card program. Strongest pick for EU-based users who want both spot/derivatives access and everyday spend in fiat.",
    pros: ["MiCAR-licensed under EU framework", "3M+ crypto cards active across 27 EU countries", "Monthly proof of reserves with user-verifiable Merkle checks", "Tight spreads and deep liquidity on majors"],
    cons: ["Derivatives access region-gated in some EU jurisdictions", "Customer support response time varies in peak periods"],
  },
  {
    id: "kraken", name: "Kraken", slug: "kraken", domain: "kraken.com",
    score: 91, rank: 2, bestFor: "Security & long-term holders",
    micarLicensed: true, hasCryptoCard: false, hasFutures: true, hasStaking: true,
    totalAssets: 28, tradingFeeLow: 0.16, tradingFeeHigh: 0.26,
    porCadence: "Quarterly", uptime90d: 99.95, spreadBTC: 0.9,
    vol24h: "$1.8B", vol24hDelta: 3.1,
    affiliateUrl: "https://www.kraken.com/sign-up?ref=coinsiglieri",
    scoreBreakdown: { security: 98, compliance: 94, liquidity: 84, por: 86, trackRecord: 96, productDepth: 82 },
    proSummary: "Kraken's 12-year unbroken security record and proactive regulatory posture make it the default pick for users who prioritize custody safety over fee economics.",
    pros: ["Never been hacked since 2011 launch", "MiCAR registered, full EU compliance", "Quarterly bi-directional proof of reserves", "Strong staking yields on majors"],
    cons: ["No native crypto card product", "Trading fees higher than competitors"],
  },
  {
    id: "binance", name: "Binance", slug: "binance", domain: "binance.com",
    score: 88, rank: 3, bestFor: "Deepest liquidity globally",
    micarLicensed: false, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 90, tradingFeeLow: 0.0, tradingFeeHigh: 0.1,
    porCadence: "Monthly", uptime90d: 99.92, spreadBTC: 0.4,
    vol24h: "$18.6B", vol24hDelta: 5.4,
    affiliateUrl: "https://accounts.binance.com/register?ref=coinsiglieri",
    scoreBreakdown: { security: 84, compliance: 72, liquidity: 99, por: 88, trackRecord: 80, productDepth: 98 },
    proSummary: "Binance still wins on raw liquidity and product breadth, but MiCAR fragmentation means EU users see inconsistent feature access region-by-region.",
    pros: ["Deepest order books on most pairs", "Widest product catalog (Earn, Launchpad, Convert)", "Monthly Merkle-tree PoR", "Aggressive maker rebates"],
    cons: ["MiCAR licensing fragmented across EU member states", "Past regulatory friction in multiple jurisdictions"],
  },
  {
    id: "okx", name: "OKX", slug: "okx", domain: "okx.com",
    score: 82, rank: 4, bestFor: "DeFi-native traders",
    micarLicensed: false, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 25, tradingFeeLow: 0.08, tradingFeeHigh: 0.1,
    porCadence: "Monthly", uptime90d: 99.9, spreadBTC: 0.7,
    vol24h: "$4.2B", vol24hDelta: -2.1,
    affiliateUrl: "https://www.okx.com/join/coinsiglieri",
    scoreBreakdown: { security: 80, compliance: 70, liquidity: 88, por: 86, trackRecord: 78, productDepth: 92 },
    proSummary: "OKX's Web3 wallet integration and on-chain product depth make it the best bridge between CeFi and DeFi liquidity.",
    pros: ["Integrated Web3 wallet across 100+ chains", "Strong perp futures liquidity", "Monthly PoR with self-audit tool"],
    cons: ["MiCAR status still in progress", "UI complexity steep for beginners"],
  },
  {
    id: "coinbase", name: "Coinbase", slug: "coinbase", domain: "coinbase.com",
    score: 80, rank: 5, bestFor: "US/EU regulated entry",
    micarLicensed: true, hasCryptoCard: true, hasFutures: false, hasStaking: true,
    totalAssets: 130, tradingFeeLow: 0.0, tradingFeeHigh: 0.6,
    porCadence: "Annual", uptime90d: 99.85, spreadBTC: 1.4,
    vol24h: "$2.1B", vol24hDelta: 1.2,
    affiliateUrl: "https://coinbase.com/join/coinsiglieri",
    scoreBreakdown: { security: 90, compliance: 96, liquidity: 78, por: 70, trackRecord: 88, productDepth: 70 },
    proSummary: "Coinbase trades fee economics for regulatory clarity. Best pick for institutions or users who value a publicly traded, audited operator.",
    pros: ["Public company with SEC filings", "MiCAR-licensed across EU", "Strong custody insurance"],
    cons: ["Retail fees among the highest", "Limited derivatives in EU"],
  },
  {
    id: "whitebit", name: "WhiteBIT", slug: "whitebit", domain: "whitebit.com",
    score: 79, rank: 6, bestFor: "European altcoin coverage",
    micarLicensed: true, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 5, tradingFeeLow: 0.1, tradingFeeHigh: 0.1,
    porCadence: "Quarterly", uptime90d: 99.8, spreadBTC: 1.1,
    vol24h: "$2.8B", vol24hDelta: 4.0,
    affiliateUrl: "https://whitebit.com/referral/coinsiglieri",
    scoreBreakdown: { security: 82, compliance: 84, liquidity: 76, por: 78, trackRecord: 72, productDepth: 80 },
    proSummary: "Ukrainian-founded exchange with strong EU footing and broad altcoin coverage. Quietly competitive on listings.",
    pros: ["MiCAR-registered", "Wide altcoin listing catalog", "Native crypto card available in EU"],
    cons: ["Lower liquidity outside top pairs", "Smaller brand awareness"],
  },
  {
    id: "cryptocom", name: "Crypto.com", slug: "crypto-com", domain: "crypto.com",
    score: 77, rank: 7, bestFor: "Crypto card cashback",
    micarLicensed: true, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 18, tradingFeeLow: 0.075, tradingFeeHigh: 0.4,
    porCadence: "Quarterly", uptime90d: 99.7, spreadBTC: 1.3,
    vol24h: "$3.6B", vol24hDelta: 0.8,
    affiliateUrl: "https://crypto.com/app/coinsiglieri",
    scoreBreakdown: { security: 80, compliance: 86, liquidity: 74, por: 76, trackRecord: 74, productDepth: 84 },
    proSummary: "Crypto.com's Visa card remains the most established cashback program in the space, though staking tiers have softened over time.",
    pros: ["MiCAR-licensed", "Most mature crypto Visa card program", "Wide app ecosystem (DeFi, NFT)"],
    cons: ["Card cashback tiers reduced from launch", "Tiered staking requirements"],
  },
  {
    id: "bitstamp", name: "Bitstamp", slug: "bitstamp", domain: "bitstamp.net",
    score: 75, rank: 8, bestFor: "EU institutional onramp",
    micarLicensed: true, hasCryptoCard: false, hasFutures: false, hasStaking: true,
    totalAssets: 4, tradingFeeLow: 0.0, tradingFeeHigh: 0.4,
    porCadence: "Quarterly", uptime90d: 99.9, spreadBTC: 1.6,
    vol24h: "$240M", vol24hDelta: -0.5,
    affiliateUrl: "https://www.bitstamp.net/ref/coinsiglieri",
    scoreBreakdown: { security: 88, compliance: 92, liquidity: 64, por: 72, trackRecord: 90, productDepth: 60 },
    proSummary: "Oldest continuously operating exchange in Europe. Bitstamp's appeal is regulatory pedigree, not feature velocity.",
    pros: ["Operating since 2011 with clean record", "MiCAR-licensed across EU", "Trusted institutional onramp"],
    cons: ["No derivatives or futures product", "No native crypto card"],
  },
  {
    id: "bitget", name: "Bitget", slug: "bitget", domain: "bitget.com",
    score: 74, rank: 9, bestFor: "Copy trading",
    micarLicensed: false, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 7, tradingFeeLow: 0.1, tradingFeeHigh: 0.1,
    porCadence: "Monthly", uptime90d: 99.8, spreadBTC: 1.0,
    vol24h: "$5.8B", vol24hDelta: 6.4,
    affiliateUrl: "https://partner.bitget.com/bg/coinsiglieri",
    scoreBreakdown: { security: 76, compliance: 64, liquidity: 80, por: 82, trackRecord: 70, productDepth: 88 },
    proSummary: "Bitget pioneered copy trading and remains the strongest platform for users who want to mirror experienced traders.",
    pros: ["Best-in-class copy trading product", "Monthly PoR", "Aggressive listings on emerging tokens"],
    cons: ["EU regulatory status still developing", "Lower brand trust than tier-1 venues"],
  },
  {
    id: "mexc", name: "MEXC", slug: "mexc", domain: "mexc.com",
    score: 72, rank: 10, bestFor: "Early-stage token listings",
    micarLicensed: false, hasCryptoCard: true, hasFutures: true, hasStaking: true,
    totalAssets: 3, tradingFeeLow: 0.0, tradingFeeHigh: 0.05,
    porCadence: "Monthly", uptime90d: 99.7, spreadBTC: 1.5,
    vol24h: "$3.2B", vol24hDelta: 9.1,
    affiliateUrl: "https://www.mexc.com/register?inviteCode=coinsiglieri",
    scoreBreakdown: { security: 72, compliance: 60, liquidity: 78, por: 78, trackRecord: 68, productDepth: 86 },
    proSummary: "MEXC consistently lists new tokens first. Pair that with rock-bottom fees and you have the go-to venue for early discovery.",
    pros: ["Largest token catalog of any CEX", "Zero spot trading fees on many pairs", "Fast new-token listings"],
    cons: ["Limited EU regulatory footprint", "Lower liquidity outside top pairs"],
  },
  {
    id: "gateio", name: "Gate.io", slug: "gate-io", domain: "gate.io",
    score: 70, rank: 11, bestFor: "Long-tail altcoins",
    micarLicensed: false, hasCryptoCard: false, hasFutures: true, hasStaking: true,
    totalAssets: 4, tradingFeeLow: 0.1, tradingFeeHigh: 0.2,
    porCadence: "Monthly", uptime90d: 99.6, spreadBTC: 1.8,
    vol24h: "$2.4B", vol24hDelta: 2.0,
    affiliateUrl: "https://www.gate.io/signup/coinsiglieri",
    scoreBreakdown: { security: 70, compliance: 58, liquidity: 72, por: 80, trackRecord: 70, productDepth: 84 },
    proSummary: "Gate.io's catalog rivals MEXC for breadth. Long-running operator with monthly PoR.",
    pros: ["Massive altcoin selection", "Operating since 2013", "Strong startup/launchpad program"],
    cons: ["No crypto card", "MiCAR status unclear"],
  },
  {
    id: "htx", name: "HTX", slug: "htx", domain: "htx.com",
    score: 68, rank: 12, bestFor: "Asian-market exposure",
    micarLicensed: false, hasCryptoCard: false, hasFutures: true, hasStaking: true,
    totalAssets: 3, tradingFeeLow: 0.2, tradingFeeHigh: 0.2,
    porCadence: "Quarterly", uptime90d: 99.5, spreadBTC: 2.0,
    vol24h: "$1.9B", vol24hDelta: -3.4,
    affiliateUrl: "https://www.htx.com/invite/coinsiglieri",
    scoreBreakdown: { security: 70, compliance: 56, liquidity: 70, por: 72, trackRecord: 72, productDepth: 76 },
    proSummary: "Formerly Huobi, HTX retains deep Asian liquidity but EU presence is limited.",
    pros: ["Strong Asian market liquidity", "Long operating history", "Wide derivatives selection"],
    cons: ["Limited EU regulatory engagement", "Brand transition created uncertainty"],
  },
  {
    id: "kucoin", name: "KuCoin", slug: "kucoin", domain: "kucoin.com",
    score: 67, rank: 13, bestFor: "Mid-tier altcoin trading",
    micarLicensed: false, hasCryptoCard: false, hasFutures: true, hasStaking: true,
    totalAssets: 4, tradingFeeLow: 0.1, tradingFeeHigh: 0.1,
    porCadence: "Monthly", uptime90d: 99.5, spreadBTC: 1.4,
    vol24h: "$1.6B", vol24hDelta: 1.8,
    affiliateUrl: "https://www.kucoin.com/r/coinsiglieri",
    scoreBreakdown: { security: 68, compliance: 58, liquidity: 70, por: 76, trackRecord: 66, productDepth: 78 },
    proSummary: "KuCoin's reputation suffered from past regulatory pressure but the platform remains a viable mid-tier venue.",
    pros: ["Wide altcoin coverage", "Monthly PoR", "Active trading bot ecosystem"],
    cons: ["Past US enforcement action", "EU access region-dependent"],
  },
  {
    id: "bitfinex", name: "Bitfinex", slug: "bitfinex", domain: "bitfinex.com",
    score: 65, rank: 14, bestFor: "Professional margin trading",
    micarLicensed: false, hasCryptoCard: false, hasFutures: true, hasStaking: true,
    totalAssets: 5, tradingFeeLow: 0.1, tradingFeeHigh: 0.2,
    porCadence: "Annual", uptime90d: 99.7, spreadBTC: 1.2,
    vol24h: "$420M", vol24hDelta: -1.0,
    affiliateUrl: "https://www.bitfinex.com/sign-up?refcode=coinsiglieri",
    scoreBreakdown: { security: 64, compliance: 60, liquidity: 74, por: 64, trackRecord: 62, productDepth: 78 },
    proSummary: "Bitfinex retains pro-trader features (peer-to-peer margin, complex order types) that few competitors match.",
    pros: ["Peer-to-peer margin funding market", "Advanced order types", "USDT-native liquidity"],
    cons: ["Past hack and ongoing reserve scrutiny", "Limited PoR cadence"],
  },
  {
    id: "gemini", name: "Gemini", slug: "gemini", domain: "gemini.com",
    score: 64, rank: 15, bestFor: "US-regulated custody",
    micarLicensed: false, hasCryptoCard: true, hasFutures: false, hasStaking: false,
    totalAssets: 2, tradingFeeLow: 0.2, tradingFeeHigh: 0.4,
    porCadence: "Quarterly", uptime90d: 99.6, spreadBTC: 1.7,
    vol24h: "$80M", vol24hDelta: -2.0,
    affiliateUrl: "https://www.gemini.com/share/coinsiglieri",
    scoreBreakdown: { security: 86, compliance: 84, liquidity: 50, por: 70, trackRecord: 70, productDepth: 56 },
    proSummary: "Gemini trades volume for regulatory polish. NYDFS-licensed, low liquidity, premium fees.",
    pros: ["NYDFS trust-charter license", "Insured custody", "Native crypto card in US"],
    cons: ["Thin liquidity outside top pairs", "No EU MiCAR presence yet"],
  },
];

export const MICAR_COUNTRIES = new Set([
  "Romania","Bulgaria","Germany","France","Italy","Spain","Netherlands","Belgium","Austria","Poland","Portugal","Greece","Hungary","Czechia","Slovakia","Slovenia","Croatia","Estonia","Latvia","Lithuania","Finland","Sweden","Denmark","Ireland","Cyprus","Malta","Luxembourg",
]);

export const COUNTRIES = [
  { name: "Romania", flag: "🇷🇴" },{ name: "Germany", flag: "🇩🇪" },{ name: "France", flag: "🇫🇷" },{ name: "Italy", flag: "🇮🇹" },{ name: "Spain", flag: "🇪🇸" },{ name: "Netherlands", flag: "🇳🇱" },{ name: "Belgium", flag: "🇧🇪" },{ name: "Austria", flag: "🇦🇹" },{ name: "Poland", flag: "🇵🇱" },{ name: "Portugal", flag: "🇵🇹" },{ name: "Greece", flag: "🇬🇷" },{ name: "Hungary", flag: "🇭🇺" },{ name: "Czechia", flag: "🇨🇿" },{ name: "Slovakia", flag: "🇸🇰" },{ name: "Slovenia", flag: "🇸🇮" },{ name: "Croatia", flag: "🇭🇷" },{ name: "Estonia", flag: "🇪🇪" },{ name: "Latvia", flag: "🇱🇻" },{ name: "Lithuania", flag: "🇱🇹" },{ name: "Finland", flag: "🇫🇮" },{ name: "Sweden", flag: "🇸🇪" },{ name: "Denmark", flag: "🇩🇰" },{ name: "Ireland", flag: "🇮🇪" },{ name: "Cyprus", flag: "🇨🇾" },{ name: "Malta", flag: "🇲🇹" },{ name: "Luxembourg", flag: "🇱🇺" },{ name: "Bulgaria", flag: "🇧🇬" },{ name: "United Kingdom", flag: "🇬🇧" },{ name: "Switzerland", flag: "🇨🇭" },{ name: "Norway", flag: "🇳🇴" },{ name: "United States", flag: "🇺🇸" },{ name: "Canada", flag: "🇨🇦" },{ name: "Australia", flag: "🇦🇺" },{ name: "Brazil", flag: "🇧🇷" },{ name: "Mexico", flag: "🇲🇽" },{ name: "Japan", flag: "🇯🇵" },{ name: "Singapore", flag: "🇸🇬" },{ name: "South Korea", flag: "🇰🇷" },{ name: "United Arab Emirates", flag: "🇦🇪" },{ name: "India", flag: "🇮🇳" },{ name: "Turkey", flag: "🇹🇷" },{ name: "South Africa", flag: "🇿🇦" },{ name: "Argentina", flag: "🇦🇷" },
];

export const SCORE_PILLARS = [
  { name: "Security & Custody", weight: 30, desc: "Cold storage ratio, insurance coverage, incident history, bug bounty maturity." },
  { name: "Proof of Reserves", weight: 25, desc: "Cadence, Merkle-tree user verifiability, liability attestation independence." },
  { name: "Compliance & Licensing", weight: 20, desc: "MiCAR status, jurisdictional licenses, AML/KYC posture, regulatory friction history." },
  { name: "Liquidity & Execution", weight: 15, desc: "BTC spread (bps), order-book depth, slippage on $1M market orders, uptime." },
  { name: "Track Record", weight: 10, desc: "Years operating, security incidents, leadership stability, customer-support responsiveness." },
];

export function scoreColor(score: number) {
  if (score >= 85) return "text-emerald";
  if (score >= 75) return "text-cyan";
  if (score >= 65) return "text-lime";
  return "text-muted";
}

export function scoreBgColor(score: number) {
  if (score >= 85) return "bg-emerald/15 text-emerald";
  if (score >= 75) return "bg-cyan/15 text-cyan";
  if (score >= 65) return "bg-lime/15 text-lime";
  return "bg-dim text-muted";
}
