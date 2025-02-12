import { useNavigate } from "react-router-dom";

import ChangePercentage from "@/components/ChangePercentage";
import PlaceholderIcon from "@/assets/icons/PlaceholderIcon";

import { formatCurrency } from "@/utils/format";

import { MESSAGES } from "@/constants/messages";

import type { TrendingCoin } from "@/types/coin";

interface TrendingCoinsListProps {
  coins: TrendingCoin[];
  count?: number;
}

const TrendingCoinsList = ({ coins, count = coins.length }: TrendingCoinsListProps) => {
  const navigate = useNavigate();

  const onItemClick = (id: string) => {
    navigate(`/coins/${id}`);
  };

  const displayCoins = coins.length > count ? coins.slice(0, count) : coins;

  return (
    <ul>
      {displayCoins?.map(({ item: coin }) => {
        return (
          <li
            key={coin.coin_id}
            className="flex min-h-14 cursor-pointer items-center justify-between gap-x-6 rounded-md p-2 hover:bg-accent/80 hover:dark:bg-hover-dark"
            onClick={() => {
              onItemClick(coin.id);
            }}
          >
            <div className="flex flex-1 items-center gap-x-2">
              {coin?.thumb ? (
                <img
                  className="min-h-[30px] min-w-[30px] overflow-hidden rounded-full"
                  width={30}
                  height={30}
                  src={coin.thumb}
                  alt={`${coin.name} thumb`}
                />
              ) : (
                <PlaceholderIcon width={30} height={30} />
              )}

              <p className="line-clamp-1 font-medium">{coin?.name || MESSAGES.NO_DATA}</p>
            </div>

            <p className="flex flex-col items-end gap-x-4 gap-y-1 md:flex-row md:items-center">
              {coin?.data?.price
                ? formatCurrency({ number: coin.data.price, notation: "compact" })
                : MESSAGES.NO_DATA}
              {coin?.data?.price_change_percentage_24h?.usd && (
                <ChangePercentage percentage={coin.data.price_change_percentage_24h.usd} />
              )}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingCoinsList;
