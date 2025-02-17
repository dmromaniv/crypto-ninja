interface CustomTickProps {
  x: number;
  y: number;
  value: string;
}

const CustomXTick = ({ x, y, value }: CustomTickProps) => {
  return (
    <g>
      <text
        x={x}
        y={y}
        dy={15}
        textAnchor="middle"
        className="fill-accent-fg text-xs dark:fill-accent-fg-dark"
      >
        {value}
      </text>
    </g>
  );
};

export default CustomXTick;
