import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import CustomTooltip from "./CustomTooltip";
import HistoricalXTick from "./HistoricalXTick";
import HistoricalYTick from "./HistoricalYTick";

import { MESSAGES } from "@/constants/messages";

type HistoricalData = [number, number];

interface CoinPricesChartProps {
  historicalData: HistoricalData[];
  daysRange: number;
  chartStroke?: string;
  height?: number;
}

const HistoricalChart = ({
  historicalData,
  daysRange,
  chartStroke = "#8884d8",
  height = 300,
}: CoinPricesChartProps) => {
  const formattedData = useMemo(() => {
    return historicalData.map((data: HistoricalData) => ({
      timestamp: data[0],
      value: data[1],
    }));
  }, [historicalData]);

  return (
    <div>
      {formattedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={formattedData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5146B1" />
                <stop offset="50%" stopColor="#6C63C7" />
                <stop offset="100%" stopColor="#8884d8" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="timestamp"
              strokeWidth={0.1}
              tick={(props) => <HistoricalXTick {...props} daysRange={daysRange} />}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              domain={["auto", "auto"]}
              axisLine={false}
              tickLine={false}
              width={75}
              tick={(props) => <HistoricalYTick {...props} />}
            />
            <CartesianGrid
              className="stroke-axis dark:stroke-axis-dark"
              strokeWidth={0.6}
              vertical={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dot={false}
              dataKey="value"
              stroke={chartStroke}
              fill="url(#colorUv)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p>{MESSAGES.NO_PROVIDED_CHART}</p>
      )}
    </div>
  );
};

export default HistoricalChart;
