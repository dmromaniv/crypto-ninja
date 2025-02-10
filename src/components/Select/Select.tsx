import { useState, useEffect, useRef, ChangeEvent, useMemo } from "react";
import clsx from "clsx";

import SelectSkeleton from "./SelectSkeleton";

import ArrowIcon from "@/assets/icons/ArrowIcon";
import TickIcon from "@/assets/icons/TickIcon";

import { MESSAGES } from "@/constants/messages";

export interface Option {
  value: string;
  label: string;
}

export type SelectValue = Option | Option[];

interface SelectProps {
  options: Option[];
  selectedValue: SelectValue;
  closeOnSelect?: boolean;
  searchable?: boolean;
  placeholder?: string;
  menuPosition?: "top" | "bottom";
  isOptionsLoading?: boolean;
  onChange: (selected: SelectValue) => void;
}

const Select = ({
  options,
  selectedValue,
  closeOnSelect = false,
  searchable = false,
  placeholder = "Select an option...",
  menuPosition = "bottom",
  isOptionsLoading,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOptionSelected = (option: Option) => {
    if (Array.isArray(selectedValue)) {
      return selectedValue.some((item) => item.value === option.value);
    }
    return selectedValue?.value === option.value;
  };

  const getSelectedLabel = () => {
    if (Array.isArray(selectedValue)) {
      const labels = selectedValue
        .map((opt) => opt?.label)
        .filter(Boolean)
        .join(", ");
      return labels || placeholder;
    }
    return selectedValue?.label || placeholder;
  };

  const onSelect = (option: Option) => {
    let newSelected: SelectValue;

    if (Array.isArray(selectedValue)) {
      const isSelected = isOptionSelected(option);

      newSelected = isSelected
        ? selectedValue.filter((item) => item.value !== option.value)
        : [...selectedValue, option];
    } else {
      newSelected = isOptionSelected(option) ? { value: "", label: "" } : option;
    }

    onChange(newSelected);

    if (!closeOnSelect) setIsOpen(false);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.trimStart());
  };

  const onButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const onClickOutsideSelect = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onClickOutsideSelect);
    return () => document.removeEventListener("click", onClickOutsideSelect);
  }, []);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, options]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        className="flex w-full cursor-pointer items-center justify-between rounded-md border border-input bg-accent px-2 py-1 shadow-sm transition-opacity hover:bg-accent/70 dark:border-border-dark dark:bg-input-dark hover:dark:bg-input-dark/70"
        onClick={onButtonClick}
      >
        <span className="truncate">{getSelectedLabel()}</span>

        <ArrowIcon width={12} height={12} arrowDirection="down" />
      </button>

      {isOpen && (
        <div
          className={clsx(
            "absolute z-100 w-full rounded-md border-border bg-light shadow-lg dark:bg-accent-dark",
            menuPosition === "top" && "bottom-full mb-2",
            menuPosition === "bottom" && "top-full mt-2"
          )}
        >
          {searchable && (
            <div className="p-2">
              <input
                type="text"
                className="w-full border-b border-border p-2 focus:outline-none dark:border-border-dark"
                placeholder="Search..."
                value={searchQuery}
                onChange={onInputChange}
              />
            </div>
          )}

          {isOptionsLoading ? (
            <SelectSkeleton />
          ) : (
            <ul className="scrollbar-thin max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    className={clsx(
                      "flex cursor-pointer items-center justify-between p-3 text-start hover:bg-accent dark:hover:bg-hover-dark",
                      isOptionSelected(option) && "bg-accent dark:bg-hover-dark"
                    )}
                    onClick={() => onSelect({ value: option.value, label: option.label })}
                  >
                    <span>{option.label}</span>
                    {isOptionSelected(option) && (
                      <span className="min-h-4 min-w-4">
                        <TickIcon width={16} height={16} />
                      </span>
                    )}
                  </li>
                ))
              ) : (
                <li>
                  <p className="p-3 text-start text-sm text-muted-fg dark:text-muted-fg-dark">
                    {MESSAGES.NO_FOUND}
                  </p>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
