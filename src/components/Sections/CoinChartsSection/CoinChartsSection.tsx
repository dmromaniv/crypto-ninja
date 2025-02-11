import { useState } from "react";

import HistoricalChartFilter from "@/components/HistoricalChartFilter";
import HistoricalChart from "@/components/Charts/HistoricalChart";

import { historicalChartFilters } from "@/config/uiConfig";

const prices30: [number, number][] = [
  [1731542400000, 90488],
  [1731628800000, 87408],
  [1731715200000, 90948],
  [1731801600000, 90606],
  [1731888000000, 89841],
  [1731974400000, 90535],
  [1732060800000, 92252],
  [1732147200000, 94217],
  [1732233600000, 98509],
  [1732320000000, 98927],
  [1732406400000, 97679],
  [1732492800000, 98016],
  [1732579200000, 93005],
  [1732665600000, 91932],
  [1732752000000, 95981],
  [1732838400000, 95662],
  [1732924800000, 97453],
  [1733011200000, 96513],
  [1733097600000, 97312],
  [1733184000000, 95833],
  [1733270400000, 96032],
  [1733356800000, 98881],
  [1733443200000, 97202],
  [1733529600000, 99974],
  [1733616000000, 99782],
  [1733702400000, 101235],
  [1733788800000, 97354],
  [1733875200000, 96650],
  [1733961600000, 101124],
  [1734048000000, 100001],
  [1734134400000, 101352],
  [1734220800000, 101367],
  [1734307200000, 104722],
  [1734393600000, 106074],
  [1734480000000, 106035],
  [1734566400000, 100356],
  [1734652800000, 97851],
  [1734739200000, 97691],
  [1734825600000, 97203],
  [1734912000000, 95094],
  [1734998400000, 94645],
  [1735084800000, 98696],
  [1735171200000, 99345],
  [1735257600000, 95678],
  [1735344000000, 94332],
  [1735430400000, 95185],
];

const CoinChartsSection = () => {
  const [daysRange, setDaysRange] = useState(historicalChartFilters[0].value);

  const onFilterSet = (days: number) => {
    setDaysRange(days);
  };

  return (
    <section>
      <div className="flex flex-col gap-y-8">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-lg">Price</h2>
            <HistoricalChartFilter onFilterSet={onFilterSet} currentFilterValue={daysRange} />
          </div>

          <HistoricalChart historicalData={prices30} />
        </div>
        <div>
          <h2 className="mb-4 text-lg">Market capitalization</h2>
          <HistoricalChart historicalData={prices30} />
        </div>
      </div>
    </section>
  );
};

export default CoinChartsSection;
