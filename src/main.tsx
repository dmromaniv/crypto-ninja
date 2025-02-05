import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

import { SkeletonProvider } from "./components/SkeletonProvider/SkeletonProvider.tsx";
import App from "./App.tsx";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

import { store } from "./store/store.ts";
import { ToastContainer } from "react-toastify";

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
