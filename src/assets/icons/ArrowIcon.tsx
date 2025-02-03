import clsx from "clsx";

interface ArrowIconProps {
  width?: number;
  height?: number;
  arrowDirection?: "up" | "down" | "right" | "left";
}

const ArrowIcon = ({ width = 24, height = 24, arrowDirection = "up" }: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={clsx(
        arrowDirection === "right" && "rotate-90",
        arrowDirection === "down" && "rotate-180",
        arrowDirection === "left" && "rotate-270"
      )}
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowIcon;
