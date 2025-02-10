import { useSearchParams } from "react-router-dom";

import CoinsList from "@/components/CoinsList/CoinsList";

import CoinsTable from "@/components/Table/CoinsTable";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import CoinsPagination from "@/components/CoinsPagination";
import CoinsTableSkeleton from "@/components/Table/CoinsTable/CoinsTableSkeleton";
import CoinsListSkeleton from "@/components/CoinsList/CoinsListSkeleton";

import { usePagination } from "@/hooks/usePagination";
import { useGetCoinsQuery } from "@/store/api/coins";

import { searchParamsKeys } from "@/config/apiConfig";
import { currencyConfig } from "@/config/formatConfig";

const CoinsSection = () => {
  const [searchParams] = useSearchParams();
  const { page, itemsPerPage } = usePagination();

  const { data: coins, isFetching: isCoinsFetching } = useGetCoinsQuery({
    currency: currencyConfig.USD.code,
    page,
    perPage: itemsPerPage,
    category: searchParams.get(searchParamsKeys.category) ?? undefined,
    order: searchParams.get(searchParamsKeys.order) ?? undefined,
  });

  return (
    <section>
      <div className="mb-4">
        <CategoryFilter />
      </div>
      <div className="hidden lg:block">
        {isCoinsFetching ? <CoinsTableSkeleton /> : <CoinsTable coins={coins || []} />}
      </div>
      <div className="lg:hidden">
        {isCoinsFetching ? <CoinsListSkeleton /> : <CoinsList coins={coins || []} />}
      </div>

      <div className="mt-8">
        <CoinsPagination />
      </div>
    </section>
  );
};

export default CoinsSection;
