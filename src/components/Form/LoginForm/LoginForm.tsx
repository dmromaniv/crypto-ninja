import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { loginSchema } from "@/schemas/loginSchema";

import type { LoginFormData } from "@/types/auth";

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = () => {
    onClose();
    toast.success(t("notification.login_success"), { theme: "colored" });
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
              {t(errors.password.message)}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">{t("buttons.login")}</Button>
    </form>
  );
};

export default LoginForm;
