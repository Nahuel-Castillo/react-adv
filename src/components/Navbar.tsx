import logo from "../logo.svg";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <CustomNavLink to="/" name="Home" />
          </li>
          <li>
            <CustomNavLink to="/about" name="About" />
          </li>
          <li>
            <CustomNavLink to="/users" name="Users" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
