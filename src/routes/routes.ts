import { lazy } from "react";
import Layout from "../01-lazyload/components/Layout";

const LazyPage1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

type JSXComponent = () => JSX.Element;

export interface IRoute {
  path: string;
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
  name: string;
  index?: boolean;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/",
    Component: Layout,
    name: "Layout",
    children: [
      { path: "lazy1", index: true, Component: LazyPage1, name: "LazyPage1" },
      { path: "lazy2", Component: LazyPage2, name: "LazyPage2" },
      { path: "lazy3", Component: LazyPage3, name: "LazyPage3" },
    ],
  },
];
