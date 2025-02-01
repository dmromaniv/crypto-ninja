import ChangePercentage from "@/components/ChangePercentage/ChangePercentage";
import SparklineChart from "@/components/Charts/SparklineChart/SparklineChart";

import { formatNumber } from "@/utils/format";

interface CoinsTableRowProps {
  // eslint-disable-next-line
  coinsData: any[];
}

const CoinsTableRow = ({ coinsData }: CoinsTableRowProps) => {
  return (
    <>
      {coinsData.length > 0 ? (
        coinsData.map((coin) => {
          return (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 font-medium">
                  <img src={coin.image} width={24} height={24} />
                  <p>
                    {coin.name}
                    <span className="pl-2 text-xs font-light uppercase">{coin.symbol}</span>
                  </p>
                </div>
              </td>
              <td className="font-medium">{formatNumber(coin.current_price)}</td>
              <td>
                <ChangePercentage percentage={3.01} />
              </td>
              <td>
                <ChangePercentage
                  percentage={coin.price_change_percentage_7d_in_currency.toFixed(2)}
                />
              </td>
              <td>{formatNumber(coin.market_cap)}</td>
              <td className="h-18">
                <SparklineChart
                  data={coin.sparkline_in_7d.price}
                  variant={
                    coin.price_change_percentage_7d_in_currency > 0 ? "success" : "destructive"
                  }
                />
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>No data</td>
        </tr>
      )}
    </>
  );
};

export default CoinsTableRow;
