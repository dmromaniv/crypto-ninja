import clsx from "clsx";

interface CheckboxProps {
  name: string;
  text?: string;
  size?: "sm" | "md" | "lg";
}

const Checkbox = ({ text, name, size = "md" }: CheckboxProps) => {
  return (
    <label className="relative flex cursor-pointer items-center gap-1 text-accent-fg dark:text-fg-dark">
      <input className="peer appearance-none" name={name} type="checkbox" />
      <span
        className={clsx(
          "absolute top-1/2 left-0 -translate-y-1/2 rounded-md border-2 border-border dark:border-border-dark",
          size === "sm" && "h-4 w-4",
          size === "md" && "h-6 w-6",
          size === "lg" && "h-8 w-8"
        )}
      ></span>
      <svg
        viewBox="0 0 69 89"
        className={clsx(
          "absolute top-1/2 left-0 -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]",
          size === "sm" && "h-4 w-4",
          size === "md" && "h-6 w-6",
          size === "lg" && "h-8 w-8"
        )}
        fill="none"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
          strokeWidth="6px"
          stroke="#6d27d9"
          pathLength="100"
        ></path>
      </svg>

      {text && (
        <p
          className={clsx(
            "ml-10 text-sm [user-select:none]",
            size === "sm" && "ml-5",
            size === "md" && "ml-7",
            size === "lg" && "ml-9"
          )}
        >
          {text}
        </p>
      )}
    </label>
  );
};

export default Checkbox;
