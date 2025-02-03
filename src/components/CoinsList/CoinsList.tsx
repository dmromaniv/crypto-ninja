import CoinCard from "@/components/Card/CoinCard/CoinCard";

import { type Coin } from "@/types/coin";

interface CoinsListProps {
  coins: Coin[];
}

const CoinsList = ({ coins }: CoinsListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {coins.map((coin) => {
        return (
          <li key={coin.id}>
            <CoinCard coin={coin} />
          </li>
        );
      })}
    </ul>
  );
};

export default CoinsList;
