import type { TickItem } from "recharts/types/util/types";
import { useTranslation } from "react-i18next";

import CustomYTick from "../CustomYTick";

interface HistoricalYTickProps {
  x: number;
  y: number;
  payload: TickItem;
}

const HistoricalYTick = ({ x, y, payload }: HistoricalYTickProps) => {
  const { t } = useTranslation();

  return <CustomYTick x={x} y={y} value={t("number.currency_compact", { value: payload.value })} />;
};

export default HistoricalYTick;
