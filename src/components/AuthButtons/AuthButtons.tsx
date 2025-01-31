import { useState } from "react";

import Button from "../Button";
import AuthModal from "../Modals/AuthModal";

import useModal from "@/hooks/useModal";

import { type Tab } from "../Modals/AuthModal/AuthModal";

const AuthButtons = () => {
  const [tab, setTab] = useState<Tab>("login");
  const { isModalOpen, onModalOpen, onModalClose } = useModal();

  const onTabChange = (tab: Tab) => {
    setTab(tab);
  };

  const onButtonClick = (tab: Tab) => {
    setTab(tab);
    onModalOpen();
  };

  return (
    <>
      <div className="flex gap-2">
        <div className="min-w-25">
          <Button
            onClick={() => {
              onButtonClick("login");
            }}
          >
            Login
          </Button>
        </div>
        <div className="min-w-25">
          <Button
            onClick={() => {
              onButtonClick("signup");
            }}
            variant="bordered"
          >
            Sign up
          </Button>
        </div>
      </div>
      <AuthModal
        isModalOpen={isModalOpen}
        tab={tab}
        onClose={onModalClose}
        onTabChange={onTabChange}
      />
    </>
  );
};

export default AuthButtons;
