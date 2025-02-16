export const trendingCoinsConfig = {
  base: {
    showInList: 3,
  },
  searchModal: {
    showInList: 8,
  },
};

export const trendingCategoriesConfig = {
  showInList: 3,
};

export const dominanceCoinsConfig = {
  showInList: 3,
};

export const perPageSelectOptions = [
  { label: "20", value: "20" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

export const historicalChartFilters = [
  {
    label: "time.in_hours",
    value: 1,
    interpolationValue: 24,
  },
  {
    label: "time.in_days",
    value: 7,
    interpolationValue: 7,
  },
  {
    label: "time.in_months",
    value: 30,
    interpolationValue: 1,
  },
  {
    label: "time.in_months",
    value: 90,
    interpolationValue: 3,
  },
];
