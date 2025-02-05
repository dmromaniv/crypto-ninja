import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errorMessage =
      "data" in action.error
        ? (action.error.data as { message?: string }).message || "Unknown error"
        : action.error?.message || "Unexpected error";

    toast.error(errorMessage, { theme: "colored" });
  }

  return next(action);
};
