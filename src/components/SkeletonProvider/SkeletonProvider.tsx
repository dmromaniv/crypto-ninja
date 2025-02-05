import { ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import { getItemFromLocalStorage } from "@/services/localStorage";

import LOCAL_STORAGE_KEYS from "@/constants/localStorage";

interface SkeletonProviderProps {
  children: ReactNode;
}

export const SkeletonProvider = ({ children }: SkeletonProviderProps) => {
  const isDarkMode = getItemFromLocalStorage(LOCAL_STORAGE_KEYS.theme, true);

  return (
    <SkeletonTheme
      baseColor={isDarkMode ? "#212B3B" : "#f3f4f6"}
      highlightColor={isDarkMode ? "#243041" : "#ffffff"}
    >
      {children}
    </SkeletonTheme>
  );
};
