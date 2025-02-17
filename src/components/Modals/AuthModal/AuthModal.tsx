import clsx from "clsx";
import { useTranslation } from "react-i18next";

import Modal from "../Modal";
import RegisterForm from "@/components/Form/RegisterForm";
import LoginForm from "@/components/Form/LoginForm";

export type Tab = "login" | "signup";

interface AuthModalProps {
  isModalOpen: boolean;
  tab: Tab;
  onClose: () => void;
  onTabChange: (tab: Tab) => void;
}

const AuthModal = ({ isModalOpen, tab, onClose, onTabChange }: AuthModalProps) => {
  const { t } = useTranslation();

  return (
    <>
      {isModalOpen && (
        <Modal position="top" onClose={onClose}>
          <div className="flex max-h-[90vh] w-[90vw] max-w-100 flex-col gap-y-6 rounded-md p-4 md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
            <div className="flex w-full border-b-2 border-accent dark:border-border-dark">
              <button
                className={clsx(
                  "grow-1 cursor-pointer border-b-2 px-1 pb-4 text-sm transition-colors hover:text-secondary-fg/80 hover:dark:text-fg-dark/80",
                  tab === "login"
                    ? "border-primary font-semibold text-secondary-fg dark:text-fg-dark"
                    : "border-transparent"
                )}
                onClick={() => {
                  onTabChange("login");
                }}
              >
                {t("labels.login")}
              </button>

              <button
                className={clsx(
                  "grow-1 cursor-pointer border-b-2 px-1 pb-4 text-sm transition-colors hover:text-secondary-fg/80 hover:dark:text-fg-dark/80",
                  tab === "signup"
                    ? "border-primary font-semibold text-secondary-fg dark:text-fg-dark"
                    : "border-transparent"
                )}
                onClick={() => {
                  onTabChange("signup");
                }}
              >
                {t("labels.sign_up")}
              </button>
            </div>
            <p className="text-xs">
              <span className="text-base font-medium">
                {tab === "login" ? t("labels.login") : t("labels.sign_up")}
              </span>
              <br />
              {t("labels.agree_terms_desc")}:
              <a href="#" className="pl-1 text-primary underline">
                {t("links.service_terms")}
              </a>
            </p>

            {tab === "signup" ? (
              <RegisterForm onClose={onClose} />
            ) : (
              <LoginForm onClose={onClose} />
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default AuthModal;
