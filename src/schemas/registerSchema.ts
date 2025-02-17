import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().email("validation.email").required("validation.required"),
  password: yup
    .string()
    .min(6, "validation.min_characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "validation.password_strength")
    .required("validation.required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "validation.password_match")
    .required("validation.required"),
});
