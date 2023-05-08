import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

const router = createBrowserRouter(routes);

hydrateRoot(
  document.getElementById("root") as Element,
  <RouterProvider router={router} />
);
