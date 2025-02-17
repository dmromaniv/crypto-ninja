export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  sparkline_in_7d: Sparkline;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h_in_currency: number;
}

interface Sparkline {
  price: number[];
}

export interface HistoricalData {
  prices: [number, number][];
  market_caps: [number, number][];
}

export interface CoinDetailResponse {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
  };

  categories: string[];
  description: {
    [x: string]: string;
  };

  market_data: {
    current_price: {
      [x: string]: number;
    };
    market_cap: {
      [x: string]: number;
    };
    total_volume: {
      [x: string]: number;
    };
    price_change_percentage_24h_in_currency: {
      [x: string]: number;
    };
  };
}

export interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  thumb: string;
  current_price: {
    [x: string]: number;
  };
  price_change_percentage_24h_in_currency: {
    [x: string]: number;
  };
  description: {
    [x: string]: string;
  };
  market_cap: {
    [x: string]: number;
  };
  total_volume: {
    [x: string]: number;
  };
  categories: string[];
}

export interface CoinCategory {
  category_id: string;
  name: string;
}

export interface TrendingData {
  coins: TrendingCoin[];
  categories: TrendingCategory[];
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    symbol: string;
    name: string;
    thumb: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        [x: string]: number;
      };
    };
  };
}

export interface SearchedCoin {
  id: string;
  coin_id: number;
  symbol: string;
  market_cap_rank: number;
  name: string;
  thumb: string;
}

export interface TrendingCategory {
  id: string;
  name: string;
  data: {
    market_cap: number;
    market_cap_change_percentage_24h: {
      [x: string]: number;
    };
  };
}

// Types of query params
export interface CoinQueryParams {
  currency: string;
  order?: string;
  perPage?: number;
  page?: number;
  category?: string;
}

export interface CoinByIdQueryParams {
  id: string;
  currency: string;
  days: number;
}
