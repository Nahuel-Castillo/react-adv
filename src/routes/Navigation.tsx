import { Suspense } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import CustomRoute from "../01-lazyload/components/CustomRoute";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>{routes.map((route) => CustomRoute(route))}</Routes>
      </Router>
    </Suspense>
  );
};
