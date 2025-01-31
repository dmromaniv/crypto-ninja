import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

import Input from "@/components/Input";
import Modal from "../Modal";
import Tooltip from "@/components/Tooltip/Tooltip";

import useModal from "@/hooks/useModal";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isModalOpen, onModalOpen, onModalClose } = useModal();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        onModalOpen();
      }
    },
    [onModalOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <>
      <div className="h-[38px]" onClick={onModalOpen}>
        <Input
          name="search"
          placeholder="Search"
          iconButton={
            <Tooltip text="Use to trigger search">
              <div className="flex h-4 w-4 items-center justify-center">/</div>
            </Tooltip>
          }
        />
      </div>

      {isModalOpen && (
        <Modal
          position="top"
          onClose={() => {
            setSearchQuery("");
            onModalClose();
          }}
        >
          <div className="flex max-h-[90vh] w-[90vw] max-w-[600px] flex-col gap-y-6 rounded-md md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              placeholder={"Search coin"}
              className={clsx(
                "peer h-full cursor-pointer border-none bg-transparent py-0 text-fg/70 focus:border-transparent focus:ring-0 focus:outline-none sm:text-sm dark:text-fg-dark"
              )}
              onChange={onInputChange}
            />
            <div className="h-[200px] w-full bg-[tomato]"></div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SearchModal;
