import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Skeleton from "react-loading-skeleton";
import ChangePercentage from "../ChangePercentage";
import PlaceholderIcon from "@/assets/icons/PlaceholderIcon";

import { useGetCoinByIdQuery } from "@/store/api/coins";

import { formatCurrency } from "@/utils/format";

import { MESSAGES } from "@/constants/messages";
const CoinInfo = () => {
  const { id } = useParams();
  const { data: coin, isLoading } = useGetCoinByIdQuery(id as string);

  const { t } = useTranslation();

  return isLoading ? (
    <Skeleton className="min-h-40" />
  ) : coin?.id ? (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-wrap items-center gap-x-2 text-2xl">
        {coin?.thumb ? <img src={coin.thumb} alt={`${coin.name} logo`} /> : <PlaceholderIcon />}

        {coin?.name && <p className="font-bold">{coin.name}</p>}
        {coin?.symbol && <p className="text-lf text-lg uppercase">({coin.symbol})</p>}
      </div>

      <p className="flex items-center gap-x-2 text-xl font-medium">
        {coin?.current_price?.["usd"] &&
          formatCurrency({ number: coin.current_price["usd"], notation: "compact" })}

        {coin?.price_change_percentage_24h_in_currency?.["usd"] && (
          <p className="flex gap-x-1">
            <ChangePercentage percentage={coin.price_change_percentage_24h_in_currency["usd"]} />
            <sup className="text-xs text-accent-fg/50 dark:text-accent-fg-dark/60">
              {t("time.in_hours", { value: 24 })}
            </sup>
          </p>
        )}
      </p>
      <p>
        {t("labels.market_cap_full")}:
        <span className="pl-1 font-medium">
          {coin?.market_cap?.["usd"]
            ? formatCurrency({ number: coin.market_cap["usd"], notation: "compact" })
            : MESSAGES.EMPTY_VALUE}
        </span>
      </p>
      <p>
        {t("labels.total_volume")}:
        <span className="pl-1 font-medium">
          {coin?.total_volume?.["usd"]
            ? formatCurrency({ number: coin.total_volume["usd"], notation: "compact" })
            : MESSAGES.EMPTY_VALUE}
        </span>
      </p>
      <p>
        {t("labels.categories")}:
        <span className="pl-1 font-medium">
          {coin?.categories && coin?.categories.length > 0
            ? coin.categories.join(", ")
            : MESSAGES.EMPTY_VALUE}
        </span>
      </p>
    </div>
  ) : (
    <p>{t(MESSAGES.NO_FOUND)}</p>
  );
};

export default CoinInfo;
