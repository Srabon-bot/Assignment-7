import { Market } from "./types";

// average of one market's min and max
export const marketAvg = (m: Market) => (m.min + m.max) / 2;

// min / max across all markets, avg = mean of every market's own average
export function getPriceStats(markets: Market[]) {
  if (markets.length === 0) return null;

  const min = Math.min(...markets.map((m) => m.min));
  const max = Math.max(...markets.map((m) => m.max));
  const avg =
    markets.reduce((sum, m) => sum + marketAvg(m), 0) / markets.length;

  return { min, max, avg };
}