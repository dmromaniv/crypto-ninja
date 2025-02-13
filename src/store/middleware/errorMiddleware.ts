import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { getFriendlyErrorMessage, isFetchBaseQueryError } from "@/utils/handleError";

export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload;

    if (isFetchBaseQueryError(error)) {
      if (typeof error.status === "number") {
        toast.error(getFriendlyErrorMessage(error.status), { theme: "colored" });
      }
      toast.error("Unexpected error", { theme: "colored" });
    }

    // TODO: Handle all error types
  }

  return next(action);
};
