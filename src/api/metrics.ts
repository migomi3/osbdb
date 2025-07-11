import { Request, Response } from "express";
import { config } from "../config.js";

export function handlerMetrics(req: Request, res: Response) {
    res.set("Content-Type", "text/html; charset=utf-8");
    res.send(`<html>
  <body>
    <h1>Welcome, Fuckers</h1>
    <p>OSB DB has been visited ${config.api.fileServerHits} times!</p>
  </body>
</html>`);
}