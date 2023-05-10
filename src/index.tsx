import { hydrateRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  matchRoutes,
} from "react-router-dom";
import { routes } from "./router";
import StyleContext from "isomorphic-style-loader/StyleContext";
const insertCss = (...styles: any[]) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => {
    removeCss.forEach((dispose) => dispose());
  };
};
const render = () =>
  hydrateRoot(
    document.getElementById("root") as Element,
    <StyleContext.Provider value={{ insertCss }}>
      <RouterProvider router={router} />
    </StyleContext.Provider>
  );
const router = createBrowserRouter(routes);

let lazyMatched = matchRoutes(routes, window.location)?.filter((module) => {
  return module.route.lazy;
});

if (lazyMatched && lazyMatched.length) {
  Promise.all(
    lazyMatched.map(async (module) => {
      const routeModule = await module.route.lazy;
      Object.assign(module.route, {
        ...routeModule,
        lazy: undefined,
      });
    })
  );
} else {
  render();
}
