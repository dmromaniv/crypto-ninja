import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChangePercentage from "@/components/ChangePercentage/ChangePercentage";
import SparklineChart from "@/components/Charts/SparklineChart/SparklineChart";

import PlaceholderIcon from "@/assets/icons/PlaceholderIcon";

import { ChangeDirection, useHighlightChanges } from "@/hooks/useHighlightChanges";

import { highlightTextDuration } from "@/config/uiConfig";

import { MESSAGES } from "@/constants/messages";

import type { Coin } from "@/types/coin";

interface CoinsTableRowProps {
  coinsData: Coin[];
}

const CoinsTableRow = ({ coinsData }: CoinsTableRowProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const highlightedPrices = useHighlightChanges(
    coinsData,
    "current_price",
    highlightTextDuration.coins
  );

  const onRowClick = (id: string) => {
    navigate(`coins/${id}`);
  };

  return (
    <>
      {coinsData.map((coin) => {
        return (
          <tr
            key={coin.id}
            onClick={() => {
              onRowClick(coin.id);
            }}
          >
            <td>{coin?.market_cap_rank || MESSAGES.EMPTY_TABLE_VALUE}</td>
            <td>
              <div className="flex flex-wrap items-center gap-2 font-medium">
                {coin?.image ? (
                  <img src={coin?.image} width={24} height={24} alt={`${coin?.name} icon`} />
                ) : (
                  <PlaceholderIcon />
                )}

                <p>
                  {coin?.name || MESSAGES.EMPTY_TABLE_VALUE}
                  <span className="pl-2 text-xs font-light uppercase">{coin.symbol}</span>
                </p>
              </div>
            </td>
            <td
              className={clsx(
                "font-medium",
                highlightedPrices[coin.id] === ChangeDirection.UP && "text-success",
                highlightedPrices[coin.id] === ChangeDirection.DOWN && "text-destructive"
              )}
            >
              {coin?.current_price
                ? t("number.currency_standard", {
                    value: coin.current_price,
                  })
                : MESSAGES.EMPTY_TABLE_VALUE}
            </td>
            <td>
              {coin?.price_change_percentage_24h_in_currency ? (
                <ChangePercentage percentage={coin?.price_change_percentage_24h_in_currency} />
              ) : (
                MESSAGES.EMPTY_TABLE_VALUE
              )}
            </td>
            <td>
              {coin?.price_change_percentage_7d_in_currency ? (
                <ChangePercentage percentage={coin.price_change_percentage_7d_in_currency} />
              ) : (
                MESSAGES.EMPTY_TABLE_VALUE
              )}
            </td>
            <td>
              {coin?.market_cap
                ? t("number.currency_standard", {
                    value: coin.market_cap,
                  })
                : MESSAGES.EMPTY_TABLE_VALUE}
            </td>
            <td>
              {coin?.sparkline_in_7d?.price.length > 0 ? (
                <SparklineChart
                  data={coin.sparkline_in_7d.price}
                  variant={
                    coin?.price_change_percentage_7d_in_currency > 0 ? "success" : "destructive"
                  }
                />
              ) : (
                t(MESSAGES.NO_PROVIDED_CHART)
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CoinsTableRow;
