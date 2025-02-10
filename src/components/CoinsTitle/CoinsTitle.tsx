import Skeleton from "react-loading-skeleton";

import { useGetGlobalMarketDataQuery } from "@/store/api/market";

const CoinsTitle = () => {
  const { coins, isFetching } = useGetGlobalMarketDataQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      coins: data?.active_cryptocurrencies,
      isFetching,
    }),
  });

  return (
    <div className="flex justify-start text-start sm:max-w-[462px] sm:text-end">
      <div className="relative text-xl font-medium text-accent-fg sm:text-3xl dark:text-accent-fg-dark/90">
        <h1>Cryptocurrency Market Prices & Capitalization</h1>
        <span className="absolute bottom-0 left-0 hidden text-xl font-light text-accent-fg/70 sm:flex dark:text-accent-fg-dark/80">
          We are listing
          <span className="px-1 text-primary">
            {isFetching ? <Skeleton className="h-5 min-w-15" /> : coins}
          </span>
          coins
        </span>
      </div>
    </div>
  );
};

export default CoinsTitle;
