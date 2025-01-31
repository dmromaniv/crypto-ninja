import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import IconButton from "../IconButton";

import CloseIcon from "@/assets/icons/CloseIcon";

interface ModalProps {
  children: ReactNode;
  position: "center" | "right" | "top";
  onClose: () => void;
}

const Modal = ({ onClose, children, position = "center" }: ModalProps) => {
  // Disable scrolling when a modal window is open
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return createPortal(
    <div
      className={clsx(
        "fixed top-0 z-10 flex h-full w-full items-center bg-secondary/50 backdrop-blur-sm transition-all duration-300 dark:bg-accent-dark/30",
        position === "center" && "justify-center",
        position === "right" && "justify-end",
        position === "top" && "items-start justify-center"
      )}
    >
      <div
        className={clsx(
          "relative overflow-y-auto bg-light p-4 pb-2 shadow-lg md:p-8 md:pb-3 dark:bg-accent-dark dark:shadow-primary-dark/10",
          position === "center" && "rounded-md",
          position === "right" && "rounded-l-lg",
          position === "top" && "mt-24 h-auto rounded-md"
        )}
      >
        <div className="absolute top-1 right-1">
          <IconButton
            onClick={onClose}
            className="text-fg transition-colors hover:text-primary dark:text-fg-dark dark:hover:text-fg-dark"
          >
            <CloseIcon />
          </IconButton>
        </div>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
