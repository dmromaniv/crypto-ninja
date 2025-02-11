import { formatTimestamp } from "@/utils/format";

import { dateTimeConfig } from "@/config/formatConfig";

import type { TickItem } from "recharts/types/util/types";

interface CustomTickProps {
  x: number;
  y: number;
  payload: TickItem;
}

const CustomXTick = ({ x, y, payload }: CustomTickProps) => {
  const formattedDate = formatTimestamp(payload.value, dateTimeConfig.shortDate);

  return (
    <g>
      <text
        x={x}
        y={y}
        dy={15}
        textAnchor="middle"
        className="fill-accent-fg text-xs dark:fill-accent-fg-dark"
      >
        {formattedDate}
      </text>
    </g>
  );
};

export default CustomXTick;
