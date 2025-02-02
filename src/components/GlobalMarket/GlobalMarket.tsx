import ChangePercentage from "../ChangePercentage/ChangePercentage";

import { getLeadingCryptos } from "@/utils/sort";

const data = {
  active_cryptocurrencies: 17032,
  upcoming_icos: 0,
  ongoing_icos: 49,
  ended_icos: 3376,
  markets: 1220,
  total_market_cap: {
    usd: 3629979217218.8574,
  },
  total_volume: {
    usd: 134885220327.02634,
  },
  market_cap_percentage: {
    btc: 55.756419709892825,
    eth: 10.799195100899137,
    xrp: 4.747070181259146,
    usdt: 3.8435994281988255,
    sol: 3.0537247659380866,
    bnb: 2.694167624148779,
    usdc: 1.470054482044613,
    doge: 1.3164977413826744,
    ada: 0.9183877035786236,
    steth: 0.8484306659969295,
  },
  market_cap_change_percentage_24h_usd: -4.090346212917757,
  updated_at: 1738420404,
};

const GlobalMarket = () => {
  const leadingCryptos = getLeadingCryptos(3, data.market_cap_percentage);

  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 py-4 text-xs">
      <li>
        Coins: <span className="font-medium text-primary">{data.active_cryptocurrencies}</span>
      </li>
      <li>
        Exchanges: <span className="font-medium text-primary">{data.markets}</span>
      </li>
      <li className="flex gap-x-1">
        Market Cap:
        <ChangePercentage percentage={data.market_cap_change_percentage_24h_usd} />
      </li>
      <li className="flex items-center gap-x-1">
        Dominance:
        {leadingCryptos.map((coin) => {
          return (
            <p key={`${coin.name}`} className="flex gap-x-1">
              <span className="uppercase">{coin.name}:</span>
              <span className="font-medium text-primary">{coin.value.toFixed(1)}%</span>
            </p>
          );
        })}
      </li>
    </ul>
  );
};

export default GlobalMarket;
