import { TooltipProps } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

import { formatCurrency, formatTimestamp } from "@/utils/format";

import { dateTimeConfig } from "@/config/formatConfig";

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || payload.length === 0) return null;

  const { timestamp, value } = payload[0].payload;

  const formattedDateTime = formatTimestamp(timestamp, dateTimeConfig.fullDateTime);

  return (
    <div className="rounded-md bg-light p-2 text-accent-fg/80 dark:bg-tooltip-dark dark:text-fg-dark">
      <p className="text-sm font-medium">{formattedDateTime}</p>
      {value && <p className="text-lg font-semibold">{formatCurrency({ number: value })}</p>}
    </div>
  );
};

export default CustomTooltip;
