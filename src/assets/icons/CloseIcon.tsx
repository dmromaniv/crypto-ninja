interface CloseIconProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
}

const CloseIcon = ({ width = 24, height = 24, strokeWidth = 2 }: CloseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="17.5"
        x2="54.5"
        y1="17.5"
        y2="54.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <line
        x1="54.5"
        x2="17.5"
        y1="17.5"
        y2="54.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default CloseIcon;
