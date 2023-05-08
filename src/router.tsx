import { RouteObject } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { User } from "./User";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    path: "/",
    loader: Layout.loader,
    children: [
      {
        element: <Home />,
        loader: Home.loader,
        index: true, // 默认
      },
      {
        path: "user",
        element: <User />,
        loader: User.loader,
      },
    ],
  },
];
