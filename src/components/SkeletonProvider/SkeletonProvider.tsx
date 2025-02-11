import { ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import { useTheme } from "@/hooks/useTheme";

interface SkeletonProviderProps {
  children: ReactNode;
}

export const SkeletonProvider = ({ children }: SkeletonProviderProps) => {
  const { theme } = useTheme();

  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#212B3B" : "#f3f4f6"}
      highlightColor={theme === "dark" ? "#243041" : "#ffffff"}
    >
      {children}
    </SkeletonTheme>
  );
};
