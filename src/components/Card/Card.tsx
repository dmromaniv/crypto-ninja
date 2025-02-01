import { ReactNode } from "react";

import clsx from "clsx";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className={clsx(
        "rounded-md bg-light p-3 shadow-lg transition-opacity hover:bg-accent/30 dark:bg-accent-dark dark:shadow-primary-dark/10 hover:dark:bg-hover-dark/90"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
