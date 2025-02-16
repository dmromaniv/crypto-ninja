import { useTranslation } from "react-i18next";

import Card from "../Card";
import TrendingCoinsList from "@/components/TrendingCoinsList/TrendingCoinsList";

import type { TrendingCoin } from "@/types/coin";

import { trendingCoinsConfig } from "@/config/uiConfig";

interface TrendingCoinsCardProps {
  coins: TrendingCoin[];
}

const TrendingCoinsCard = ({ coins }: TrendingCoinsCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">
          {t("labels.trending_coins")}
        </p>
      </div>
      <TrendingCoinsList coins={coins} count={trendingCoinsConfig.base.showInList} />
    </Card>
  );
};

export default TrendingCoinsCard;
