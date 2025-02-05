import Card from "../Card";
import SparklineChart from "@/components/Charts/SparklineChart";
import ChangePercentage from "@/components/ChangePercentage/ChangePercentage";

import ArrowIcon from "@/assets/icons/ArrowIcon";

import { formatCurrency } from "@/utils/format";

import { MESSAGES } from "@/constants/messages";

import { type Coin } from "@/types/coin";

interface CoinCardProps {
  coin: Coin;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  return (
    <Card>
      <div className="mb-6 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">
          <img src={coin.image} width={30} height={30} alt={`${coin.name} icon`} />
          {coin.name}
        </p>
        <a
          href="https://www.coingecko.com/en/api"
          target="_blank"
          className="flex items-center text-accent-fg/80 transition-colors hover:text-primary hover:underline dark:text-fg-dark hover:dark:text-primary-dark"
        >
          View more
          <ArrowIcon width={20} height={20} arrowDirection="right" />
        </a>
      </div>
      <div className="min-[500px]:justify-betweens flex flex-col gap-x-1 min-[500px]:flex-row">
        <div className="w-full min-[500px]:w-1/2">
          <p>
            Price:
            <span className="font-medium">
              {coin?.current_price
                ? formatCurrency({ number: coin.current_price })
                : MESSAGES.NO_PROVIDED_DATA}
            </span>
          </p>
          <p>
            Market cap:
            <span className="font-medium">
              {coin?.market_cap
                ? formatCurrency({ number: coin.market_cap })
                : MESSAGES.NO_PROVIDED_DATA}
            </span>
          </p>
          <div className="mt-2 flex gap-x-4 min-[500px]:mt-4">
            <p className="flex gap-x-1">
              24h:
              {coin?.price_change_percentage_24h_in_currency ? (
                <ChangePercentage percentage={coin.price_change_percentage_24h_in_currency} />
              ) : (
                MESSAGES.EMPTY_CARD_VALUE
              )}
            </p>
            <p className="flex gap-x-1">
              7d:
              {coin?.price_change_percentage_7d_in_currency ? (
                <ChangePercentage percentage={coin.price_change_percentage_7d_in_currency} />
              ) : (
                MESSAGES.EMPTY_CARD_VALUE
              )}
            </p>
          </div>
        </div>
        <div className="h-24 w-full min-[500px]:w-1/2">
          {coin?.sparkline_in_7d.price ? (
            <SparklineChart
              data={coin.sparkline_in_7d.price}
              variant={coin?.price_change_percentage_7d_in_currency > 0 ? "success" : "destructive"}
            />
          ) : (
            MESSAGES.NO_PROVIDED_CHARTS
          )}
        </div>
      </div>
    </Card>
  );
};

export default CoinCard;
