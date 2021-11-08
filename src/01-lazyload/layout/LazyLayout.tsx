import { Link, Outlet } from "react-router-dom";
const LazyLayout = () => {
  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to="lazy1">Lazy page 1</Link>
        </li>
        <li>
          <Link to="lazy2">Lazy page 2</Link>
        </li>
        <li>
          <Link to="lazy3">Lazy page 3</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default LazyLayout;
