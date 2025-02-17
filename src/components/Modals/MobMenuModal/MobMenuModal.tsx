import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Modal from "../Modal";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitch from "@/components/ThemeSwitch";
import AuthButtons from "@/components/AuthButtons";
import IconButton from "@/components/IconButton";

import BurgerIcon from "@/assets/icons/BurgerIcon";

import useModal from "@/hooks/useModal";

import navigation from "@/constants/navigation";

const MobMenuModal = () => {
  const { t } = useTranslation();

  const { isModalOpen, onModalOpen, onModalClose } = useModal();

  return (
    <>
      <IconButton
        onClick={onModalOpen}
        className="transition-colors hover:text-primary hover:dark:text-fg-dark"
      >
        <BurgerIcon />
      </IconButton>

      {isModalOpen && (
        <Modal
          position="right"
          onClose={() => {
            onModalClose();
          }}
        >
          <div className="flex h-[90vh] w-[90vw] flex-col gap-y-10 rounded-l-lg sm:w-[75vw] md:w-84">
            <ul className="flex flex-col gap-y-5 text-sm">
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
            <div className="flex flex-col gap-y-3">
              {t("labels.change_settings")}
              <div>
                <p className="mb-1 flex gap-x-3">
                  {t("labels.language")}: <LanguageSwitcher />
                </p>
                <p className="flex gap-x-3">
                  <ThemeSwitch />
                </p>
              </div>
            </div>

            <AuthButtons />
          </div>
        </Modal>
      )}
    </>
  );
};

export default MobMenuModal;
