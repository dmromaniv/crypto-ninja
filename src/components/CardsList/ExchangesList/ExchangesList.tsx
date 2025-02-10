import ExchangeCard from "../../Card/ExchangeCard/ExchangeCard";

import { MESSAGES } from "@/constants/messages";

import type { Exchange } from "@/types/exchange";

interface ExchangesListProps {
  exchanges: Exchange[];
}

const ExchangesList = ({ exchanges }: ExchangesListProps) => {
  return exchanges.length > 0 ? (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {exchanges.map((exchange) => {
        return (
          <li key={exchange.id}>
            <ExchangeCard exchange={exchange} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="text-center">{MESSAGES.NO_EXCHANGES}</p>
  );
};

export default ExchangesList;
