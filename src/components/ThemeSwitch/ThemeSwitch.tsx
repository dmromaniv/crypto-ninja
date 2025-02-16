import { useTranslation } from "react-i18next";

import IconButton from "../IconButton";
import Tooltip from "../Tooltip/Tooltip";

import SunIcon from "@/assets/icons/SunIcon";
import MoonIcon from "@/assets/icons/MoonIcon";

import { useTheme } from "@/hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, onThemeToggle } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-x-2">
      <p className="lg:hidden">
        {t(theme === "dark" ? "labels.set_theme_light" : "labels.set_theme_dark")}:
      </p>
      <Tooltip text={t("tooltips.change_theme")}>
        <IconButton
          onClick={onThemeToggle}
          className="text-primary transition duration-300 hover:text-fg dark:text-warm dark:hover:text-fg-dark"
        >
          {theme === "dark" ? (
            <SunIcon width={16} height={16} />
          ) : (
            <MoonIcon width={12} height={12} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ThemeSwitch;
