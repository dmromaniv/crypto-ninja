import { useState, useEffect, useRef, ChangeEvent, useMemo } from "react";
import clsx from "clsx";

import ArrowIcon from "@/assets/icons/ArrowIcon";
import TickIcon from "@/assets/icons/TickIcon";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  multiple?: boolean;
  searchable?: boolean;
  placeholder?: string;
  menuPosition?: "top" | "bottom";
  defaultValue?: string[];
  onChange: (selected: string[] | string) => void;
}

const Select = ({
  options,
  multiple = false,
  searchable = false,
  placeholder = "Select an option...",
  menuPosition = "bottom",
  defaultValue,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState<string[]>(defaultValue || []);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onSelect = (value: string) => {
    let newSelected: string[];

    if (multiple) {
      newSelected = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];
    } else {
      newSelected = [value];
    }

    setSelected(newSelected);
    onChange(multiple ? newSelected : newSelected[0]);
    if (!multiple) setIsOpen(false);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.trimStart());
  };

  const onButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, options]);

  const optionsMap = useMemo(
    () => new Map(options.map((opt) => [opt.value, opt.label])),
    [options]
  );

  useEffect(() => {
    const onClickOutsideSelect = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onClickOutsideSelect);
    return () => document.removeEventListener("click", onClickOutsideSelect);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        className="flex w-full cursor-pointer items-center justify-between rounded-md border border-input bg-accent p-3 shadow-sm transition-opacity hover:bg-accent/70 dark:border-border-dark dark:bg-input-dark hover:dark:bg-input-dark/70"
        onClick={onButtonClick}
      >
        <span className="truncate">
          {selected.length > 0
            ? selected.map((val) => optionsMap.get(val)).join(", ")
            : placeholder}
        </span>

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

          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={clsx(
                    "flex cursor-pointer items-center justify-between p-3 hover:bg-accent dark:hover:bg-hover-dark",
                    selected.includes(option.value) && "bg-accent dark:bg-hover-dark"
                  )}
                  onClick={() => onSelect(option.value)}
                >
                  <span>{option.label}</span>
                  {selected.includes(option.value) && <TickIcon />}
                </li>
              ))
            ) : (
              <p className="p-3 text-sm text-muted-fg dark:text-muted-fg-dark">No results found</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
