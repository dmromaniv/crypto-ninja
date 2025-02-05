import Skeleton from "react-loading-skeleton";

import ChangePercentage from "../ChangePercentage/ChangePercentage";

import { useGetGlobalMarketDataQuery } from "@/store/api/market";

import { getLeadingCryptos } from "@/utils/sort";
import { dominanceCoinsConfig } from "@/config/uiConfig";

import { MESSAGES } from "@/constants/messages";

const GlobalMarket = () => {
  const { data, isFetching } = useGetGlobalMarketDataQuery();

  const leadingCryptos = getLeadingCryptos(
    dominanceCoinsConfig.showInList,
    data?.market_cap_percentage
  );

  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 py-4 text-xs">
      <li className="flex items-center gap-x-1">
        Coins:
        {isFetching ? (
          <Skeleton className="h-4 min-w-8" />
        ) : (
          <span className="font-medium text-primary">
            {data?.active_cryptocurrencies || MESSAGES.NO_DATA}
          </span>
        )}
      </li>
      <li className="flex items-center gap-x-1">
        Exchanges:
        {isFetching ? (
          <Skeleton className="h-4 min-w-6" />
        ) : (
          <span className="font-medium text-primary">{data?.markets || MESSAGES.NO_DATA}</span>
        )}
      </li>
      <li className="flex items-center gap-x-1">
        Market Cap:
        {isFetching ? (
          <Skeleton className="h-4 min-w-10" />
        ) : data?.market_cap_change_percentage_24h_usd ? (
          <ChangePercentage percentage={data?.market_cap_change_percentage_24h_usd || 0} />
        ) : (
          MESSAGES.NO_DATA
        )}
      </li>
      <li className="flex items-center gap-x-1">
        Dominance:
        {isFetching ? (
          <Skeleton className="h-4 min-w-12" />
        ) : leadingCryptos.length > 0 ? (
          leadingCryptos.map((coin) => {
            return (
              <p key={`${coin.name}`} className="flex gap-x-1">
                <span className="uppercase">{coin?.name}</span>
                {coin?.value && (
                  <span className="font-medium text-primary">{coin.value.toFixed(1)}%</span>
                )}
              </p>
            );
          })
        ) : (
          <p>{MESSAGES.NO_DATA}</p>
        )}
      </li>
    </ul>
  );
};

export default GlobalMarket;
