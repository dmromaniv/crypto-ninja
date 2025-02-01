import clsx from "clsx";

interface ChangePercentageProps {
  percentage: number;
}

const ChangePercentage = ({ percentage }: ChangePercentageProps) => {
  return (
    <span
      className={clsx(
        "relative flex items-center gap-1 font-bold",
        percentage > 0 &&
          "text-success before:border-x-4 before:border-b-8 before:border-success before:border-x-transparent",
        percentage < 0 &&
          "text-destructive before:block before:h-0 before:w-0 before:border-x-4 before:border-t-8 before:border-destructive before:border-x-transparent",
        percentage === 0 && "text-accent-fg dark:text-fg-dark"
      )}
    >
      {Math.abs(percentage)}%
    </span>
  );
};

export default ChangePercentage;
