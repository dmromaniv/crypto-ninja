interface LogoIconProps {
  width?: number;
  height?: number;
}

const LogoIcon = ({ width = 24, height = 24 }: LogoIconProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50 50 100 100"
      width={width}
      height={height}
      className="group"
    >
      <circle cx="100" cy="100" r="40" className="fill-accent-dark dark:fill-primary-dark" />

      <ellipse
        cx="90"
        cy="95"
        rx="7"
        ry="4"
        className="fill-light transition-colors duration-300 group-hover:fill-warm"
      />
      <ellipse
        cx="110"
        cy="95"
        rx="7"
        ry="4"
        className="fill-light transition-colors duration-300 group-hover:fill-warm"
      />

      <rect
        x="65"
        y="85"
        width="70"
        height="10"
        fill="#F7931A"
        className="fill-primary dark:fill-dark/80"
      />

      <text x="100" y="115" fontSize="20" fontWeight="bold" fill="#F7931A" textAnchor="middle">
        ₿
      </text>

      <polygon
        points="60,120 140,120 100,160"
        className="fill-accent-dark dark:fill-primary-dark"
      />
    </svg>
  );
};

export default LogoIcon;
