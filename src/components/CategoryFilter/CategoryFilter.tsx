import Select, { type Option, type SelectValue } from "@/components/Select/Select";
import Filter from "../Filter/Filter";

import { useSearchParams } from "react-router-dom";

import { useGetCategoriesQuery } from "@/store/api/coins";
import useSelectOptions from "@/hooks/useSelectOptions";

import { updateSearchParams } from "@/utils/searchParams";

import { searchParamsKeys } from "@/config/apiConfig";

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: categories, isLoading } = useGetCategoriesQuery();
  const { selectedValue, formattedOptions, onSelect, onClear } = useSelectOptions({
    options: categories || [],
    format: {
      label: "name",
      value: "category_id",
    },
    defaultOption: null,
    paramKey: searchParamsKeys.category,
  });

  const onCategorySelect = (option: SelectValue) => {
    if (!Array.isArray(option)) {
      const params = updateSearchParams(searchParams, [
        { key: searchParamsKeys.category, value: option.value },
        { key: searchParamsKeys.page, value: 1 },
      ]);
      setSearchParams(params);
    }

    onSelect(option);
  };

  const onFilterClear = () => {
    const params = updateSearchParams(searchParams, [
      { key: searchParamsKeys.category, value: null },
      { key: searchParamsKeys.page, value: 1 },
    ]);
    setSearchParams(params);
    onClear();
  };

  return (
    <div className="flex w-full items-center justify-between">
      {(selectedValue as Option).value && (
        <Filter filter={(selectedValue as Option).label} onClear={onFilterClear} />
      )}
      <div className="ml-auto w-60 justify-end text-end">
        <Select
          menuPosition="bottom"
          selectedValue={selectedValue}
          isOptionsLoading={isLoading}
          searchable
          placeholder="Select category.."
          onChange={onCategorySelect}
          options={formattedOptions}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
