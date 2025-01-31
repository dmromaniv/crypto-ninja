import { useState } from "react";

import IconButton from "../IconButton";
import Tooltip from "../Tooltip/Tooltip";

import SunIcon from "@/assets/icons/SunIcon";
import MoonIcon from "@/assets/icons/MoonIcon";

const ThemeSwitch = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const onThemeToggle = () => {
    setIsNightMode(!isNightMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Tooltip text="Use to change theme">
      <IconButton
        onClick={onThemeToggle}
        className="text-primary transition duration-300 hover:text-fg dark:text-warm dark:hover:text-fg-dark"
      >
        {isNightMode ? <MoonIcon width={12} height={12} /> : <SunIcon width={16} height={16} />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;
