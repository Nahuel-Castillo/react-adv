import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import logo from "../logo.svg";

const Layout = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lazy1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lazy2"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lazy2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lazy3"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lazy3
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          {/* <Route path="*" element={<LazyPage1 />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
