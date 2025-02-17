import { useTranslation } from "react-i18next";

import Card from "../Card";

import { MESSAGES } from "@/constants/messages";

interface TotalVolumeCardProps {
  totalVolume: number;
}

const TotalVolumeCard = ({ totalVolume }: TotalVolumeCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">{t("labels.total_volume")}</p>
      </div>
      <p className="text-lg font-medium">
        {totalVolume
          ? t("number.currency_compact", {
              value: totalVolume,
            })
          : t(MESSAGES.NO_PROVIDED_DATA)}
      </p>
    </Card>
  );
};

export default TotalVolumeCard;
