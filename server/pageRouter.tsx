import { Router } from "express";
import { Request } from "node-fetch";
import { createStaticHandler } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { App } from "../src/App";
import React from "react";
const pageRouter = Router();
pageRouter.get("*", async (req, res) => {
  const data = await App.getInitialData();
  // @ts-ignore
  global.__innerData = data;
  const str = renderToString(<App />);
  // @ts-ignore
  global.__innerData = null;
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
      <textarea id="ssrInnerData" style="display:none">${JSON.stringify(
        data
      )}</textarea>
    </body>
    </html>
  `);
});

export { pageRouter };
