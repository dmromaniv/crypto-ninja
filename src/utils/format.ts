export const formatCurrency = (num: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
  });
  return formatter.format(num);
};
