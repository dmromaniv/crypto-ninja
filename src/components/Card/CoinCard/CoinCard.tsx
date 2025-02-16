import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Card from "../Card";
import SparklineChart from "@/components/Charts/SparklineChart";
import ChangePercentage from "@/components/ChangePercentage/ChangePercentage";

import ArrowIcon from "@/assets/icons/ArrowIcon";
import PlaceholderIcon from "@/assets/icons/PlaceholderIcon";

import { formatCurrency } from "@/utils/format";

import { MESSAGES } from "@/constants/messages";

import { type Coin } from "@/types/coin";

interface CoinCardProps {
  coin: Coin;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="mb-6 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">
          {coin?.image ? (
            <img src={coin.image} width={30} height={30} alt={`${coin.name} icon`} />
          ) : (
            <PlaceholderIcon width={30} height={30} />
          )}

          {coin.name}
        </p>
        <Link
          to={`coins/${coin.id}`}
          className="flex items-center text-accent-fg/80 transition-colors hover:text-primary dark:text-fg-dark hover:dark:text-primary-dark"
        >
          <span className="link-underscore">{t("links.view_more")}</span>

          <ArrowIcon width={20} height={20} arrowDirection="right" />
        </Link>
      </div>
      <div className="min-[500px]:justify-betweens flex flex-col gap-x-1 min-[500px]:flex-row">
        <div className="w-full min-[500px]:w-1/2">
          <p>
            {t("labels.price")}:
            <span className="font-medium">
              {coin?.current_price
                ? formatCurrency({ number: coin.current_price })
                : t(MESSAGES.NO_PROVIDED_DATA)}
            </span>
          </p>
          <p className="mt-4 flex w-full flex-wrap min-[500px]:flex-col">
            {t("labels.market_cap")}:
            <span className="font-medium">
              {coin?.market_cap
                ? formatCurrency({ number: coin.market_cap })
                : t(MESSAGES.NO_PROVIDED_DATA)}
            </span>
          </p>
          <div className="mt-2 flex gap-x-4 min-[500px]:mt-4">
            <p className="flex flex-wrap gap-x-1">
              {t("time.in_hours", { value: 24 })}:
              {coin?.price_change_percentage_24h_in_currency ? (
                <ChangePercentage percentage={coin.price_change_percentage_24h_in_currency} />
              ) : (
                MESSAGES.EMPTY_CARD_VALUE
              )}
            </p>
            <p className="flex flex-wrap gap-x-1">
              {t("time.in_days", { value: 7 })}:
              {coin?.price_change_percentage_7d_in_currency ? (
                <ChangePercentage percentage={coin.price_change_percentage_7d_in_currency} />
              ) : (
                MESSAGES.EMPTY_CARD_VALUE
              )}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center min-[500px]:w-1/2">
          {coin?.sparkline_in_7d.price ? (
            <SparklineChart
              height={96}
              data={coin.sparkline_in_7d.price}
              variant={coin?.price_change_percentage_7d_in_currency > 0 ? "success" : "destructive"}
            />
          ) : (
            t(MESSAGES.NO_PROVIDED_CHART)
          )}
        </div>
      </div>
    </Card>
  );
};

export default CoinCard;
