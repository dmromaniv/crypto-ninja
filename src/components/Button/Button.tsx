import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "base" | "bordered" | "icon";
}

const Button = ({ children, variant = "base", onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-block cursor-pointer rounded-md border border-primary px-6 py-2 text-sm font-medium transition hover:shadow-xl focus:ring focus:outline-none dark:shadow-primary/20",
        variant === "base" && "bg-primary text-primary-fg hover:bg-primary/90",
        variant === "bordered" &&
          "bg-transparent text-primary hover:bg-primary hover:text-primary-fg dark:text-primary-fg"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
