import { useState } from "react";
import clsx from "clsx";

type Language = "ENG" | "UA";

const Language = () => {
  const [lang, setLang] = useState<Language>("ENG");

  const onLanguageChange = (selectedLanguage: Language) => {
    setLang(selectedLanguage);
  };

  return (
    <div className="flex items-center gap-x-2 text-sm font-medium">
      <button
        onClick={() => {
          onLanguageChange("ENG");
        }}
        className={clsx(
          lang === "ENG" && "text-primary",
          lang === "UA" && "cursor-pointer transition duration-400 hover:text-primary/70"
        )}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => {
          onLanguageChange("UA");
        }}
        className={clsx(
          lang === "UA" && "text-primary",
          lang === "ENG" && "cursor-pointer transition duration-400 hover:text-primary/70"
        )}
      >
        UA
      </button>
    </div>
  );
};

export default Language;
