export const currencyConfig = {
  UAH: {
    code: "UAH",
    locale: "uk-UA",
    symbol: "₴",
    name: "Ukrainian Hryvnia",
  },
  EUR: {
    code: "EUR",
    locale: "de-DE",
    symbol: "€",
    name: "Euro",
  },
  USD: {
    code: "USD",
    locale: "en-US",
    symbol: "$",
    name: "US Dollar",
  },
};

export const defaultFractionDigits = {
  min: 0,
  max: 20,
};

export const dateTimeConfig = {
  shortDate: "dd MMM",
  fullDate: "dd MMMM yyyy",

  // localized: date-fns
  localizedTime: "p", // 12:00 AM
  localizedShortDateTime: "PP", //May 19, 2025
  localizedLongDateTime: "PPpp", //May 29, 2025, 12:00 AM
};
