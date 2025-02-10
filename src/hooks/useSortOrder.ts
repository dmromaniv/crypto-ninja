import { useSearchParams } from "react-router-dom";

import { updateSearchParams } from "@/utils/searchParams";

type OrderOption = Record<string, { asc: string; desc: string }>;

interface SortOrder {
  orderOptions: OrderOption;
  defaultOrderOption?: string;
  sortKey?: string;
}

const useSortOrder = ({
  orderOptions,
  defaultOrderOption = "market_cap_desc",
  sortKey = "order",
}: SortOrder) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentOrder = searchParams.get("order") || defaultOrderOption;

  const currentColumn = Object.keys(orderOptions).find((key) =>
    Object.values(orderOptions[key]).includes(currentOrder)
  );

  const onOrderToggle = (column: string) => {
    if (!orderOptions[column]) return;

    const newOrder =
      currentOrder === orderOptions[column].asc
        ? orderOptions[column].desc
        : orderOptions[column].asc;

    const newParams = updateSearchParams(searchParams, { key: sortKey, value: newOrder });

    setSearchParams(newParams);
  };

  return { onOrderToggle, order: currentOrder, sortBy: currentColumn };
};

export default useSortOrder;
