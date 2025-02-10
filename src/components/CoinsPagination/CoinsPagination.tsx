import { useState } from "react";

import Select, { SelectValue } from "@/components/Select/Select";
import Pagination from "../Pagination";

import { usePagination } from "@/hooks/usePagination";

import { perPageSelectOptions } from "@/config/uiConfig";

const CoinsPagination = () => {
  const { page, itemsPerPage, onPageChange, onItemsPerPageSelect } = usePagination();
  const [selectedValue, setSelectedValue] = useState<SelectValue>(
    perPageSelectOptions.find((item) => item.value === itemsPerPage.toString()) ??
      perPageSelectOptions[0]
  );

  const onItemsSelect = (option: SelectValue) => {
    setSelectedValue(option);
    onItemsPerPageSelect(option);
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      <Pagination currentPage={page} onPageChange={onPageChange} />

      <div className="absolute right-0 flex items-center gap-x-2">
        <p>Show:</p>
        <div className="w-15">
          <Select
            selectedValue={selectedValue}
            options={perPageSelectOptions}
            onChange={onItemsSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default CoinsPagination;
