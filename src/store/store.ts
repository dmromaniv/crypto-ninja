import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/base";
import themeReduces from "./slices/theme";

import { errorMiddleware } from "./middleware/errorMiddleware";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    themeMode: themeReduces,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, errorMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
