import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { historicalChartFilters } from "@/config/uiConfig";

interface HistoricalChartFilterProps {
  currentFilterValue: number;
  onFilterSet: (days: number) => void;
}

const HistoricalChartFilter = ({ onFilterSet, currentFilterValue }: HistoricalChartFilterProps) => {
  const { t } = useTranslation();
  return (
    <ul className="inline-flex justify-end gap-x-2 rounded-md bg-accent dark:bg-accent-dark">
      {historicalChartFilters.map((filter) => {
        return (
          <li key={filter.value}>
            <button
              onClick={() => {
                if (filter.value !== currentFilterValue) {
                  onFilterSet(filter.value);
                }
              }}
              className={clsx(
                "rounded-md px-2 uppercase",
                currentFilterValue === filter.value
                  ? "bg-primary text-light"
                  : "cursor-pointer text-accent-fg dark:text-fg-dark"
              )}
            >
              {t(filter.label, { value: filter.interpolationValue })}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default HistoricalChartFilter;
