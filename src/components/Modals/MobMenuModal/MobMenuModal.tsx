import Modal from "../Modal";
import IconButton from "@/components/IconButton";
import Button from "@/components/Button";

import BurgerIcon from "@/assets/icons/BurgerIcon";

import useModal from "@/hooks/useModal";

import navigation from "@/constants/navigation";

const MobMenuModal = () => {
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
                    <a className="link-underscore font-medium" href="#">
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-2">
              <div className="flex-grow">
                <Button onClick={() => {}}>Login</Button>
              </div>
              <div className="flex-grow">
                <Button onClick={() => {}} variant="bordered">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MobMenuModal;
