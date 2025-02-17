interface CustomTickProps {
  x: number;
  y: number;
  dy?: number;
  value: string;
}

const CustomYTick = ({ x, y, dy = 5, value }: CustomTickProps) => {
  return (
    <g>
      <text
        x={x}
        y={y}
        dy={dy}
        textAnchor="end"
        className="fill-accent-fg text-xs dark:fill-accent-fg-dark"
      >
        {value}
      </text>
    </g>
  );
};

export default CustomYTick;
