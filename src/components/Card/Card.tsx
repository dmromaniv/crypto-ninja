import { ReactNode } from "react";

import clsx from "clsx";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className={clsx(
        "h-full rounded-md bg-light p-3 shadow-lg transition-opacity dark:border-border-dark dark:bg-accent-dark dark:shadow-primary-dark/10"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
