import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getItemFromLocalStorage, setItemToLocalStorage } from "@/services/localStorage";
import { updateSearchParams } from "@/utils/searchParams";

import { queryParamsKeys } from "@/config/apiConfig";
import LOCAL_STORAGE_KEYS from "@/constants/localStorage";

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 100;

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const storedItemsPerPage = getItemFromLocalStorage(
    LOCAL_STORAGE_KEYS.itemsPerPage,
    DEFAULT_PER_PAGE
  );

  const page = Number(searchParams.get(queryParamsKeys.page)) || DEFAULT_PAGE;
  const itemsPerPage = Number(searchParams.get(queryParamsKeys.itemsPerPage)) || storedItemsPerPage;

  useEffect(() => {
    if (itemsPerPage !== storedItemsPerPage) {
      setItemToLocalStorage(LOCAL_STORAGE_KEYS.itemsPerPage, itemsPerPage);
    }
  }, [itemsPerPage, storedItemsPerPage]);

  const setPage = (newPage: number) => {
    if (newPage > 0) {
      const params = updateSearchParams(searchParams, {
        key: queryParamsKeys.page,
        value: newPage,
      });
      setSearchParams(params);
    }
  };

  const setItemsPerPage = (newItemsPerPage: string) => {
    const params = updateSearchParams(searchParams, {
      key: queryParamsKeys.itemsPerPage,
      value: newItemsPerPage,
    });
    setSearchParams(params);
  };

  const onPageChange = (navDirection: "prev" | "next") => {
    if (navDirection === "prev") {
      setPage(page - 1);
      return;
    }
    setPage(page + 1);
  };

  const onItemsPerPageSelect = (itemsPerPage: string | string[]) => {
    if (typeof itemsPerPage === "string") {
      setItemsPerPage(itemsPerPage);
    }
  };

  return { page, itemsPerPage, setPage, setItemsPerPage, onPageChange, onItemsPerPageSelect };
};
