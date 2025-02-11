import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ExchangesPage = lazy(() => import("../pages/ExchangesPage"));
const CoinPage = lazy(() => import("../pages/CoinPage"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
        <Route path="/exchanges" element={<ExchangesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
