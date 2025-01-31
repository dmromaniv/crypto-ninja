import AuthButtons from "../AuthButtons";
import Language from "@components/Language";
import ThemeSwitch from "@components/ThemeSwitch";
import Logo from "@components/Logo";
import SearchModal from "../Modals/SearchModal/SearchModal";
import MobMenuModal from "../Modals/MobMenuModal/MobMenuModal";

import navigation from "@/constants/navigation";

const Header = () => {
  return (
    <header className="bg-light dark:bg-accent-dark">
      <div className="container mx-auto flex h-20 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#">
          <span className="sr-only">Home</span>
          <Logo />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navigation.map((link, index) => {
                return (
                  <li key={`${link.name}-${index}`}>
                    <a className="link-underscore font-medium" href="#">
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-x-8">
            <div className="hidden min-[560px]:block md:w-[300px]">
              <SearchModal />
            </div>

            <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-8">
              <Language />
              <ThemeSwitch />

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
