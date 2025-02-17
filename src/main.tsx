import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { createRoot } from "react-dom/client";

import { SkeletonProvider } from "./components/SkeletonProvider/SkeletonProvider.tsx";
import App from "./App.tsx";

import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

import "./i18n/config.ts";

import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SkeletonProvider>
          <App />
          <ToastContainer />
        </SkeletonProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
