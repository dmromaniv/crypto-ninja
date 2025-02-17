import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AuthButtons from "../AuthButtons";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitch from "@components/ThemeSwitch";
import Logo from "@components/Logo";
import SearchModal from "../Modals/SearchModal/SearchModal";
import MobMenuModal from "../Modals/MobMenuModal/MobMenuModal";

import navigation from "@/constants/navigation";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="border-b border-b-border/40 bg-light dark:border-b-border-dark dark:bg-accent-dark">
      <div className="container mx-auto flex h-20 max-w-[1300px] items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navigation.map((link, index) => {
                return (
                  <li key={`${link.name}-${index}`}>
                    <NavLink
                      className={({ isActive }) => {
                        return isActive
                          ? "font-medium text-primary"
                          : "link-underscore font-medium";
                      }}
                      to={link.path}
                    >
                      {t(link.name)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-x-8">
            <div className="hidden min-[560px]:block md:w-[300px]">
              <SearchModal />
            </div>

            <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-6">
              <div className="flex items-center gap-x-2">
                <LanguageSwitcher />
                <ThemeSwitch />
              </div>

              <AuthButtons />
            </div>
            <div className="block lg:hidden">
              <MobMenuModal />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
