import { NavLink } from "react-router-dom";

import { IRoute, routes } from "../../routes/routes";

import logo from "../../logo.svg";

const Link = ({ path, name }: IRoute) => {
  return (
    <li key={path}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="React Logo" />
      <ul>
        {routes.map((route) => {
          const { children } = route;

          if (!children) {
            return <Link {...route} />;
          }

          return children.map(Link);
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
