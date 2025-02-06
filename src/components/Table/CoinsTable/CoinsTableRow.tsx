import ChangePercentage from "@/components/ChangePercentage/ChangePercentage";
import SparklineChart from "@/components/Charts/SparklineChart/SparklineChart";
import CoinPlaceholder from "@/assets/icons/CoinPlaceholder";

import { formatCurrency } from "@/utils/format";

import { MESSAGES } from "@/constants/messages";

import type { Coin } from "@/types/coin";

interface CoinsTableRowProps {
  coinsData: Coin[];
}

const CoinsTableRow = ({ coinsData }: CoinsTableRowProps) => {
  return (
    <>
      {coinsData.map((coin) => {
        return (
          <tr key={coin.id}>
            <td>{coin?.market_cap_rank || MESSAGES.EMPTY_TABLE_VALUE}</td>
            <td>
              <div className="flex flex-wrap items-center gap-2 font-medium">
                {coin?.image ? (
                  <img src={coin?.image} width={24} height={24} alt={`${coin?.name} icon`} />
                ) : (
                  <CoinPlaceholder />
                )}

                <p>
                  {coin?.name || MESSAGES.EMPTY_TABLE_VALUE}
                  <span className="pl-2 text-xs font-light uppercase">{coin.symbol}</span>
                </p>
              </div>
            </td>
            <td className="font-medium">
              {coin?.current_price
                ? formatCurrency({ number: coin.current_price })
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
                ? formatCurrency({ number: coin.market_cap })
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
                MESSAGES.NO_PROVIDED_CHARTS
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CoinsTableRow;
