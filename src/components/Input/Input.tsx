import { ReactNode } from "react";
import clsx from "clsx";

import IconButton from "../IconButton";

interface InputProps {
  name: string;
  type?: "text" | "password" | "number" | "email";
  label?: string;
  placeholder?: string;
  className?: string;
  iconButton?: ReactNode;
  onChange: () => void;
}

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className,
  iconButton,
  onChange,
}: InputProps) => {
  return (
    <label
      htmlFor={name}
      className={clsx(
        "relative block h-full overflow-hidden rounded-md border border-input shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary dark:border-input-dark",
        label && "px-3 pt-3",
        placeholder && "px-3 py-1"
      )}
    >
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={clsx(
          "peer h-full border-none bg-transparent text-fg/70 focus:border-transparent focus:ring-0 focus:outline-none sm:text-sm dark:text-fg-dark",
          label && "py-1",
          placeholder && "py-0",
          iconButton && "w-[calc(100%-1.25rem)]",
          className && className
        )}
        onChange={onChange}
      />

      {iconButton && (
        <div className="absolute top-1/2 right-1 -translate-y-1/2 transition-colors hover:text-primary hover:dark:text-fg-dark">
          <IconButton onClick={() => {}}>{iconButton}</IconButton>
        </div>
      )}

      {label && (
        <span className="absolute top-3 left-3 -translate-y-1/2 text-xs text-fg/70 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-fg-dark">
          {label}
        </span>
      )}
    </label>
  );
};

export default Input;
