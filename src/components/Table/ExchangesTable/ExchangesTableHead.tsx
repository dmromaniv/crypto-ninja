import { useTranslation } from "react-i18next";

const ExchangesTableHead = () => {
  const { t } = useTranslation();

  return (
    <tr>
      <th>#</th>
      <th className="w-[33%]">{t("labels.exchange")}</th>
      <th className="w-[5%]">{t("labels.trust_score")}</th>
      <th className="w-[25%]">{t("labels.country")}</th>
      <th className="w-[5%]">{t("labels.established")}</th>
      <th>{t("labels.volume_normalized_period", { value: 24 })}</th>
      <th className="w-[18%]">{t("labels.volume_period", { value: 24 })}</th>
    </tr>
  );
};

export default ExchangesTableHead;
