import TrendingCoinsListSkeleton from "@/components/TrendingCoinsList/TrendingCoinsListSkeleton";

import Card from "../Card";

import { trendingCoinsConfig } from "@/config/uiConfig";

const TrendingCategoriesSkeleton = () => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Trending categories</p>
      </div>
      <TrendingCoinsListSkeleton count={trendingCoinsConfig.base.showInList} />
    </Card>
  );
};

export default TrendingCategoriesSkeleton;
