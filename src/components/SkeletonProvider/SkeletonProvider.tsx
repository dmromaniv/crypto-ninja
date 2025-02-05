import { ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import { getItemFromLocalStorage } from "@/services/localStorage";

import LOCAL_STORAGE_KEYS from "@/constants/localStorage";

import type { Theme } from "@/hooks/useTheme";

interface SkeletonProviderProps {
  children: ReactNode;
}

export const SkeletonProvider = ({ children }: SkeletonProviderProps) => {
  const theme = getItemFromLocalStorage<Theme>(LOCAL_STORAGE_KEYS.theme, "light");

  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#212B3B" : "#f3f4f6"}
      highlightColor={theme === "dark" ? "#243041" : "#ffffff"}
    >
      {children}
    </SkeletonTheme>
  );
};
