export const formatNumber = (num: number): string => {
  return (
    num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + " USD"
  );
};
