import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { supportedLngs } from "@/i18n/config";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-x-2 text-sm font-medium">
      <button
        disabled={i18n.resolvedLanguage === supportedLngs.en.tag}
        onClick={() => {
          i18n.changeLanguage(supportedLngs.en.tag);
        }}
        className={clsx(
          i18n.language === supportedLngs.en.tag
            ? "text-primary"
            : "cursor-pointer transition duration-400 hover:text-primary/70"
        )}
      >
        {supportedLngs.en.label}
      </button>
      <span>|</span>
      <button
        disabled={i18n.resolvedLanguage === supportedLngs.uk.tag}
        onClick={() => {
          i18n.changeLanguage(supportedLngs.uk.tag);
        }}
        className={clsx(
          i18n.language === supportedLngs.uk.tag
            ? "text-primary"
            : "cursor-pointer transition duration-400 hover:text-primary/70"
        )}
      >
        {supportedLngs.uk.label}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
