import CoinsList from "@/components/CoinsList/CoinsList";
import Select from "@/components/Select/Select";
import CoinsTable from "@/components/Table/CoinsTable";
import { useGetCategoriesQuery, useGetCoinsQuery } from "@/store/api/coins";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const CoinsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: coins } = useGetCoinsQuery({
    currency: "usd",
    perPage: 20,
    category: searchParams.get("category") || undefined,
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

  const onCategoryChange = (category: string | string[]) => {
    setSearchParams({ category });
  };

  return (
    <section>
      <div className="mb-4 ml-auto w-60 justify-end text-end">
        <Select
          menuPosition="bottom"
          searchable
          placeholder="Select category"
          onChange={onCategoryChange}
          options={selectOptions}
        />
      </div>
      <div className="hidden lg:block">
        <CoinsTable coins={coins || []} />
      </div>
      <div className="lg:hidden">
        <CoinsList coins={coins || []} />
      </div>
    </section>
  );
};

export default CoinsSection;
