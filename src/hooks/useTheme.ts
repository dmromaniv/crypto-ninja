import { useLayoutEffect, useState } from "react";

import { getItemFromLocalStorage, setItemToLocalStorage } from "@/services/localStorage";

import LOCAL_STORAGE_KEYS from "@/constants/localStorage";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState(
    getItemFromLocalStorage<Theme>(LOCAL_STORAGE_KEYS.theme, "light")
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    setItemToLocalStorage(LOCAL_STORAGE_KEYS.theme, theme);
  }, [theme]);

  const onThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, onThemeToggle };
}
