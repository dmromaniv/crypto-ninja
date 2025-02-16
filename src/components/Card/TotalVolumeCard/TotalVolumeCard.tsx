import { useTranslation } from "react-i18next";

import Card from "../Card";

import { formatCurrency } from "@/utils/format";

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
          ? formatCurrency({ number: totalVolume, notation: "compact" })
          : t(MESSAGES.NO_PROVIDED_DATA)}
      </p>
    </Card>
  );
};

export default TotalVolumeCard;
