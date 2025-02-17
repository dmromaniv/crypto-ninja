import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("validation.email").required("validation.required"),
  password: yup.string().required("validation.required"),
});
