interface SunIconProps {
  width?: number;
  height?: number;
}

const SunIcon = ({ width = 24, height = 24 }: SunIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="5" stroke="none" />
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="4.2" y1="4.2" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" />
      <line x1="17.5" y1="17.5" x2="19.8" y2="19.8" stroke="currentColor" strokeWidth="2" />
      <line x1="4.2" y1="19.8" x2="6.5" y2="17.5" stroke="currentColor" strokeWidth="2" />
      <line x1="17.5" y1="6.5" x2="19.8" y2="4.2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default SunIcon;
