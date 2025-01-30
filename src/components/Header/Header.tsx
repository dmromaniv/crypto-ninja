import Button from "@components/Button";
import Language from "@components/Language";
import Input from "@components/Input";
import ThemeSwitch from "@components/ThemeSwitch";
import Logo from "@components/Logo";
import IconButton from "@components/IconButton";

import SearchIcon from "@/assets/icons/SearchIcon";
import BurgerIcon from "@/assets/icons/BurgerIcon";

import navigation from "@/constants/navigation";

const Header = () => {
  return (
    <header className="bg-light dark:bg-dark">
      <div className="container mx-auto flex h-20 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#">
          <span className="sr-only">Home</span>
          <Logo />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
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
              <Input
                name="search"
                onChange={() => {}}
                label="test"
                iconButton={<SearchIcon width={16} height={16} />}
              />
            </div>

            <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-8">
              <Language />
              <ThemeSwitch />

              <div className="flex gap-2">
                <Button onClick={() => {}}>Login</Button>
                <Button onClick={() => {}} variant="bordered">
                  Sign up
                </Button>
              </div>
            </div>
            <div className="block lg:hidden">
              <IconButton
                onClick={() => {}}
                className="transition-colors hover:text-primary hover:dark:text-fg-dark"
              >
                <BurgerIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
