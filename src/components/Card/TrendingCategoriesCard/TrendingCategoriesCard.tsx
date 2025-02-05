import Card from "../Card";

import ChangePercentage from "@/components/ChangePercentage";

import { formatCurrency } from "@/utils/format";

import { MESSAGES } from "@/constants/messages";
import { trendingCategoriesConfig } from "@/config/uiConfig";

import type { TrendingCategory } from "@/types/coin";

interface TrendingCategoriesCardProps {
  categories: TrendingCategory[];
}

const TrendingCategoriesCard = ({ categories }: TrendingCategoriesCardProps) => {
  const displayCategories =
    categories.length > trendingCategoriesConfig.showInList
      ? categories.slice(0, trendingCategoriesConfig.showInList)
      : categories;

  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Trending categories</p>
      </div>
      <ul>
        {displayCategories?.map((category) => {
          return (
            <li
              key={category.id}
              className="flex min-h-14 items-center justify-between gap-x-6 rounded-md p-2"
            >
              <p className="line-clamp-1 font-medium">{category?.name || MESSAGES?.NO_DATA}</p>
              <p className="flex min-w-32 flex-col items-end justify-between gap-y-1 md:flex-row md:items-center">
                {category?.data?.market_cap
                  ? formatCurrency({ number: category.data.market_cap, notation: "compact" })
                  : MESSAGES.NO_DATA}

                {category?.data?.market_cap_change_percentage_24h?.usd && (
                  <ChangePercentage
                    percentage={category.data.market_cap_change_percentage_24h.usd}
                  />
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default TrendingCategoriesCard;
