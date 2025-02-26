import Card from "../Card";

import { MESSAGES } from "@/constants/messages";
import { useTranslation } from "react-i18next";

interface MarketCapCardProps {
  marketCap: number;
}

const MarketCapCard = ({ marketCap }: MarketCapCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">{t("labels.market_cap")}</p>
      </div>
      <p className="text-lg font-medium">
        {marketCap
          ? t("number.currency_compact", {
              value: marketCap,
            })
          : t(MESSAGES.NO_PROVIDED_DATA)}
      </p>
    </Card>
  );
};

export default MarketCapCard;
