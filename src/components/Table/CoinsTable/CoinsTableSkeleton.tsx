import Skeleton from "react-loading-skeleton";
import Table from "../Table";
import CoinsTableHead from "./CoinsTableHead";

const CoinsTableSkeleton = () => {
  return (
    <Table tableHead={<CoinsTableHead />}>
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

export default CoinsTableSkeleton;
