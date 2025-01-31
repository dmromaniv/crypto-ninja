import { ReactNode } from "react";
import clsx from "clsx";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ text, children, position = "bottom" }: TooltipProps) => {
  return (
    <div className="group relative flex">
      {children}
      <div
        className={clsx(
          "absolute z-50 hidden rounded-md bg-light px-3 py-2 text-sm whitespace-nowrap text-accent-fg/70 opacity-0 shadow-lg transition-opacity duration-300 group-hover:flex group-hover:opacity-100 dark:bg-accent-dark dark:text-fg-dark",
          position === "top" && "bottom-full left-1/2 mb-3 -translate-x-1/2 transform",
          position === "bottom" && "top-full left-1/2 mt-3 -translate-x-1/2 transform",
          position === "left" && "top-1/2 right-full mr-3 -translate-y-1/2 transform",
          position === "right" && "top-1/2 left-full ml-3 -translate-y-1/2 transform"
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
