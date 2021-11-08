import { Route } from "react-router-dom";

import { IRoute } from "../../routes/routes";

const CustomRoute = ({
  path,
  index,
  component: Component,
  children,
}: Omit<IRoute, "name">) => {
  if (!children) {
    return (
      <Route key={path} index={index} path={path} element={<Component />} />
    );
  }

  return (
    <Route key={path} path={path} element={<Component />}>
      {children.map(({ path, component: Component, index }) => (
        <Route key={path} index={index} path={path} element={<Component />} />
      ))}
    </Route>
  );
};

export default CustomRoute;
