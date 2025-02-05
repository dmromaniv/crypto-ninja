import MarketCapCard from "@/components/Card/MarketCapCard";
import MarketCapSkeleton from "@/components/Card/MarketCapCard/MarketCapSkeleton";
import TotalVolumeCard from "@/components/Card/TotalVolumeCard";
import TotalVolumeSkeleton from "@/components/Card/TotalVolumeCard/TotalVolumeSkeleton";
import TrendingCategoriesCard from "@/components/Card/TrendingCategoriesCard";
import TrendingCategoriesSkeleton from "@/components/Card/TrendingCategoriesCard/TrendingCategoriesSkeleton";
import TrendingCoinsCard from "@/components/Card/TrendingCoinsCard";
import TrendingCoinsCardSkeleton from "@/components/Card/TrendingCoinsCard/TrendingCoinsSkeleton";

import { useGetTrendingCryptoQuery } from "@/store/api/coins";
import { useGetGlobalMarketDataQuery } from "@/store/api/market";

const TrendingSection = () => {
  const { data: trendingData, isFetching: isTrendingDataFetching } = useGetTrendingCryptoQuery();
  const {
    marketCap,
    totalVolume,
    isFetching: isGlobalDataFetching,
  } = useGetGlobalMarketDataQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      marketCap: data?.total_market_cap ?? {},
      totalVolume: data?.total_volume ?? {},
      isFetching,
    }),
  });

  return (
    <section>
      <div className="flex flex-wrap items-stretch gap-4">
        <div className="flex-1">
          {isTrendingDataFetching ? (
            <TrendingCoinsCardSkeleton />
          ) : (
            <TrendingCoinsCard coins={trendingData?.coins || []} />
          )}
        </div>

        <div className="flex w-40 flex-col gap-y-2">
          <div className="flex-1">
            {isGlobalDataFetching ? (
              <MarketCapSkeleton />
            ) : (
              <MarketCapCard marketCap={marketCap["usd"]} />
            )}
          </div>
          <div className="flex-1">
            {isGlobalDataFetching ? (
              <TotalVolumeSkeleton />
            ) : (
              <TotalVolumeCard totalVolume={totalVolume["usd"]} />
            )}
          </div>
        </div>
        <div className="flex-1">
          {isTrendingDataFetching ? (
            <TrendingCategoriesSkeleton />
          ) : (
            <TrendingCategoriesCard categories={trendingData?.categories || []} />
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
