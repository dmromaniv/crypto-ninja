import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import { errorMiddleware } from "./middleware/errorMiddleware";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, errorMiddleware),
});
