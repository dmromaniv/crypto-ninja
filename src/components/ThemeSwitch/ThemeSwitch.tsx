import IconButton from "../IconButton";
import Tooltip from "../Tooltip/Tooltip";

import SunIcon from "@/assets/icons/SunIcon";
import MoonIcon from "@/assets/icons/MoonIcon";

import { useTheme } from "@/hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, onThemeToggle } = useTheme();

  return (
    <Tooltip text="Use to change theme">
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
  );
};

export default ThemeSwitch;
