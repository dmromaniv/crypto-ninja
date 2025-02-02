import MarketCapCard from "@/components/Card/MarketCapCard";
import TotalVolumeCard from "@/components/Card/TotalVolumeCard";
import TrendingCategoriesCard from "@/components/Card/TrendingCategoriesCard";
import TrendingCoinsCard from "@/components/Card/TrendingCoinsCard";

const TrendingSection = () => {
  return (
    <section>
      <div className="flex flex-wrap items-stretch gap-4">
        <div className="flex-1">
          <TrendingCoinsCard />
        </div>

        <div className="flex w-40 flex-col gap-y-2">
          <div className="flex-1">
            <MarketCapCard />
          </div>
          <div className="flex-1">
            <TotalVolumeCard />
          </div>
        </div>
        <div className="flex-1">
          <TrendingCategoriesCard />
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
