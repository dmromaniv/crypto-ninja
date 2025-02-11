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

import CustomXTick from "../CustomXTick";
import CustomTooltip from "./CustomTooltip";
import CustomYTick from "../CustomYTick";

import { MESSAGES } from "@/constants/messages";

type HistoricalData = [number, number];

interface CoinPricesChartProps {
  historicalData: HistoricalData[];
  chartStroke?: string;
}

const HistoricalChart = ({ historicalData, chartStroke = "#8884d8" }: CoinPricesChartProps) => {
  const formattedData = useMemo(() => {
    return historicalData.map((data: HistoricalData) => ({
      timestamp: data[0],
      value: data[1],
    }));
  }, [historicalData]);

  return (
    <div>
      {formattedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
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
              tick={(props) => <CustomXTick {...props} />}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              domain={["auto", "auto"]}
              axisLine={false}
              tickLine={false}
              tick={(props) => <CustomYTick {...props} />}
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
        <p>{MESSAGES.NO_PROVIDED_CHARTS}</p>
      )}
    </div>
  );
};

export default HistoricalChart;
