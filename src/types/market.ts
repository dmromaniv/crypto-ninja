export interface GlobalMarket {
  active_cryptocurrencies: number;
  markets: number;
  total_market_cap: {
    [x: string]: number;
  };
  total_volume: {
    [x: string]: number;
  };
  market_cap_percentage: { [x: string]: number };
  market_cap_change_percentage_24h_usd: number;
}
