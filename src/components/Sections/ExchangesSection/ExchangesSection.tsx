import { useTranslation } from "react-i18next";

import TablePagination from "@/components/TablePagination";
import ExchangesTableSkeleton from "@/components/Table/ExchangesTable/ExchangesTableSkeleton";
import ExchangesTable from "@/components/Table/ExchangesTable";
import ExchangesList from "@/components/CardsList/ExchangesList";
import CardsListSkeleton from "@/components/CardsList/CardsListSkeleton";

import { usePagination } from "@/hooks/usePagination";
import { useGetExchangesQuery } from "@/store/api/exchanges";

const ExchangesSection = () => {
  const { t } = useTranslation();
  const { page, itemsPerPage } = usePagination();

  const { data: exchanges, isFetching: isExchangesFetching } = useGetExchangesQuery({
    page,
    perPage: itemsPerPage,
  });

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-xl font-medium text-accent-fg sm:text-3xl dark:text-accent-fg-dark/90">
          {t("exchanges.main_heading")}
        </h1>
        <h2>{t("exchanges.sub_heading_one")}</h2>
      </div>

      <div className="hidden lg:block">
        {isExchangesFetching ? (
          <ExchangesTableSkeleton />
        ) : (
          <ExchangesTable exchanges={exchanges || []} />
        )}
      </div>
      <div className="lg:hidden">
        {isExchangesFetching ? (
          <CardsListSkeleton />
        ) : (
          <ExchangesList exchanges={exchanges || []} />
        )}
      </div>

      <div className="mt-8">
        <TablePagination />
      </div>
    </section>
  );
};

export default ExchangesSection;
