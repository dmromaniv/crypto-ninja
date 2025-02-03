import clsx from "clsx";

import Modal from "../Modal";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox/Checkbox";

export type Tab = "login" | "signup";

interface AuthModalProps {
  isModalOpen: boolean;
  tab: Tab;
  onClose: () => void;
  onTabChange: (tab: Tab) => void;
}

const AuthModal = ({ isModalOpen, tab, onClose, onTabChange }: AuthModalProps) => {
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
                Login
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
                Signup
              </button>
            </div>
            <p className="text-xs">
              <span className="text-base font-medium">
                {tab === "login" ? "Log in" : "Sign up"}
              </span>
              <br />
              By continuing, you agree to CryptoNinja:
              <a href="#" className="pl-1 text-primary underline">
                Terms of Service
              </a>
            </p>
            <form>
              {tab === "signup" ? (
                <div className="mb-8 flex flex-col gap-y-5">
                  <div className="h-13">
                    <Input name="email" label="Email" />
                  </div>
                  <div className="h-13">
                    <Input name="password" label="Password" />
                  </div>
                  <div>
                    <div className="h-13">
                      <Input name="confirm_pass" label="Confirm password" />
                    </div>
                    <p className="mt-2 text-xs font-light text-fg/60 dark:text-fg-dark/50">
                      Password must contain at least 6 characters including 1 uppercase letter, 1
                      lowercase letter, 1 number
                    </p>
                  </div>

                  <Checkbox name="news" text="Get CryptoNinja updates on news" />
                </div>
              ) : (
                <div className="mb-8 flex flex-col gap-y-5">
                  <div className="h-13">
                    <Input name="email" label="Email" />
                  </div>
                  <div className="h-13">
                    <Input name="password" label="Password" />
                  </div>
                </div>
              )}

              <Button type="submit">Login</Button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AuthModal;
