import { useTranslation } from "react-i18next";

import CoinCard from "@/components/Card/CoinCard/CoinCard";

import { MESSAGES } from "@/constants/messages";

import { type Coin } from "@/types/coin";

interface CoinsListProps {
  coins: Coin[];
}

const CoinsList = ({ coins }: CoinsListProps) => {
  const { t } = useTranslation();

  return coins.length > 0 ? (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {coins.map((coin) => {
        return (
          <li key={coin.id}>
            <CoinCard coin={coin} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="text-center">{t(MESSAGES.NO_COINS)}</p>
  );
};

export default CoinsList;
