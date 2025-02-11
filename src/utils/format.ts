import { format } from "date-fns";

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

export const formatTimestamp = (timestamp: number, pattern: string): string | null => {
  // Check if the timestamp is a valid number
  if (!Number.isFinite(timestamp) || timestamp <= 0) {
    return null;
  }

  // Convert timestamp to Date
  const date = new Date(timestamp);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return null;
  }

  // Format the date
  return format(new Date(timestamp), pattern);
};
