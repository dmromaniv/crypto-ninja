interface CoinPlaceholderProps {
  width?: number;
  height?: number;
}

const CoinPlaceholder = ({ width = 24, height = 24 }: CoinPlaceholderProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#2D2D2D" />

      <circle cx="50" cy="50" r="45" fill="#3B3B3B" stroke="#444" stroke-width="2" />

      <text x="50" y="58" font-size="40" font-weight="bold" text-anchor="middle" fill="#f28c07">
        ₿
      </text>
    </svg>
  );
};

export default CoinPlaceholder;
