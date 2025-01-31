import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "base" | "bordered" | "icon";
  onClick?: () => void;
}

const Button = ({ children, type = "button", variant = "base", onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex w-full cursor-pointer justify-center rounded-md border border-primary px-6 py-2 text-sm font-medium whitespace-nowrap transition hover:shadow-xl focus:ring focus:outline-none dark:shadow-primary/20",
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
