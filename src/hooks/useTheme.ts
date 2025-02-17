import { useLayoutEffect } from "react";

import { setItemToLocalStorage } from "@/services/localStorage";

import LOCAL_STORAGE_KEYS from "@/constants/localStorage";
import { useAppDispatch, useAppSelector } from "./useStore";

import { setTheme, toggleTheme } from "@/store/slices/theme";

export type Theme = "light" | "dark";

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeMode.theme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    setItemToLocalStorage(LOCAL_STORAGE_KEYS.theme, theme);
  }, [theme]);

  const onThemeSet = (newTheme: "light" | "dark") => dispatch(setTheme(newTheme));
  const onThemeToggle = () => dispatch(toggleTheme());

  return {
    theme,
    onThemeSet,
    onThemeToggle,
  };
}
