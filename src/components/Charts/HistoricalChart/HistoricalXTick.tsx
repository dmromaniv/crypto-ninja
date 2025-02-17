import type { TickItem } from "recharts/types/util/types";
import { useTranslation } from "react-i18next";

import CustomXTick from "../CustomXTick";

import { dateTimeConfig } from "@/config/formatConfig";

interface HistoricalXTickProps {
  x: number;
  y: number;
  daysRange: number;
  payload: TickItem;
}

const HistoricalXTick = ({ x, y, daysRange, payload }: HistoricalXTickProps) => {
  const { t } = useTranslation();

  const formattedDateTime =
    daysRange === 1
      ? t("date.datetime_custom", { value: payload.value, pattern: dateTimeConfig.localizedTime })
      : t("date.datetime_short", { value: payload.value });

  return <CustomXTick x={x} y={y} value={formattedDateTime} />;
};

export default HistoricalXTick;
