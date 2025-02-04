import Table from "../Table";
import CoinsTableHead from "./CoinsTableHead";
import CoinsTableRow from "./CoinsTableRow";

import { type Coin } from "@/types/coin";

interface CoinsTableProps {
  coins: Coin[];
}

const CoinsTable = ({ coins }: CoinsTableProps) => {
  return (
    <Table tableHead={<CoinsTableHead />}>
      {coins.length > 0 ? (
        <CoinsTableRow coinsData={coins} />
      ) : (
        <tr className="text-center">
          <td colSpan={100}>No data provided</td>
        </tr>
      )}
    </Table>
  );
};

export default CoinsTable;
