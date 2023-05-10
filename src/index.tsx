import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";
import StyleContext from "isomorphic-style-loader/StyleContext";

const router = createBrowserRouter(routes);

const insertCss = (...styles: any[]) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => {
    removeCss.forEach((dispose) => dispose());
  };
};

hydrateRoot(
  document.getElementById("root") as Element,
  <StyleContext.Provider value={{ insertCss }}>
    <RouterProvider router={router} />
  </StyleContext.Provider>
);
