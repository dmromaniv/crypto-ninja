import { ReactNode } from "react";
import clsx from "clsx";

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const IconButton = ({ children, className, onClick }: IconButtonProps) => {
  return (
    <button
      className={clsx(
        "flex cursor-pointer items-center justify-center rounded-full p-[6px] transition duration-500 hover:bg-secondary hover:shadow-xl focus:outline-none dark:shadow-primary/20 dark:hover:bg-primary",
        className && className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
