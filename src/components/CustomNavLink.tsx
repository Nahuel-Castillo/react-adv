import { NavLink } from "react-router-dom";

type Props = { to: string; name: string; activeClass?: string };

const CustomNavLink = ({ to, name, activeClass = "nav-active" }: Props) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? activeClass : "")}
      >
        {name}
      </NavLink>
    </>
  );
};

export default CustomNavLink;
