import { currencyConfig } from "@/config/formatConfig";

interface FormatCurrency {
  number: number;
  code?: string;
  locale?: string;
  currency?: string;
  notation?: "compact" | "standard";
}

export const formatCurrency = ({
  number,
  currency = currencyConfig.USD.code,
  locale = currencyConfig.USD.locale,
  notation = "standard",
}: FormatCurrency): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation,
  });
  return formatter.format(number);
};
