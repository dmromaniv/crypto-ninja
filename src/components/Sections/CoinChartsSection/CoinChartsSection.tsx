import { useState } from "react";
import { useParams } from "react-router-dom";

import HistoricalChartFilter from "@/components/HistoricalChartFilter";
import HistoricalChart from "@/components/Charts/HistoricalChart";

import { historicalChartFilters } from "@/config/uiConfig";
import { useGetHistoricalCoinDataByIdQuery } from "@/store/api/coins";

import { currencyConfig } from "@/config/formatConfig";

const CoinChartsSection = () => {
  const [daysRange, setDaysRange] = useState(historicalChartFilters[0].value);

  const { id } = useParams();

  const onFilterSet = (days: number) => {
    setDaysRange(days);
  };

  const { data } = useGetHistoricalCoinDataByIdQuery({
    currency: currencyConfig.USD.code,
    days: daysRange,
    id: id as string,
  });

  return (
    data && (
      <section>
        <div className="flex flex-col gap-y-8">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-lg">Price</h2>
              <HistoricalChartFilter onFilterSet={onFilterSet} currentFilterValue={daysRange} />
            </div>

            <HistoricalChart historicalData={data?.prices || []} />
          </div>
          <div>
            <h2 className="mb-4 text-lg">Market capitalization</h2>
            <HistoricalChart historicalData={data?.market_caps || []} />
          </div>
        </div>
      </section>
    )
  );
};

export default CoinChartsSection;
