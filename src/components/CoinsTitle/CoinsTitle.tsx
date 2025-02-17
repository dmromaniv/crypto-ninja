import Skeleton from "react-loading-skeleton";
import { Trans, useTranslation } from "react-i18next";

import { useGetGlobalMarketDataQuery } from "@/store/api/market";

const CoinsTitle = () => {
  const { coins, isFetching } = useGetGlobalMarketDataQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      coins: data?.active_cryptocurrencies,
      isFetching,
    }),
  });

  const { t } = useTranslation();

  return (
    <div className="flex justify-start text-start sm:max-w-[475px] sm:text-end">
      <div className="relative text-xl font-semibold text-accent-fg sm:text-3xl dark:text-accent-fg-dark/90">
        <h1>{t("home.main_heading")}</h1>
        <span className="absolute bottom-0 left-0 hidden text-xl font-light text-accent-fg/70 sm:flex dark:text-accent-fg-dark/80">
          <span className="px-1">
            {isFetching ? (
              <Skeleton className="h-5 min-w-15" />
            ) : (
              <Trans
                i18nKey="home.sub_heading"
                values={{ count: coins }}
                components={[<span className={"text-primary"} />]}
              >
                {`We are listing <0>{{count}}</0> coins`}
              </Trans>
            )}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CoinsTitle;
