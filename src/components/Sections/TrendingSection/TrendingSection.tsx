import MarketCapCard from "@/components/Card/MarketCapCard";
import TotalVolumeCard from "@/components/Card/TotalVolumeCard";
import TrendingCategoriesCard from "@/components/Card/TrendingCategoriesCard";
import TrendingCoinsCard from "@/components/Card/TrendingCoinsCard";
import { useGetTrendingCryptoQuery } from "@/store/api/coins";
import { useGetGlobalMarketDataQuery } from "@/store/api/market";

const TrendingSection = () => {
  const { data: trendingData } = useGetTrendingCryptoQuery();
  const { marketCap, totalVolume } = useGetGlobalMarketDataQuery(undefined, {
    selectFromResult: ({ data }) => ({
      marketCap: data?.total_market_cap ?? {},
      totalVolume: data?.total_volume ?? {},
    }),
  });

  return (
    <section>
      <div className="flex flex-wrap items-stretch gap-4">
        <div className="flex-1">
          <TrendingCoinsCard coins={trendingData?.coins || []} />
        </div>

        <div className="flex w-40 flex-col gap-y-2">
          <div className="flex-1">
            <MarketCapCard marketCap={marketCap["usd"]} />
          </div>
          <div className="flex-1">
            <TotalVolumeCard totalVolume={totalVolume["usd"]} />
          </div>
        </div>
        <div className="flex-1">
          <TrendingCategoriesCard categories={trendingData?.categories || []} />
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
