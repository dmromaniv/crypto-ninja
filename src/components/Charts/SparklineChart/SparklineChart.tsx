import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import clsx from "clsx";

interface SparklineChartProps {
  data: number[];
  variant?: "base" | "success" | "destructive";
  height?: number;
}

const SparklineChart = ({ data, variant = "base", height = 72 }: SparklineChartProps) => {
  const chartStroke = clsx(
    variant === "base" && "#7b39ed",
    variant === "success" && "#16a349",
    variant === "destructive" && "#ee4444"
  );

  return (
    <ResponsiveContainer height={height} width="100%">
      <LineChart data={data.map((value, index) => ({ index, value }))}>
        <YAxis domain={["auto", "auto"]} hide />
        <Line type="monotone" dataKey="value" strokeWidth={2} dot={false} stroke={chartStroke} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChart;
