import { ReactNode } from "react";
import clsx from "clsx";

interface IconButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

const IconButton = ({ children, disabled = false, className, onClick }: IconButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center rounded-full p-[6px] transition duration-500 focus:outline-none",
        disabled
          ? ""
          : "cursor-pointer hover:bg-secondary hover:shadow-xl dark:shadow-primary/20 dark:hover:bg-primary",
        className && className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
