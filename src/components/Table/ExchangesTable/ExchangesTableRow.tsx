import TrustScore from "@/components/TrustScore/TrustScore";

import PlaceholderIcon from "@/assets/icons/PlaceholderIcon";

import { MESSAGES } from "@/constants/messages";

import type { Exchange } from "@/types/exchange";

interface ExchangesTableRowRowProps {
  exchanges: Exchange[];
}

const ExchangesTableRow = ({ exchanges }: ExchangesTableRowRowProps) => {
  return (
    <>
      {exchanges.map((exchange) => {
        return (
          <tr key={exchange.id} className="min-h-20">
            <td>{exchange?.trust_score_rank || MESSAGES.EMPTY_TABLE_VALUE}</td>
            <td>
              <div className="flex flex-wrap items-center gap-2 py-3 font-medium">
                {exchange?.image ? (
                  <img src={exchange.image} width={24} height={24} alt={`${exchange.name} icon`} />
                ) : (
                  <PlaceholderIcon />
                )}

                <p>{exchange?.name || MESSAGES.EMPTY_TABLE_VALUE}</p>
              </div>
            </td>
            <td className="font-medium">
              {exchange?.trust_score ? (
                <TrustScore score={exchange.trust_score} />
              ) : (
                MESSAGES.EMPTY_TABLE_VALUE
              )}
            </td>
            <td>{exchange?.country || MESSAGES.EMPTY_TABLE_VALUE}</td>
            <td>{exchange?.year_established || MESSAGES.EMPTY_TABLE_VALUE}</td>
            <td className="font-medium">
              {exchange?.trade_volume_24h_btc ? (
                <span>{exchange.trade_volume_24h_btc.toFixed(2)} BTC</span>
              ) : (
                MESSAGES.EMPTY_TABLE_VALUE
              )}
            </td>
            <td className="font-medium">
              {exchange?.trade_volume_24h_btc_normalized ? (
                <span>{exchange?.trade_volume_24h_btc_normalized.toFixed(2)} BTC</span>
              ) : (
                MESSAGES.EMPTY_TABLE_VALUE
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ExchangesTableRow;
