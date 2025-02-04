import Card from "../Card";

import type { TrendingCoin } from "@/types/coin";
import TrendingCoinsList from "@/components/TrendingCoinsList/TrendingCoinsList";
import { trendingCoinsConfig } from "@/config/uiConfig";

interface TrendingCoinsCardProps {
  coins: TrendingCoin[];
}

const TrendingCoinsCard = ({ coins }: TrendingCoinsCardProps) => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Trending coins</p>
      </div>
      <TrendingCoinsList coins={coins} count={trendingCoinsConfig.base.showInList} />
    </Card>
  );
};

export default TrendingCoinsCard;
