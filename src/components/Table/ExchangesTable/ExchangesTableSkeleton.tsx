import Skeleton from "react-loading-skeleton";

import Table from "../Table";
import ExchangesTableHead from "./ExchangesTableHead";

const ExchangesTableSkeleton = () => {
  return (
    <Table tableHead={<ExchangesTableHead />}>
      <tr>
        {Array.from({ length: 7 }).map((_, index) => (
          <td key={index}>
            <Skeleton className="h-12" />
          </td>
        ))}
      </tr>
      <tr>
        {Array.from({ length: 7 }).map((_, index) => (
          <td key={index}>
            <Skeleton className="h-12" />
          </td>
        ))}
      </tr>
      <tr>
        {Array.from({ length: 7 }).map((_, index) => (
          <td key={index}>
            <Skeleton className="h-12" />
          </td>
        ))}
      </tr>
    </Table>
  );
};

export default ExchangesTableSkeleton;
