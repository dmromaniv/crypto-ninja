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
      <CoinsTableRow coinsData={coins} />
    </Table>
  );
};

export default CoinsTable;
