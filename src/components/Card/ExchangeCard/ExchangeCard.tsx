import { useTranslation } from "react-i18next";

import Card from "../Card";
import TrustScore from "@/components/TrustScore/TrustScore";

import PlaceholderIcon from "@/assets/icons/PlaceholderIcon";

import { MESSAGES } from "@/constants/messages";

import type { Exchange } from "@/types/exchange";

interface CoinCardProps {
  exchange: Exchange;
}

const ExchangeCard = ({ exchange }: CoinCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="mb-6 flex w-full items-center justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">
          {exchange?.image ? (
            <img
              src={exchange.image}
              width={30}
              height={30}
              alt={`${exchange.name} icon`}
              className="rounded-full"
            />
          ) : (
            <PlaceholderIcon width={30} height={30} />
          )}
          {exchange.name}
        </p>
        <p className="flex items-center gap-x-1">
          {exchange?.trust_score ? (
            <TrustScore score={exchange.trust_score} />
          ) : (
            t(MESSAGES.EMPTY_CARD_VALUE)
          )}
        </p>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-wrap items-center gap-x-2">
          <p>
            {t("labels.established")}:
            <span className="pl-1 font-medium">
              {exchange?.year_established || MESSAGES.EMPTY_CARD_VALUE}
            </span>
            ,
          </p>

          <p>
            {t("labels.country")}:
            <span className="pl-1 font-medium">
              {exchange?.country || t(MESSAGES.NO_PROVIDED_DATA)}
            </span>
          </p>
        </div>

        <p>
          {t("labels.volume_normalized_period", { value: 24 })}:
          <span className="font-medium">
            {exchange?.trade_volume_24h_btc_normalized ? (
              <span className="pl-1">
                {exchange?.trade_volume_24h_btc_normalized.toFixed(2)} BTC
              </span>
            ) : (
              t(MESSAGES.NO_PROVIDED_DATA)
            )}
          </span>
        </p>

        <p>
          {t("labels.volume_period", { value: 24 })}:
          <span className="font-medium">
            {exchange?.trade_volume_24h_btc ? (
              <span className="pl-1">{exchange.trade_volume_24h_btc.toFixed(2)} BTC</span>
            ) : (
              t(MESSAGES.NO_PROVIDED_DATA)
            )}
          </span>
        </p>
      </div>
    </Card>
  );
};

export default ExchangeCard;
