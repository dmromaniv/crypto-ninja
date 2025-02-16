import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HistoricalChartFilter from "@/components/HistoricalChartFilter";
import HistoricalChart from "@/components/Charts/HistoricalChart";
import HistoricalChartSkeleton from "@/components/Charts/HistoricalChart/HistoricalChartSkeleton";

import { historicalChartFilters } from "@/config/uiConfig";
import { useGetHistoricalCoinDataByIdQuery } from "@/store/api/coins";

import { currencyConfig } from "@/config/formatConfig";

const CoinChartsSection = () => {
  const [daysRange, setDaysRange] = useState(historicalChartFilters[0].value);

  const { id } = useParams();
  const { t } = useTranslation();

  const { data, isLoading } = useGetHistoricalCoinDataByIdQuery({
    currency: currencyConfig.USD.code,
    days: daysRange,
    id: id as string,
  });

  const onFilterSet = (days: number) => {
    setDaysRange(days);
  };

  return isLoading ? (
    <HistoricalChartSkeleton />
  ) : (
    data && (
      <section>
        <div className="flex flex-col gap-y-8">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-lg">{t("labels.price")}</h2>
              <HistoricalChartFilter onFilterSet={onFilterSet} currentFilterValue={daysRange} />
            </div>

            <HistoricalChart historicalData={data.prices || []} />
          </div>
          <div>
            <h2 className="mb-4 text-lg">{t("labels.market_cap_full")}</h2>

            <HistoricalChart historicalData={data.market_caps || []} />
          </div>
        </div>
      </section>
    )
  );
};

export default CoinChartsSection;
