import { MESSAGES } from "@/constants/messages";
import { formatCurrency } from "@/utils/format";

import type { TickItem } from "recharts/types/util/types";

interface CustomTickProps {
  x: number;
  y: number;
  dy?: number;
  payload: TickItem;
}

const CustomYTick = ({ x, y, dy = 5, payload }: CustomTickProps) => {
  return (
    <g>
      <text
        x={x}
        y={y}
        dy={dy}
        textAnchor="end"
        className="fill-accent-fg text-xs dark:fill-accent-fg-dark"
      >
        {payload?.value
          ? formatCurrency({ number: payload.value, notation: "compact" })
          : MESSAGES.EMPTY_VALUE}
      </text>
    </g>
  );
};

export default CustomYTick;
