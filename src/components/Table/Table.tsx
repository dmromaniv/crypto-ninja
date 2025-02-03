import { ReactNode } from "react";

interface TableProps {
  tableHead: ReactNode;
  children: ReactNode;
}

const Table = ({ tableHead, children }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-border overflow-hidden rounded-md bg-transparent text-sm dark:divide-border-dark">
        <thead className="text-accent-fg dark:text-fg-dark [&_th]:p-2 [&_th]:text-start [&_th]:font-medium [&_th]:whitespace-nowrap">
          {tableHead}
        </thead>

        <tbody className="divide-y divide-border text-accent-fg dark:divide-border-dark dark:text-fg-dark [&_td]:p-2 [&_td]:whitespace-nowrap [&>tr]:cursor-pointer [&>tr]:odd:bg-accent [&>tr]:dark:odd:bg-accent-dark">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
