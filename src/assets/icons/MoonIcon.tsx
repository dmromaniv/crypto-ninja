interface MoonIconProps {
  width?: number;
  height?: number;
}

const MoonIcon = ({ width = 24, height = 24 }: MoonIconProps) => {
  return (
    <svg
      height={width}
      width={height}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 56 56"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
   s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
      />
    </svg>
  );
};

export default MoonIcon;
