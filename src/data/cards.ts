export type Card = {
  id: string;
  name: string;
  issuer: string;
  domain: string;
  slug: string;
  rank: number;
  score: number;
  region: string;
  cashback: string;
  currencies: number;
  issuanceFee: string;
  monthlyFee: string;
  atmFee: string;
  applePay: boolean;
  googlePay: boolean;
  affiliateUrl: string;
  summary: string;
  pros: string[];
  cons: string[];
  featured?: boolean;
};

export const CARDS: Card[] = [
  { id: "bybit", name: "Bybit Card", issuer: "Mastercard", domain: "bybit.com", slug: "bybit", rank: 1, score: 93,
    region: "27 EU countries", cashback: "Up to 8%", currencies: 50, issuanceFee: "Free", monthlyFee: "Free", atmFee: "Free up to €200/mo",
    applePay: true, googlePay: true, affiliateUrl: "https://partner.bybit.com/b/mitica0x", featured: true,
    summary: "Bybit Card combines MiCAR-licensed issuance with the largest EU active-card base in crypto. The 8% cashback tier and broad currency support beat every other operator on Europe's continental footprint.",
    pros: ["3M+ active EU cards", "Up to 8% cashback on tier", "50+ supported currencies", "Apple Pay + Google Pay live"],
    cons: ["Highest cashback tier requires BIT staking", "Region-gated outside EU"] },
  { id: "cryptocom", name: "Crypto.com Visa", issuer: "Visa", domain: "crypto.com", slug: "crypto-com", rank: 2, score: 84,
    region: "EU + UK + US", cashback: "1% – 5%", currencies: 30, issuanceFee: "Free", monthlyFee: "Free", atmFee: "Free up to €200/mo",
    applePay: true, googlePay: true, affiliateUrl: "https://crypto.com/app/coinsiglieri",
    summary: "The most established crypto-card brand. Cashback tiers shrunk from launch but core product remains strong.",
    pros: ["Most established brand", "Solid app integration", "Multiple tiers with perks"],
    cons: ["Cashback reduced from launch", "Tier perks require CRO staking"] },
  { id: "coinbase", name: "Coinbase Card", issuer: "Visa", domain: "coinbase.com", slug: "coinbase", rank: 3, score: 76,
    region: "EU + US", cashback: "1% – 4%", currencies: 8, issuanceFee: "Free", monthlyFee: "Free", atmFee: "1%",
    applePay: true, googlePay: true, affiliateUrl: "https://coinbase.com/join/coinsiglieri",
    summary: "Regulated issuer with clean UX, but conversion fees and currency coverage trail competitors.",
    pros: ["Tied to regulated exchange", "Clean app UX"],
    cons: ["Limited currency selection", "Spread on conversions"] },
  { id: "bingx", name: "BingX Card", issuer: "Mastercard", domain: "bingx.com", slug: "bingx", rank: 4, score: 71,
    region: "EU select", cashback: "Up to 4%", currencies: 20, issuanceFee: "Free", monthlyFee: "Free", atmFee: "2%",
    applePay: true, googlePay: false, affiliateUrl: "https://bingx.com/invite/coinsiglieri",
    summary: "Newer entrant. Competitive cashback, narrower country availability.",
    pros: ["Aggressive cashback for new users", "Free issuance"],
    cons: ["Limited country availability", "No Google Pay yet"] },
  { id: "wirex", name: "Wirex Card", issuer: "Visa", domain: "wirex.com", slug: "wirex", rank: 5, score: 68,
    region: "EU + UK", cashback: "Up to 8% in WXT", currencies: 40, issuanceFee: "€10", monthlyFee: "Free", atmFee: "Free up to €250",
    applePay: true, googlePay: true, affiliateUrl: "https://wirexapp.com/r/coinsiglieri",
    summary: "Veteran crypto-card operator. Cashback paid in WXT — yield is token-price-dependent.",
    pros: ["Wide currency support", "Long operating history"],
    cons: ["Cashback paid in WXT token", "Issuance fee on some tiers"] },
  { id: "binance", name: "Binance Card", issuer: "Visa", domain: "binance.com", slug: "binance", rank: 6, score: 66,
    region: "Limited EU", cashback: "Up to 8% (BNB)", currencies: 14, issuanceFee: "Free", monthlyFee: "Free", atmFee: "0.9%",
    applePay: true, googlePay: true, affiliateUrl: "https://accounts.binance.com/register?ref=coinsiglieri",
    summary: "Strong product on paper but EU availability narrowed after regional issuer changes.",
    pros: ["Strong cashback tier on BNB stake", "Tied to deepest exchange"],
    cons: ["EU availability fragmented", "BNB staking required for top tiers"] },
  { id: "mexc", name: "MEXC Card", issuer: "Mastercard", domain: "mexc.com", slug: "mexc", rank: 7, score: 60,
    region: "Limited", cashback: "Up to 3%", currencies: 10, issuanceFee: "Free", monthlyFee: "Free", atmFee: "2%",
    applePay: false, googlePay: false, affiliateUrl: "https://www.mexc.com/register?inviteCode=coinsiglieri",
    summary: "Early-stage product. Useful for MEXC ecosystem users; not a primary card.",
    pros: ["Free issuance", "Integrated with MEXC balance"],
    cons: ["No mobile-wallet support yet", "Narrow region availability"] },
];
