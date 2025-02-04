import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

import Input from "@/components/Input";
import Modal from "../Modal";
import Tooltip from "@/components/Tooltip/Tooltip";

import useModal from "@/hooks/useModal";
import TrendingCoinsList from "@/components/TrendingCoinsList/TrendingCoinsList";
import { useGetDataViaSearchQuery, useGetTrendingCryptoQuery } from "@/store/api/coins";
import { trendingCoinsConfig } from "@/config/uiConfig";
import { useDebounce } from "@/hooks/useDebounce";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isModalOpen, onModalOpen, onModalClose } = useModal();
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  const { data: searchedCoins } = useGetDataViaSearchQuery(debouncedSearchQuery);

  const { data: trendingData } = useGetTrendingCryptoQuery();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.trimStart());
  };

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
          <div className="flex max-h-[60vh] w-[90vw] max-w-[600px] flex-col gap-y-6 rounded-md md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
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
            <div className="h-full overflow-y-auto">
              {!!searchedCoins?.length && searchQuery ? (
                <ul>
                  {searchedCoins?.map((coin) => {
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
                  })}
                </ul>
              ) : (
                <>
                  <p className="mb-1">Trending coins</p>
                  <TrendingCoinsList
                    coins={trendingData?.coins || []}
                    count={trendingCoinsConfig.searchModal.showInList}
                  />
                </>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SearchModal;
