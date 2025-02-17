import { useSearchParams } from "react-router-dom";

import CoinsList from "@/components/CardsList/CoinsList/CoinsList";

import CoinsTable from "@/components/Table/CoinsTable";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import TablePagination from "@/components/TablePagination";
import CoinsTableSkeleton from "@/components/Table/CoinsTable/CoinsTableSkeleton";
import CardsListSkeleton from "@/components/CardsList/CardsListSkeleton";

import { usePagination } from "@/hooks/usePagination";

import { useGetCoinsQuery } from "@/store/api/coins";

import { pollingInterval, searchParamsKeys } from "@/config/apiConfig";
import { currencyConfig } from "@/config/formatConfig";

const CoinsSection = () => {
  const [searchParams] = useSearchParams();

  const { page, itemsPerPage } = usePagination();

  const { data: coins, isLoading: isCoinsLoading } = useGetCoinsQuery(
    {
      currency: currencyConfig.USD.code,
      page,
      perPage: itemsPerPage,
      category: searchParams.get(searchParamsKeys.category) ?? undefined,
      order: searchParams.get(searchParamsKeys.order) ?? undefined,
    },
    { pollingInterval: pollingInterval.coins }
  );

  return (
    <section>
      <div className="mb-4">
        <CategoryFilter />
      </div>
      <div className="hidden lg:block">
        {isCoinsLoading ? <CoinsTableSkeleton /> : <CoinsTable coins={coins || []} />}
      </div>
      <div className="lg:hidden">
        {isCoinsLoading ? <CardsListSkeleton /> : <CoinsList coins={coins || []} />}
      </div>

      <div className="mt-8">
        <TablePagination />
      </div>
    </section>
  );
};

export default CoinsSection;
