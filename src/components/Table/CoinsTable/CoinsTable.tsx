import { useTranslation } from "react-i18next";

import Table from "../Table";
import CoinsTableHead from "./CoinsTableHead";
import CoinsTableRow from "./CoinsTableRow";

import { MESSAGES } from "@/constants/messages";

import { type Coin } from "@/types/coin";

interface CoinsTableProps {
  coins: Coin[];
}

const CoinsTable = ({ coins }: CoinsTableProps) => {
  const { t } = useTranslation();

  return (
    <Table tableHead={<CoinsTableHead />}>
      {coins.length > 0 ? (
        <CoinsTableRow coinsData={coins} />
      ) : (
        <tr className="text-center">
          <td colSpan={100}>{t(MESSAGES.NO_COINS)}</td>
        </tr>
      )}
    </Table>
  );
};

export default CoinsTable;
