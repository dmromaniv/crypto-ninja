export const getLeadingCryptos = <T extends object>(amount: number, leadingCryptos?: T) => {
  const sortedCryptos = sortCryptos("desc", leadingCryptos);

  if (amount > sortedCryptos.length) {
    return sortedCryptos.map(([name, value]) => ({ name, value }));
  }

  return sortedCryptos.slice(0, amount).map(([name, value]) => ({ name, value }));
};

// return sorted array in [[key, value]] format
const sortCryptos = <T extends object>(order: "desc" | "asc", leadingCryptos?: T) => {
  if (!leadingCryptos || typeof leadingCryptos !== "object") return [];

  return Object.entries(leadingCryptos).sort(([, a], [, b]) => {
    if (order === "asc") {
      return a - b;
    }
    return b - a;
  });
};
