import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { Option, SelectValue } from "@/components/Select/Select";

interface SelectOptionsProps<T> {
  options: T[];
  defaultOption: SelectValue | null;
  format: {
    label: keyof T;
    value: keyof T;
  };
  paramKey?: string;
  isMultiple?: boolean;
}

const useSelectOptions = <T>({
  options,
  format,
  defaultOption,
  paramKey,
  isMultiple = false,
}: SelectOptionsProps<T>) => {
  const initialState = isMultiple ? [] : { value: "", label: "" };
  const [selectedValue, setSelectedValue] = useState<SelectValue>(defaultOption ?? initialState);

  const [searchParams] = useSearchParams();

  const onSelect = (value: SelectValue) => {
    setSelectedValue(value);
  };

  const onClear = () => {
    setSelectedValue(initialState);
  };

  const formattedOptions = useMemo(() => {
    return (
      options?.map((option) => ({
        label: option[format.label],
        value: option[format.value],
      })) || []
    );
  }, [options, format.label, format.value]);

  // set to select the default option from SearchParams
  // ignores it if defaultOption is passed directly
  useEffect(() => {
    const searchParam = paramKey ? searchParams.get(paramKey) : null;

    if (searchParam && !defaultOption) {
      const foundOption = formattedOptions?.find((item) => {
        return item.value === searchParam;
      });

      if (foundOption) {
        setSelectedValue({
          label: foundOption.label,
          value: foundOption.value,
        } as Option);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formattedOptions, paramKey, defaultOption]);

  return {
    formattedOptions,
    selectedValue,
    onSelect,
    onClear,
  };
};

export default useSelectOptions;
