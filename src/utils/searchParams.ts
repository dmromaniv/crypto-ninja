type SearchParam = { key: string; value: string | number | null };

export const updateSearchParams = (
  searchParams: URLSearchParams,
  newParams: SearchParam | SearchParam[]
): URLSearchParams => {
  const params = new URLSearchParams(searchParams);

  [newParams]
    .flat()
    .forEach(({ key, value }) => (value ? params.set(key, value.toString()) : params.delete(key)));
  return params;
};
