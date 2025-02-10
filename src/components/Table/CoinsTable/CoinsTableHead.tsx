import ArrowIcon from "@/assets/icons/ArrowIcon";

import useSortOrder from "@/hooks/useSortOrder";

import { COINS_ORDER_MAP } from "@/constants/sort";

const CoinsTableHead = () => {
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
      <th className="w-[35%]">Coin</th>
      <th>Price</th>
      <th className="w-[8%]"> 24h %</th>
      <th className="w-[8%]">7d %</th>
      <th className="w-[15%]">Market cap</th>
      <th className="w-[15%]">Last 7 Days</th>
    </tr>
  );
};

export default CoinsTableHead;
