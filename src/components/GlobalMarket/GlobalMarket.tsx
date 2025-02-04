import { useGetGlobalMarketDataQuery } from "@/store/api/market";
import ChangePercentage from "../ChangePercentage/ChangePercentage";

import { getLeadingCryptos } from "@/utils/sort";
import { dominanceCoinsConfig } from "@/config/uiConfig";

const GlobalMarket = () => {
  const { data } = useGetGlobalMarketDataQuery();

  const leadingCryptos = getLeadingCryptos(
    dominanceCoinsConfig.showInList,
    data?.market_cap_percentage
  );

  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 py-4 text-xs">
      <li>
        Coins:{" "}
        <span className="font-medium text-primary">
          {data?.active_cryptocurrencies || "No actual data"}
        </span>
      </li>
      <li>
        Exchanges:{" "}
        <span className="font-medium text-primary">{data?.markets || "No actual data"}</span>
      </li>
      <li className="flex gap-x-1">
        Market Cap:
        <ChangePercentage percentage={data?.market_cap_change_percentage_24h_usd || 0} />
      </li>
      <li className="flex items-center gap-x-1">
        Dominance:
        {leadingCryptos.length > 0 ? (
          leadingCryptos.map((coin) => {
            return (
              <p key={`${coin.name}`} className="flex gap-x-1">
                <span className="uppercase">{coin.name}</span>
                <span className="font-medium text-primary">{coin.value.toFixed(1)}%</span>
              </p>
            );
          })
        ) : (
          <p>No actual data</p>
        )}
      </li>
    </ul>
  );
};

export default GlobalMarket;
