import { formatDate, isValid, Locale, parseISO } from "date-fns";
import { enUS, uk } from "date-fns/locale";

import { currencyConfig, dateTimeConfig } from "@/config/formatConfig";

export enum Notation {
  Compact = "compact",
  Standard = "standard",
}

export enum CurrencyDisplay {
  NarrowSymbol = "narrowSymbol",
  Code = "code",
}

export enum Format {
  Short = "short",
  Long = "long",
  Custom = "custom",
}

interface FormatCurrency {
  number: number;
  code?: string;
  locale?: string;
  currency?: string;
  notation?: Notation;
  currencyDisplay?: CurrencyDisplay;
  minDigits?: number;
  maxDigits?: number;
}

interface FormatDateTime {
  value: DateTime;
  lng: string;
  format?: Format;
  pattern?: string;
}

type DateTime = Date | string | number;

export const formatCurrency = ({
  number,
  currency = currencyConfig.USD.code,
  locale = currencyConfig.USD.locale,
  notation = Notation.Compact,
  currencyDisplay = CurrencyDisplay.NarrowSymbol,
  minDigits = 0,
  maxDigits = 20,
}: FormatCurrency): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay,
    notation,
    minimumFractionDigits: notation === Notation.Standard ? minDigits : undefined,
    maximumFractionDigits: notation === Notation.Standard ? maxDigits : undefined,
  });
  return formatter.format(number);
};

export const formatDateTime = ({ value, format = Format.Custom, lng, pattern }: FormatDateTime) => {
  const date = convertToDate(value);
  if (!date) return null; // return null if data is invalid

  const locale = getDateFnsLocale(lng);

  if (format === Format.Custom && pattern) return formatDate(value, pattern, { locale });
  if (format === Format.Short) return formatDate(value, dateTimeConfig.shortDate, { locale });
  if (format === Format.Long)
    return formatDate(value, dateTimeConfig.localizedLongDateTime, { locale });

  // default format: May 19, 2025
  return formatDate(value, dateTimeConfig.localizedShortDateTime, { locale });
};

const getDateFnsLocale = (lng: string) => {
  const locales: Record<string, Locale> = { en: enUS, uk: uk };
  return locales[lng];
};

const convertToDate = (value: DateTime) => {
  let date: Date;

  if (typeof value === "string") {
    date = parseISO(value); // Convert ISO string to Date
  } else if (typeof value === "number") {
    date = new Date(value); // Convert timestamp to Date
  } else if (value instanceof Date) {
    date = value; // Use directly if already a Date object
  } else {
    return null; // Invalid input
  }

  return isValid(date) ? date : null;
};
