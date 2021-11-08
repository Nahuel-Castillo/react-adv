import { Routes, Route } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import LazyLayout from "../layout/LazyLayout";

const Navigation = () => {
  return (
    <Routes>
      <Route path="*" element={<LazyLayout />}>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<LazyPage1 />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
