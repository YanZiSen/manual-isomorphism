import { Router, Request as ExpressRequest } from "express";
import { Request, Response } from "node-fetch";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { routes } from "../src/router";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { StaticHandler } from "@remix-run/router";

// 构造一个Request对象，React-Router根据它的信息来匹配路由
const createRequest = (req: ExpressRequest) => {
  const origin = `${req.protocol}://${req.get("host")}`;
  const url = new URL(req.url, origin);
  const controller = new AbortController();
  req.on("close", () => controller.abort());
  const init = {
    method: req.method,
    signal: controller.signal,
  };
  // @ts-ignore
  return new Request(url.href, init);
};

const pageRouter = Router();

type QueryReturnType = Awaited<ReturnType<StaticHandler["query"]>>;
type StyleItem = {
  _getContent: () => [Array<string>, ...string[]];
};

function isResponse(
  context: QueryReturnType
): context is Extract<QueryReturnType, { status: number }> {
  return context instanceof Response;
}

pageRouter.get("*", async (req, res) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(
    createRequest(req) as unknown as globalThis.Request
  );

  if (isResponse(context)) {
    throw context;
  }

  const styleEls: string[] = [];
  const insertCss = (...styles: StyleItem[]) => {
    styles.forEach((style, i) => {
      const [[id, content]] = style._getContent();
      styleEls.push(`<style id="s${id}-${i}">${content}</style>`);
    });
  };

  const router = createStaticRouter(dataRoutes, context);
  const str = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <StaticRouterProvider context={context} router={router} />
    </StyleContext.Provider>
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      ${styleEls.join("")}
      <script src="/client.js" defer></script>
      <script src="/observer.js" defer></script>
    </head>
    <body>
      <div id="root">${str}</div>
    </body>
    </html>
  `);
});

export { pageRouter };
