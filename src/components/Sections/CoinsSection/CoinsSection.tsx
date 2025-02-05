import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import CoinsList from "@/components/CoinsList/CoinsList";
import Pagination from "@/components/Pagination";
import Select from "@/components/Select/Select";
import CoinsTable from "@/components/Table/CoinsTable";
import CoinsTableSkeleton from "@/components/Table/CoinsTable/CoinsTableSkeleton";
import CoinsListSkeleton from "@/components/CoinsList/CoinsListSkeleton";

import { usePagination } from "@/hooks/usePagination";
import { useGetCategoriesQuery, useGetCoinsQuery } from "@/store/api/coins";

import { updateSearchParams } from "@/utils/searchParams";

import { queryParamsKeys } from "@/config/apiConfig";
import { currencyConfig } from "@/config/formatConfig";
import { perPageSelectOptions } from "@/config/uiConfig";

const CoinsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { page, itemsPerPage, onPageChange, onItemsPerPageSelect } = usePagination();

  const { data: coins, isFetching: isCoinsFetching } = useGetCoinsQuery({
    currency: currencyConfig.USD.code,
    page,
    perPage: itemsPerPage,
    category: searchParams.get(queryParamsKeys.category) || undefined,
  });
  const { data: categories } = useGetCategoriesQuery();

  const selectOptions = useMemo(() => {
    return (
      categories?.map((category) => {
        return {
          label: category.name,
          value: category.category_id,
        };
      }) || []
    );
  }, [categories]);

  const onCategorySelect = (category: string | string[]) => {
    if (typeof category === "string") {
      const params = updateSearchParams(searchParams, [
        { key: queryParamsKeys.category, value: category },
        { key: queryParamsKeys.page, value: 1 },
      ]);
      setSearchParams(params);
    }
  };

  return (
    <section>
      <div className="mb-4 ml-auto w-60 justify-end text-end">
        <Select
          menuPosition="bottom"
          searchable
          placeholder="Select category"
          onChange={onCategorySelect}
          options={selectOptions}
        />
      </div>
      <div className="hidden lg:block">
        {isCoinsFetching ? <CoinsTableSkeleton /> : <CoinsTable coins={coins || []} />}
      </div>
      <div className="lg:hidden">
        {isCoinsFetching ? <CoinsListSkeleton /> : <CoinsList coins={coins || []} />}
      </div>

      <div className="relative mt-8 flex w-full items-center justify-center">
        <Pagination currentPage={page} onPageChange={onPageChange} />

        <div className="absolute right-0 flex items-center gap-x-2">
          <p>Show:</p>
          <div className="w-15">
            <Select
              options={perPageSelectOptions}
              onChange={onItemsPerPageSelect}
              defaultValue={[itemsPerPage.toString()]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinsSection;
