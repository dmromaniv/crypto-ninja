import { TooltipProps } from "recharts";
import { useTranslation } from "react-i18next";

import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  const { t } = useTranslation();

  if (!active || !payload || payload.length === 0) return null;

  const { timestamp, value } = payload[0].payload;

  return (
    <div className="rounded-md bg-light p-2 text-accent-fg/80 dark:bg-tooltip-dark dark:text-fg-dark">
      <p className="text-sm font-medium first-letter:capitalize">
        {t("date.datetime_long", { value: timestamp })}
      </p>
      {value && (
        <p className="text-lg font-semibold">
          {t("number.currency_standard", {
            value,
          })}
        </p>
      )}
    </div>
  );
};

export default CustomTooltip;
