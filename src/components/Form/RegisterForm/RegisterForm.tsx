import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";

import { registerSchema } from "@/schemas/registerSchema";

import type { RegisterFormData } from "@/types/auth";

interface RegisterFormProps {
  onClose: () => void;
}

const RegisterForm = ({ onClose }: RegisterFormProps) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = () => {
    onClose();
    toast.success(t("notification.register_success"), { theme: "colored" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 flex flex-col gap-y-5">
        <div>
          <div className="h-13">
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  name="email"
                  onChange={onChange}
                  value={value}
                  label={t("placeholders.email")}
                />
              )}
            />
          </div>
          {errors.email?.message && (
            <p className="mt-1 text-xs font-light text-destructive/80">{t(errors.email.message)}</p>
          )}
        </div>

        <div>
          <div className="h-13">
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  name="password"
                  value={value}
                  onChange={onChange}
                  type="password"
                  label={t("placeholders.password")}
                />
              )}
            />
          </div>
          {errors.password?.message && (
            <p className="mt-1 text-xs font-light text-destructive/80">
              {t(errors.password.message, { count: 6 })}
            </p>
          )}
        </div>

        <div>
          <div className="h-13">
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  name="confirmPassword"
                  value={value}
                  onChange={onChange}
                  type="password"
                  label={t("placeholders.password")}
                />
              )}
            />
          </div>
          <p className="mt-2 text-xs font-light text-fg/60 dark:text-fg-dark/50">
            {t("placeholders.password_rules", {
              characters: 6,
              up_letter: 1,
              low_letter: 1,
              number: 1,
            })}
          </p>
          {errors.confirmPassword?.message && (
            <p className="mt-1 text-xs font-light text-destructive/80">
              {t(errors.confirmPassword.message)}
            </p>
          )}
        </div>

        <Checkbox name="news" text={t("labels.get_updates")} />
      </div>

      <Button type="submit">{t("buttons.sign_up")}</Button>
    </form>
  );
};

export default RegisterForm;
