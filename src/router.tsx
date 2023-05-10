import { RouteObject } from "react-router";
import { Layout } from "./Layout";
import { User } from "./User";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    path: "/",
    loader: Layout.loader,
    children: [
      {
        index: true, // 默认
        async lazy() {
          let { Home } = await import(/* webpackChunkName: 'Home'*/ "./Home");
          return { Component: Home, loader: Home.loader };
        },
      },
      {
        path: "user",
        element: <User />,
        loader: User.loader,
      },
    ],
  },
];
