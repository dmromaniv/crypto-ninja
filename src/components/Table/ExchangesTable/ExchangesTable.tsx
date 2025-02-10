import Table from "../Table";
import ExchangesTableHead from "./ExchangesTableHead";
import ExchangesTableRow from "./ExchangesTableRow";

import { MESSAGES } from "@/constants/messages";

import type { Exchange } from "@/types/exchange";

interface ExchangesTableProps {
  exchanges: Exchange[];
}

const ExchangesTable = ({ exchanges }: ExchangesTableProps) => {
  return (
    <Table tableHead={<ExchangesTableHead />}>
      {exchanges.length > 0 ? (
        <ExchangesTableRow exchanges={exchanges} />
      ) : (
        <tr className="text-center">
          <td colSpan={100}>{MESSAGES.NO_EXCHANGES}</td>
        </tr>
      )}
    </Table>
  );
};

export default ExchangesTable;
