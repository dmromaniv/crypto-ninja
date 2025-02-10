import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

import Input from "@/components/Input";
import Modal from "../Modal";
import Tooltip from "@/components/Tooltip/Tooltip";
import TrendingCoinsList from "@/components/TrendingCoinsList/TrendingCoinsList";
import TrendingCoinsListSkeleton from "@/components/TrendingCoinsList/TrendingCoinsListSkeleton";

import { useGetTrendingCryptoQuery, useLazyGetDataViaSearchQuery } from "@/store/api/coins";
import { useDebounce } from "@/hooks/useDebounce";
import useModal from "@/hooks/useModal";

import { trendingCoinsConfig } from "@/config/uiConfig";

import { MESSAGES } from "@/constants/messages";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isModalOpen, onModalOpen, onModalClose } = useModal();
  const debouncedSearchQuery = useDebounce(searchQuery, 2000);

  const { data: trendingData, isFetching: isFetchingTrendingCoins } = useGetTrendingCryptoQuery();
  const [searchCoins, { data: searchedCoins, isFetching: isFetchingCoins }] =
    useLazyGetDataViaSearchQuery();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.trimStart());
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      searchCoins(debouncedSearchQuery, true);
    }
  }, [debouncedSearchQuery, searchCoins]);

  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        onModalOpen();
      }
    },
    [onModalOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

  const isLoading = isFetchingTrendingCoins || isFetchingCoins;
  return (
    <>
      <div className="h-[38px]" onClick={onModalOpen}>
        <Input
          name="search"
          placeholder="Search"
          iconButton={
            <Tooltip text="Use to trigger search">
              <div className="flex h-4 w-4 items-center justify-center">/</div>
            </Tooltip>
          }
        />
      </div>

      {isModalOpen && (
        <Modal
          position="top"
          onClose={() => {
            setSearchQuery("");
            onModalClose();
          }}
        >
          <div className="flex h-[60vh] w-[90vw] max-w-[600px] flex-col gap-y-6 rounded-md md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              placeholder={"Search coin"}
              className={clsx(
                "border-b border-border p-2 focus:outline-none dark:border-border-dark"
              )}
              onChange={onInputChange}
            />

            <div className="scrollbar-thin h-full overflow-y-auto">
              {isLoading && (
                <TrendingCoinsListSkeleton count={trendingCoinsConfig.searchModal.showInList} />
              )}

              {!isLoading && !searchQuery && (
                <>
                  <p className="mb-1">Trending coins</p>
                  <TrendingCoinsList
                    coins={trendingData?.coins || []}
                    count={trendingCoinsConfig.searchModal.showInList}
                  />
                </>
              )}

              {!isLoading && searchQuery && searchedCoins && (
                <ul>
                  {searchedCoins?.length > 0 ? (
                    searchedCoins.map((coin) => {
                      return (
                        <li
                          key={coin.id}
                          className="flex min-h-14 cursor-pointer items-center gap-x-6 rounded-md p-2 hover:bg-accent/80"
                        >
                          <div className="flex flex-1 items-center gap-x-10">
                            <img
                              className="min-h-[30px] min-w-[30px] overflow-hidden rounded-full"
                              width={30}
                              height={30}
                              src={coin.thumb}
                              alt={`${coin.name} thumb`}
                            />
                            <p className="line-clamp-1 font-medium">
                              {coin.name}
                              <span className="pl-3 text-xs text-accent-fg/60">{coin.symbol}</span>
                            </p>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <li>{MESSAGES.NO_FOUND}</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SearchModal;
