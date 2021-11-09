import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import Layout from "../layout/Layout";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
