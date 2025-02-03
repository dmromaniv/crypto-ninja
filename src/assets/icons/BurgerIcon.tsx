interface BurgerIconProps {
  width?: number;
  height?: number;
}

const BurgerIcon = ({ width = 24, height = 24 }: BurgerIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      width={width}
      height={height}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
};

export default BurgerIcon;
