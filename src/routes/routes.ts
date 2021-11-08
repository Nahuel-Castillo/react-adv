import { lazy } from "react";
import Layout from "../01-lazyload/components/Layout";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

export type IRoute = {
  path: string;
  component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
  name: string;
  index?: boolean;
  children?: IRoute[];
};

export const routes: IRoute[] = [
  {
    path: "/",
    component: Layout,
    name: "Lazy",
    children: [
      {
        path: "lazy/*",
        component: lazy(
          () =>
            import(
              /* webpackChunkName: "lazymodule" */ "../01-lazyload/router/Navigation"
            )
        ),
        name: "LazyLoading Nested",
      },
      {
        path: "no-lazy",
        component: NoLazy,
        name: "No Lazy Loading",
      },
    ],
  },
];

// children: [
//   { path: "lazy1", index: true, Component: LazyPage1, name: "LazyPage1" },
//   { path: "lazy2", Component: LazyPage2, name: "LazyPage2" },
//   { path: "lazy3", Component: LazyPage3, name: "LazyPage3" },
// ],
