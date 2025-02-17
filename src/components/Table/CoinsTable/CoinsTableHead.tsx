import { useTranslation } from "react-i18next";

import ArrowIcon from "@/assets/icons/ArrowIcon";

import useSortOrder from "@/hooks/useSortOrder";

import { COINS_ORDER_MAP } from "@/constants/sort";

const CoinsTableHead = () => {
  const { t } = useTranslation();

  const { onOrderToggle, order } = useSortOrder({ orderOptions: COINS_ORDER_MAP });

  return (
    <tr>
      <th
        className="cursor-pointer"
        onClick={() => {
          onOrderToggle("marketCap");
        }}
      >
        <div className="flex items-center gap-x-1">
          #
          <ArrowIcon
            arrowDirection={order?.includes(COINS_ORDER_MAP.marketCap.asc) ? "up" : "down"}
            width={12}
            height={12}
          />
        </div>
      </th>
      <th className="w-[35%]">{t("labels.coin", { count: 1 })}</th>
      <th>{t("labels.price")}</th>
      <th className="w-[8%]">{t("time.in_hours", { value: 24 })} %</th>
      <th className="w-[8%]">{t("time.in_days", { value: 7 })} %</th>
      <th className="w-[15%]">{t("labels.market_cap")}</th>
      <th className="w-[15%]">{t("labels.last_days", { value: 7 })}</th>
    </tr>
  );
};

export default CoinsTableHead;
