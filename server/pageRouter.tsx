import { Router, Request as ExpressRequest } from "express";
import { Request, Response } from "node-fetch";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { routes } from "../src/router";
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

  const router = createStaticRouter(dataRoutes, context);
  const str = renderToString(
    <StaticRouterProvider context={context} router={router} />
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
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
