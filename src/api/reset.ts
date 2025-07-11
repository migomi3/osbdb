import { Request, Response } from "express";
import { config } from "../config.js";
import { respondWithJson } from "../helpers.js";

export async function handlerReset(req: Request, res: Response) {
    config.api.fileServerHits = 0;

    respondWithJson(res, "Data Reset");
}